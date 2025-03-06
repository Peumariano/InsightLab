/*import { OpenAI } from 'openai';
import dotenv from 'dotenv';  // Carrega o arquivo .env

dotenv.config();  // Carrega o arquivo .env// Carrega o arquivo .env


// Inicializa a instância da OpenAI com a chave da API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analisarSentimento(texto) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Você pode escolher o modelo que desejar
      messages: [
        {
          role: "system",
          content: "Você é capaz de analisar sentimentos em textos.",
        },
        {
          role: "user",
          content: `Analise sentimento do texto: '${texto}'`,
        },
      ],
      max_tokens:30,
    });

    const sentimento = response.choices[0].message.content.trim();
    return sentimento;
  } catch (error) {
    console.error("Erro ao analisar sentimento:", error);
    return null;
  }
}

// Exemplo de uso
const comentario = "A aula foi muito interessante, mas a prova estava difícil.";
analisarSentimento(comentario).then((sentimento) => {
  console.log(`Sentimento: ${sentimento}`);
});




















/*
const config =  new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION

})

const openai = new OpenAIApi(config)

const gerarDescricao = async (nomeProduto) =>{
  const prompt = 'Gerar uma descrição para o produto ${nomeProduto}'

  try {
    
    const completion = await openai.createCompletion({
      model:"gpt-4o-mini",
      prompt: prompt,
      max_tokens: 2000})
    return completion.data.choices[0].text.trim();  

  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
      
    }else{
      console.log(error.message)
    }

    
  }
} 

(async () => {
  const nomeProduto = "Camera Canon";
  const descricaoProduto = await gerarDescricao(nomeProduto);
  console.log('Nome do produto ${nomeProduto}') 
  console.log('Descrição do produto ${descricaoProduto}')
})*/