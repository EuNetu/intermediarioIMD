function executarExercicio() {
    try {
        var primeiroValorRecebido = recebeValor('n1')
        var segundoValorRecebido = recebeValor('n2')
        var terceiroValorRecebido = recebeValor('n3')

        var resultadoMedia = media(primeiroValorRecebido, segundoValorRecebido, terceiroValorRecebido).toFixed(2);
        var resultado = statusDoAluno(resultadoMedia)

        document.getElementById('resultado').innerHTML = resultado;
    } catch (e) {
        alert(`Deu o erro: ${e}`)
    }

}

function media(x1, x2, x3) {
    var mediaRetornada = ((x1 + x2 + x3) / 3)
    if (isNaN(mediaRetornada)) {
        throw new Error("Media invalida")
    }
    return ((x1 + x2 + x3) / 3)
}

function recebeValor(x) {
    recebido = Number(document.getElementById(x).value)
    if (recebido == "") {
        throw new Error("Algum campo não foi inserido dados")
    }
    return recebido;
}

function statusDoAluno(media) {
    if (media < 0 || media > 10) {
        throw new Error("Media fora do intervalo")
    } else if (media >= 7) {
        return "Aprovado com média " + media;
    } else if (media >= 3) {
        return "Aluno em recuperação, pois a média foi " + media;
    } else {
        return "Aluno reprovado, pois ficou com média " + media;
    }
}