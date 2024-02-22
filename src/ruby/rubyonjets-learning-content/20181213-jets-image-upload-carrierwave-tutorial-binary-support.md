---
lang: ko-KR
title: Image Upload Carrierwave Tutorial
description: 🔻Jets - Learning Content > Image Upload Carrierwave Tutorial
category:
  - 🔻Ruby
tag:
  - crashcourse
  - ruby
  - jets
  - aws
  - aws-lambda
  - cloudwatch
head:
  - - meta:
    - property: og:title
      content: 🔻Jets - Learning Content > Image Upload Carrierwave Tutorial
    - property: og:description
      content: Image Upload Carrierwave Tutorial
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/ruby/rubyonjets-learning-content/20181213-jets-image-upload-carrierwave-tutorial-binary-support.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
title: Image Upload Carrierwave Tutorial
desc: Jets Image Upload Carrierwave Tutorial - Binary Support
link: https://blog.boltops.com/2018/12/13/jets-image-upload-carrierwave-tutorial-binary-support
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_490/https://blog.boltops.com/img/posts/2018/12/image-upload-tutorial-v1.png
color: rgba(54,70,153,0.2)
```

---

[Jets](http://rubyonjets.com/), a Ruby Serverless Framework, makes use of [API Gateway Binary Support](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-content-encodings-examples.html) to make uploading images and files from AWS Lambda a straightforward task. We’ll cover how to upload images or any file with [Jets](http://rubyonjets.com/) and [<FontIcon icon="iconfont icon-github"/>`carrierwaveuploader/carrierwave`](https://github.com/carrierwaveuploader/carrierwave) in this tutorial guide. Note, please use Jets v1.3.1 and above for this tutorial guide as the jets new generator was updated for it. Here’s the [Live Demo](https://upload.demo.rubyonjets.com/) of this tutorial. The full source code is on Github: [<FontIcon icon="iconfont icon-github"/>`tongueroo/jets-example-upload`](https://github.com/tongueroo/jets-example-upload).

---

## Brand New App

Create a brand new Jets app with scaffolding.

```sh
gem install jets
jets new upload
cd upload
jets generate scaffold Post title:string photo:string
vim .env.development # edit with local db settings
jets db:create db:migrate
jets server
```

The app has a Post model with title and photo fields. 

![You should be able to now go to [http://localhost:8888/posts](http://localhost:8888/posts), create a Post record, and see something like this](https://blog.boltops.com/img/posts/2018/12/upload-posts-index.png)

---

## Update form

The starter scaffold provided us with basic CRUD abilities. However, the form does not handle uploading files yet. We’ll modify it so it does. Do the following to add a file input field:

- Update the form with `multipart: true`
- IMPORTANT: Get rid of the: `<input type="hidden" name="_method" value="put" />` 
- For multipart form data, we need to route the request and POST to the resource.
- Replace `<%= text_field_tag "post[photo]", post.photo %>` with `<%= file_field_tag "post[photo]" %>`

The form html should look something like this:

```html
<%= form_tag(action, multipart: true) do %>
  <div class="field">
    <%= label_tag :title %>
    <%= text_field_tag "post[title]", post.title %>
  </div>

  <div class="field">
    <%= label_tag :photo %>
    <%= file_field_tag "post[photo]" %>
  </div>
...
```

Here’s the full source code of the [form](https://github.com/tongueroo/jets-example-upload/blob/master/app/views/posts/_form.html.erb).

Upload the form again and you’ll notice that a text field value gets save to something like this now: `#<ActionDispatch::Http::UploadedFile:0x00007fbe42cd1948>`

By changing the form to send multipart data, the controller now receives an `ActionDispatch::Http::UploadedFile` object. The `#<ActionDispatch::Http::UploadedFile:0x00007fbe42cd1948>` is a String representation of the file handle. We’re getting closer. This is the first step to getting image uploads working.

---

## Enter Carrierwave

Now we’ll add the `carrierwave` and `fog-aws` gems to save the actual uploaded data instead of just a text String representation of the upload. Add the following to your Gemfile:

```gemfile
gem "carrierwave", git: "https://github.com/tongueroo/carrierwave.git"
gem "fog-aws" # to use s3 as the storage backend
```

::: tip Note

