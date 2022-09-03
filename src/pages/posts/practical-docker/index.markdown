---
layout: post
title:  Practical Docker
date:   2020-12-11 17:33:53
category: post
---

Docker is a new and upcoming technology, this post walks through a high level overview of Docker and how you might incorporate it in to your workflow.

<!-- end-excerpt -->

# What is Docker?

**Docker is a way to package applications and the associated dependencies into a single unit called an image**. **This image can then be shared and run as a container**, either locally as a developer, or remotely in your production infrastructure.

Some benefits include:

- Lightweight in comparison to virtual machines
- Quickly testing disposable containers which run arbitrary software
- By default the container's file systems are isolated from your host machine's file system

Some limitations are:

- Runs in userspace. You can't test kernel exploits, run freebsd, run windows containers on linux, etc.
- Not really intended for graphical applications, even with X11 forwarding tricks etc.

### Example

To run nginx, a simple web server, in a container the following can be used in your terminal:

```bash
$ docker run \
	--rm \
	--publish 127.0.0.1:8080:80 \
	nginx
```

The important parts to note are:

- `docker run` - We wish to run a command in a container
- `nginx` - the image name that we want to run. Docker will download this, and create a container
- `--rm` - automatically remove the container when the command exits
- `--publish` - publish a container's ports to the host

