var numbers = []
function montarArray(){
    var entrada = Number(document.getElementById("entrada").value)

    incrementar(entrada)
}

function incrementar(contagem){
    console.log(contagem)
    if(contagem === 0){
        imprimir()
        limpar()
    }else{
        var numeroInserido = Number(prompt("Manda o número: "))
        numbers.push(numeroInserido)
        incrementar(contagem-1)
    }
    
}

function limpar(){
    numbers = []
}

function imprimir() {
    var resposta = `numeros = [ ${numbers} ]`;
    document.getElementById("resultado").innerHTML = resposta;
}