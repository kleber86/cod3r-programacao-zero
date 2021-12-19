const produto = {
  nome: 'iPad',
  preco: 1.999,
  desconto: .15,
  valorComDesconto: function() {
    return preco * (1 - desconto)
  }
}

console.log(produto.nome)
console.log(produto.valorComDesconto())