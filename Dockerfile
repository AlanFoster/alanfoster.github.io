FROM node:12.16.1

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