If you now visit [http://localhost:8080](http://localhost:8080) to see that the nginx server is running and available on your host machine:

![nginx.png](./nginx.png)

For this particular image it outputs useful log details to the terminal when running:

```bash
$ docker run --rm --publish 127.0.0.1:8080:80 nginx
...
...
/docker-entrypoint.sh: Configuration complete; ready for start up
172.17.0.1 - - [28/Nov/2020:00:23:32 +0000] "GET /favicon.ico HTTP/1.1" 404 153 "http://localhost:8080/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
2020/11/28 00:23:32 [error] 28#28: *1 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [28/Nov/2020:00:23:36 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
172.17.0.1 - - [28/Nov/2020:00:23:36 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
```

### Where did the nginx image come from?

**Docker will first check locally for the required image**, **if it is not found it will attempt to download it**. In this case the nginx image was retrieved from **[Docker Hub](https://hub.docker.com/_/nginx).** You can also directly search Docker Hub for any additional images that you require:

![./docker-hub.png](docker-hub.png)

You can also make use of `docker search`. I preference choosing the `official` images were possible:

```bash {"highlight": "1,3"}
$ docker search postgres
NAME                                    DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
postgres                                The PostgreSQL object-relational database sy…   8613                [OK]
sameersbn/postgresql                                                                    155                                     [OK]
paintedfox/postgresql                   A docker image for running Postgresql.          77                                      [OK]
bitnami/postgresql                      Bitnami PostgreSQL Docker Image                 70                                      [OK]
centos/postgresql-96-centos7            PostgreSQL is an advanced Object-Relational …   45
postgrest/postgrest                     REST API for any Postgres database              36
arm32v7/postgres                        The PostgreSQL object-relational database sy…   26
....
```

The Docker CLI can interact with other repositories too. For instance you can run your own private repositories if you are part of a large organization. You can view the current configuration for the Docker with `docker info`:

```bash  {"highlight": "1,8"}
$ docker info
Client:
 Debug Mode: false

Server:
  ...
  ...
 Registry: https://index.docker.io/v1/
```

Note that the above output uses the terminology `Client` and `Server`. The Docker CLI is the Client which interacts with the Server. The Docker daemon generally runs on the host machine, but you can also interact with remote Docker servers.

### How did docker know to run nginx?

**The  docker image will specify a single command to run**. **When that process ends, the docker container will stop**. We can use the docker CLI tools to inspect a particular image and see its configuration. If we look closely, we can clearly see the `Cmd` configuration:

```json  {"highlight": "73-77"}
$ docker image inspect nginx
[
    {
        "Id": "sha256:bc9a0695f5712dcaaa09a5adc415a3936ccba13fc2587dfd76b1b8aeea3f221c",
        "RepoTags": [
            "nginx:latest"
        ],
        "RepoDigests": [
            "nginx@sha256:6b1daa9462046581ac15be20277a7c75476283f969cb3a61c8725ec38d3b01c3"
        ],
        "Parent": "",
        "Comment": "",
        "Created": "2020-11-25T00:30:19.011398516Z",
        "Container": "279e6916c4aaaf5d61e468508abd96933f4e48194bd979dc692e0196cde2d59d",
        "ContainerConfig": {
            "Hostname": "279e6916c4aa",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.19.5",
                "NJS_VERSION=0.4.4",
                "PKG_RELEASE=1~buster"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "#(nop) ",
                "CMD [\"nginx\" \"-g\" \"daemon off;\"]"
            ],
            "Image": "sha256:2b3c3cbe8cc157ef2c15e693980ae186cffc7b7be17afb34f35de8d7c57a3169",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
            },
            "StopSignal": "SIGQUIT"
        },
        "DockerVersion": "19.03.12",
        "Author": "",
        "Config": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.19.5",
                "NJS_VERSION=0.4.4",
                "PKG_RELEASE=1~buster"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "sha256:2b3c3cbe8cc157ef2c15e693980ae186cffc7b7be17afb34f35de8d7c57a3169",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
            },
            "StopSignal": "SIGQUIT"
        },
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 132895204,
        "VirtualSize": 132895204,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/f38f94ded261df67599930796ee5bb17bcc4ea787644ad24d08ec16860a3aee6/diff:/var/lib/docker/overlay2/696612bb94b1c43743b6d560b443d51ecf40bfab02601451f9a40e64235f5452/diff:/var/lib/docker/overlay2/881d1f47c3bfdad56f12aa72e61c7c57cd8476db17a0de942234c46a351249fd/diff:/var/lib/docker/overlay2/6e32fb22d14ebcfcb8354f333680157e700ee495be133a7ccbdbb273f743d66d/diff",
                "MergedDir": "/var/lib/docker/overlay2/eb47fdab787bc99e1116b86a63c5069051ad92e2a029bbd4f4d275e79e4650af/merged",
                "UpperDir": "/var/lib/docker/overlay2/eb47fdab787bc99e1116b86a63c5069051ad92e2a029bbd4f4d275e79e4650af/diff",
                "WorkDir": "/var/lib/docker/overlay2/eb47fdab787bc99e1116b86a63c5069051ad92e2a029bbd4f4d275e79e4650af/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:f5600c6330da7bb112776ba067a32a9c20842d6ecc8ee3289f1a713b644092f8",
                "sha256:7ccabd267c9f125d6eeac54e32f6fbb338431828a3ee4c61600a301205e16627",
                "sha256:850c2400ea4dc52c17a0a8f8dd740628fbbf2fac8c24ce12f5c540f2d8e4a835",
                "sha256:f790aed835eec5d82dae9e0cbb9021063d9fe71885542f11b7a46631176301f7",
                "sha256:7e914612e36657b45436586984a556f9d3762e8e03374c6cd8c5d9e460a00c51"
            ]
        },
        "Metadata": {
            "LastTagTime": "0001-01-01T00:00:00Z"
        }
    }
]
```

Note that `docker run` allows you to specify an arbitrary command:

```bash
$ docker run --help

Usage:	docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container
```

 This will take precedence over the default `nginx` command. For instance:

```bash

$ docker run --help
Usage:	docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container

$ docker run \
  --rm \
	--publish 127.0.0.1:8080:80 \
	nginx \
  echo "hello from inside of the container"
hello from inside of the container
$
```

More interestingly, **you can run this container with an interactive pseudo-tty**. This allows you to run arbitrary commands from within the container in a similar manner to having SSH'd in to the container:

```bash
$ docker run --help
Usage:	docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container

$ docker run \
  --rm \
	--publish 127.0.0.1:8080:80 \
	--interactive \
	--tty \
	nginx \
  /bin/bash
root@2c0645b7bba2:/# echo "hello from inside the container"
hello from inside the container
root@2c0645b7bba2:/# nginx -v
nginx version: nginx/1.19.5
```

You will often find the shorthand flags being used to achieve the same effect:

```bash
# Full flag names
$ docker run \
  --rm \
	--publish 127.0.0.1:8080:80 \
	--interactive \
	--tty \
	nginx \
  /bin/bash

# With shorthands:
$ docker run --rm -p 127.0.0.1:8080:80 -it nginx /bin/bash
```

### How do I run older versions of software?

Similar to Git, Docker uses tags for versioning images. The format `**image_name:tag**` is used. If you don't specify a specific tag within the run command, it will default to `latest`. For example:

```bash
docker run --rm nginx
docker run --rm nginx:latest
docker run --rm nginx:1.19.5
docker run --rm nginx:1.7.1
```

Docker Hub also provides a searchable list of the available tags:

![docker-hub-tags](./docker-hub-tags.png)

There is also Kitematic for Mac. It is now marked being deprecated, but it is still useful:

![kitematic](./kitematic.png)

### Viewing locally available images

You can view the images that you have installed locally with `docker image ls`. The output will show you the available tags, names, and image ids:

```bash
$ docker image ls
REPOSITORY                                 TAG                 IMAGE ID            CREATED             SIZE
postgres                                   10-alpine           26a036bbaf0d        2 weeks ago         71.9MB
impacket                                   latest              50232cf74f35        2 weeks ago         155MB
php                                        7.4.11-apache       fb9212e0da7b        4 weeks ago         414MB
zookeeper                                  latest              404dbf6821a5        5 weeks ago         253MB
ruby                                       2.7.2-alpine3.12    79f5adf3c887        5 weeks ago         51.7MB
python                                     3-slim              8842fc1a4cb7        5 weeks ago         115MB
nginx                                      alpine              6b87290481e7        6 weeks ago         133MB
python                                     3.7-slim-buster     c55447e52803        6 weeks ago         112MB
rust                                       1.47                2f75dad0e7a5        6 weeks ago         1.28GB
nginx                                      latest              992e3b7be046        7 weeks ago         133MB
php                                        7.2-apache          ed14925495ea        8 weeks ago         410MB
postgres                                   12.4-alpine         47aa97c69678        8 weeks ago         159MB
```

### Viewing local containers

You can view the currently running containers with `docker container ls`. Here we can also see the current command that is being run:

```bash
docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                            NAMES
f2f6f5d7757d        nginx               "/docker-entrypoint.…"   41 seconds ago      Up 41 seconds       127.0.0.1:8080->80/tcp                           hardcore_lamport
fdc1517cc475        tomcat:8.5.32       "catalina.sh run"        10 hours ago        Up 10 hours         0.0.0.0:8009->8009/tcp, 0.0.0.0:8090->8080/tcp   tomcat
```

## Creating your own docker images

## Basic Terminology

Before we get started writing our images, here's some terminology to consider:

- `Dockerfile` - Contains a sequence of steps to create the final docker image(s)
- `Image Layers` - A layer will be created for each step in your Dockerfile
- `Build context` - The set of files which we can reference during the image build process
- `Docker Image` - An immutable snapshot of your software dependencies. Think OOP classes.
- `Docker Container` - A running version of your image. Think OOP instances.

Let's run through a quick example for **creating a python image**. Our application is extremely simple, the folder structure will look like:

```json
.
├── .dockerignore
├── Dockerfile
├── Pipfile
├── Pipfile.lock
└── main.py

0 directories, 5 files
```

The **`main.py`** file will use Flask to host a simple hello world server on port 8000:

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!\n'

if __name__ == '__main__':
    # Inside of your application code, preference binding to 0.0.0.0
    app.run(host='0.0.0.0', port=80)
```

The python application depends on Flask, so we can make use of **`Pipfile`** to specify our program's dependencies:

```python
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]

[packages]
flask = '1.1.2'

[requires]
python_version = "3.7"
```

 Finally we can create the new **`Dockerfile`** which will define how to build our image:

```docker
FROM python:3.7.3-alpine3.9

WORKDIR /app

RUN pip install pipenv
COPY Pipfile Pipfile.lock ./
RUN pipenv install --deploy --dev --ignore-pipfile --system

COPY . .

CMD ["python3", "main.py"]
```

With comments:

```docker
# FROM - The base image to use
FROM python:3.7.3-alpine3.9

# WORKDIR - Specify the working directory; Future ADD/COPY/CMD/RUN commands will execute within this directory
WORKDIR /app

# RUN - Arbitrary commands
RUN pip install pipenv

# COPY - files from the docker context in to the current layer
COPY Pipfile Pipfile.lock ./

# RUN - Arbitrary commands
RUN pipenv install --deploy --dev --ignore-pipfile --system

# COPY - The remaining context files to the current image's filesystem
COPY . .

# CMD - Specify the default command to run the flask application
CMD ["python3", "main.py"]
```

Docker will sequentially run through each command in your Dockerfile. Common commands are:

- `FROM` - Specify a base image to run the following commands on
- `RUN` - Run arbitrary commands from within the context of that layer
- `WORKDIR` -Specify the working directory; Future ADD/COPY/CMD/RUN commands will execute within this directory
- `COPY` - Copy files from the docker build context in to the image's filesystem
- `CMD` - Default command to run within a container if none is specified

Our next step is **building the image**:

```bash
$ docker build --tag image_name:latest .
```

Note that the final `.` is used to specify the build context. Docker will look for a `Dockerfile` by default in the directory, however you can also manually specify both. Generally it's best to follow the normal convention of keeping your Dockerfile in the top level of the project that you're developing. You can specify other parameters if you wish:

```bash
$ docker build -t image_name:1.0.0 -f some_folder/DockerFile ./some_build_context
```

Let's see the full build results:

```bash  {"highlight": "2-4,44-49"}
$ docker build --tag image_name:latest .
Sending build context to Docker daemon  10.24kB
Step 1/7 : FROM python:3.7.3-alpine3.9
 ---> fe3ef29c73f3
Step 2/7 : WORKDIR  /app
 ---> Running in cf3cdce061ed
Removing intermediate container cf3cdce061ed
 ---> 0dd0597e8d53
Step 3/7 : RUN pip install pipenv
 ---> Running in 1815f94b39e5
Collecting pipenv
  Downloading hrom pipenv)
  Downloading https://files.pythonhosted.org/packages/79/88/66ac964ab8cf87c8db839c11812292a966825af205411cb67477cb4e73d3/virtualenv-20.2.1-py2.py3-none-any.whl (4.9MB)
