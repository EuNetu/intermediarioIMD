"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arqueiro_1 = require("./Arqueiro");
var Cachorro_1 = require("./Cachorro");
var Guerreiro_1 = require("./Guerreiro");
//Atividade 1
var bob = new Cachorro_1.Cachorro();
bob.exibirInfo();
//Atividade 2
function atacarPersonagem(fulano) {
    fulano.atacar();
}
var thor = new Guerreiro_1.Guerreiro();
var LaraCroft = new Arqueiro_1.Arqueiro();
atacarPersonagem(thor);
atacarPersonagem(LaraCroft);
