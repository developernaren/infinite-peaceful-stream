FROM node:11.1

ENV APP_ENV=production

COPY ./ /app
WORKDIR /app
RUN npm install

ENTRYPOINT npm run start
