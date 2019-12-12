---
layout: post
title:  Learning Goals in 2019, and the future
date:   2019-12-01 14:33:53
category: post
---

Continous learning is an important part of self development, and identifying your knowledge gaps can help guide you in what you should learn next.

### Knowing what you don't know

Being inspired by Dan Abramov's article on [Things I Don’t Know as of 2018
](https://overreacted.io/things-i-dont-know-as-of-2018/), I

### What I learnt

In the past year I started learning more about:

- **Low Level Programming**. Building a computer from the ground up through the great [NandToTetris](https://www.nand2tetris.org/) course was extremely insightful. In particular, writing the [hack virtual machine translator](https://github.com/AlanFoster/hackvirtualmachine) and [jack compiler](https://github.com/AlanFoster/jackcompiler)
- **WASM**. What is webassembly? [bug](https://github.com/AlanFoster/bug) was an attempt to learn more about language compilation, and modern OOP based implementations, using webassembly as the compilation target.
- **GraphQL / Apollo**. As an alternative to the RESTful approach of developing systems. There are lots of resources on this topic, in particular [howtographql](https://www.howtographql.com/) is a great resource. Trying both GraphQL Ruby and Graphene for Python is a great way to see alternative approaches to the same problem. The [ticket management system](https://github.com/AlanFoster/ticket-management-graphql-eventsourcing/) was an attempt to apply these concepts.
- **Event Sourcing**. We all know about CRUD based architectures, but an alternative approach of event sourcing exists. This was extremely understandable having previous experience of Redux, which relies on the concepts of events and deriving state. Event sourcing worked great with the approach of CQRS and Graphql's split of mutation and queries. The [ticket management system](https://github.com/AlanFoster/ticket-management-graphql-eventsourcing/) was an attempt to apply these concepts.
- **Pretty Printing languages**. [Prettier](https://prettier.io/) changed the world by introducing automated formatting to JavaScript, using fundamental building blocks for formatting. After reading [a prettier printer](https://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf), I began looking at Prettier for Ruby to learn more about Ripper and pretty printing.
- **Serverless**. Serverless comes in different shapes and sizes, but when it comes to hosting a simple web application - using [Zappa](https://github.com/Miserlou/Zappa) definitely ticks the boxes for being a great framework. Using flask directly for local development, and using Zappa to deploy this to AWS lambda with setting up your api gateway etc is extremely satisfying. Additionally playing with [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) was an OK experience, but still required configuring YAML files, and local development was still sometimes burdensome.

### What's still left to go

- **GraphQL**. It would be great to investigate the new modern [Relay](https://relay.dev/) client, which should have great support with the new experimental [React suspense](https://reactjs.org/docs/concurrent-mode-suspense.html) model.
- **Security**
- **Networking**
- **Operating systems**
    - Linux/ARM Operating systems
    - ABI
- **Elastic Search**
