const express = require("express");
const path = require("path");
const app = express();

// Servir arquivos estáticos (html, css, js, imagens) da pasta atual
app.use(express.static(__dirname));

// Rota principal para carregar o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Definir porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