Requirement already satisfied: setuptools>=36.2.1 in /usr/local/lib/python3.7/site-packages (from pipenv) (41.0.1)
Collecting certifi (from pipenv)
  Downloading https://files.pythonhosted.org/packages/c1/6f/3d85f0850962279a7e4c622695d7b3171e95ac65308a57d3b29738b27149/certifi-2020.11.8-py2.py3-none-any.whl (155kB)
Collecting distlib<1,>=0.3.1 (from virtualenv->pipenv)
  Downloading https://files.pythonhosted.org/packages/f5/0a/490fa011d699bb5a5f3a0cf57de82237f52a6db9d40f33c53b2736c9a1f9/distlib-0.3.1-py2.py3-none-any.whl (335kB)
Collecting filelock<4,>=3.0.0 (from virtualenv->pipenv)
  Downloading https://files.pythonhosted.org/packages/93/83/71a2ee6158bb9f39a90c0dea1637f81d5eef866e188e1971a1b1ab01a35a/filelock-3.0.12-py3-none-any.whl
Collecting appdirs<2,>=1.4.3 (from virtualenv->pipenv)
  Downloading https://files.pythonhosted.org/packages/3b/00/2344469e2084fb287c2e0b57b72910309874c3245463acd6cf5e3db69324/appdirs-1.4.4-py2.py3-none-any.whl
Collecting importlib-metadata>=0.12; python_version < "3.8" (from virtualenv->pipenv)
  Downloading https://files.pythonhosted.org/packages/4a/c3/78826cdf0f7bf2d307aa4c6922aac9bd53c5d4f0de64e7db52771e641c8f/importlib_metadata-3.1.0-py2.py3-none-any.whl
Collecting six<2,>=1.9.0 (from virtualenv->pipenv)
  Downloading https://files.pythonhosted.org/packages/ee/ff/48bde5c0f013094d729fe4b0316ba2a24774b3ff1c52d924a8a4cb04078a/six-1.15.0-py2.py3-none-any.whl
