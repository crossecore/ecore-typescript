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
define(["require", "exports", "ecore/AbstractCollection"], function (require, exports, AbstractCollection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderedSet = (function (_super) {
        __extends(OrderedSet, _super);
        function OrderedSet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isUnique = function () {
                return true;
            };
            _this.at = function (index) {
                return _this[index];
            };
            _this.select = function (lambda) {
                var result = new OrderedSet();
                _this.filter(lambda).forEach(function (element) { result.add(element); });
                return result;
            };
            return _this;
        }
        return OrderedSet;
    }(AbstractCollection_1.AbstractCollection));
    exports.OrderedSet = OrderedSet;
});
