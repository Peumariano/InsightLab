let currentQuestionIndex = 0;

function nextQuestion(questionNumber) {
    // Captura a resposta da pergunta atual
    const answer = document.getElementById(`pergunta${questionNumber}`).value.trim();

    if (answer === '') {
        alert("Por favor, forneça uma resposta antes de avançar.");
        return;
    }

    // Exibe a resposta abaixo de cada pergunta
    const insights = document.getElementById('insights');
    insights.innerHTML += `<p><strong>Pergunta ${questionNumber}: </strong> ${answer}</p>`;

    // Oculta a pergunta atual
    document.getElementById(`question${questionNumber}`).style.display = 'none';

    // Exibe a próxima pergunta
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        document.getElementById(`question${currentQuestionIndex + 1}`).style.display = 'block';
    } else {
        alert('Você concluiu o questionário!'); // Alerta após o envio
    }
}
 // script.js

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Coletando as respostas das perguntas
    const respostas = {
        pergunta1: document.getElementById('pergunta1').value,
        pergunta2: document.getElementById('pergunta2').value,
        pergunta3: document.getElementById('pergunta3').value,
        pergunta4: document.getElementById('pergunta4').value,
        pergunta5: document.getElementById('pergunta5').value
    };

    const response = await fetch('http://127.0.0.1:3000/analisar', {  // Atualizar a URL aqui
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(respostas),
    });
    




    const data = await response.json();
    if (data.insights) {
        // Supondo que 'data.insights' seja um array ou objeto contendo várias respostas
        let insightsHTML = '';

        // Se o insights for um array de respostas
        if (Array.isArray(data.insights)) {
            data.insights.forEach((insight, index) => {
                // Cada item de insight será formatado com título e conteúdo
                insightsHTML += `
                    <div class="insight">
                        <p><strong>Pergunta ${index + 1}:</strong></p>
                        <p><i>${insight}</i></p>
                    </div>
                `;
            });
        } else {
            // Caso data.insights seja um único texto
            insightsHTML = `<p><strong>Insight:</strong> ${data.insights}</p>`;
        }

        // Inserindo o conteúdo no HTML com a formatação
        document.getElementById('insights').innerHTML = insightsHTML;
    } else {
        console.error('Resposta vazia ou inválida');
    }




    
    /*const data = await response.json();
    if (data.insights) {
        document.getElementById('insights').innerHTML =`<div>${data.insights}</div>`;
    } else {
        console.error('Resposta vazia ou inválida');
    }*/
    
})
