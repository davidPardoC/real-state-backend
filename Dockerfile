FROM node:16.17.0
WORKDIR /usr/src/app
EXPOSE 5500
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["node", "./dist/server.js"]
