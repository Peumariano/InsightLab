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
        document.getElementById('insights').innerHTML = `<pre>${data.insights}</pre>`; // Usando <pre> para manter a formatação
    } else {
        console.error('Resposta vazia ou inválida');
    }
    
});
