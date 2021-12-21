class Data{
  
  constructor(dia = 0, mes = 0, ano = 0){
    this.dia = dia,
    this.mes = mes,
    this.ano = ano
  }

  exibir(){
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

const d1 = new Data(01, 01, 1000)
const d2 = new Data(30, 12, 2022)

console.log(typeof Data)
console.log(typeof d1)
console.log(d1)
console.log(d1.exibir())
console.log(d2)
console.log(d2.exibir())