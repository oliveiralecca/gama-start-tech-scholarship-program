let lista = [1, 2, 5]
let listaIncluir = [3, 4]

for (let i = 0; i < listaIncluir.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]) // posição, remover nada "0", incluir "listaIncluir[i]"
      j++
    }
  }
}

console.log(lista)

// spread operator
const listResult = [1, 2, ...listaIncluir, 5]
console.log(listResult)

let arr = ['a', 'b', 'c']
// let arr2 = arr // não é uma cópia, é uma referência, então todas as alterações em "arr2" refletem em "arr"
let arr2 = [...arr]

arr2.push('d')

console.log(`Arr = ${arr}`)
console.log(`Arr2 = ${arr2}`)
