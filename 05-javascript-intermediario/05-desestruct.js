// objeto
const pessoa = {
  nome: 'Letícia',
  idade: 27,
  profissao: 'Developer Front-End'
}

/*
let nome = pessoa.nome
let idade = pessoa.idade
let profissao = pessoa.profissao
*/

// desestruct
let { nome, idade, profissao } = pessoa
console.log(nome, idade, profissao)
