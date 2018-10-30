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
import { BasicNotifierImpl } from "ecore/BasicNotifierImpl";
import { OrderedSet } from './OrderedSet';
var BasicEObjectImpl = (function (_super) {
    __extends(BasicEObjectImpl, _super);
    function BasicEObjectImpl() {
        var _this = _super.call(this) || this;
        _this._eContainer = null;
        _this._eContainerFeatureID = -1;
        _this._eStaticClass = null;
        _this._uuid = BasicEObjectImpl.generateUUID();
        return _this;
    }
    BasicEObjectImpl.prototype.eBasicSetContainer = function (newContainer, newContainerFeatureID, notifications) {
        this.eBasicSetContainer_(newContainer, newContainerFeatureID);
        return notifications;
    };
    //TODO fix quickfix for overloading
    BasicEObjectImpl.prototype.eBasicSetContainer_ = function (newContainer, newContainerFeatureID) {
        this._eContainer = newContainer;
        this._eContainerFeatureID = newContainerFeatureID;
    };
    BasicEObjectImpl.prototype.eInternalContainer = function () {
        return this._eContainer;
    };
    BasicEObjectImpl.prototype.eContainerFeatureID = function () {
        return this._eContainerFeatureID;
    };
    BasicEObjectImpl.prototype.eBasicRemoveFromContainer = function (notifications) {
        return notifications;
    };
    BasicEObjectImpl.prototype.eGet = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 1) {
            return this.eGet_EStructuralFeature(args[0]);
        }
        else if (args.length === 2) {
            return this.eGet_EStructuralFeature_boolean(args[0], args[1]);
        }
        else if (args.length === 3) {
            if (typeof args[0] === "number" &&
                typeof args[1] === "boolean" &&
                typeof args[2] === "boolean") {
                return this.eGet_number_boolean_boolean(args[0], args[1], args[2]);
            }
            else {
                return this.eGet_EStructuralFeature_boolean_boolean(args[0], args[1], args[2]);
            }
        }
    };
    BasicEObjectImpl.prototype.eGet_EStructuralFeature_boolean_boolean = function (feature, resolve, coreType) {
        var featureID = this.eDerivedStructuralFeatureID_EStructuralFeature(feature);
        /*
         if (featureID >= 0)
         {
         */
        return this.eGet(featureID, resolve, coreType);
        /*
         }
         else
         {
         return eOpenGet(eFeature, resolve);
         }
         */
    };
    BasicEObjectImpl.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        var eFeature = this.eClass().getEStructuralFeature(featureID);
        return eFeature;
    };
    BasicEObjectImpl.prototype.eDerivedStructuralFeatureID_EStructuralFeature = function (eStructuralFeature) {
        var containerClass = null;
        /*
         Class <?> containerClass = eStructuralFeature.getContainerClass();
         if (containerClass == null)
         {
         return eClass().getFeatureID(eStructuralFeature);
         }
         else
         {
         assert eClass().getEAllStructuralFeatures().contains(eStructuralFeature) : "The feature '" + eStructuralFeature.getName() + "' is not a valid feature";
         */
        return this.eDerivedStructuralFeatureID_number_Function(eStructuralFeature.getFeatureID(), containerClass);
        /*}*/
    };
    BasicEObjectImpl.prototype.eDerivedStructuralFeatureID_number_Function = function (baseFeatureID, baseClass) {
        return baseFeatureID;
    };
    BasicEObjectImpl.prototype.eClass = function () {
        return this.eStaticClass();
    };
    // Subclasses MUST override this function
    BasicEObjectImpl.prototype.eStaticClass = function () {
        return this._eStaticClass;
    };
    BasicEObjectImpl.prototype.eInverseAdd = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 4) {
            return this.eInverseAdd4(args[0], args[1], args[2], args[3]);
        }
        else {
            return this.eInverseAdd3(args[0], args[1], args[2]);
        }
    };
    //public eInverseAddFromBasicEObjectImpl = this.eInverseAdd;
    BasicEObjectImpl.prototype.eInverseAdd4 = function (otherEnd, featureID, baseClass, msgs) {
        if (featureID >= 0) {
            //return eInverseAdd(otherEnd, eDerivedStructuralFeatureID(featureID, baseClass), msgs);
            return this.eInverseAdd3(otherEnd, featureID, msgs);
        }
        else {
            if (this.eInternalContainer() != null) {
                msgs = this.eBasicRemoveFromContainer(msgs);
            }
            return this.eBasicSetContainer(otherEnd, featureID, msgs);
        }
        //return this.eInverseAdd(otherEnd, featureID, msgs);
    };
    BasicEObjectImpl.prototype.eInverseRemove = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 4) {
            return this.eInverseRemove4(args[0], args[1], args[2], args[3]);
        }
        else {
            return this.eInverseRemove3(args[0], args[1], args[2]);
        }
    };
    //public eInverseRemoveFromBasicEObjectImpl = this.eInverseRemove;
    BasicEObjectImpl.prototype.eInverseAdd3 = function (otherEnd, featureID, msgs) {
        //return eDynamicInverseAdd(otherEnd, featureID, msgs);
        //call generated function
        return msgs;
    };
    //TODO fix quickfix and create a delegator mehtod for eInverseRemove
    BasicEObjectImpl.prototype.eInverseRemove4 = function (otherEnd, featureID, baseClass, msgs) {
        if (featureID >= 0) {
            //return eInverseRemove(otherEnd, eDerivedStructuralFeatureID(featureID, baseClass), msgs);
            return this.eInverseRemove(otherEnd, featureID, msgs);
        }
        else {
            return this.eBasicSetContainer(null, featureID, msgs);
        }
    };
    BasicEObjectImpl.prototype.eInverseRemove3 = function (otherEnd, featureID, msgs) {
        //return eDynamicInverseRemove(otherEnd, featureID, msgs);
        return msgs;
    };
    BasicEObjectImpl.prototype.eIsSet = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContainmentFeature = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eIsProxy = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContainingFeature = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContainer = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eInvoke = function (operation, args) {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eSet = function (feature, newValue) {
        var featureID = this.eDerivedStructuralFeatureID_EStructuralFeature(feature);
        /*
        if (featureID >= 0)
        {
        */
        this.eSet_number_any(featureID, newValue);
        /*}
        else
        {
            eOpenSet(eFeature, newValue);
        }
        */
    };
    ;
    BasicEObjectImpl.prototype.eSet_number_any = function (featureId, newValue) {
        //is overridden by subclasses
    };
    ;
    BasicEObjectImpl.prototype.eResource = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContents = function () {
        var result = new OrderedSet();
        for (var _i = 0, _a = this.eClass().eAllReferences; _i < _a.length; _i++) {
            var feature = _a[_i];
            if (feature.containment) {
                if (feature.many) {
                    var list = this.eGet(feature);
                    for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
                        var item = list_1[_b];
                        //TODO could be addAll
                        result.add(item);
                    }
                }
                else {
                    result.add(this.eGet(feature));
                }
            }
        }
        return result;
    };
    ;
    BasicEObjectImpl.prototype.eCrossReferences = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eAllContents = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eGet_EStructuralFeature = function (feature) {
        return this.eGet_EStructuralFeature_boolean(feature, true);
    };
    ;
    BasicEObjectImpl.prototype.eGet_EStructuralFeature_boolean = function (feature, resolve) {
        return this.eGet_EStructuralFeature_boolean_boolean(feature, true, true);
    };
    ;
    BasicEObjectImpl.prototype.eUnset = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eURIFragmentSegment = function (eFeature, eObject) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eObjectForURIFragmentSegment = function (uriFragmentSegment) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eSetClass = function (eClass) {
    };
    BasicEObjectImpl.prototype.eBaseStructuralFeatureID = function (derivedFeatureID, baseClass) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eDerivedOperationID = function (baseOperationID, baseClass) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eResolveProxy = function (proxy) {
        return undefined;
    };
    BasicEObjectImpl.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };
    BasicEObjectImpl.EOPPOSITE_FEATURE_BASE = -1;
    return BasicEObjectImpl;
}(BasicNotifierImpl));
export { BasicEObjectImpl };
