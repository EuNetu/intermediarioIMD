"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MesaDeJantar_1 = require("./MesaDeJantar");
var Estudante_1 = require("./Estudante");
// Atividade 1
var mesaDeMetal = new MesaDeJantar_1.MesaDeJantar('metal', 8, 100);
var mesaDeMadeira = new MesaDeJantar_1.MesaDeJantar('madeira', 6);
var mesaDeVidro = new MesaDeJantar_1.MesaDeJantar('vidro');
mesaDeMetal.detalhar();
mesaDeMadeira.detalhar();
mesaDeVidro.detalhar();
// Atividade 2
var neto = new Estudante_1.Estudante(1, 350);
var camilla = new Estudante_1.Estudante(2, 3500);
neto.credito = 20;
camilla.credito = 365;
neto.detalhar();
camilla.detalhar();
