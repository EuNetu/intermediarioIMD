var idade = 21
var precoComidaFavorita = 18
var quantidadeAoDia = 1


calcularSuprimento(idade, precoComidaFavorita, quantidadeAoDia)


function calcularSuprimento(idade, preco, quantidadeAoDia){
    var result = 0
    for(;idade <= (85*365); idade++){
        result += (preco*quantidadeAoDia)
    }
    console.log(`Você precisará de R$${result} para ter um suprimento de lanche até 85 anos.`)
}