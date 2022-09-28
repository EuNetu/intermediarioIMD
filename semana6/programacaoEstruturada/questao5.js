function executarExercicio (){
    var number1 = Number(document.getElementById('number1').value);

    document.getElementById('resultado').innerHTML = somando(number1);
  }

function somando(x){
    var result = ""
    for(i=1; i < x; i++){
        if(x % i == 0){
            result += i
            console.log(result)
            result += ", "
        }
    }
    result = result.slice(0, -2)
    return result
}