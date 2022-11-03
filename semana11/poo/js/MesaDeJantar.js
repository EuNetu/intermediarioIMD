"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaDeJantar = void 0;
var MesaDeJantar = /** @class */ (function () {
    function MesaDeJantar(material, lugares, preco) {
        this._material = material;
        lugares == undefined ? this._lugares = 4 : this._lugares = lugares;
        preco == undefined ? this._preco = 0 : this._preco = preco;
    }
    MesaDeJantar.prototype.detalhar = function () {
        console.log("O material da mesa \u00E9 ".concat(this._material, ", tem ").concat(this._lugares, " lugares e custa ").concat(this._preco, " reais."));
    };
    return MesaDeJantar;
}());
exports.MesaDeJantar = MesaDeJantar;
