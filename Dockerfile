FROM node:20.12.0

WORKDIR /usr/src
COPY . /usr/src

RUN apt-get update
RUN yarn global add serve

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    --no-install-recommends
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get -yqq update && \
    apt-get -yqq install google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*


RUN npm config delete proxy

RUN npm install
RUN npm run build

CMD ["serve", "-s", "build"]
EXPOSE 3000