we’re using a [<FontIcon icon="iconfont icon-github"/>fork of Carriewave](https://github.com/tongueroo/carrierwave) which adds Jets support via [Turbines](http://rubyonjets.com/docs/jets-turbines/).

:::

```sh
bundle install
jets generate uploader Photo
#
#       create  app/uploaders/photo_uploader.rb
```

Enable the uploader by overriding the Post model photo setter and getter methods with `mount_uploader`.

> <FontIcon icon="iconfont icon-folder"/>`app/models/`<FontIcon icon="iconfont icon-advanced"/>`post.rb`:

```rb
require 'carrierwave/orm/activerecord'

class Post < ApplicationRecord
  mount_uploader :photo, PhotoUploader # overrides photo
end
```

---

## Change CarrierWave to S3 Storage

By default, the generated CarrierWave uploader persists the upload to the filesystem. In the Serverless world, this doesn’t make sense. Instead, we’ll configure the uploader to save to s3.

Open up <FontIcon icon="iconfont icon-advanced"/>`photo_uploader.rb` and make sure that `storage: fog` is used instead of the default `storage: file`.

```RB
class PhotoUploader < CarrierWave::Uploader::Base
  storage :fog # we want to use the fog backend for s3 support
  # ...
end
```

Add an <FontIcon icon="iconfont icon-folder"/>`config/initializers/`<FontIcon icon="iconfont icon-advanced"/>`carrierwave.rb`:

```rb
CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     ENV['CARRIERWAVE_AWS_ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['CARRIERWAVE_AWS_SECRET_ACCESS_KEY'],
    # use_iam_profile:       true,                         # optional, defaults to false
    region:                ENV['CARRIERWAVE_AWS_REGION'],
  }
  config.fog_directory  = ENV['CARRIERWAVE_S3_BUCKET']
  config.fog_public     = true                                                  # optional, defaults to true
  config.fog_attributes = { cache_control: "public, max-age=#{1.hour.to_i}" } # optional, defaults to {}
end
```

CarrierWave uses it’s own homegrown AWS client internally instead of the aws-sdk and currently does not support the use of `AWS_PROFILE`. So we’ll need to create an IAM user and generate AWS access key for it. For the instructions to create AWS access keys refer to these docs: [How do I create an AWS access key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)?

Next, create the s3 bucket:

```sh
aws s3 mb s3://demo-uploads-$(date +%s)
#
# make_bucket: demo-uploads-1544733003
```

We’re using `date +%s` to just add a timestamp to the bucket name. Note the S3 bucket name in my case is `demo-uploads-1544733003`, yours will be different.

Add these values to the [<FontIcon icon="iconfont icon-file"/>`.env.development`](http://rubyonjets.com/docs/env-files/) file so they get picked up by <FontIcon icon="iconfont icon-folder"/>`config/initializers/`<FontIcon icon="iconfont icon-advanced"/>`carrierwave.rb`. You can use a different .env.production file for different settings like an s3 bucket. We’re working only with <FontIcon icon="iconfont icon-file"/>`.env.development` for the sake of this tutorial.

It should look something like this:

> <FontIcon icon="iconfont icon-file"/>`.env.development`:

```
CARRIERWAVE_AWS_ACCESS_KEY_ID=AKIAI7KI5LIKEXAMPLE
CARRIERWAVE_AWS_SECRET_ACCESS_KEY=XOGuscz2lNyGFo1ChFntigzBp3IMMGdEXAMPLE
CARRIERWAVE_AWS_REGION=us-west-2
CARRIERWAVE_S3_BUCKET=demo-uploads-1544733003 # remember yours will be different
```

---

## Test CarrierWave

Now we’re ready to start the server and test real uploading with CarrierWave:

```sh
jets server
```

Go through the [http://localhost:8888/posts](http://localhost:8888/posts) form again and upload an image. 

![https://blog.boltops.com/img/posts/2018/12/upload-posts-show-text.png](This time you should see that the photo field has an s3 url. Something like: `https://demo-uploads-1544733003.s3.amazonaws.com/uploads/post/photo/1/jets.png`)

Let’s change the show page so that the photo shows up, change the photo ERB line to `<%= image_tag(@post.photo) %>`. The code should look something like this:

> <FontIcon icon="iconfont icon-folder"/>`app/views/posts/`<FontIcon icon="iconfont icon-advanced"/>`show.html.erb`:

```rb
<p>
  <strong>Photo:</strong>
  <%= image_tag(@post.photo) %>
</p>
```

![The posts show page now looks like this](https://blog.boltops.com/img/posts/2018/12/upload-posts-show-image.png)

We have successfully uploaded an image to s3 locally! 🎉

---

## Deploy to AWS Lambda

Before deploying to AWS Lambda, adjust your <FontIcon icon="iconfont icon-file"/>`.env.development.remote` to point to an RDS database. Setting up an RDS database is covered in [Step 1: Create an RDS DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html). It is also briefly mentioned in this video: [Jets Tutorial Deploy to AWS Lambda Part 2: AWS Lambda Ruby](20180908-jets-tutorial-deploy-to-aws-lambda-part-2.md).

Also, remember to migrate your remote database:

```sh
JETS_ENV_REMOTE=1 jets db:create db:migrate
```

Now we’re ready to deploy:

```sh
jets deploy
#
# ...
# https://mf3z5ou0b1.execute-api.us-west-2.amazonaws.com/dev/
```

Go to the url provided at the end of the deploy. 

![You should be able to upload the same way you did locally and should see a similar posts show page](https://blog.boltops.com/img/posts/2018/12/upload-posts-show-image-lambda.png)

---

## More info

- For an Jets Introduction: [Introducing Jets: A Ruby Serverless Framework](20180818-introducing-jets-a-ruby-serverless-framework.md).
- Also more info at: [Jets documentation site](http://rubyonjets.com/).

---

<TagLinks />
