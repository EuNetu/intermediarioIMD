function executarExercicio (){
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);

    document.getElementById('resultado').innerHTML = somando(number1, number2);
  }

function somando(x,y){
    var pares = 0
    var impares = 0
    for(; x <= y; x++){
        if(x % 2 == 0){
            pares += x
        }else{
            impares += x
        }
    }
    return `Soma dos números pares: ${pares} <br> Soma dos números ímpares: ${impares}`
}