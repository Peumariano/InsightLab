/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/formtest2.js":
/*!****************************!*\
  !*** ./pages/formtest2.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst OPENAI_API_KEY = process.env.OPENAI_API_KEY;\r\nconsole.log(OPENAI_API_KEY);\r\n\r\n\r\n\r\nconst openai = new OpenAI({\r\n    apiKey: \"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\",\r\n    dangerouslyAllowBrowser: true\r\n  });\r\n  \r\n\r\nconst perguntas = [\r\n    \"Quais disciplinas apresentam as maiores taxas de reprovação e quais são os padrões de dificuldade dos alunos nessas disciplinas?\",\r\n    \"Quais alunos se beneficiariam de intervenções pedagógicas personalizadas, como reforço em áreas específicas ou atividades de enriquecimento?\",\r\n    \"Quais são os padrões de ausência dos alunos e quais fatores podem estar contribuindo para a falta de frequência?\",\r\n    \"Quais alunos apresentam padrões de comportamento que podem indicar problemas de disciplina ou dificuldades sociais?\",\r\n    \"Como o ambiente escolar (clima, infraestrutura, relações interpessoais) influencia o comportamento e o engajamento dos alunos?\"\r\n];\r\n\r\nconst respostas = {};\r\nlet perguntaAtual = 0;\r\n\r\nfunction exibirPergunta() {\r\n    if (perguntaAtual < perguntas.length) {\r\n        document.getElementById(\"pergunta\").textContent = perguntas[perguntaAtual];\r\n    } else {\r\n        exibirMensagemFinal();\r\n    }\r\n}\r\n\r\nfunction armazenarResposta() {\r\n    const resposta = document.getElementById(\"resposta\").value.trim();\r\n    if (resposta === \"\") {\r\n        alert(\"Por favor, insira uma resposta.\");\r\n        return;\r\n    }\r\n    respostas[perguntas[perguntaAtual]] = resposta;\r\n    document.getElementById(\"resposta\").value = \"\";\r\n    perguntaAtual++;\r\n    exibirPergunta();\r\n}\r\n\r\nfunction gerarPromptChatGPT() {\r\n    let textoRespostas = \"\";\r\n    for (const pergunta in respostas) {\r\n        textoRespostas += `${pergunta}: ${respostas[pergunta]}\\n`;\r\n    }\r\n\r\n    const prompt = `Analise as seguintes respostas sobre o desempenho dos alunos e forneça insights concisos e práticos para melhorias:\\n\\n${textoRespostas}\\n\\nForneça respostas curtas e diretas.`;\r\n    return prompt;\r\n}\r\n\r\nasync function obterRespostaChatGPT() {\r\n    const prompt = gerarPromptChatGPT();\r\n\r\n    try {\r\n        const completion = await openai.chat.completions.create({\r\n            model: \"gpt-4o-mini\", // Modelo válido da OpenAI\r\n            messages: [{ role: \"user\", content: prompt }],\r\n            max_tokens: 200,\r\n        });\r\n\r\n        const respostaIA = completion.choices[0].message.content.trim();\r\n        document.getElementById(\"respostaIA\").textContent = respostaIA;\r\n        document.getElementById(\"respostaIA\").style.display = \"block\";\r\n    } catch (error) {\r\n        console.error(\"Erro ao obter resposta da API da OpenAI:\", error);\r\n        document.getElementById(\"respostaIA\").textContent = \"Erro ao obter resposta da IA.\";\r\n        document.getElementById(\"respostaIA\").style.display = \"block\";\r\n    }\r\n}\r\n\r\nfunction exibirMensagemFinal() {\r\n    document.getElementById(\"pergunta\").style.display = \"none\";\r\n    document.getElementById(\"resposta\").style.display = \"none\";\r\n    document.getElementById(\"enviar\").style.display = \"none\";\r\n    document.getElementById(\"titulo\").style.display = \"none\";\r\n    document.getElementById(\"mensagemFinal\").style.display = \"block\";\r\n    const btnGerarTexto = document.createElement(\"button\");\r\n    btnGerarTexto.textContent = \"Obter resposta da IA\";\r\n    btnGerarTexto.addEventListener(\"click\", obterRespostaChatGPT);\r\n    document.getElementById(\"mensagemFinal\").appendChild(btnGerarTexto);\r\n    const respostaIA = document.createElement(\"p\");\r\n    respostaIA.id = \"respostaIA\";\r\n    respostaIA.style.display = \"none\";\r\n    document.getElementById(\"mensagemFinal\").appendChild(respostaIA);\r\n}\r\n\r\ndocument.getElementById(\"enviar\").addEventListener(\"click\", armazenarResposta);\r\nexibirPergunta();\r\n\n\n//# sourceURL=webpack://y/./pages/formtest2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./pages/formtest2.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;