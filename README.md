# bookmarklet-demo

cf. [Getting Started with Scala.js and Vite](https://www.scala-js.org/doc/tutorial/scalajs-vite.html)

## Prerequisites

[Prerequisites](https://www.scala-js.org/doc/tutorial/#prerequisites)

## install

```sh
pnpm install
```

## develop

```sh
sbt
[...]
sbt> ~fastLinkJS
```

## build

```sh
sbt fastLinkJS
```

## serve

```sh
docker run --rm --name local-server -p 3000:80 -v ./target/scala-3.3.4/app-fastopt:/usr/share/nginx/html nginx
```

## lint

```sh
sbt scalafix
```
