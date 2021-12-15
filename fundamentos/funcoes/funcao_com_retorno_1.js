function funcaoComRetorno(){
  return 1
}
let valor = funcaoComRetorno() + 999

function textoOuNumero(retornaTexto){
  if(retornaTexto){
    return 'Sou um texto'
  }else{
    return 123
  }
}

console.log(valor)

let resultado = textoOuNumero(true)
console.log(resultado)

resultado = textoOuNumero(false)
console.log(resultado)