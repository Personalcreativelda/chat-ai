# app/Dockerfile
FROM node:20

WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia todo o código
COPY . .

# Exponha a porta do container
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
