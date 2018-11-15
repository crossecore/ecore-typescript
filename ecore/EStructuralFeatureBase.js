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
var ETypedElementImpl_1 = require("ecore/ETypedElementImpl");
var EcorePackageLiterals_1 = require("ecore/EcorePackageLiterals");
///<summary>This class was generated.</summary>
var EStructuralFeatureBase = (function (_super) {
    __extends(EStructuralFeatureBase, _super);
    function EStructuralFeatureBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._volatile = false;
        _this._defaultValueLiteral = "";
        _this._changeable = false;
        _this._unsettable = false;
        _this._transient = false;
        _this._derived = false;
        return _this;
        //public eGetFromEStructuralFeature = this.eGet;
    }
    Object.defineProperty(EStructuralFeatureBase.prototype, "defaultValue", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "volatile", {
        get: function () {
            return this._volatile;
        },
        set: function (value) {
            this._volatile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "defaultValueLiteral", {
        get: function () {
            return this._defaultValueLiteral;
        },
        set: function (value) {
            this._defaultValueLiteral = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "changeable", {
        get: function () {
            return this._changeable;
        },
        set: function (value) {
            this._changeable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "unsettable", {
        get: function () {
            return this._unsettable;
        },
        set: function (value) {
            this._unsettable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "transient", {
        get: function () {
            return this._transient;
        },
        set: function (value) {
            this._transient = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "derived", {
        get: function () {
            return this._derived;
        },
        set: function (value) {
            this._derived = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "eContainingClass", {
        get: function () {
            if (this.eContainerFeatureID() != EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS)
                return null;
            return this.eInternalContainer();
        },
        enumerable: true,
        configurable: true
    });
    EStructuralFeatureBase.prototype.getContainerClass = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EStructuralFeatureBase.prototype.getFeatureID = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EStructuralFeatureBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    EStructuralFeatureBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.ESTRUCTURALFEATURE;
        return null;
    };
    EStructuralFeatureBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEContainingClass(otherEnd, msgs);
        }
        //return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEStructuralFeature = this.eInverseAdd;
    EStructuralFeatureBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS:
                return this.basicSetEContainingClass(null, msgs);
        }
        //return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEStructuralFeature = this.eInverseRemove;
    EStructuralFeatureBase.prototype.basicSetEContainingClass = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS, msgs);
        return msgs;
    };
    EStructuralFeatureBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_NAME:
                return this.name;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ORDERED:
                return this.ordered;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_UNIQUE:
                return this.unique;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_LOWERBOUND:
                return this.lowerBound;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_UPPERBOUND:
                return this.upperBound;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_MANY:
                return this.many;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_REQUIRED:
                return this.required;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ETYPE:
                return this.eType;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_EGENERICTYPE:
                return this.eGenericType;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_CHANGEABLE:
                return this.changeable;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_VOLATILE:
                return this.volatile;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_TRANSIENT:
                return this.transient;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL:
                return this.defaultValueLiteral;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUE:
                return this.defaultValue;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_UNSETTABLE:
                return this.unsettable;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_DERIVED:
                return this.derived;
            case EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS:
                return this.eContainingClass;
        }
        //return this.eGetFromETypedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EStructuralFeatureBase;
}(ETypedElementImpl_1.ETypedElementImpl));
exports.EStructuralFeatureBase = EStructuralFeatureBase;
//# sourceMappingURL=EStructuralFeatureBase.js.map