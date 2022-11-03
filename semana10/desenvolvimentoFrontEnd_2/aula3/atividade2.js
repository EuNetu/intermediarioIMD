var arrayInicial = [true, false, false, true, true, false, false];
arrayInicial = unico(arrayInicial)
console.log(arrayInicial)

function unico(x) {
    var arraySemRepeticao = [];
    x.forEach((i) =>(!arraySemRepeticao.includes(i)) ? arraySemRepeticao.push(i) : null)
    return arraySemRepeticao
}