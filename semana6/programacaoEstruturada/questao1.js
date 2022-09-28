function executarExercicio (){
    var number1 = Number(document.getElementById('number1').value);

    document.getElementById('resultado').innerHTML = testeNumber(number1);
  }

function testeNumber(a){
    if(a == 0){
        return "O valor é zero"
    }else if(a % 2 == 0){
        return "O valor é par"
    }else{
        return "O valor é impar"
    }
}