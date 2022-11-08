"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
var Computador = /** @class */ (function () {
    function Computador() {
    }
    Object.defineProperty(Computador.prototype, "processador", {
        get: function () {
            return this._processador;
        },
        set: function (processador) {
            this._processador = processador;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "memoria", {
        get: function () {
            return this._memoria;
        },
        set: function (memoria) {
            this._memoria = memoria;
        },
        enumerable: false,
        configurable: true
    });
    return Computador;
}());
exports.Computador = Computador;
