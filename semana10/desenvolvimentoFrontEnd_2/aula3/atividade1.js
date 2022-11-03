var arrayOriginal = [true, false, false, true, true, false, false]
var arrayResultado = Excluir(arrayOriginal, [false])
console.log(arrayResultado)

function Excluir(x, itensParaExcluir) {
    for (i = 0; i < itensParaExcluir.length; i++) {
        if (x.includes(itensParaExcluir[i])) {
            let itemParaSerBuscado = itensParaExcluir[i];
            let index = x.indexOf(itemParaSerBuscado)
            while (index >= 0) {
                x.splice(index, 1)
                index = x.indexOf(itemParaSerBuscado)
            }
        }
    }
    return x
}