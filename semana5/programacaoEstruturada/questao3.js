function executarExercicio (){
  
  var date = new Date(document.getElementById('date').value);
  var dateAtual = new Date();
  var resultado = dateAtual.getFullYear() - date.getFullYear();
  document.getElementById('resultado').innerHTML = `Você tem ${resultado} anos`;
}