FROM node:6.9.1

RUN mkdir -p /usr/src/mystore

COPY dist /usr/src/mystore/app

COPY authMiddleware.js /usr/src/mystore/
COPY data.js /usr/src/mystore/
COPY deploy-server.js /usr/src/mystore/server.js
COPY deploy-package.json /usr/src/mystore/package.json

WORKDIR /usr/src/mystore

RUN npm install

EXPOSE 8080
EXPOSE 8081

CMD ["npm", "start"]
