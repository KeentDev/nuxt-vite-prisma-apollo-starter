FROM node:15.8.0-alpine3.10
WORKDIR /usr/app

COPY package.json .

COPY . .

RUN npm i
RUN npx prisma generate

EXPOSE 4000