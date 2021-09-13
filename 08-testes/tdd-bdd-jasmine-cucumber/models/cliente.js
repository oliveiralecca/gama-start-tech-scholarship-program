module.exports = class Cliente {
  constructor(id=0, nome="", telefone="") {
    this.id = id
    this.nome = nome
    this.telefone = telefone
  }

  nomeUppercase() {
    return this.nome.toUpperCase()
  }
  
  static primeiro() {
    return new Cliente()
  }

  static todos() {
    return [
      new Cliente(1, "Letícia 1", "786946467"),
      new Cliente(2, "Letícia 2", "786988667"),
      new Cliente(3, "Letícia 3", "786983127"),
      new Cliente(4, "Letícia 4", "786983465"),
      new Cliente(5, "Letícia 5", "786983448"),
      new Cliente(6, "Letícia 6", "786983489"),
      new Cliente(7, "Letícia 7", "776983467"),
      new Cliente(8, "Letícia 8", "986983467"),
      new Cliente(9, "Letícia 9", "787983467"),
      new Cliente(10, "Letícia 10", "786983467"),
    ]
  }
}
