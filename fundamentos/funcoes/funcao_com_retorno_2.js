function executar(fn){
  if(typeof fn === 'function'){
    console.log(fn(9, 1))
  }
}

function somar(a, b){
  return a + b
}

function subtrair(a, b){
  return a - b
}

function multiplicar(a, b){
  return a * b
}

executar(somar)
executar(subtrair)
executar(multiplicar)