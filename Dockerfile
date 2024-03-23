FROM node:20.8.1

WORKDIR /usr/src
COPY ./* /usr/src

RUN yarn global add serve

RUN npm install
RUN npm run build

CMD ["serve", "-s", "build"]
EXPOSE 3000