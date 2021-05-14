FROM node:alpine
LABEL maintainer="khadane.miller@gmail.com"

RUN apk update && apk upgrade && apk add curl

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

VOLUME /app

EXPOSE 4000/tcp

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:4000 || exit 1

CMD ["npm", "run", "dev"]