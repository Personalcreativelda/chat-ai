FROM node:20

WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia todo o restante do projeto
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando para rodar o app
CMD ["node", "server.js"]
