FROM node:current-bullseye-slim

WORKDIR /usr/app/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm","run","dev" ]