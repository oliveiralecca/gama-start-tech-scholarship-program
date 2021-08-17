/* Não exite no JS - é semelhante ao type, mas tem algumas coisas a mais (trabalhar junto com classes, por exemplo). A própria documentação do TS recomenda usar "interface" ao invés de "type" */

interface Usuario {
  nome:string;
  email:string;
  address?:string;
}

function getUser():Usuario {
  return {
    nome: 'Letícia',
    email: 'leticia@email.com'
  }
}

function setUser(usuario:Usuario) {
  //....
}
