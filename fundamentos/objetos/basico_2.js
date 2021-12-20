const produto = {
  nome: 'iPad',
  preco: 1.999,
  desconto: .15,
  valorComDesconto: function() {
    return this.preco * (1 - this.desconto)
  }
}

console.log(produto.nome)
console.log(produto.valorComDesconto())