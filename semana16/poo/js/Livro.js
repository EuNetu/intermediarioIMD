"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(_titulo, _autor, _editora, _ano, _avaliacao) {
        this._titulo = _titulo;
        this._autor = _autor;
        this._editora = _editora;
        this._ano = _ano;
        this._avaliacao = _avaliacao;
    }
    Object.defineProperty(Livro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "editora", {
        get: function () {
            return this._editora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "avaliacao", {
        get: function () {
            return this._avaliacao;
        },
        enumerable: false,
        configurable: true
    });
    return Livro;
}());
exports.Livro = Livro;
