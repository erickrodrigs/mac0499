FROM node:15.8.0-alpine

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn install

COPY src/ src/

USER node

CMD yarn dev
