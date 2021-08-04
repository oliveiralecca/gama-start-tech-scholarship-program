/* 
  PILHA = Último que entra é o primeiro que sai
  FILA = Primeiro que entra é o primeiro que sai
  LISTA = ordenação (alfabética, crescente, decrescente, etc)
*/

var elementos = []
var topo = -1 // a pilha inicia vazia
const max = 10 // máximo de valores que podem ser empilhados nesta pilha

function push(num) {
  if (topo < max) {
    topo += 1
    elementos[topo] = num
  } else {
    console.log('Pilha cheia!!')
  }
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo]
    topo -= 1
    return num
  } else {
    console.log('Pilha vazia!!')
  }
}

push(10)
push(20)
push(30)
console.log(elementos)

console.log('primeira retirada: ' + pop())
console.log('segunda retirada: ' + pop())
console.log('terceira retirada: ' + pop())
