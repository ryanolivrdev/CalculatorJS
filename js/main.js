function soma() {
  var numero1 = Number(document.getElementById('numero1').value)
  var numero2 = Number(document.getElementById('numero2').value)
  var resultado = numero1 + numero2

  if (resultado > 0) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else if (resultado < 0) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else {
    alert('Digite um número')
  }
}

function subtracao() {
  var numero1 = Number(document.getElementById('numero1').value)
  var numero2 = Number(document.getElementById('numero2').value)
  var resultado = numero1 - numero2

  if (resultado > 0) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else if (resultado < 0) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else {
    alert('Digite um número')
  }
}

function multiplicacao() {
  var numero1 = Number(document.getElementById('numero1').value)
  var numero2 = Number(document.getElementById('numero2').value)
  var resultado = numero1 * numero2

  if (resultado > 0) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else if (resultado < 0) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else {
    alert('Digite um número')
  }
}

function divisao() {
  var numero1 = Number(document.getElementById('numero1').value)
  var numero2 = Number(document.getElementById('numero2').value)
  var resultado = Math.round(numero1 / numero2)

  if (resultado > 00000001) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else if (resultado < 00000001) {
    document.getElementById('resultado1').innerText =
      'O Resultado é ' + resultado
  } else {
    alert('Digite um número')
  }
}

/*
function raiz() {
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
*/
