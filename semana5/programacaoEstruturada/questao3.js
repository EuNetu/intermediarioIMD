function executarExercicio (){
  
  var date = new Date(document.getElementById('date').value);
  var aux = Date.now() - date.getTime()
  var resultado = new Date(aux)
  document.getElementById('resultado').innerHTML = `Você tem ${resultado.getFullYear() - 1970} anos`;
}