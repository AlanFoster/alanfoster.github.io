---
layout: post
title:  Running react unit tests within docker
date:   2017-06-03 17:33:53
category: post
---

Docker is a great way to provide a consistent environment for running your development environment, test suite, as well as your production servers. It provides an easy method of specifying the environment requirements, dependencies, as well as your required linux distribution.

For instance; If you are making use of automated tests as part of your Continuous Integration pipeline, it can be useful to know how to run your JavaScript tests within a docker container.

### Your application

This post assumes that you have a React/JavaScript application ready to be tested.

For this post I will assume that we're using [create-react-native-app](https://github.com/react-community/create-react-native-app):

```shell
npm install -g create-react-app
create-react-app my-app
cd my-app
```

You should be able to confirm that your react application is running as expected with:

```shell
$ npm start

Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.160:3000/
```

You should be able to confirm that all tests are running as expected with:

```shell
$ npm test

 PASS  src/App.test.js
  ✓ renders without crashing (24ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.14s
Ran all test suites related to changed files.

Watch Usage
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

### Installing docker

The first step is installing docker. The specific installation steps will be different if you are on a windows machine, mac, etc.

Please see the latest install steps at [https://www.docker.com](https://www.docker.com).

You should be able to verify that your local install is running with:

```shell
$ docker run hello-world

latest: Pulling from library/hello-world
78445dd45222: Pull complete
Digest: sha256:c5515758d4c5e1e838e9cd307f6c6a0d620b5e07e6f927b07d05f6d12a1ac8d7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
```

### Containers and images

A docker image is the built blueprint of the environment that you want. It is built from a `Dockerfile` which specifies the environment and software requirements.

A container is a running instance of a docker image. There can be many instances of the same docker image.

### Creating a docker file

Docker depends on having a `Dockerfile` which specifies the environment and software requirements.

Create a new Docker file with:

```shell
touch Dockerfile
```


With the following content:

```shell
FROM node:8.0.0-alpine

RUN mkdir /srv/example
WORKDIR /srv/example

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
```

Docker will run sequentially through each line within the docker file.

- `FROM node:8.0.0-alpine` - For our application we wish to run on an environment that has node and yarn installed. Thankfully this is a common requirement and there are various base docker images that can be used and searched for within the [docker hub](https://hub.docker.com/). In our case we can specify a node version from the [node official repository](https://hub.docker.com/_/node/). In particular we will make use of the Alpine linux distro, which is small - at only around 5MB.
- `RUN mkdir /srv/app` - Create a new folder to contain our application
- `WORKDIR /srv/app` - Specify the working directory for future commands such as `COPY`, `ADD`, etc.
- `COPY package.json yarn.lock ./` - Place the required dependency files onto our image. Note that the copy command follows the pattern `COPY <src>... <dest>`
- `RUN yarn && yarn cache clean` Install our dependencies and remove the cache in one operation.
- `COPY . .` Copy the rest of the files within our daemon context into our working directory.

Remember: With Docker, order matters. Docker will run each instruction independently, and if possible Docker will attempt to re-use intermediate steps if possible. This is why we chose to copy across our `package.json` and `yarn.lock` before running the `yarn` install command. Importantly, we wish for any changes to these files to invalidate the next docker step and download the updated dependencies. However we don't wish to download our dependencies again if other unrelated files change. The atomic nature of the `RUN` command explains explains why we delete our yarn cache too, as we don't want for these files to be cached by Docker and create an necessarily large docker image.

### Reducing files sent to the docker daemon

When building a docker image the current directory's contents are sent to the running docker daemon. If you are working in a local development environment this can be a bad idea. For instance this may copy across all of the contents of your `node_modules` directory leading to slow docker build times. Even worse there is the potential of copying various `.env` files into your docker container - which could contain environment variables such as keys and passwords that you definitely do not want to distribute by accident.

Thankfully, similar to a `.gitignore` file, you can specify a `.dockerignore` file.

Create a new `.dockerignore` file with the following content:

```shell
# Ignore all files by default
*

# White list only the required files
!src/
!public/
!package.json
!yarn.lock
```

In my experience I prefer white-listing rather than black listing files for docker. It is better for a docker build to break because you forgot to white list an additional dependency, than it is to have secrets shared without realizing.

_Note_: If you are creating a dockerignore file for your own project, you may wish to include additional files such as `.babelrc`, `.eslint` etc. Particularly if you are planning to run linting rules as part of your CI pipeline.

### Using docker compose

Docker compose allows you to manage multi-container docker applications. In our case we can use it to build our image and run a one-of command to verify that our tests are working.

Create a new file `docker-compose.yml` with the content:

```shell
version: '3'

