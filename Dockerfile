FROM node:latest

#Create app directory
WORKDIR /usr/src/app

EXPOSE 8080

RUN npm start