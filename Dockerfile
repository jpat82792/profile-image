FROM node:latest

#Create app directory
WORKDIR /usr/src/app

COPY . ./

RUN npm install gulp -g

RUN npm install 