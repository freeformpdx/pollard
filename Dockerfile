FROM node:5.0

RUN apt-get update && apt-get install -y mongodb-org
RUN mkdir -p /data/db

RUN mkdir -p /usr/src/app/sprout
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

WORKDIR /usr/src/app/sprout
RUN npm install

WORKDIR /usr/src/app

EXPOSE 3420
