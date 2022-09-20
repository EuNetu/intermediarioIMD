function executarExercicio (){
  
  var date = new Date().toString();
  document.getElementById('resultado').innerHTML = 
  `Data: ${date.slice(8,11)} de ${date.slice(4,8)} de ${date.slice(11,16)} <br>Hora: ${date.slice(16,18)}h${date.slice(19,21)} `;
}