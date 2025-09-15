// app/index.js
import express from "express";
import gemini from "./gemini.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Rota raiz para checar se a API está rodando
app.get("/", (req, res) => {
  res.send("API Gemini rodando! Use /chat para interagir.");
});

// GET /chat → instruções
app.get("/chat", (req, res) => {
  res.send("Use POST /chat com { message } para enviar mensagens para a Gemini.");
});

// POST /chat → envia mensagem para a API Gemini
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Envie a mensagem no campo 'message'" });

  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message
    });

    res.json({ reply: response.text });
  } catch (err) {
    console.error("Erro ao conectar com Gemini:", err);
    res.status(500).json({ error: "Erro ao conectar com a API Gemini" });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
