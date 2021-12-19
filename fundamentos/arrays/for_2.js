const notas = [1, 9, 6, 10, 5, 2, 2]
let linha = ''

for(let nota of notas){
  linha += nota + ' '
}

let linhaIndice = ''
for(let indice in notas){
  linhaIndice += indice + ' '
}

console.log(linha)
console.log(linhaIndice)