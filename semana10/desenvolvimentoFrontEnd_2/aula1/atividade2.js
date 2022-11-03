var a = 10
var b = 3
var c = 5

try{
    var x1 = ((-b + raizQuadrada(delta(a, b, c)))/(2*a));
    var x2 = ((-b - raizQuadrada(delta(a, b, c)))/(2*a));
    console.log(`x1= ${x1}\nx2= ${x2}`);
}catch(e){
    console.log(`${e}`)
}

function quadrado(x) {
    return x * x;
}

function delta(a, b, c) {
    resultDelta = quadrado(b) - 4 * a * c

    if(resultDelta <= 0){
        throw new Error("Impossível calcular")
    }else{
        return resultDelta
    }
    
}

function raizQuadrada(x) {
    return Math.sqrt(x);
}