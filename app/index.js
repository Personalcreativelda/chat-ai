// index.js
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Porta interna do container
const port = process.env.PORT || 3000;

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('API do ChatGPT rodando! Use /chat para enviar mensagens.');
});

// Rota /chat
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Envie a mensagem no campo "message"' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Erro ao conectar com a API do OpenAI' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
