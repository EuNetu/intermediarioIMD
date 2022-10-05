function executarExercicio() {
    const numbers = []
    var texto = ""

    for (i = 0; i < 10; i++) {
        numbers[i] = Number(prompt("Informe um número: "));
    }

    var ordenado = numbers.sort((a,b) => a - b);

    for (i = 0; i < 10; i++) {
        texto += ordenado[i] + "<br>"
    }

    document.getElementById('resultado').innerHTML = texto;
}