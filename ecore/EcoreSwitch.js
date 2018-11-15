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
var Switch_1 = require("ecore/Switch");
var EcorePackageImpl_1 = require("ecore/EcorePackageImpl");
var EcoreSwitch = (function (_super) {
    __extends(EcoreSwitch, _super);
    function EcoreSwitch() {
        var _this = _super.call(this) || this;
        if (EcoreSwitch.modelPackage == null) {
            EcoreSwitch.modelPackage = EcorePackageImpl_1.EcorePackageImpl.eINSTANCE;
        }
        return _this;
    }
    EcoreSwitch.prototype.isSwitchFor = function (ePackage) {
        return ePackage === EcoreSwitch.modelPackage;
    };
    EcoreSwitch.prototype.doSwitch = function (classifierID, theEObject) {
        switch (classifierID) {
            case EcorePackageImpl_1.EcorePackageImpl.EATTRIBUTE: {
                var eattribute = theEObject;
                var result = this.caseEAttribute(eattribute);
                if (result == null)
                    result = this.caseEModelElement(eattribute);
                if (result == null)
                    result = this.caseENamedElement(eattribute);
                if (result == null)
                    result = this.caseETypedElement(eattribute);
                if (result == null)
                    result = this.caseEStructuralFeature(eattribute);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EANNOTATION: {
                var eannotation = theEObject;
                var result = this.caseEAnnotation(eannotation);
                if (result == null)
                    result = this.caseEModelElement(eannotation);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ECLASS: {
                var eclass = theEObject;
                var result = this.caseEClass(eclass);
                if (result == null)
                    result = this.caseEModelElement(eclass);
                if (result == null)
                    result = this.caseENamedElement(eclass);
                if (result == null)
                    result = this.caseEClassifier(eclass);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ECLASSIFIER: {
                var eclassifier = theEObject;
                var result = this.caseEClassifier(eclassifier);
                if (result == null)
                    result = this.caseEModelElement(eclassifier);
                if (result == null)
                    result = this.caseENamedElement(eclassifier);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EDATATYPE: {
                var edatatype = theEObject;
                var result = this.caseEDataType(edatatype);
                if (result == null)
                    result = this.caseEModelElement(edatatype);
                if (result == null)
                    result = this.caseENamedElement(edatatype);
                if (result == null)
                    result = this.caseEClassifier(edatatype);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EENUM: {
                var eenum = theEObject;
                var result = this.caseEEnum(eenum);
                if (result == null)
                    result = this.caseEModelElement(eenum);
                if (result == null)
                    result = this.caseENamedElement(eenum);
                if (result == null)
                    result = this.caseEClassifier(eenum);
                if (result == null)
                    result = this.caseEDataType(eenum);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EENUMLITERAL: {
                var eenumliteral = theEObject;
                var result = this.caseEEnumLiteral(eenumliteral);
                if (result == null)
                    result = this.caseEModelElement(eenumliteral);
                if (result == null)
                    result = this.caseENamedElement(eenumliteral);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EFACTORY: {
                var efactory = theEObject;
                var result = this.caseEFactory(efactory);
                if (result == null)
                    result = this.caseEModelElement(efactory);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EMODELELEMENT: {
                var emodelelement = theEObject;
                var result = this.caseEModelElement(emodelelement);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ENAMEDELEMENT: {
                var enamedelement = theEObject;
                var result = this.caseENamedElement(enamedelement);
                if (result == null)
                    result = this.caseEModelElement(enamedelement);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EOBJECT: {
                var eobject = theEObject;
                var result = this.caseEObject(eobject);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EOPERATION: {
                var eoperation = theEObject;
                var result = this.caseEOperation(eoperation);
                if (result == null)
                    result = this.caseEModelElement(eoperation);
                if (result == null)
                    result = this.caseENamedElement(eoperation);
                if (result == null)
                    result = this.caseETypedElement(eoperation);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EPACKAGE: {
                var epackage = theEObject;
                var result = this.caseEPackage(epackage);
                if (result == null)
                    result = this.caseEModelElement(epackage);
                if (result == null)
                    result = this.caseENamedElement(epackage);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EPARAMETER: {
                var eparameter = theEObject;
                var result = this.caseEParameter(eparameter);
                if (result == null)
                    result = this.caseEModelElement(eparameter);
                if (result == null)
                    result = this.caseENamedElement(eparameter);
                if (result == null)
                    result = this.caseETypedElement(eparameter);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EREFERENCE: {
                var ereference = theEObject;
                var result = this.caseEReference(ereference);
                if (result == null)
                    result = this.caseEModelElement(ereference);
                if (result == null)
                    result = this.caseENamedElement(ereference);
                if (result == null)
                    result = this.caseETypedElement(ereference);
                if (result == null)
                    result = this.caseEStructuralFeature(ereference);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ESTRUCTURALFEATURE: {
                var estructuralfeature = theEObject;
                var result = this.caseEStructuralFeature(estructuralfeature);
                if (result == null)
                    result = this.caseEModelElement(estructuralfeature);
                if (result == null)
                    result = this.caseENamedElement(estructuralfeature);
                if (result == null)
                    result = this.caseETypedElement(estructuralfeature);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ETYPEDELEMENT: {
                var etypedelement = theEObject;
                var result = this.caseETypedElement(etypedelement);
                if (result == null)
                    result = this.caseEModelElement(etypedelement);
                if (result == null)
                    result = this.caseENamedElement(etypedelement);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY: {
                var estringtostringmapentry = theEObject;
                var result = this.caseEStringToStringMapEntry(estringtostringmapentry);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.EGENERICTYPE: {
                var egenerictype = theEObject;
                var result = this.caseEGenericType(egenerictype);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            case EcorePackageImpl_1.EcorePackageImpl.ETYPEPARAMETER: {
                var etypeparameter = theEObject;
                var result = this.caseETypeParameter(etypeparameter);
                if (result == null)
                    result = this.caseEModelElement(etypeparameter);
                if (result == null)
                    result = this.caseENamedElement(etypeparameter);
                if (result == null)
                    result = this.defaultCase(theEObject);
                return result;
            }
            default: return this.defaultCase(theEObject);
        }
    };
    EcoreSwitch.prototype.caseEAttribute = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEAnnotation = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEClass = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEClassifier = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEDataType = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEEnum = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEEnumLiteral = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEFactory = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEModelElement = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseENamedElement = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEObject = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEOperation = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEPackage = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEParameter = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEReference = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEStructuralFeature = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseETypedElement = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEStringToStringMapEntry = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseEGenericType = function (object) {
        return null;
    };
    EcoreSwitch.prototype.caseETypeParameter = function (object) {
        return null;
    };
    return EcoreSwitch;
}(Switch_1.Switch));
exports.EcoreSwitch = EcoreSwitch;
//# sourceMappingURL=EcoreSwitch.js.map