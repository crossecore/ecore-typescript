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
import { ETypedElementBase } from "ecore/ETypedElementBase";
///<summary>This class was generated.</summary>
var ETypedElementImpl = (function (_super) {
    __extends(ETypedElementImpl, _super);
    function ETypedElementImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ETypedElementImpl.prototype, "many", {
        get: function () {
            return this.upperBound == -1 || this.upperBound > 1;
        },
        enumerable: true,
        configurable: true
    });
    return ETypedElementImpl;
}(ETypedElementBase));
export { ETypedElementImpl };