Collecting zipp>=0.5 (from importlib-metadata>=0.12; python_version < "3.8"->virtualenv->pipenv)
  Downloading https://files.pythonhosted.org/packages/41/ad/6a4f1a124b325618a7fb758b885b68ff7b058eec47d9220a12ab38d90b1f/zipp-3.4.0-py3-none-any.whl
Installing collected packages: virtualenv-clone, distlib, filelock, appdirs, zipp, importlib-metadata, six, virtualenv, certifi, pipenv
Successfully installed appdirs-1.4.4 certifi-2020.11.8 distlib-0.3.1 filelock-3.0.12 importlib-metadata-3.1.0 pipenv-2020.11.15 six-1.15.0 virtualenv-20.2.1 virtualenv-clone-0.5.4 zipp-3.4.0
WARNING: You are using pip version 19.1.1, however version 20.2.4 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.
Removing intermediate container 1815f94b39e5
 ---> 30a77dd84cca
Step 4/7 : COPY Pipfile Pipfile.lock ./
 ---> b8b33d26d125
Step 5/7 : RUN pipenv install --deploy --dev --ignore-pipfile --system
 ---> Running in 08094d57a642
Installing dependencies from Pipfile.lock (d4ebc7)...
Removing intermediate container 08094d57a642
 ---> 078c37fe7625
Step 6/7 : COPY . .
 ---> b0cee2af5ffb
Step 7/7 : CMD ["python3", "main.py"]
 ---> Running in 5435ea2d2f08
Removing intermediate container 5435ea2d2f08
 ---> 3c2cae465c62
Successfully built 3c2cae465c62
Successfully tagged image_name:latest
```

Some interesting points to note about this process:

- Docker will execute each command sequentially
- The result of each command will result in a new layer
- Each intermediate layer has a unique id
- Tags are aliases. One image id can have multiple tags. For instance `image:1.0.0` and `image:latest`

Docker is pretty clever too. **Docker will cache layers if the build context is not modified**. **If we rerun the build command again, it will finish immediately**. Note that the image ids are identical to the previous run:

```json
$ docker build -t my_image:latest .
Sending build context to Docker daemon  10.24kB
Step 1/7 : FROM python:3.7.3-alpine3.9
 ---> fe3ef29c73f3
Step 2/7 : WORKDIR  /app
 ---> Using cache
 ---> 0dd0597e8d53
Step 3/7 : RUN pip install pipenv
 ---> Using cache
 ---> 30a77dd84cca
Step 4/7 : COPY Pipfile Pipfile.lock ./
 ---> Using cache
 ---> b8b33d26d125
Step 5/7 : RUN pipenv install --deploy --dev --ignore-pipfile --system
 ---> Using cache
 ---> 078c37fe7625
Step 6/7 : COPY . .
 ---> Using cache
 ---> b0cee2af5ffb
Step 7/7 : CMD ["python3", "main.py"]
 ---> Using cache
 ---> 3c2cae465c62
Successfully built 3c2cae465c62
Successfully tagged my_image:latest
```

If the docker daemon notices that the build context has changed for a particular layer, the cache is invalidated for that step, as well as subsequent steps. It is for this reason we always copy package dependencies first to ensure expensive package installs are cached.

We can now run the application, and publish the docker's ports to the host machine:

```bash
$ docker run --rm -p 127.0.0.1:8000:80 my_image:latest
 * Serving Flask app "main" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:80/ (Press CTRL+C to quit)
```

We can use curl to ensure that everything is working as intended:

```bash
$ curl http://127.0.0.1:8000
Hello, World!
```

In some scenarios we may notice our build context is far larger than expected.  This is how we can **reduce the files sent to the build context**:

```bash  {"highlight": "2"}
$ docker build -t docker_ignore_example .
Sending build context to Docker daemon  395.4MB
Step 1/6 : FROM node:10.9-alpine
 ---> df2d34f007a1
...
```

This can be achieved with **`.dockerignore`** file:

```bash
$ cat .dockerignore
# Ignore all files by default
*

# Allow only the required files
!public/
!src/
!config-overrides.js
!package.json
!yarn.lock
```

Now we can see that the build context has been dramatically reduced in size:

```bash {"highlight": "2"}
$ docker build -t docker_ignore_example .
Sending build context to Docker daemon  313.9kB
Step 1/6 : FROM node:10.9-alpine
 ---> df2d34f007a1
...
```

This simple change will:

- Reduce build speeds. Creating the build context can be slow
- Reduce the chance of cache invalidation
- Ensure the final image doesn't contain contain sensitive files such as `.git`, `.env`, etc.

Earlier it was mentioned that each step within a Dockerfile will become a layer. These layers combine will produce the final runnable image. These layers can be downloaded separately, and in parallel. Note that if you have previous layers already, they won't be downloaded again:

```powershell
docker pull ruby:2.5
Unable to find image 'ruby:2.5' locally
2.5: Pulling from library/ruby
756975cb9c7e: Pull complete
d77915b4e630: Pull complete
5f37a0a41b6b: Pull complete
96b2c1e36db5: Pull complete
c495e8de12d2: Downloading [====================>                              ]  78.82MB/192.3MB
49d50a24de5f: Download complete
9a2ce94cdbc3: Downloading [===================================>               ]  15.87MB/22.52MB
9b0b42fb87d9: Download complete
```

Likewise **tags are just aliases**:

```bash
$ docker tag
"docker tag" requires exactly 2 arguments.
See 'docker tag --help'.

