/* Boolean */
const online: boolean = true;

/* Number */
const ano: number = 2020;
const nota: number = 5.3;

/* String */
const nome: string = 'Letícia';

/* Array (duas formas de declarar) */
const frutas: string[] = ['banana', 'abacaxi', 'melão'];
const idades: Array<number> = [1, 2, 3, 4, 5];

/* Tuple */
let jogadores: [string, number, string];
jogadores = ['Du', 3, 'Edu'];

/* Enum (mapeamento de informações) */
enum aprovacao {
  Aprovado = '001',
  Recuperacao = '002',
  Reprovado = '003',
}
const boletim: aprovacao = aprovacao.Recuperacao;

/* Any (quando não sei exatamente o tipo, pode ser qualquer coisa) */
const retornoAPI: any[] = [123, 'Oi', true];
const retorno: any = {};

/* Void (utilizado em funções sem retorno apenas para explicitar isso, se eu não coloco o tipo, o TS identifica que é uma função void) */
function qualquerCoisa(msg: string): void {
  console.log(msg);
}

/* Null e Undefined */
const u: undefined = undefined;
const n: null = null;

/* Object */
function criar(objeto: object) {}
//criar('Ok') -> dá erro, pois a função espera um objeto como parâmetro
criar({
  chave: 'valor',
});

/* Never (um tipo que nunca ocorre) */
function loopInfinito(): never {
  while (true) {}
} //nunca vai sair daqui

function erro(msg: string): never {
  throw new Error(msg);
} //ocorre uma exceção no meu código e essa função nunca termina

function falha() {
  return erro('Falhou!');
} //como retorna uma função do tipo never, o TS infere que essa também é do tipo never

/* Union Types (pode ter um tipo ou outro) */
const media: string | number = 5;
function mostrarNota(nota: number | string | boolean) {
  console.log(`A nota é ${nota}`);
}
mostrarNota('10');
mostrarNota(10);
mostrarNota(true);

/* Alias (criar atalhos para os tipos) */
type Pessoas = string[];
const pessoas: Pessoas = ['Du', 'Dudu', 'Edu'];

type Aluno = {
  nome: string;
  sobrenome: string;
  idade: number;
};
const alunos: Aluno[] = [
  {
    nome: 'Letícia',
    sobrenome: 'Oliveira',
    idade: 27,
  },
];

function chamada(alunos:Aluno[]) {
  for (let aluno of alunos) {
    console.log(`Nome do aluno: ${aluno.nome}`);
  }
}

/* Valores nulos ou opcionais */
let altura: number | null = 1.8;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; //campo opcional (?)
};
const contato: Contato = {
  nome: 'Letícia',
  telefone1: '99999999',
};

/* Type Assertion */
const suaIdade: any = 41;
(suaIdade as number).toString(); //nesse momento do programa eu precisei definir o tipo da variável, eu "asseguro" que o tipo a partir de agora será number e não mais any
(<number>suaIdade).toString();

const input = document.getElementById('numero') as HTMLInputElement; //asseguro que o getElementById realmente se refere a um <input> e não a uma <div>, por exemplo, que não tem um value
const input2 = <HTMLInputElement>document.getElementById('numero2');
console.log(input.value);
console.log(input2.value);
