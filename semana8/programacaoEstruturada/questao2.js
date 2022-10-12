var numbers = []

function incrementar(){
    var entrada = Number(prompt("Manda o número"))

    if(entrada === 0){
        imprimir()
        limpar()
    }else{
        numbers.push(entrada)
        incrementar()
    }
    
}

function limpar(){
    numbers = []
}

function imprimir() {

    var resposta = `numeros = [ ${numbers} ]`;
    document.getElementById("resultado").innerHTML = resposta;
}