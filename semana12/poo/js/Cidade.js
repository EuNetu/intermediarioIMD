"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cidade = void 0;
var Cidade = /** @class */ (function () {
    function Cidade(nome) {
        this._nome = nome;
    }
    Object.defineProperty(Cidade.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Cidade;
}());
exports.Cidade = Cidade;
