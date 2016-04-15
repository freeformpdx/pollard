FROM node:5.0

RUN echo America/America/Los_Angeles > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata


RUN mkdir -p /usr/src/app/sprout
WORKDIR /usr/src/app


COPY . /usr/src/app
RUN npm install


WORKDIR /usr/src/app/sprout
RUN npm install

# RUN groupadd -r node \
# &&  useradd -r -m -g node node

# USER node

ENV NODE_ENV development # production for staging
CMD [ "npm", "start" ]
EXPOSE 3420
