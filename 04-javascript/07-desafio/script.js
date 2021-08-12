console.log('JS carregou!')

function validaCPF(cpf) {
  if (cpf.length != 11){
    return false
  } else {
    var numeros = cpf.substring(0, 9)
    var digitos = cpf.substring(9)

    var soma = 0
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i
    }

    // validação do primeiro dígito
    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11) // ternário
    if (resultado != digitos.charAt(0)) {
      return false
    }

    soma = 0
    numeros = cpf.substring(0, 10)
    for (var i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i
    }

    // validação do segundo dígito
    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)
    if (resultado != digitos.charAt(1)) {
      return false
    }

    return true
  }
}

function validacao() {
  var cpf = document.getElementById('cpf-digitado').value 
  var resultadoValidacao = validaCPF(cpf) 

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block'
    document.getElementById('error').style.display = 'none'
  } else {
    document.getElementById('error').style.display = 'block'
    document.getElementById('success').style.display = 'none'
  }
}
