"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colecao = void 0;
var Colecao = /** @class */ (function () {
    function Colecao() {
        this.lista = [];
    }
    Colecao.prototype.adicionar = function (arg) {
        this.lista.push(arg);
    };
    Colecao.prototype.mostrarTodos = function () {
        this.lista.forEach(function (e) { return console.log(e); });
    };
    return Colecao;
}());
exports.Colecao = Colecao;
