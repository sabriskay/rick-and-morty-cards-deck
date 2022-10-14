FROM node:14.18.2 as build 

WORKDIR /usr/src/app
COPY package*.json .
RUN yarn

COPY . .