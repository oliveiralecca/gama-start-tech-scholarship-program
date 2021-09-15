const Cliente = require('../../models/cliente')

describe('Clientes', () => {
  beforeEach(() => {
    // ações que serão rodadas antes dos testes
  })

  // cada "it" é uma sessão de teste a ser rodado
  test('Valida propriedades de um cliente', () => {
    let cliente = Cliente.primeiro()
    expect(cliente.id).not.toBeUndefined()
    expect(cliente.nome).not.toBeUndefined()
    expect(cliente.telefone).not.toBeUndefined()
  })

  test('Retorna todos', () => {
    let clientes = Cliente.todos()
    expect(clientes.length).toEqual(10)
  }) // retorna uma lista de 10 itens

  test('Nome do cliente UPPERCASE', () => {
    let cliente = Cliente.primeiro()
    cliente.nome = "leticia"
    expect(cliente.nomeUppercase()).toEqual("LETICIA")
  })
})
