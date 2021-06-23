FROM node:15-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package.json ./

RUN npm i

COPY . ./

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