Usage:  docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
```

You can view every layer with the `docker history` command:

```bash
$ docker history my_image
IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
72938d6b403c        17 hours ago        /bin/sh -c #(nop)  CMD ["python3" "main.py"]    0B
74533d6b0fb2        17 hours ago        /bin/sh -c #(nop) COPY dir:fff6578bafd7bd497…   6.05kB
226a426e62ac        17 hours ago        /bin/sh -c pipenv install --deploy --dev --i…   5.49MB
915660a9cf93        17 hours ago        /bin/sh -c #(nop) COPY multi:03c61ef0e8a7669…   5.68kB
a7822573f57e        18 hours ago        /bin/sh -c pip install pipenv                   43MB
357900f7d29a        18 hours ago        /bin/sh -c #(nop) WORKDIR /app                  0B
fe3ef29c73f3        19 months ago       /bin/sh -c #(nop)  CMD ["python3"]              0B
<missing>           19 months ago       /bin/sh -c set -ex;   wget -O get-pip.py 'ht…   6.06MB
<missing>           19 months ago       /bin/sh -c #(nop)  ENV PYTHON_PIP_VERSION=19…   0B
<missing>           19 months ago       /bin/sh -c cd /usr/local/bin  && ln -s idle3…   32B
<missing>           19 months ago       /bin/sh -c set -ex  && apk add --no-cache --…   74.8MB
<missing>           19 months ago       /bin/sh -c #(nop)  ENV PYTHON_VERSION=3.7.3     0B
<missing>           19 months ago       /bin/sh -c #(nop)  ENV GPG_KEY=0D96DF4D4110E…   0B
<missing>           19 months ago       /bin/sh -c apk add --no-cache ca-certificates   551kB
<missing>           19 months ago       /bin/sh -c #(nop)  ENV LANG=C.UTF-8             0B
<missing>           19 months ago       /bin/sh -c #(nop)  ENV PATH=/usr/local/bin:/…   0B
<missing>           19 months ago       /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>           19 months ago       /bin/sh -c #(nop) ADD file:a86aea1f3a7d68f6a…   5.53MB

# Without truncation
$ docker history nginx --no-trunc
...
```

## Debugging Docker

### Debugging broken image builds

Let's say we had the following docker build break:

```bash  {"highlight": "1,13-28"}
$ docker build -t my_image:latest .
Sending build context to Docker daemon  9.728kB
Step 1/7 : FROM python:3.7.3-alpine3.9
 ---> fe3ef29c73f3
Step 2/7 : WORKDIR  /app
 ---> Using cache
 ---> 0dd0597e8d53
Step 3/7 : RUN pip install pipenv
 ---> Using cache
 ---> 30a77dd84cca
Step 4/7 : COPY Pipfile Pipfile.lock ./
 ---> 15d2fbf43c6c
Step 5/7 : RUN pipenv install --deploy --dev --ignore-pipfile --system
 ---> Running in 32a28be440a6
[PipenvOptionsError]:   File "/usr/local/lib/python3.7/site-packages/pipenv/vendor/click/core.py", line 610, in invoke
[PipenvOptionsError]:       return callback(*args, **kwargs)
[PipenvOptionsError]:   File "/usr/local/lib/python3.7/site-packages/pipenv/vendor/click/decorators.py", line 21, in new_func
[PipenvOptionsError]:       return f(get_current_context(), *args, **kwargs)
[PipenvOptionsError]:   File "/usr/local/lib/python3.7/site-packages/pipenv/cli/command.py", line 253, in install
[PipenvOptionsError]:       site_packages=state.site_packages
[PipenvOptionsError]:   File "/usr/local/lib/python3.7/site-packages/pipenv/core.py", line 1928, in do_install
[PipenvOptionsError]:       site_packages=site_packages,
[PipenvOptionsError]:   File "/usr/local/lib/python3.7/site-packages/pipenv/core.py", line 615, in ensure_project
[PipenvOptionsError]:       validate=validate, skip_requirements=skip_requirements, system=system
[PipenvOptionsError]:   File "/usr/local/lib/python3.7/site-packages/pipenv/core.py", line 282, in ensure_pipfile
[PipenvOptionsError]:       "--system is intended to be used for pre-existing Pipfile
ERROR:: --system is intended to be used for pre-existing Pipfile installation, not installation of specific packages. Aborting.
The command '/bin/sh -c pipenv install --deploy --dev --ignore-pipfile --system' returned a non-zero code: 1
```

**Each intermediate docker stage has a unique id** that can be used to run commands against arbitrary intermediate stages of a docker build. This is great for debugging broken builds. **We can run the step prior to failure within an interactive shell** and investigate further:

```bash  {"highlight": "5-10"}
# The build failed. Let's use the previous image id:
$ docker build -t my_image:latest .
Sending build context to Docker daemon  9.728kB
....
Step 4/7 : COPY Pipfile Pipfile.lock ./
 ---> 15d2fbf43c6c <- The unique id
Step 5/7 : RUN pipenv install --deploy --dev --ignore-pipfile --system
 ---> Running in 32a28be440a6
[ Omitted ]
The command '/bin/sh -c pipenv install --deploy --dev --ignore-pipfile --system' returned a non-zero code: 1

# Run a new command against the intermediate step. Note that alpine doesn't have `/bin/bash`:
$ docker run --rm -it 15d2fbf43c6c /bin/sh
/app # ls
Pipfile       Pipfile.lock
/app # cat Pipfile

/app # du -h Pipfile
0       Pipfile
/app #
```

### Debugging broken containers

If you're having problems with an already running docker container and you're not sure what's going wrong, you can use `exec` to run an arbitrary command against a currently running container. This works in a similar way to `docker run`:

```bash
docker exec --help

