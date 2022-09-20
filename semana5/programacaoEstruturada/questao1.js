function executarExercicio (){
  
  var date = new Date();
  document.getElementById('resultado').innerHTML = `São ${date.getHours()} horas ${date.getMinutes()} minutos e ${date.getSeconds()} segundos`;
}