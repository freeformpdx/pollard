FROM node:5.0

RUN echo America/America/Los_Angeles > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

RUN mkdir -p /usr/src/sprout
WORKDIR /usr/src/sprout

RUN npm i -g pm2

ADD sprout/package.json ./
RUN npm install

ADD sprout/ ./

EXPOSE 4200

CMD ["./bin/start.sh"]
