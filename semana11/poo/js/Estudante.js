"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
var Estudante = /** @class */ (function () {
    function Estudante(id, credito) {
        this._id = id;
        credito <= 0 ? this._credito = 1 : this._credito = credito;
    }
    Object.defineProperty(Estudante.prototype, "credito", {
        set: function (credito) {
            credito <= 0 ? this._credito = 1 : this._credito = credito;
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.detalhar = function () {
        console.log("O aluno de id ".concat(this._id, ", tem ").concat(this._credito, " de credito."));
    };
    return Estudante;
}());
exports.Estudante = Estudante;
