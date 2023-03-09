// Capturar Evento de Submit do formulário

const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')
  
  const peso = inputPeso.value
  const altura = inputAltura.value

  const pesobrFormat = brFormat(peso)
  const alturabrFormat = brFormat(altura)

  if(!pesobrFormat){
    setResultado('Peso Inválido', false)
    return
  }

  if(!alturabrFormat){
    setResultado('Altura Inválida', false)
    return
  }

  const imc = getImc(pesobrFormat, alturabrFormat)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc}).`

  setResultado(msg, true)
})


function brFormat(valor){

  if (valor.includes(',')){
    var numero = valor.replace(',', '.')
    return Number(numero)
  }
  else {
    return Number(valor)
  }

}

function getNivelImc(imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 39.9) return nivel[5] 

  if (imc >= 34.9) return nivel[4]

  if (imc >= 29.9) return nivel[3]

  if (imc >= 24.9) return nivel[2]

  if (imc >= 18.5) return nivel[1]

  if (imc < 18.5) return nivel[0]

}

function getImc(peso, altura){
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

function criaP(){
  const p = document.createElement('p')
  return p
} 

function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''

  const p = criaP()

  if (isValid) {
    p.classList.add('p-result')
  } 
  else {
    p.classList.add('bad')
  }

  p.innerHTML = msg
  resultado.appendChild(p)

}
