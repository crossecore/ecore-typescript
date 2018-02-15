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
define(["require", "exports", "ecore/ETypedElementImpl", "ecore/BasicEObjectImpl", "ecore/OrderedSet", "ecore/EcorePackageLiterals"], function (require, exports, ETypedElementImpl_1, BasicEObjectImpl_1, OrderedSet_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<summary>This class was generated.</summary>
    var EOperationBase = (function (_super) {
        __extends(EOperationBase, _super);
        function EOperationBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._eGenericExceptions = null;
            _this._eExceptions = null;
            _this._eParameters = null;
            _this._eTypeParameters = null;
            return _this;
            //public eGetFromEOperation = this.eGet;
        }
        Object.defineProperty(EOperationBase.prototype, "eGenericExceptions", {
            get: function () {
                if (this._eGenericExceptions === null) {
                    this._eGenericExceptions = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS);
                }
                return this._eGenericExceptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EOperationBase.prototype, "eExceptions", {
            get: function () {
                if (this._eExceptions === null) {
                    this._eExceptions = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EEXCEPTIONS, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EEXCEPTIONS);
                }
                return this._eExceptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EOperationBase.prototype, "eContainingClass", {
            get: function () {
                if (this.eContainerFeatureID() != EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ECONTAININGCLASS)
                    return null;
                return this.eInternalContainer();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EOperationBase.prototype, "eParameters", {
            get: function () {
                if (this._eParameters === null) {
                    this._eParameters = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EPARAMETERS, EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EOPERATION);
                }
                return this._eParameters;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EOperationBase.prototype, "eTypeParameters", {
            get: function () {
                if (this._eTypeParameters === null) {
                    this._eTypeParameters = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS);
                }
                return this._eTypeParameters;
            },
            enumerable: true,
            configurable: true
        });
        EOperationBase.prototype.isOverrideOf = function (someOperation) {
            /*TODO implement function*/
            return null;
        };
        ;
        EOperationBase.prototype.getEAnnotation = function (source) {
            /*TODO implement function*/
            return null;
        };
        ;
        EOperationBase.prototype.getOperationID = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EOperationBase.prototype.eStaticClass = function () {
            //return EcorePackageLiterals.EOPERATION;
            return null;
        };
        EOperationBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
                    if (this.eInternalContainer() != null) {
                        msgs = this.eBasicRemoveFromContainer(msgs);
                    }
                    return this.basicSetEContainingClass(otherEnd, msgs);
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EPARAMETERS:
                    return this.eParameters.basicAdd(otherEnd, msgs);
            }
            //return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
            return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseAddFromEOperation = this.eInverseAdd;
        EOperationBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
                    return this.basicSetEContainingClass(null, msgs);
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EPARAMETERS:
                    return this.eParameters.basicRemove(otherEnd, msgs);
            }
            //return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
            return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseRemoveFromEOperation = this.eInverseRemove;
        EOperationBase.prototype.basicSetEContainingClass = function (newobj, msgs) {
            msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ECONTAININGCLASS, msgs);
            return msgs;
        };
        EOperationBase.prototype.eGet = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ORDERED:
                    return this.ordered;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_UNIQUE:
                    return this.unique;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_LOWERBOUND:
                    return this.lowerBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_UPPERBOUND:
                    return this.upperBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_MANY:
                    return this.many;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_REQUIRED:
                    return this.required;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ETYPE:
                    return this.eType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EGENERICTYPE:
                    return this.eGenericType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
                    return this.eContainingClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS:
                    return this.eTypeParameters;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EPARAMETERS:
                    return this.eParameters;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EEXCEPTIONS:
                    return this.eExceptions;
                case EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS:
                    return this.eGenericExceptions;
            }
            //return this.eGetFromETypedElement(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        return EOperationBase;
    }(ETypedElementImpl_1.ETypedElementImpl));
    exports.EOperationBase = EOperationBase;
});
