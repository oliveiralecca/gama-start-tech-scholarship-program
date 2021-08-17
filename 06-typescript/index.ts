/* 
  Código em JS 
  - tem tipagem dinâmica, o que pode resultar em algo diferente do que eu queria, como no exemplo abaixo que o resultado é 105 (concatenacão de duas strings) e não 15 como eu gostaria

  function somar(a, b) {
    return a + b
  }

  const n1 = '10'
  const n2 = '5'

  console.log(somar(n1, n2))
*/

function somar(a:number, b:number) {
  return a + b
}

const n1 = 10
const n2 = 5

console.log(somar(n1, n2))
