#!/bin/sh

FROM node:lts-slim
# RUN mkdir /opt/test/

WORKDIR /opt/test/

RUN apt-get update -qq && \
  apt-get install -y \
  build-essential \
  g++ \
  python \
  -qq;

COPY package.json ./

RUN npm install 
COPY . .
RUN npm install -g \
    npm@latest \
    @wdio/cli@^5.7.15 \
    @wdio/local-runner@^5.7.15 \
    @wdio/mocha-framework@^5.7.14 \
    @wdio/spec-reporter@^5.7.13 \
    @wdio/sync@^5.7.13 \
    chai@^4.2.0 \
    mailhog@^4.1.0 \
    uuid@^3.3.2 \
    wdio-screen-commands@^2.6.0 \
    webdriverio@^5.7.15 ;
EXPOSE 5300
ENTRYPOINT ["npm", "run", "test"]