services:
  test:
    build:
      context: .
    environment:
      - CI=true
    command: npm test
```

The following commands will now build our image, as well as execute `npm test`:

```shell
$ docker-compose build test

...

$ docker-compose run --rm test

npm info it worked if it ends with ok
npm info using npm@5.0.0
npm info using node@v8.0.0
npm info lifecycle my-app@0.1.0~pretest: my-app@0.1.0
npm info lifecycle my-app@0.1.0~test: my-app@0.1.0

> my-app@0.1.0 test /srv/example
> react-scripts test --env=jsdom

 PASS  src/App.test.js
  ✓ renders without crashing (29ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.284s
Ran all test suites.
npm info lifecycle my-app@0.1.0~posttest: my-app@0.1.0
npm info ok
```

Note that within our docker-compose file we also needed to specify the environment variable `CI=true` - otherwise by default jest will run in `--watch` mode.

Additionally we have specified the `--rm` option within our run command, to delete our container after the command completes.

Importantly, if our test fails - the correct status code will be returned. This is useful to break your build in a CI environment:

```shell
$ docker-compose run --rm test

...

 FAIL  src/App.test.js
  ● renders without crashing

$ echo $?
1
```

### Docker for development

It is also possible to use docker for development. This is useful when you wish for all developers to have the same development environment, and as close to production as possible.

We can modify the `docker-compose.yml` file to have an additional `dev` service:

```shell
version: '3'

services:
  dev:
    build:
      context: .
    ports:
      - 3000:3000
    command: npm start
    volumes:
      - "./src:/srv/example/src"

  test:
    build:
      context: .
    environment:
      - CI=true
    command: npm test
```

This adds an additional `dev` service which will run `npm start`, and expose port 3000 within the docker container onto port 3000 on the host machine.

An important addition is the `volumes` keys, which maps the current host machine's src directory onto `/srv/example/src` within the docker container. This means that any local file changes will reflected within our docker container. This is useful as by default the `create-react-app` has hot module reloading enabled, and any code changes made on the host machine will automatically reload your browser.

We can run this container with:

```shell
$ docker-compose build dev

...

$ docker-compose up dev

Creating myapp_dev_1
Attaching to myapp_dev_1
dev_1   | npm info it worked if it ends with ok
dev_1   | npm info using npm@5.0.0
dev_1   | npm info using node@v8.0.0
dev_1   | npm info lifecycle my-app@0.1.0~prestart: my-app@0.1.0
dev_1   | npm info lifecycle my-app@0.1.0~start: my-app@0.1.0
dev_1   |
dev_1   | > my-app@0.1.0 start /srv/example
dev_1   | > react-scripts start
dev_1   |
dev_1   | Starting the development server...
dev_1   |
dev_1   | Compiled successfully!
dev_1   |
dev_1   | You can now view my-app in the browser.
dev_1   |
dev_1   |   Local:            http://localhost:3000/
dev_1   |   On Your Network:  http://172.20.0.2:3000/
dev_1   |
dev_1   | Note that the development build is not optimized.
dev_1   | To create a production build, use yarn run build.
dev_1   |
```

Note that we are making use of `docker-compose up` rather than the previous `run` command.

### Create a makefile

It's never fun to remember arbitrary commands. Let's introduce a makefile to streamline the dev process:

```shell
.PHONY: dev test help
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:  ## Run a development environment on port 3000
	@docker-compose build dev
	@docker-compose up dev

test: ## Run the current test suite
	@docker-compose build test
	@docker-compose run --rm test
```

_Note_: Makefiles should use tabs, rather than spaces.

If we're unsure what commands are available to us, we can just run `make help`:

```shell
Available commands:

help:  Output available commands
dev:   Run a development environment on port 3000
test:  Run the current test suite
```

For instance, to run the test target you can use:

```shell
make test
```

### Sources

The full source code can be found at [create-react-app-docker-unit-tests](https://github.com/AlanFoster/create-react-app-docker-unit-tests)

### Additional useful Docker commands

To view all of the currently running docker instances:

```shell
docker ps
```

To open an interactive terminal into one of your running instances:

```shell
docker exec -it DOCKER_PID /bin/sh
```

To create a temporary docker container, enter a shell, then delete the container after:

```shell
docker run -it --rm IMAGE_NAME /bin/sh
```

To view the available docker logs:

```shell
docker logs -f DOCKER_PID
```
