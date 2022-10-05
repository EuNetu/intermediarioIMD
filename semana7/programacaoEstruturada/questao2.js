function executarExercicio() {
    const numbers = []
    var arrayFinal = []
    var texto = ""
    var indice = 0
    var contador = 0
    var contadorFinal = 0
    var numeroMaisRepete = 0

    do {
        var recebido = Number(prompt("Informe um número:"));
        if (recebido != 0){
            numbers.push(recebido)
            arrayFinal.push(recebido)
        }
        indice++
    } while (recebido != 0)

    var ordenado = numbers.sort((a, b) => a - b);

    for (i = 0; i < ordenado.length-1; i++) {
        if (ordenado[i] == ordenado[i+1]) {
            contador++
        }
        if (contador >= contadorFinal) {
            numeroMaisRepete = ordenado[i]
            contadorFinal = contador
            if (ordenado[i] != ordenado[i+1]) {
                contador = 0
            }
        }
    }

    texto += "numero que mais se repete é: " + numeroMaisRepete + "<br>"

    for (i = 0; i < arrayFinal.length; i++) {
        if(arrayFinal[i] == numeroMaisRepete){
            texto += "índeces " + i + "<br>"
        }
    }
    console.table(arrayFinal)
    document.getElementById('resultado').innerHTML = texto;
}