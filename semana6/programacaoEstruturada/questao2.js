function executarExercicio (){
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);

    document.getElementById('resultado').innerHTML = somando(number1, number2);
  }

function somando(x,y){
    var i = 0
    for(; x <= y;x++){
        i += x
    }
    return i
}