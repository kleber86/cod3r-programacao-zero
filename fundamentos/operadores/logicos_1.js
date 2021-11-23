let temDinheiro = true
let estaEnsolarado = false
let carroNaGaragem = true

let resultadoE = '#1 - Vai ao shopping? '
resultadoE += temDinheiro && estaEnsolarado

console.log(resultadoE)


let resultadoOu = '2# - Vai ao shopping? '
resultadoOu += estaEnsolarado || carroNaGaragem
console.log(resultadoOu)

console.log('Não verdadeiro ' + !true)
console.log('Não falso ' + !false)