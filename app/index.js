import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import gemini from "./gemini.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos da pasta public
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// API Gemini
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
    console.error(err);
    res.status(500).json({ error: "Erro ao conectar com a API Gemini" });
  }
});

// Inicia servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
