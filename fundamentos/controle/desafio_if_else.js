const a = 2
const b = 2
const operacao = '/' // + - * / %
let resultado

if(operacao === '*'){
  resultado = a * b
} else if (operacao === '+'){
  resultado = a + b
} else if (operacao === '-'){
  resultado = a - b
} else if (operacao === '/'){
  resultado = a / b
} else if (operacao === '%'){
  resultado = a % b
} else{
  resultado = 'Operação invalida!'
}

console.log(resultado)