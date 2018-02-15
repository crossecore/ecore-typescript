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
define(["require", "exports", "ecore/EClassBase", "ecore/OrderedSet", "ecore/EAttributeBase", "ecore/EReferenceBase"], function (require, exports, EClassBase_1, OrderedSet_1, EAttributeBase_1, EReferenceBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        return EClassImpl;
    }(EClassBase_1.EClassBase));
    exports.EClassImpl = EClassImpl;
});
