// app/gemini.js
import { GoogleGenAI } from "@google/genai";

// Instancia o cliente Gemini com a chave da API do .env
const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export default gemini;
