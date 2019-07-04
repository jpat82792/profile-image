FROM node:latest

#Create app directory
WORKDIR /usr/src/app

COPY . ./

RUN npm install gulp -g

EXPOSE 5000

RUN npm install 



RUN gulp startServer