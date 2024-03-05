---
lang: ko-KR
title: Rails Support - Jets Afterburner
description: 🔻Jets - Learning Content > Rails Support - Jets Afterburner
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
      content: 🔻Jets - Learning Content > Rails Support - Jets Afterburner
    - property: og:description
      content: Rails Support - Jets Afterburner
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/ruby/rubyonjets-learning-content/20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "Rails Support - Jets Afterburner",
  "desc": "Jets Afterburner - Serverless Rails on AWS Lambda in 5 Minutes",
  "link": "https://blog.boltops.com/2018/12/21/jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes",
  "logo": "https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_470/https://blog.boltops.com/img/posts/2018/12/jets-afterburner-v1.png",
  "background": "rgba(250,113,21,0.2)"
}
```

---

<VidStack src="youtube/P44Le1VF6us" />

In this post and video, we’ll cover how to deploy a Rails application to AWS Lambda Serverless in a few minutes. With Jets Afterburner, you don’t have to make any changes to your Rails application to get it on AWS Lambda. 🎉

---

## Commands

```sh
gem install jets # outside of Gemfile
git clone https://github.com/tongueroo/demo-rails
cd demo-rails
mkdir -p .jets/app
vim .jets/app/.env # add your env variables
jets deploy
#
# => Rails app detected: Enabling Jets Afterburner to deploy to AWS Lambda.
# ...
# Deploying CloudFormation stack with jets app!
# 05:05:11PM UPDATE_IN_PROGRESS AWS::CloudFormation::Stack demo-rails-dev User Initiated
# ...
# 05:06:48PM UPDATE_COMPLETE AWS::CloudFormation::Stack demo-rails-dev
# Stack success status: UPDATE_COMPLETE
# Time took for stack deployment: 1m 36s.
# Prewarming application.
# API Gateway Endpoint: https://jp65zxlwf8.execute-api.us-west-2.amazonaws.com/dev/
#
```

That’s it! We have successfully deployed our Rails application to AWS Lambda. Here’s the [Live Demo](https://afterburner.demo.rubyonjets.com/) from the tutorial. The full source code of the Rails project is on Github: [<FontIcon icon="iconfont icon-github"/>`tongueroo/demo-rails`](https://github.com/tongueroo/demo-rails). More info is available at: [Jets Rails Support: Afterburner Mode](http://rubyonjets.com/docs/rails-support/).

---

## Extra Environments

An interesting benefit of running applications on AWS Lambda is that you only get charged for actual requests. So [extra environments](20180913-jets-tutorial-extra-environments-part-7.md) are likely in the [AWS free tier](https://aws.amazon.com/free/). You could do this:

```
JETS_ENV_EXTRA=2 jets deploy
JETS_ENV_EXTRA=3 jets deploy
...
JETS_ENV_EXTRA=8 jets deploy
```

You essentially get unlimited free environments, each of them taking a few minutes to provision.

---

## Other Live Demos

- [Simple CRUD Demo](https://demo.rubyonjets.com/)
- [Image Upload with CarrierWave](https://upload.demo.rubyonjets.com/)
- [Mega Mode: Jets and Rails Combined](https://mega.demo.rubyonjets.com/)

More examples are in the [<FontIcon icon="iconfont icon-github"/>`tongueroo/jets-examples`](https://github.com/tongueroo/jets-examples) repo.

---

## Considerations

Afterburner mode is pretty awesome but is not a panacea for all Rails applications. Each and every Rails application is different and likely makes assumptions that it’s running on a traditional server not serverless. For example, the app might upload files or images to the filesystem. This doesn’t work on AWS Lambda because the app doesn’t have access to a persistent filesystem. The application would have to be reworked to use a distributed store like S3 instead.

Ruby serverless applications might also use native binary gems. Jets uses [Lambda Gems](https://www.lambdagems.com/) to make for a seamless and much easier deploy process. [Lambda Gems](https://blog.boltops.com/2019/01/01/introducing-lamdagems-hassle-free-serverless-ruby-build-and-deploy) is currently in beta, and early signups will receive a special offer for their support.

---

## More info

- For an Jets Introduction: [Introducing Jets: A Ruby Serverless Framework](20180818-introducing-jets-a-ruby-serverless-framework.md).
- Also more info at: [Jets documentation site](http://rubyonjets.com/).

---

<TagLinks />
