FROM node:18

# Pasta de trabalho
WORKDIR /app

# Copiar package.json para instalar dependências
COPY public/package*.json ./
RUN npm install

# Copiar os restantes arquivos do projeto
COPY public/ .

# Expor a porta
EXPOSE 3000

# Iniciar o servidor
CMD ["node", "index.js"]
