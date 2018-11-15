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
var ENamedElementImpl_1 = require("ecore/ENamedElementImpl");
var BasicEObjectImpl_1 = require("ecore/BasicEObjectImpl");
var OrderedSet_1 = require("ecore/OrderedSet");
var EcorePackageLiterals_1 = require("ecore/EcorePackageLiterals");
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
//# sourceMappingURL=ETypeParameterBase.js.map