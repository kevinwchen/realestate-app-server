FROM node:16

WORKDIR /app

ENV PORT 5000

ENV HOST 0.0.0.0

COPY . /app

RUN npm install

EXPOSE ${PORT}

CMD npm start