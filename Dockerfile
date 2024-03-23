FROM node:20.8.1

WORKDIR /usr/src
COPY frontend /usr/src

RUN npm install -g serve

RUN npm install
RUN npm run build

CMD ["npm", "serve", "-g", "build"]
EXPOSE 3000