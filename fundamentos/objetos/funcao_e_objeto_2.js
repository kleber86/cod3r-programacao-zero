function criarData(dia, mes, ano) {
  return {
    dia,
    mes,
    ano,
    exibirData() {
      return `${this.dia}/${this.mes}/${this.ano}`
    }
  }
}

const d1 = criarData(10, 10, 2010)
const d2 = criarData(02, 02, 2002)

console.log(d1.exibirData())
console.log(d2.exibirData())