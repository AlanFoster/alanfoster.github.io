# Blog

Accessible at [https://www.alanfoster.me/](https://www.alanfoster.me/)

## Running locally

With docker:

```
docker-compose up
```

Or with the host:

```
yarn
yarn develop
```

## Building locally

With Docker:
```
docker-compose run -v $(pwd)/public:/app/public service yarn build
```

Host:

```
yarn build
yarn serve
```

## Releasing

```
yarn deploy
```
