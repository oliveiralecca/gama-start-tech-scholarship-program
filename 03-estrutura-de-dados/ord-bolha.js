/* Algoritmo de ordenação do tipo BOLHA */

var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function orndenaBolha() {
  let inicio = 0;
  let fim = 10;
  let tmp;

  for (vezes = 0; vezes < fim; vezes++) {
    for (pos = inicio; pos < fim - 1 - vezes; pos++) {
      if (valores[pos] > valores[pos + 1]) {
        tmp = valores[pos];
        valores[pos] = valores[pos + 1];
        valores[pos + 1] = tmp;
      }
    }
  }
}

orndenaBolha();
console.log('Vetor ordenado: ' + valores);
