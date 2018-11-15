"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var EClassBase_1 = require("ecore/EClassBase");
var OrderedSet_1 = require("ecore/OrderedSet");
var EAttributeBase_1 = require("ecore/EAttributeBase");
var EReferenceBase_1 = require("ecore/EReferenceBase");
///<summary>This class was generated.</summary>
var EClassImpl = (function (_super) {
    __extends(EClassImpl, _super);
    function EClassImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EClassImpl.prototype, "eAttributes", {
        get: function () {
            //TODO use ocl select/collect
            var result = new OrderedSet_1.OrderedSet();
            this.eStructuralFeatures.forEach(function (f) {
                if (f instanceof EAttributeBase_1.EAttributeBase) {
                    result.add(f);
                }
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eReferences", {
        get: function () {
            //TODO use ocl select/collect
            var result = new OrderedSet_1.OrderedSet();
            this.eStructuralFeatures.forEach(function (f) {
                if (f instanceof EReferenceBase_1.EReferenceBase) {
                    result.add(f);
                }
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllSuperTypes", {
        get: function () {
            var result = new OrderedSet_1.OrderedSet();
            var queue = new Array();
            this.eSuperTypes.forEach(function (parent) {
                queue.push(parent);
                result.add(parent);
            });
            while (queue.length > 0) {
                var next = queue.shift();
                next.eSuperTypes.forEach(function (parent) {
                    queue.push(parent);
                    result.add(parent);
                });
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllAttributes", {
        get: function () {
            var result = new OrderedSet_1.OrderedSet();
            this.eAttributes.forEach(function (a) {
                result.add(a);
            });
            this.eAllSuperTypes.forEach(function (t) {
                t.eAttributes.forEach(function (a) {
                    result.add(a);
                });
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllReferences", {
        get: function () {
            var result = new OrderedSet_1.OrderedSet();
            this.eReferences.forEach(function (a) {
                result.add(a);
            });
            this.eAllSuperTypes.forEach(function (t) {
                t.eReferences.forEach(function (a) {
                    result.add(a);
                });
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllStructuralFeatures", {
        get: function () {
            var result = new OrderedSet_1.OrderedSet();
            var eclassifiers = this.eAllSuperTypes;
            eclassifiers.add(this);
            for (var _i = 0, eclassifiers_1 = eclassifiers; _i < eclassifiers_1.length; _i++) {
                var eclassifier = eclassifiers_1[_i];
                for (var _a = 0, _b = eclassifier.eStructuralFeatures; _a < _b.length; _a++) {
                    var feature = _b[_a];
                    result.add(feature);
                }
            }
            //return this.eAllSuperTypes.collect2(e => e.eStructuralFeatures);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return EClassImpl;
}(EClassBase_1.EClassBase));
exports.EClassImpl = EClassImpl;
//# sourceMappingURL=EClassImpl.js.map