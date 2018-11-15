"use strict";
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Switch = (function () {
    function Switch() {
    }
    Switch.prototype.defaultCase = function (eObject) {
        return null;
    };
    Switch.prototype.isEObject = function (e) {
        return e.eClass !== undefined;
    };
    Switch.prototype.doSwitch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 2 && this.isEObject(args[0]) && this.isEObject(args[1])) {
            return this.doSwitch1(args[0], args[1]);
        }
        else if (args.length === 1 && this.isEObject(args[0])) {
            return this.doSwitch2(args[0]);
        }
        else if (args.length === 2 && typeof args[0] === "number" && this.isEObject(args[1])) {
            return this.doSwitch3(args[0], args[1]);
        }
    };
    Switch.prototype.doSwitch1 = function (eClass, eObject) {
        if (this.isSwitchFor(eClass.ePackage)) {
            return this.doSwitch3(eClass.getClassifierID(), eObject);
        }
        else {
            var eSuperTypes = eClass.eSuperTypes;
            return eSuperTypes.isEmpty() ? this.defaultCase(eObject) : this.doSwitch1(eSuperTypes.at(0), eObject);
        }
    };
    Switch.prototype.doSwitch2 = function (eObject) {
        return this.doSwitch1(eObject.eClass(), eObject);
    };
    Switch.prototype.doSwitch3 = function (classifierID, eObject) {
        return null;
    };
    return Switch;
}());
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map