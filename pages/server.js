import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';  // Carrega o arquivo .env
import bodyParser from 'body-parser';
import cors from 'cors';  // Importa o CORS

dotenv.config();  // Carrega o arquivo .env

const app = express();
const port = 3000;

// Permitir requisições de qualquer origem
app.use(cors());

// Carregar chave da API do OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Usar body-parser para ler os dados JSON do corpo da requisição
app.use(bodyParser.json());

// Rota para processar as respostas
app.post('/analisar', async (req, res) => {
  const respostas = req.body;

  try {
    const prompt = `
    Faça um resumo em forma de insight com base nas respostas do usuario

    1. Quais disciplinas apresentam as maiores taxas de reprovação e quais são os padrões de dificuldade dos alunos nessas disciplinas? 
   

    2. Os alunos se beneficiariam de intervenções pedagógicas personalizadas?
    

    3. Quais fatores podem estar contribuindo para a falta de frequência?
    

    4. Os alunos apresentam padrões de comportamento que podem indicar problemas de disciplina ou dificuldades sociais?
  

    5. O ambiente escolar (clima, infraestrutura, relações interpessoais) influencia o engajamento dos alunos?
    
    
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é um analista educacional especializado em dados escolares" },
        { role: "user", content: prompt }
      ],
      max_tokens: 500,
    });

    const insights = response.choices[0].message.content.trim();
    res.json({ insights });
  } catch (error) {
    console.error('Erro ao analisar as respostas:', error);
    res.status(500).send('Erro ao processar as respostas');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

