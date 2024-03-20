---
lang: ko-KR
title: Polymorphic Support Part 9
description: Jets - Learning Content > Polymorphic Support Part 9
category:
  - Ruby
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
      content: Jets - Learning Content > Polymorphic Support Part 9
    - property: og:description
      content: Polymorphic Support Part 9
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/ruby/rubyonjets-learning-content/20180927-jets-tutorial-polymorphic-support-part-9.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Polymorphic Support Part 9",
  "desc": "...",
  "link": "https://blog.boltops.com/2018/09/27/jets-tutorial-polymorphic-support-part-9",
  "logo": "https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_584/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-9-polymorphic-support-v1.png",
  "background": "rgba(26,14,21,0.2)"
}
```

---

<VidStack src="youtube/asylnFoKAYA"/>

In this video tutorial, we cover Jets Polymorphic Support Ability. Jets allows you to write Lambda functions not just in Ruby but also in other languages like Node and Python. This can be useful if you have pre-existing Lambda code. You can re-use the code and and move on with life.

![Poly-Lambda Functions List](https://blog.boltops.com/img/posts/2018/09/poly-lambda-functions-list.png)
![Here’s what a Python polymorphic function looks like in Jets](https://blog.boltops.com/img/posts/2018/09/poly-lambda-function-edit-python.png)




![Here’s what a Node polymorphic function looks like in Jets](https://blog.boltops.com/img/posts/2018/09/poly-lambda-function-edit-node.png)


---

## Summary of What We’ll Cover

- Explain what Jets Polymorhic Support Means
- Write a Python example and test locally
- Write a Node example and test locally
- Remove any code that would genreate Ruby Lambda Functions
- Deploy to AWS Lambda
- Check out AWS Lambda Console to see the different languages and editor