FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copia todo o conteúdo da pasta public (onde está o Dockerfile)
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
