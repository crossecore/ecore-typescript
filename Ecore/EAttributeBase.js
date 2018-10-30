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
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
import { EStructuralFeatureImpl } from "ecore/EStructuralFeatureImpl";
///<summary>This class was generated.</summary>
var EAttributeBase = (function (_super) {
    __extends(EAttributeBase, _super);
    function EAttributeBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._iD = false;
        return _this;
        //public eGetFromEAttribute = this.eGet;
    }
    Object.defineProperty(EAttributeBase.prototype, "iD", {
        get: function () {
            return this._iD;
        },
        set: function (value) {
            this._iD = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EAttributeBase.prototype, "eAttributeType", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    EAttributeBase.prototype.getContainerClass = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EAttributeBase.prototype.getFeatureID = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EAttributeBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    EAttributeBase.prototype.eStaticClass = function () {
        //return EcorePackageImpl.eINSTANCE.getEAnnotation_();
        return null;
    };
    EAttributeBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.EATTRIBUTE_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals.EATTRIBUTE_NAME:
                return this.name;
            case EcorePackageLiterals.EATTRIBUTE_ORDERED:
                return this.ordered;
            case EcorePackageLiterals.EATTRIBUTE_UNIQUE:
                return this.unique;
            case EcorePackageLiterals.EATTRIBUTE_LOWERBOUND:
                return this.lowerBound;
            case EcorePackageLiterals.EATTRIBUTE_UPPERBOUND:
                return this.upperBound;
            case EcorePackageLiterals.EATTRIBUTE_MANY:
                return this.many;
            case EcorePackageLiterals.EATTRIBUTE_REQUIRED:
                return this.required;
            case EcorePackageLiterals.EATTRIBUTE_ETYPE:
                return this.eType;
            case EcorePackageLiterals.EATTRIBUTE_EGENERICTYPE:
                return this.eGenericType;
            case EcorePackageLiterals.EATTRIBUTE_CHANGEABLE:
                return this.changeable;
            case EcorePackageLiterals.EATTRIBUTE_VOLATILE:
                return this.volatile;
            case EcorePackageLiterals.EATTRIBUTE_TRANSIENT:
                return this.transient;
            case EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUELITERAL:
                return this.defaultValueLiteral;
            case EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUE:
                return this.defaultValue;
            case EcorePackageLiterals.EATTRIBUTE_UNSETTABLE:
                return this.unsettable;
            case EcorePackageLiterals.EATTRIBUTE_DERIVED:
                return this.derived;
            case EcorePackageLiterals.EATTRIBUTE_ECONTAININGCLASS:
                return this.eContainingClass;
            case EcorePackageLiterals.EATTRIBUTE_ID:
                return this.iD;
            case EcorePackageLiterals.EATTRIBUTE_EATTRIBUTETYPE:
                return this.eAttributeType;
        }
        //return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EAttributeBase;
}(EStructuralFeatureImpl));
export { EAttributeBase };
