#!/bin/sh

FROM node:lts-slim
# RUN mkdir /opt/test/

WORKDIR /opt/test/

# RUN apt-get update -qq && \
# apt-get install -y \
# apt-get install default-jre \
# build-essential \
# g++ \
# python \
# -qq;

COPY package.json ./
RUN npm install 
COPY . .
EXPOSE 5300
ENTRYPOINT ["npm", "run", "test"]