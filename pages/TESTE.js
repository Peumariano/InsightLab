// server.js
import express from 'express';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import cors from 'cors';
import 'dotenv/config';


// ... o restante do seu código ...


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
});

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao comunicar com o ChatGPT' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});