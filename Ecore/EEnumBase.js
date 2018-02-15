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
define(["require", "exports", "ecore/EDataTypeImpl", "ecore/OrderedSet", "ecore/EcorePackageLiterals"], function (require, exports, EDataTypeImpl_1, OrderedSet_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<summary>This class was generated.</summary>
    var EEnumBase = (function (_super) {
        __extends(EEnumBase, _super);
        function EEnumBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._eLiterals = null;
            return _this;
            //public eGetFromEEnum = this.eGet;
        }
        Object.defineProperty(EEnumBase.prototype, "eLiterals", {
            get: function () {
                if (this._eLiterals === null) {
                    this._eLiterals = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EENUM_ELITERALS, EcorePackageLiterals_1.EcorePackageLiterals.EENUMLITERAL_EENUM);
                }
                return this._eLiterals;
            },
            enumerable: true,
            configurable: true
        });
        EEnumBase.prototype.isInstance = function (object) {
            /*TODO implement function*/
            return null;
        };
        ;
        EEnumBase.prototype.getEEnumLiteral = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length === 1) {
                return this.getEEnumLiteral_string(args[0]);
            }
            if (args.length === 1) {
                return this.getEEnumLiteral_number(args[0]);
            }
        };
        ;
        EEnumBase.prototype.getEEnumLiteral_string = function (name) {
            /*TODO implement function*/
            return null;
        };
        ;
        EEnumBase.prototype.getEEnumLiteral_number = function (value) {
            /*TODO implement function*/
            return null;
        };
        ;
        EEnumBase.prototype.getEEnumLiteralByLiteral = function (literal) {
            /*TODO implement function*/
            return null;
        };
        ;
        EEnumBase.prototype.getEAnnotation = function (source) {
            /*TODO implement function*/
            return null;
        };
        ;
        EEnumBase.prototype.getClassifierID = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EEnumBase.prototype.eStaticClass = function () {
            //return EcorePackageLiterals.EENUM;
            return null;
        };
        EEnumBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_ELITERALS:
                    return this.eLiterals.basicAdd(otherEnd, msgs);
            }
            //return this.eInverseAddFromEDataType(otherEnd, featureID, msgs);
            return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseAddFromEEnum = this.eInverseAdd;
        EEnumBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_ELITERALS:
                    return this.eLiterals.basicRemove(otherEnd, msgs);
            }
            //return this.eInverseRemoveFromEDataType(otherEnd, featureID, msgs);
            return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseRemoveFromEEnum = this.eInverseRemove;
        EEnumBase.prototype.eGet = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_INSTANCECLASSNAME:
                    return this.instanceClassName;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_INSTANCECLASS:
                    return this.instanceClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_DEFAULTVALUE:
                    return this.defaultValue;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_INSTANCETYPENAME:
                    return this.instanceTypeName;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_EPACKAGE:
                    return this.ePackage;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_ETYPEPARAMETERS:
                    return this.eTypeParameters;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_SERIALIZABLE:
                    return this.serializable;
                case EcorePackageLiterals_1.EcorePackageLiterals.EENUM_ELITERALS:
                    return this.eLiterals;
            }
            //return this.eGetFromEDataType(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        return EEnumBase;
    }(EDataTypeImpl_1.EDataTypeImpl));
    exports.EEnumBase = EEnumBase;
});
