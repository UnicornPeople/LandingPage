FROM node:20.12.0

WORKDIR /usr/src
COPY . /usr/src

RUN yarn global add serve

RUN npm config delete proxy
RUN npm cache clear --force

RUN npm install
RUN npm run build

CMD ["serve", "-s", "build"]
EXPOSE 3000
