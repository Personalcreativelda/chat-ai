import express from "express";
import gemini from "./gemini.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API Gemini rodando! Use POST /gemini com { message }");
});

app.post("/gemini", async (req, res) => {
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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
