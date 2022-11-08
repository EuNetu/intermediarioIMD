"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _cidade) {
        this._nome = _nome;
        this._cidade = _cidade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "cidade", {
        get: function () {
            return this._cidade;
        },
        set: function (cidade) {
            this._cidade = cidade;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
