var nome = 'Cláudia'

/* CONDICIONAL */
if (nome === 'Letícia') {
  console.log('Seu nome é lindo, ' + nome)
} else if (nome === 'Cláudia') {
  console.log('Ok, seu nome até que é legal, ' + nome)
} else {
  console.log('Oh no! Seu nome poderia ser mais bonito, ' + nome)
}

/* SWITCH CASE */
switch (nome) {
  case 'Letícia':
    console.log('Seu nome é lindo, ' + nome)
    break
  case 'Cláudia':
    console.log('Ok, seu nome até que é legal, ' + nome)
    break
  default:
    console.log('Oh no! Seu nome poderia ser mais bonito, ' + nome)
    break
}
