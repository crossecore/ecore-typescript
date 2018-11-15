"use strict";
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
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
var EStructuralFeatureBase_1 = require("ecore/EStructuralFeatureBase");
///<summary>This class was generated.</summary>
var EStructuralFeatureImpl = (function (_super) {
    __extends(EStructuralFeatureImpl, _super);
    function EStructuralFeatureImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.featureID = -1;
        _this.setContainerClass = function (f) {
            _this.containerClass_ = f;
        };
        return _this;
    }
    EStructuralFeatureImpl.prototype.setFeatureID = function (id) {
        this.featureID = id;
    };
    EStructuralFeatureImpl.prototype.getFeatureID = function () {
        return this.featureID;
    };
    ;
    EStructuralFeatureImpl.prototype.getContainerClass = function () {
        return this.containerClass_;
    };
    ;
    return EStructuralFeatureImpl;
}(EStructuralFeatureBase_1.EStructuralFeatureBase));
exports.EStructuralFeatureImpl = EStructuralFeatureImpl;
//# sourceMappingURL=EStructuralFeatureImpl.js.map