class Data {
  public dia:number; //modificador de acesso, essa propriedade pode ser acessada por qualquer um (default)
  private mes:number; //a propriedade "mes" só pode ser acessada dentro da própria classe
  ano:number;

  constructor(dia:number, mes:number, ano:number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  } // inicializando as variáveis acima, atribuindo valores a elas
}

const data = new Data(31, 10, 1993);
console.log(data.dia)
//console.log(data.mes) -> "mes" não pode ser acessada aqui

const data2 = new Data(31, 10) //não foi passado o ano, ele pega o valor default definido (1970)

class tenis {
  constructor (public cor:string, public ano:number = 1970) {
    //ao gerar o JS a partir desse TS, é feita automaticamente a atribuição "this.cor = cor", etc...
  }
}

/* Uso de Modificadores de Acesso */
class Carro {
  private velocidadeAtual:number = 0;

  constructor (
    public marca:string,
    public modelo:string,
    private velocidadeMaxima:number = 220
  ) {}

  private alterarVelocidade(a:number) {
    const novaVelocidade = this.velocidadeAtual + a;
  
    //validações (if) de aceleração (não ultrapassar a velMax) e franagem (não ficar negativo)
    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = a > 0 ? this.velocidadeMaxima : 0
    }
  } //modificadores também podem ser utilizados nos métodos

  acelerar() {
    this.alterarVelocidade(5);
  } //método dentro da classe

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();

/* Herança - nova classe, mas que herda tudo que a classe referida tem */
class Camaro extends Carro {
  private turbo = false;

  constructor () {
    super('Chevrolet', 'Camaro', 500); //chamando a classe pai
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
