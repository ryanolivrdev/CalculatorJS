//scss

//operador é uma string
function realizarOperacao(operador) {
  //pegar os numeros que o usuario digitou
  var numero1 = Number(document.getElementById('numero1').value)
  var numero2 = Number(document.getElementById('numero2').value)

  // se o usuario não digitou nada, alertar e retornar da função
  if (numero1 == ' ' || numero2 == ' ') {
    alert('Escreva um número!')
    return
  }

  //verificar qual operação o usuario quer executar
  switch (operador) {
    //soma
    case '+':
      var resultado = soma(numero1, numero2)

      document.getElementById(
        'resultado1'
      ).innerText = `O resultado é: ${resultado}`
      break

    //subtração
    case '-':
      var resultado = subtracao(numero1, numero2)

      document.getElementById(
        'resultado1'
      ).innerText = `O resultado é: ${resultado}`
      break

    //multiplicação
    case '*':
      var resultado = multiplicacao(numero1, numero2)

      document.getElementById(
        'resultado1'
      ).innerText = `O resultado é: ${resultado}`
      break

    //divisão
    case '%':
      var resultado = divisao(numero1, numero2)

      document.getElementById(
        'resultado1'
      ).innerText = `O resultado é: ${resultado}`
      break
  }
}

function soma(numero1, numero2) {
  return numero1 + numero2
}

function subtracao(numero1, numero2) {
  return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2
}

function divisao(numero1, numero2) {
  return numero1 / numero2
}

/*
function raiz(numero1, numero2) {

  var resultado = blablbal


  var numero1 = parseInt(document.getElementById('x').value)
  var numero2 = parseInt(document.getElementById('y').value)
  var resultado1 = Math.sqrt(numero1)
  var resultado2 = Math.sqrt(numero2)

  if (resultado1 > 1) {
    document.getElementById('resultado1').innerText =
      'A raiz quadrada de x: ' + resultado1
  } else if (resultado2 > 1) {
    document.getElementById('resultado2').innerText =
      'A raiz quadrada de y: ' + resultado2
  }

else if (resultado1 > 1) {
    document.getElementById('resultado1').innerText =
      'A raiz quadrada de x : ' + resultado1
    document.getElementById('resultado2').innerText =
      'A raiz quadrada de y: ' + resultado2
  } else {
    document.getElementById(`resultado1`).innerText = 'O numero não é valido'
  }
}


  return resultado;

*/