Usage:	docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Run a command in a running container
```

For instance:

```bash
# Run an arbitrary container
$ docker run --rm -p 127.0.0.1:8080:80 -it nginx /bin/bash

# View the running containers to see the container id (Same as `docker container ls`)
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
223129cea261        nginx               "/docker-entrypoint.…"   6 minutes ago       Up 6 minutes        127.0.0.1:8080->80/tcp   bold_wilbur

# exec an interactive tty against an existing container
$ docker exec -it 223129cea261 /bin/bash
root@223129cea261:/# echo $(whoami; id; hostname)
root uid=0(root) gid=0(root) groups=0(root) 223129cea261
```

**You can also name docker containers** to achieve the same effect:

```bash
# Run an arbitrary container with a name
$ docker run --name my_nginx_container --rm -p 127.0.0.1:8080:80 nginx

# exec an interactive tty
$ docker exec -it my_nginx_container /bin/bash
root@223129cea261:/# echo "hello from inside the container"
hello from inside the container
```

### Debugging detached containers

By default when you run a container it will run in the foreground of your terminal. However, it is also possible the process in the background using detached mode:

```bash
# -d, --detach  Run container in background and print container ID

$ docker run -d --rm -p 127.0.0.1:8080:80 nginx
30022d51e37ccef2e9a9fd042a408d2697a8f8eefa61c437a298e4ae9eff8f68
```

It is possible to view the logs of any container, whether attached or not, with `docker logs`:

```bash
docker logs --help

Usage:	docker logs [OPTIONS] CONTAINER

