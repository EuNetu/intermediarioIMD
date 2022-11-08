const botaoPotencia = document.querySelector("#potencia-button");
const botaoMetade = document.querySelector('#metade-button');
const botaoArea = document.querySelector('#area-button');

function aoCubo() {
  const inputPotencia = document.querySelector('#potencia-input');
  document.getElementById("solucao").innerHTML = `${Math.pow(inputPotencia.value, 3)}`;
}

function metadeValor() {
  const inputMetade = document.querySelector('#metade-input');
  document.getElementById("solucao").innerHTML = `${inputMetade.value / 2}`;
}

function area() {
  const inputArea = document.querySelector('#area-input');
  document.getElementById("solucao").innerHTML = `${(Math.PI * Math.pow(inputArea.value, 2)).toFixed(2)}`;
}

botaoPotencia.addEventListener("click", aoCubo);
botaoMetade.addEventListener("click", metadeValor);
botaoArea.addEventListener("click", area);