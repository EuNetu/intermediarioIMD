"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, pessoa) {
        this._nome = nome;
        this._pessoa = pessoa;
    }
    Object.defineProperty(Animal.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "pessoa", {
        get: function () {
            return this._pessoa;
        },
        set: function (pessoa) {
            this._pessoa = pessoa;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
