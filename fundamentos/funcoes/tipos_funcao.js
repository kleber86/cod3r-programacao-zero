// #1 - Função com Parâmetros e com Retorno
function somar(a, b){
  return a + b
}

let resultado = somar(9, 1)
console.log(resultado)
console.log(somar(1, 2))

// #2 - Função com Parâmetros e sem Retorno
function exibirMultiplicacao(a, b){
  console.log(a * b)
}

exibirMultiplicacao(2, 2)

// #3 - Função sem Parâmetros e com Retorno

function retornaDataAtual(){
  return new Date()
}
console.log(retornaDataAtual())

// #4 - Função sem Parâmetros e sem Retorno

function exibirHoraAtual(){
  console.log(new Date().getHours())
}

exibirHoraAtual()