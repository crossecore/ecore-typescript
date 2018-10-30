import { EObjectValidator } from 'ecore/EObjectValidator';
var Diagnostician = (function () {
    function Diagnostician() {
    }
    Diagnostician.prototype.validateEObject = function (eObject, diagnostics, context) {
        //throw new NotImplementedException();
        return false;
    };
    Diagnostician.prototype.validateEClass = function (eClass, eObject, diagnostics, context) {
        var eValidator = null;
        var eType = eClass;
        //while ((eValidator = eValidatorRegistry.get(eType.eContainer())) == null)
        while (!this.eValidatorRegistry.contains(eType.eContainer())) {
            eValidator = this.eValidatorRegistry[eType.eContainer().nsURI];
            var eSuperTypes = eType.eSuperTypes;
            if (eSuperTypes.length == 0) {
                //TODO return a defaultCase
                eValidator = null; // eValidatorRegistry.get(null);
                break;
            }
            else {
                eType = eSuperTypes.at(0);
            }
        }
        //bool circular = context.get(EObjectValidator.ROOT_OBJECT) == eObject;
        //TODO containskey check
        var circular = context[EObjectValidator.ROOT_OBJECT] == eObject;
        var result = this.doValidate2(eValidator, eClass, eObject, diagnostics, context);
        if ((result || diagnostics != null) && !circular) {
            result = result && this.doValidateContents(eObject, diagnostics, context);
        }
        return result;
    };
    Diagnostician.prototype.validateEDataType = function (eDataType, value, diagnostics, context) {
        var eValidator = this.eValidatorRegistry[eDataType.eContainer().nsURI];
        if (eValidator == null) {
            //TODO default case
            eValidator = null; // eValidatorRegistry.get(null);
        }
        return this.doValidate1(eValidator, eDataType, value, diagnostics, context);
    };
    Diagnostician.prototype.doValidate1 = function (eValidator, eDataType, value, diagnostics, context) {
        return eValidator.validateEDataType(eDataType, value, diagnostics, context);
    };
    Diagnostician.prototype.doValidate2 = function (eValidator, eClass, eObject, diagnostics, context) {
        return eValidator.validateEClass(eClass, eObject, diagnostics, context);
    };
    Diagnostician.prototype.doValidateContents = function (eObject, diagnostics, context) {
        //TODO casting to OrderedSet allowed?
        var eContents = eObject.eContents();
        if (eContents.length > 0) {
            var result = true;
            for (var _i = 0, eContents_1 = eContents; _i < eContents_1.length; _i++) {
                var child = eContents_1[_i];
                result = result && this.validateEObject(child, diagnostics, context);
            }
            return result;
        }
        else {
            return true;
        }
    };
    Diagnostician.INSTANCE = new Diagnostician();
    return Diagnostician;
}());
export { Diagnostician };
