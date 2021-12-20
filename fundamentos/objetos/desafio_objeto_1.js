const data = {
  dia: 1,
  mes: 3,
  ano: 2021,

  exibirData: function() {
    console.log(`${this.dia}/${this.mes}/${this.ano}`)
  }
}

data.exibirData()