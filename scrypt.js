const questions = [
    {
      question: 'Qual é a sintaxe correta para se referir a um arquivo JavaScript externo chamado "script.js"?',
      answer: [
        '<script src="script.js"></script>',
        '<script href="script.js"></script>',
        '<javascript src="script.js"></javascript>',
      ],
      right: 0
    },
    {
      question: 'Qual é a diferença entre "==" e "===" em JavaScript?',
      answer: [
        '"===" é usado para atribuição, enquanto "==" é usado para comparação.',
        '"==" compara apenas os valores, enquanto "===" compara os valores e os tipos de dados.',
        'Não há diferença entre eles, ambos fazem comparações estritas.',
      ],
      right: 1
    },
    {
      question: 'Qual é o operador usado para concatenar strings em JavaScript?',
      answer: [
        '+',
        '&',
        '|',
      ],
      right: 0
    },
    {
      question: 'Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?',
      answer: [
        '* Este é um comentário *',
        '// Este é um comentário',
        '<!-- Este é um comentário -->',
      ],
      right: 1
    },
    {
      question: 'Qual função em JavaScript é usada para imprimir algo no console?',
      answer: [
        'console.log()',
        'print()',
        'log()',
      ],
      right: 0
    },
    {
      question: 'Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?',
      answer: [
        'document.getElementByName()',
        'document.selectById()',
        'document.getElementById()',
      ],
      right: 2
    },
    {
      question: 'Qual função JavaScript é usada para mudar o conteúdo HTML de um elemento?',
      answer: [
        'changeHTML()',
        'innerHTML()',
        'document.innerHTML()',
      ],
      right: 1
    },
    {
      question: 'Qual é a maneira correta de declarar uma variável em JavaScript?',
      answer: [
        'variable carName;',
        'v carName;',
        'var carName;',
      ],
      right: 2
    },
    {
      question: 'Qual função JavaScript é usada para criar um alerta?',
      answer: [
        'alert()',
        'messageBox()',
        'confirm()',
      ],
      right: 0
    },
    {
      question: 'Qual é o valor de "x" após a execução deste código: var x = 10; x += 5;',
      answer: [
        '10',
        '15',
        '5',
      ],
      right: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const rights = new Set()
  const totalDePerguntas = questions.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = rights.size + ' de ' + totalDePerguntas
  
  for(let item of questions) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.question
    
    for (const resposta of item.answer) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + questions.indexOf(item))
      dt.querySelector('input').value = item.answer.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const isRight = event.target.value == item.right
  
        rights.delete(item)
        if(isRight){
          rights.add(item)
        }
  
        mostrarTotal.textContent = rights.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }