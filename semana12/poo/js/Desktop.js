"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desktop = void 0;
var Computador_1 = require("./Computador");
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cabine = "";
        return _this;
    }
    Object.defineProperty(Desktop.prototype, "cabine", {
        get: function () {
            return this._cabine;
        },
        set: function (cabine) {
            this._cabine = cabine;
        },
        enumerable: false,
        configurable: true
    });
    return Desktop;
}(Computador_1.Computador));
exports.Desktop = Desktop;
