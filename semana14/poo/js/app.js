"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jogador_1 = require("./Jogador");
var Volante_1 = require("./Volante");
//Atvidade 1
var jogador = new Jogador_1.Jogador();
var volante = new Volante_1.Volante();
jogador.mover();
volante.mover();
//Atividade 2
function adicionar_valor(inicial, adicional) {
    if (adicional <= 0) {
        throw new Error('Somente valores positivos devem ser adicionados ao valor inicial');
    }
    else {
        return inicial + adicional;
    }
}
try {
    console.log(adicionar_valor(10, 20));
    console.log(adicionar_valor(10, -20));
}
catch (e) {
    console.log(e);
}
