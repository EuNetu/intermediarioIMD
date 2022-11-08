"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Cidade_1 = require("./Cidade");
var Desktop_1 = require("./Desktop");
var Laptop_1 = require("./Laptop");
var Pessoa_1 = require("./Pessoa");
// Atividade 1
var natal = new Cidade_1.Cidade("Natal");
var joao = new Pessoa_1.Pessoa("João", natal);
var toto = new Animal_1.Animal("Totó", joao);
console.log(joao.nome);
console.log(joao.cidade.nome);
// Atividade 2
var laptop = new Laptop_1.Laptop();
var desktop = new Desktop_1.Desktop();
laptop.memoria = 8;
desktop.processador = "I7";
console.log(laptop.memoria);
console.log(laptop.bateria_watts);
console.log(desktop.processador);
console.log(desktop.cabine);
