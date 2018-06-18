---
title:  Docker workshop - Overview
---

## What is Docker?

- Allows creation of virtualized containers to run your application code
- A lightweight alternative to expensive Virtual Machines

## What are images?

Docker images represent your built application. They can be created from
Docker files, for instance in the following example:

```docker
FROM node:8.0.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
```

To build an image from a Docker file, you can make use of the Docker command line interface:

```bash
$ docker build --tag my-node-app .
```

Some interesting points to note about images are:

- They are built from docker files
- Sharable with other developers, for instance using ubuntu, or publishing your own
- Portable - the built images can be used different machines, i.e. Windows
- Each instruction in a Dockerfile will create a new layer in an image for efficiency

## What are containers?

Once your image has been built from a docker file, it is possible to run an image:

```javascript

```

- Requires an image
- A runnable instance of an image
- Can be created/started/stopped/moved/deleted

## Docker Registry?

Once images are built you can share them with other developers. The easiest way to do this
is via the Docker register, the official registry used by Docker is **[Docker Hub](/usr/src/app)**.

You can also run your own private Repository too.

## What is docker-compose?

- Complex applications require various containers running
- Docker compose h
