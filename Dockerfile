FROM node:20.8.1

WORKDIR /usr/src
COPY . /usr/src

RUN yarn global add serve

RUN npm install -g npm@10.5.0

RUN npm config delete proxy
RUN npm cache clear --force

RUN npm install
RUN npm run build

CMD ["serve", "-s", "build"]
EXPOSE 3000
