
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY);



const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
  

const perguntas = [
    "Quais disciplinas apresentam as maiores taxas de reprovação e quais são os padrões de dificuldade dos alunos nessas disciplinas?",
    "Quais alunos se beneficiariam de intervenções pedagógicas personalizadas, como reforço em áreas específicas ou atividades de enriquecimento?",
    "Quais são os padrões de ausência dos alunos e quais fatores podem estar contribuindo para a falta de frequência?",
    "Quais alunos apresentam padrões de comportamento que podem indicar problemas de disciplina ou dificuldades sociais?",
    "Como o ambiente escolar (clima, infraestrutura, relações interpessoais) influencia o comportamento e o engajamento dos alunos?"
];

const respostas = {};
let perguntaAtual = 0;

function exibirPergunta() {
    if (perguntaAtual < perguntas.length) {
        document.getElementById("pergunta").textContent = perguntas[perguntaAtual];
    } else {
        exibirMensagemFinal();
    }
}

function armazenarResposta() {
    const resposta = document.getElementById("resposta").value.trim();
    if (resposta === "") {
        alert("Por favor, insira uma resposta.");
        return;
    }
    respostas[perguntas[perguntaAtual]] = resposta;
    document.getElementById("resposta").value = "";
    perguntaAtual++;
    exibirPergunta();
}

function gerarPromptChatGPT() {
    let textoRespostas = "";
    for (const pergunta in respostas) {
        textoRespostas += `${pergunta}: ${respostas[pergunta]}\n`;
    }

    const prompt = `Analise as seguintes respostas sobre o desempenho dos alunos e forneça insights concisos e práticos para melhorias:\n\n${textoRespostas}\n\nForneça respostas curtas e diretas.`;
    return prompt;
}

async function obterRespostaChatGPT() {
    const prompt = gerarPromptChatGPT();

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Modelo válido da OpenAI
            messages: [{ role: "user", content: prompt }],
            max_tokens: 200,
        });

        const respostaIA = completion.choices[0].message.content.trim();
        document.getElementById("respostaIA").textContent = respostaIA;
        document.getElementById("respostaIA").style.display = "block";
    } catch (error) {
        console.error("Erro ao obter resposta da API da OpenAI:", error);
        document.getElementById("respostaIA").textContent = "Erro ao obter resposta da IA.";
        document.getElementById("respostaIA").style.display = "block";
    }
}

function exibirMensagemFinal() {
    document.getElementById("pergunta").style.display = "none";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("enviar").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("mensagemFinal").style.display = "block";
    const btnGerarTexto = document.createElement("button");
    btnGerarTexto.textContent = "Obter resposta da IA";
    btnGerarTexto.addEventListener("click", obterRespostaChatGPT);
    document.getElementById("mensagemFinal").appendChild(btnGerarTexto);
    const respostaIA = document.createElement("p");
    respostaIA.id = "respostaIA";
    respostaIA.style.display = "none";
    document.getElementById("mensagemFinal").appendChild(respostaIA);
}

document.getElementById("enviar").addEventListener("click", armazenarResposta);
exibirPergunta();