Fetch the logs of a container
```

For example:

```bash
$ docker logs --follow 30022d51e37ccef2e9a9fd042a408d2697a8f8eefa61c437a298e4ae9eff8f68 --since 5m
172.17.0.1 - - [28/Nov/2020:01:35:38 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
172.17.0.1 - - [28/Nov/2020:01:35:38 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
172.17.0.1 - - [28/Nov/2020:01:35:38 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
172.17.0.1 - - [28/Nov/2020:01:35:38 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0" "-"
```

The `attach` command can also be useful to attach to the previously detached docker container. Although even in this scenario I would more frequently use `exec`:

```bash
$ docker attach --help

Usage:	docker attach [OPTIONS] CONTAINER

Attach local standard input, output, and error streams to a running container
```

If you're trying to debug locally, rather than on production, the final trick is to **remove the -d flag, and view the error synchronously**.

## Docker as build environment

Docker is great for running stand alone, portable, applications and software. It can be used to create images for building/compiling software in your CI environments, or for local development purposes.

### Cross Compiler example

Let's say I wanted to cross compile software for a different architecture than my host machine. Setting up cross-compilers on your own machine can be complicated. Instead we can create an replicable build environment using Docker. This was the approach that I took as part of developing my [os_concepts project](https://github.com/AlanFoster/os_concepts). Let's create a simple Dockerfile for this:

```bash
FROM ubuntu:20.04

# Install the required software
RUN apt update && \
    DEBIAN_FRONTEND=noninteractive apt install -y \
        build-essential \
        curl \
        libgmp3-dev \
        libmpc-dev \
        libmpfr-dev \
        nasm \
        texinfo \
        qemu-system-i386 \
        python3 \
        python3-dev \
        python3-distutils \
        git

# Copy standalone script for installing cross compilers
COPY ./install_crosscompiler.sh ./
RUN ./install_crosscompiler.sh all

# Add the cross compiler to the path, to ensure 'i386-elf-gcc' is now available
ENV PATH="~/opt/cross/bin:${PATH}"

# Installing other useful tools
RUN git clone https://github.com/pwndbg/pwndbg && \
    cd pwndbg && \
    ./setup.sh
```

The docker image can be built as normal:

```bash
$ docker build -t osbuilder .
... Many minutes later...
```

Now we can run the container as normal. However, we will **use Docker's volumes to ensure that our source files are available on Docker's file system**:

![docker-volumes.png](./docker-volumes.png)

In this example the volume and working directory are additionally specified:

```bash
# Run the osbuilder image, and specify the volume and working directory
$ docker run --rm -it -v $(pwd):$(pwd) -w $(pwd) osbuilder /bin/bash
root@c37f7fde3908:/Users/alan/Documents/code/os_concepts# make
... generating object files etc ...
... generating the final compiled assets...

root@c37f7fde3908:/Users/alan/Documents/code/os_concepts#
```

**Any modifications to files, or newly created files, will be available on the host**. Now the compiled assets are available on the host machine:

```bash
$ du -h os.img
 20K	os.img
```

Note that on a CI environment, you may preference using like **`docker cp`** instead:

```bash
$ docker cp --help

Usage:	docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
	docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH

Copy files/folders between a container and the local filesystem
```

## Simple networking

### Port Mapping

We've seen this already:

```bash
docker run --rm --publish 127.0.0.1:8080:80	nginx
```

### Linux

On Linux there is a **docker0 bridge network adapter** available.

```bash {"highlight": "14-17"}
$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:71:6c:1e brd ff:ff:ff:ff:ff:ff
    inet 192.168.246.234/24 brd 192.168.246.255 scope global dynamic noprefixroute eth0
       valid_lft 1305sec preferred_lft 1305sec
    inet6 fe80::20c:29ff:fe71:6c1e/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:1b:3a:a0:58 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
4: br-b43f932cc92f: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:8e:30:ee:4b brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/16 brd 172.18.255.255 scope global br-b43f932cc92f
       valid_lft forever preferred_lft forever
```

We can view the available docker networks:

```bash
$ docker network ls
NETWORK ID          NAME                   DRIVER              SCOPE
2937a473cc07        bridge                 bridge              local
1fb029dabed9        host                   host                local
c72689d423c5        none                   null                local
```

We can inspect the network to see the configuration, and what containers are present:

```bash  {"highlight": "5,14-19,30-34,42"}
$ docker network inspect bridge
docker network inspect bridge
[
    {
        "Name": "bridge",
        "Id": "2937a473cc0778888e4e17dd18bb29b7535f81e9936a3960c176239a02a5b87f",
        "Created": "2020-11-30T21:25:26.036494464-05:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "51a56a5043ea6550be28b6fe31c64bde1db0f51c396f6f1ae09feb904ceba65a": {
                "Name": "zen_shamir",
                "EndpointID": "53d782e9bef4c300e056d11ba9bc058daafdc9ee42698678b7dc0e7b08d242e7",
                "MacAddress": "02:42:ac:11:00:02",
                "IPv4Address": "172.17.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
]
```

Let's run a simple Python web server:

```bash
# Run a Python container
$ docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) -p 8000:8000 python:3.7 /bin/bash

# Run a simple web server:
root@91b3d7db6852:/tmp/example# python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

If we curl from the host to the bound port, either on it's IP address, or via the published port on the host:

```bash
$ curl http://172.17.0.2:8000
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Directory listing for /</title>
</head>
<body>
<h1>Directory listing for /</h1>
<hr>
<ul>
</ul>
<hr>
</body>
</html>
$ curl http://localhost:8000
```

We will see the IP address that matches the `docker0` adapter from the docker logs:

```bash
$ docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) -p 8000:8000 python:3.7 /bin/bash
root@e8407b9c71f9:/tmp/example# python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
172.17.0.1 - - [01/Dec/2020 02:52:21] "GET / HTTP/1.1" 200 -
172.17.0.1 - - [01/Dec/2020 02:52:23] "GET / HTTP/1.1" 200 -
```

### Mac

Firstly, **there is no docker0 bridge on macOS**. Due to the way networking is implemented on Mac, **the interface exists within the virtual machine**.

Let's run through a quick example of the host and container communicating. Let's create a Python docker container running a web server, and publishing the port to the host machine:

```bash
# Run a Python container
$ docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) -p 8000:8000 python:3.7 /bin/bash

# Run a simple web server:
root@91b3d7db6852:/tmp/example# python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

On our host machine we can curl port 8000 to interact with the docker container:

```bash
$ curl 127.0.0.1:8000
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Directory listing for /</title>
</head>
<body>
<h1>Directory listing for /</h1>
<hr>
<ul>
</ul>
<hr>
</body>
</html>
```

We will see the docker container's logs update to signify that a request was successfully handled:

```bash
# The previously running web server now shows the get request
root@91b3d7db6852:/tmp/example# python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
172.17.0.1 - - [01/Dec/2020 01:03:22] "GET / HTTP/1.1" 200 -
```

For development purposes - to allow for the docker container to communicate to the host, you can use a pseudo dns entries or an IP:

```bash

# Available since Docker 17.12
root@91b3d7db6852:/tmp/foo# curl docker.mac.for.local:8001
...

# Available since of Docker 18.03
root@91b3d7db6852:/tmp/foo# curl host.docker.internal:8001
...

root@91b3d7db6852:/tmp/foo# curl 172.17.0.1:8001
...
```

On the host machine's logs we will see:

```bash
$ python -m SimpleHTTPServer 8001
Serving HTTP on 0.0.0.0 port 8001 ...
127.0.0.1 - - [01/Dec/2020 01:05:32] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [01/Dec/2020 01:20:45] "GET / HTTP/1.1" 200 -
```

We can also use **`docker inspect`** on the container for more information:

```json
$ docker inspect 91b3d7db6852
[
    {
        "Id": "91b3d7db6852519060b9f7fb12c2c4a7a7d6cb340c6e2087d13a179d98a01068",
        "Created": "2020-12-01T01:02:43.4832385Z",
        "Path": "/bin/bash",
         .... etc ...
         "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "6dd875321d752ce1722982c51d8ecadb4c6f526007ca67fe13f2e002966199e6",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "8000/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "8000"
                    }
                ]
            },
            .... etc ...
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "f6b83dc59637f7871b769be4b642abf302bf1aab9b059322067500949562fbd7",
                    "EndpointID": "1224dd01e3373048a9b2a015e710207e8743ee8a588a60591c269cfec177c417",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
]
```

### docker-compose

An additional CLI written with Python which simplifies the process of running multi-container Docker applications.

Some benefits include:

- Container configuration with YAML
- Store configuration in Git alongside source code
- Container namespacing at runtime, i.e. creating a new network, and naming containers

The important commands are:

- `docker-compose build` - Build all of the required containers
- `docker-compose up`  - Run all of the containers
- `docker-compose down` - Stop all of the containers
- `docker-compose exec` - Execute a one off command against a container

An example **`docker-compose.yml`** file may be:

```yaml
version: '3.7'

services:
  database:
    image: postgres:10.5-alpine
    ports:
      # The host machine may have postgres installed and running on port 5432, choosing an arbitrary port instead.
      - 5510:5432

  backend:
    build:
      context: ./backend
    ports:
      # The default port for flask is most likely taken, choose an arbitrary port instead.
      - 5511:5000
    depends_on:
      - database
    entrypoint: dockerize -wait tcp://database:5432 -timeout 30s
    command: flask run --host=0.0.0.0
    env_file:
      - .env
    volumes:
      - ./backend:/srv/app

  frontend:
    build:
      context: ./frontend
    ports:
      - 3000:3000
    depends_on:
      - backend
    command: yarn dev
    volumes:
      - ./frontend/pages:/srv/app/pages
      - ./frontend/src:/srv/app/src
```

The runtime environment variables can be set by a **`.env`** file. Note that the database url references the container name, which docker will resolve:

```yaml
FLASK_DEBUG=1
FLASK_APP=project/app
DATABASE_URL=postgresql+psycopg2://postgres@database:5432/postgres
```

**Kubernetes**

Kubernetes takes the art of running multi-container applications a step further. It also supports yaml configuration. However, it provides additional complexities such as application autoscaling, and deployment management of your production cluster. Although Kubernetes is more of a production tool, Docker for Desktop has support for Kubernetes:

![kubernetes](kubernetes.png)

### Application Cheatsheets

If you want to quickly test arbitrary versions of software, Docker is great. For instance if you wanted to test an older version of the **Ruby REPL**:

```bash
$ docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) ruby:2.5 /bin/bash

root@f91c616b84ec:/tmp/foo# irb
irb(main):001:0> puts RUBY_VERSION
2.5.8
=> nil
```

Jumping into a container with **Python**:

```bash
$ docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) python:3.7 /bin/bash

