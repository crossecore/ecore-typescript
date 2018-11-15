"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var AbstractCollection_1 = require("ecore/AbstractCollection");
var Sequence = (function (_super) {
    __extends(Sequence, _super);
    function Sequence() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isUnique = function () {
            return false;
        };
        return _this;
    }
    return Sequence;
}(AbstractCollection_1.AbstractCollection));
exports.Sequence = Sequence;
//# sourceMappingURL=Sequence.js.map