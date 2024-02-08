const perguntas = [
    {
        pergunta: "Qual é a distância mínima de segurança que deve ser mantida ao disparar uma arma de airsoft em um jogador?",
        respostas: [
            "10 metros",
            "5 metros",
            "20 metros",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o FPS (pés por segundo) máximo permitido para armas de airsoft em jogos de campo aberto?",
        respostas: [
            "200 FPS",
            "400 FPS",
            "600 FPS",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são os tipos comuns de armas de airsoft?",
        respostas: [
            "Elétricas, a gás e de mola",
            "De chumbo, de plástico e de madeira",
            "Automáticas, semiautomáticas e manuais",
        ],
        correta: 0
    },
    {
        pergunta: "O que é necessário para participar de um jogo de airsoft em uma área oficial?",
        respostas: [
            "Permissão do governo local",
            "Idade mínima de 18 anos e equipamento de segurança adequado",
            "Nada, é um esporte aberto para todos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do código S.A.A.S. (Sistema de Acompanhamento de Ações Seguras) em eventos de airsoft?",
        respostas: [
            "Controlar o acesso ao campo de jogo",
            "Registrar o desempenho dos jogadores durante as partidas",
            "Promover a segurança e monitorar comportamentos inadequados",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa 'hit' em um jogo de airsoft?",
        respostas: [
            "Um jogador alcançou o objetivo principal",
            "Um jogador foi atingido por um disparo válido",
            "Um jogador está a uma distância perigosa de outra pessoa",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o equipamento de segurança mais importante para um jogador de airsoft?",
        respostas: [
            "Óculos de sol",
            "Máscara de proteção facial",
            "Protetor auricular",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são as principais regras de etiqueta em um campo de airsoft?",
        respostas: [
            "Não falar durante o jogo",
            "Manter a calma em caso de discussão",
            "Respeitar as decisões do árbitro e tratar os outros jogadores com cortesia",
        ],
        correta: 2
    },
    {
        pergunta: "Como se chama o processo de recarregar um carregador de airsoft com bbs?",
        respostas: [
            "Reabastecimento",
            "Reload",
            "Speedloader",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a velocidade de uma bb padrão de airsoft?",
        respostas: [
            "100 metros por segundo",
            "200 metros por segundo",
            "300 metros por segundo",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz') 
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
// test content vai substituir o span


//loop ou laço dee repeticão
for (const item of perguntas) {
    // clonando o template nas perguntas
    const quizItem = template.content.cloneNode(true)
    //modificando o h3
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for (let resposta of item.respostas) { //para cada resposta do item respostas
        const dt = quizItem.querySelector('dl dt').cloneNode(true) //declarando a variavel dr
        //mudando o texto do span 
        dt.querySelector('span').textContent = resposta 
        //setAtribute da uma atribuição e indexof pesquisA o indice do item
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        // indexOf procuta o indice especifico
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        // => arrow function - cria uma função
        dt.querySelector('input').onchange = (event) => {
            // event.target.value chama o evento
            const estaCorreta = event.target.value == item.correta
            
            // caso mude de opçao, muda a quantidade
            corretas.delete(item)
            // se caso acerta, adiciona item
            if (estaCorreta) {
                corretas.add(item)
            }
            // corretas.size soma a quantidade de acertos
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }

        quizItem.querySelector('dl').appendChild(dt)

    } 
    
    quizItem.querySelector('dl dt').remove() //removendo a linha escrito resposta A
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}