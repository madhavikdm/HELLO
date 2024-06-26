FROM node:14.18.3-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
#CMD [ "npm", "start" ]
