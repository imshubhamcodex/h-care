FROM node:14.17.5-alpine3.12

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD npm run serve

EXPOSE 3000