var idade = 400

console.log(calcularIdade(idade))

function calcularIdade(x){
    if(x/365 >= 1){
        var anos = Math.trunc(x/365)
        x = x%365
    }else{
        var anos = 0
    }
    if(x/30 >= 1){
        var meses = Math.trunc(x/30)
        x = x%30
    }else{
        var meses = 0
    }
    return `${anos} ano(s)\n${meses} mes(es)\n${x} dia(s)`
}