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
    const resposta = document.getElementById("resposta").value;
    respostas[perguntas[perguntaAtual]] = resposta;
    document.getElementById("resposta").value = "";

    atualizarListaRespostas();
    perguntaAtual++;
    exibirPergunta();
  }

  function atualizarListaRespostas() {
    const listaRespostas = document.getElementById("listaRespostas");
    listaRespostas.innerHTML = "";
    for (const pergunta in respostas) {
      const resposta = respostas[pergunta];
      const itemLista = document.createElement("li");
      //itemLista.textContent = `${pergunta}: ${resposta}`;
      //listaRespostas.appendChild(itemLista);
    }
  }

  function exibirMensagemFinal() {

    

    document.getElementById("pergunta").style.display = "none";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("enviar").style.display = "none";

    document.getElementById("titulo").style.display = "none";



    document.getElementById("mensagemFinal").style.display = "block";


  }

  document.getElementById("enviar").addEventListener("click", armazenarResposta);

  exibirPergunta();