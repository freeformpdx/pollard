FROM node:5.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build-min

EXPOSE 3000

CMD [ "npm", "start" ]
