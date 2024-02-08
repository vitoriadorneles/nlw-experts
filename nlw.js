const perguntas = [ //array ou vetores
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
        respostas: [
            "32",
            "5",
            "A expressão é inválida",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "console.log()",
            "display()",
        ],
        correta: 1
    },
    {
        pergunta: "Como você acessa o primeiro elemento de um array em JavaScript?",
        respostas: [
            "array[0]",
            "array.first()",
            "array.getFirst()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof(10))?",
        respostas: [
            "number",
            "string",
            "integer",
        ],
        correta: 0
    },
    {
        pergunta: "Como você define uma função em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "def myFunction() {}",
            "fn myFunction() {}",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'map()' faz em JavaScript?",
        respostas: [
            "Itera sobre os elementos de um array e retorna um novo array com base em uma função de callback",
            "Ordena os elementos de um array",
            "Remove elementos duplicados de um array",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "==",
            "=",
            ":=",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma closure em JavaScript?",
        respostas: [
            "Um tipo de função",
            "Um tipo de loop",
            "Uma função que mantém uma referência ao seu ambiente léxico",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "deleteLast()",
        ],
        correta: 0
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