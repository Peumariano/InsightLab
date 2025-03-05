import 'dotenv/config';
import OpenAI from 'openai';

let openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY,
};

if (process.env.OPENAI_ORGANIZATION) {
  openaiConfig.organization = process.env.OPENAI_ORGANIZATION;
}

const openai = new OpenAI(openaiConfig);

const gerarDescricao = async (texto) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" or other chat model.
      messages: [{ role: "user", content: `Gerar uma análise/insight para a pergunta: ${texto}` }],
      max_tokens: 200,
    });
    return completion.choices[0].message.content.trim();
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
    return null;
  }
};

(async () => {
  const texto = "Faltam muito nas aulas?";
  const descricaoTexto = await gerarDescricao(texto);
  if (descricaoTexto) {
    console.log(`Resumo: ${descricaoTexto}`);
  } else {
    console.log("Falha ao gerar descrição");
  }
})();