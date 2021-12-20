// Função Construtora
function Data(dia = 10, mes = 10, ano = 2010){
  this.dia = dia
  this.mes = mes
  this.ano = ano

  this.exibir = function(){
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

const d1 = new Data()
const d2 = new Data(1, 1, 2001)
console.log(typeof d1)
console.log(d1)
console.log(d2.exibir())