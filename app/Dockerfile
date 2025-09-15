FROM node:18

# Definir pasta de trabalho
WORKDIR /app

# Copiar package.json primeiro para instalar dependências
COPY public/package*.json ./
RUN npm install

# Copiar o resto dos arquivos
COPY public/ .

# Expor a porta
EXPOSE 3000

# Comando para iniciar
CMD ["node", "index.js"]
