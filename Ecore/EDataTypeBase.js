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
define(["require", "exports", "ecore/EClassifierImpl", "ecore/EcorePackageLiterals"], function (require, exports, EClassifierImpl_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<summary>This class was generated.</summary>
    var EDataTypeBase = (function (_super) {
        __extends(EDataTypeBase, _super);
        function EDataTypeBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._serializable = false;
            return _this;
            //public eGetFromEDataType = this.eGet;
        }
        Object.defineProperty(EDataTypeBase.prototype, "serializable", {
            get: function () {
                return this._serializable;
            },
            set: function (value) {
                this._serializable = value;
            },
            enumerable: true,
            configurable: true
        });
        EDataTypeBase.prototype.isInstance = function (object) {
            /*TODO implement function*/
            return null;
        };
        ;
        EDataTypeBase.prototype.getEAnnotation = function (source) {
            /*TODO implement function*/
            return null;
        };
        ;
        EDataTypeBase.prototype.getClassifierID = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EDataTypeBase.prototype.eStaticClass = function () {
            //return EcorePackageLiterals.EDATATYPE;
            return null;
        };
        EDataTypeBase.prototype.eGet = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_INSTANCECLASSNAME:
                    return this.instanceClassName;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_INSTANCECLASS:
                    return this.instanceClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_DEFAULTVALUE:
                    return this.defaultValue;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_INSTANCETYPENAME:
                    return this.instanceTypeName;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_EPACKAGE:
                    return this.ePackage;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_ETYPEPARAMETERS:
                    return this.eTypeParameters;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_SERIALIZABLE:
                    return this.serializable;
            }
            //return this.eGetFromEClassifier(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        return EDataTypeBase;
    }(EClassifierImpl_1.EClassifierImpl));
    exports.EDataTypeBase = EDataTypeBase;
});
