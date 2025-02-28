/*import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "    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",
});

async function analisarSentimento(texto) {
  try {
    const response = await openai.completions.create({
      model: "gpt-4o-mini",
      prompt: `Analise o sentimento deste texto: '${texto}'`,
      max_tokens: 60,
    });
    return response.choices[0].text.trim();
  } catch (error) {
    console.error("Erro ao analisar sentimento:", error);
    return null;
  }
}

// Exemplo de uso
const comentario = "A aula foi muito interessante, mas a prova estava difícil.";
analisarSentimento(comentario).then((sentimento) => {
  console.log(`Sentimento: ${sentimento}`);
});*/

require("dotenv").config();
const{Configuration, OpenAIApi} = require("openai"); 

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
})









//Conexão com o BD
async function runQuery() {
    const mysql = await import('mysql2');
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '056319',
        database: 'uninterDB'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('Erro ao conectar: ' + err.stack);
            return;
        }
        console.log('Conectado como ID ' + connection.threadId);
    });

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('A solução é: ', results[0].solution);
        connection.end();
    });

    const nome = 'Nome do Usuário';
    const email = 'email@exemplo2.com';
    const senha = 'senha123';

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(query, [nome, email, senha], (error, results, fields) => {

    if (error) {
        console.error('Erro ao inserir usuário: ' + error);
        return;
    }

    console.log('Usuário inserido com sucesso!');
    });
    }
runQuery();


