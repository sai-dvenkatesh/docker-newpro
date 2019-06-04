FROM node:8-alpine
WORKDIR /app1
COPY ./package.json ./
RUN npm install 
COPY . ./
EXPOSE 9060
CMD node hello.js
