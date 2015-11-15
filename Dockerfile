FROM node:5.0

RUN apt-key adv --keyserver 'keyserver.ubuntu.com' --recv '7F0CEB10'
RUN echo 'deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.0 main' | sudo tee '/etc/apt/sources.list.d/mongodb-org-3.0.list'
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
