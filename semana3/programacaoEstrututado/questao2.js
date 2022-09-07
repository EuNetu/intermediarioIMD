var x1;
var x2;
var a;
var b;
var c;

function bhaskara() {
    a = ler_entrada("a");
    b = ler_entrada("b");
    c = ler_entrada("c");
    x1 = ((-b + raizQuadrada(delta(a, b, c)))/(2*a));
    x2 = ((-b - raizQuadrada(delta(a, b, c)))/(2*a));
    escrever_saida("saida", `x1= ${x1} e x2= ${x2}` );
}

function ler_entrada(campo) {
    return Number(document.getElementById(campo).value);
}

function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor;
}

function quadrado(x) {
    return x * x;
}

function delta(a, b, c) {
    return quadrado(b) - 4 * a * c;
}

function raizQuadrada(x) {
    return Math.sqrt(x);
}
