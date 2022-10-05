function executarExercicio() {

    var matriz = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt("Digite a coluna desejada"))
        }
    }

    console.table(matriz)
    
    var colunaSelecionada = Number(prompt("Digite a coluna desejada"))
    var soma = 0
    for(i = 0; i < 10;i++){
        soma += matriz[i][colunaSelecionada];
    }
    document.getElementById('resultado').innerHTML = soma;
}