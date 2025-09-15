FROM node:18

WORKDIR /app

COPY public/package*.json ./
RUN npm install

COPY public/ .

EXPOSE 3000

CMD ["node", "index.js"]
