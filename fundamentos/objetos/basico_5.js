const cliente = {
  codigo: 12345,
  nome: 'Ana',
  vip: true,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123,
    complemento: 'Ap 001',
    pontosRef: [
      {nome: 'Hospital X', proximo: true},
      {nome: 'Hospital y', proximo: false}
    ]
  },
  nomesFilhos: ['Bia', 'Gui']
}

console.log(cliente['endereco']['logradouro'])
console.log(cliente.endereco.numero)
console.log(cliente.endereco.pontosRef[0])