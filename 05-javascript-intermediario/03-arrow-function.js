// função normal
function soma(x, y) {
  return x + y
}

console.log(soma(1, 1))

// variável armazenando função
const multiplicacao = function(x, y) {
  return x * y
}

console.log(multiplicacao(5, 3))

// arrow function
const dividir = (x, y) => {
  return x / y
}

const divisao = (x, y) => x / y

// função anônima que retorna objeto, esse objeto deve ser encapsulado entre ()
const objeto = () => ({
  nome: 'Letícia',
  sobrenome: 'Oliveira'
})