root@154dd0a667a6:/tmp/foo# python3
Python 3.7.9 (default, Nov 18 2020, 14:10:47)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Or perhaps **PHP**:

```powershell
$ docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) php:5.6.4 /bin/bash

root@89c80f4c734e:/tmp/example# php foo.php
hello world
root@89c80f4c734e:/tmp/example# php -a
Interactive shell

php > echo 4 + 5;
9
php >
```

It's also useful to run arbitrary versions of **databases** too:

```bash
# The --env flag, or -e for short, can be used to inject any environment variable
$ docker run --rm -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mariadb:10.5.8

$ docker run --rm -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres:13.1
```

Or other common technologies such as **redis** etc:

```bash
$ docker run --rm -p 6379:6379 redis
```

Creating a throw away container with an **older Ubuntu versions**, publishing SMB ports on the host machine, and **manually installing samba**:

```bash
$ docker run -it --rm -p 139:139 -p 445:445 ubuntu:16.04 /bin/bash

root@c9a2e1f1a0c9:/# apt update
root@c9a2e1f1a0c9:/# apt install -y samba

root@c9a2e1f1a0c9:/# samba --version
Version 4.3.11-Ubuntu

root@c9a2e1f1a0c9:/# exit
$
```

Or if you wanted a more permanent `Dockerfile` to add to your collection:

```bash
FROM ubuntu:16.04

RUN apt update && \
    DEBIAN_FRONTEND=noninteractive apt install -y \
        samba

# ...
```

## Gotchas

### /bin/bash not present

You may try starting an interactive container, for it to immediately fail with the following error. Try using `/bin/sh` or `/bin/csh` etc instead:

```bash
# Trying to use /bin/bash doesn't work
$ docker run -it --rm some_image /bin/bash
docker: Error response from daemon: OCI runtime create failed: container_linux.go:346: starting container process caused "exec: \"/bin/bash\": stat /bin/bash: no such file or directory": unknown.

# Try a different shell
$ docker run -it --rm some_image /bin/sh
/example $
```

### Containers running out of memory

If you're running large Java docker containers, they may run out of memory. Depending on the configuration the containers may restart frequently, or start and immediately die. The 137 exit status code is generally an indicator that the docker container has been killed due to memory constraints. You can configure this limit:

![docker-memory](./docker-memory.png)

### Host Machine running out of memory

You may have no longer needed containers / images that you wish to remove:

- `docker system prune` - Remove all unused data
- `docker kill $(docker ps -a -q)` - Kill all containers
- `docker rmi -f $(docker images -a -q)` - Remove *all* images

### Security Aspects

Firstly, there are build stage security issues:

- Not specifying a `.dockerignore` file correctly can lead to files being copied from your docker context in to the final image unintentionally, for instance the contents of `.git/.env` . For images that are running web servers, this may lead to these files being accessible to publicly, or if the images are distributed users may gain access to secrets unintentionally.
- Do not inline passwords/credentials in your Dockerfile commands, they can be seen with `docker history`. Use docker secrets.
- Do not use intermediate stages if credentials/sensitive files are used. Ensure they are 'atomic' and no longer exist at the end of the stage - otherwise if the intermediate layer can be run in isolation, it's possible to to retrieve the credentials. Always check the latest best practices.

Additionally there are run time security issues:

- If you don't specify an IP with  `--publish` then it will default to `0.0.0.0`. This may or may not be a security concern for your use case and set up.
- Mounted volumes allows for files to be shared between the container and the host machine. This also means if the docker container runs as root, it can write files on the host with root permissions, potentially with the SUID bit set - potentially leading to local privilege escalation.
- Docker in docker is possible by mounting the docker socket in a container. If the container gets compromised - then the child container can interact with the mounted docker socket to create a new container with custom options, including mounting the host file system directly, allowing access to arbitrary files - potentially including `/root` etc. This problem also exists if a user is granted write permissions to this socket with `docker -H unix:///var/run/docker.sock run -v /:/host -it ubuntu chroot /host /bin/bash`
- When testing software, Docker also provides a `--read-only` flag when running containers, and read-only volumes
