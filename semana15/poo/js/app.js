"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
var Pet_1 = require("./Pet");
var Colecao_1 = require("./Colecao");
var Situacao_1 = require("./Situacao");
var TipoPrato_1 = require("./TipoPrato");
//Atividade 1
var sanduba = {
    situacao: Situacao_1.Situacao.EmPreparo,
    tipo_prato: TipoPrato_1.TipoPrato.Sanduiche
};
//Atividade 2
var meusLivrosPrediletos = new Colecao_1.Colecao();
var animais = new Colecao_1.Colecao();
var dom_quixote = new Livro_1.Livro("Dom Quixote");
var a_divina_comedia = new Livro_1.Livro("A Divina Comédia");
meusLivrosPrediletos.adicionar(dom_quixote);
meusLivrosPrediletos.adicionar(a_divina_comedia);
var toto = new Pet_1.Pet("Totó");
var fofo = new Pet_1.Pet("Fofo");
animais.adicionar(toto);
animais.adicionar(fofo);
meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();
