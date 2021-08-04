/* 
  BUSCA SEQUENCIAL = em qual posição está determinado valor num conjunto de dados, caso não ache o valor, retorna -1 por exemplo;

  BUSCA BINÁRIA = mais eficiente e os valores devem estar ordenados. O conjunto de dados é sempre reduzido pela metade a cada busca, por exemplo: em um conjunto de 64 elementos, realizamos 7 buscas (64, 32, 16, 8, 4, 2, 1)
*/

var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120]

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i // uma vez que ele retorna a posição, para o programa, caso contrário, segue o código e retorna -1
    }
  }
  return -1
}

console.log('Busca SEQUENCIAL: ' + busca(10))
console.log('Busca SEQUENCIAL: ' + busca(50))


function buscaBinaria(num) {
  let inicio, fim, meio
  inicio = 0
  fim = 9

  while (inicio <= fim) {
    meio = parseInt((inicio + fim) / 2)
    if (num == valores[meio]) {
      return meio // a posição do número que estou buscando
    } else if (num > valores[meio]) {
      inicio = meio + 1
    } else {
      fim = meio - 1
    }
  }
  return -1
}

console.log('Busca BINARIA: ' + buscaBinaria(10))
console.log('Busca BINARIA: ' + buscaBinaria(50))
