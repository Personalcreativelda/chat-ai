FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .  # <- isso copia tudo, incluindo /public

EXPOSE 3000
CMD ["node", "server.js"]
