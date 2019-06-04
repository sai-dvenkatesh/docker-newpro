FROM node:8-alpine
WORKDIR /app2
COPY ./package.json ./
RUN npm install 
COPY ./hello.js ./
EXPOSE 9060
CMD node hello.js
