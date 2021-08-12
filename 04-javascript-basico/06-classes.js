/* comum em POO */
class Maths {
  soma(a, b) {
    return a + b
  }

  subtracao(a, b) {
    return a - b
  }

  multiplicacao(a, b) {
    return a * b
  }
}

var instanciaMaths = new Maths()
var resultado = instanciaMaths.multiplicacao(4, 7)

console.log(resultado)
