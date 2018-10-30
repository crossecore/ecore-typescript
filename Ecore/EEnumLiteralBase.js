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
import { ENamedElementImpl } from "ecore/ENamedElementImpl";
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
///<summary>This class was generated.</summary>
var EEnumLiteralBase = (function (_super) {
    __extends(EEnumLiteralBase, _super);
    function EEnumLiteralBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._literal = "";
        _this._value = 0;
        _this._instance = null;
        return _this;
        //public eGetFromEEnumLiteral = this.eGet;
    }
    Object.defineProperty(EEnumLiteralBase.prototype, "literal", {
        get: function () {
            return this._literal;
        },
        set: function (value) {
            this._literal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EEnumLiteralBase.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EEnumLiteralBase.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EEnumLiteralBase.prototype, "eEnum", {
        get: function () {
            if (this.eContainerFeatureID() != EcorePackageLiterals.EENUMLITERAL_EENUM)
                return null;
            return this.eInternalContainer();
        },
        enumerable: true,
        configurable: true
    });
    EEnumLiteralBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    EEnumLiteralBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.EENUMLITERAL;
        return null;
    };
    EEnumLiteralBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.EENUMLITERAL_EENUM:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEEnum(otherEnd, msgs);
        }
        //return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEEnumLiteral = this.eInverseAdd;
    EEnumLiteralBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.EENUMLITERAL_EENUM:
                return this.basicSetEEnum(null, msgs);
        }
        //return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEEnumLiteral = this.eInverseRemove;
    EEnumLiteralBase.prototype.basicSetEEnum = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EENUMLITERAL_EENUM, msgs);
        return msgs;
    };
    EEnumLiteralBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.EENUMLITERAL_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals.EENUMLITERAL_NAME:
                return this.name;
            case EcorePackageLiterals.EENUMLITERAL_VALUE:
                return this.value;
            case EcorePackageLiterals.EENUMLITERAL_INSTANCE:
                return this.instance;
            case EcorePackageLiterals.EENUMLITERAL_LITERAL:
                return this.literal;
            case EcorePackageLiterals.EENUMLITERAL_EENUM:
                return this.eEnum;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EEnumLiteralBase;
}(ENamedElementImpl));
export { EEnumLiteralBase };
