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
define(["require", "exports", "ecore/ENamedElementImpl", "ecore/BasicEObjectImpl", "ecore/OrderedSet", "ecore/EcorePackageLiterals"], function (require, exports, ENamedElementImpl_1, BasicEObjectImpl_1, OrderedSet_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<summary>This class was generated.</summary>
    var ETypeParameterBase = (function (_super) {
        __extends(ETypeParameterBase, _super);
        function ETypeParameterBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._eBounds = null;
            return _this;
            //public eGetFromETypeParameter = this.eGet;
        }
        Object.defineProperty(ETypeParameterBase.prototype, "eBounds", {
            get: function () {
                if (this._eBounds === null) {
                    this._eBounds = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS);
                }
                return this._eBounds;
            },
            enumerable: true,
            configurable: true
        });
        ETypeParameterBase.prototype.getEAnnotation = function (source) {
            /*TODO implement function*/
            return null;
        };
        ;
        ETypeParameterBase.prototype.eStaticClass = function () {
            //return EcorePackageLiterals.ETYPEPARAMETER;
            return null;
        };
        ETypeParameterBase.prototype.eGet = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEPARAMETER_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEPARAMETER_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS:
                    return this.eBounds;
            }
            //return this.eGetFromENamedElement(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        return ETypeParameterBase;
    }(ENamedElementImpl_1.ENamedElementImpl));
    exports.ETypeParameterBase = ETypeParameterBase;
});
