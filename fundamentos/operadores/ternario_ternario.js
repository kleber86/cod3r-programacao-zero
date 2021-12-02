const a = 2
const b = 2
const operacao = '/'

const resultado = operacao === '+' ? a + b :
                    operacao === '-' ? a - b :
                      operacao === '*' ? a * b : a / b

console.log(resultado)