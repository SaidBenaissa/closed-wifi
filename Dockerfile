FROM node:fermium-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD app ./app

EXPOSE 5000
CMD [ "npm", "start" ]