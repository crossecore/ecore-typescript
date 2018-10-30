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
import { EAttributeBase } from "ecore/EAttributeBase";
///<summary>This class was generated.</summary>
var EAttributeImpl = (function (_super) {
    __extends(EAttributeImpl, _super);
    function EAttributeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //implement your generated class here
    EAttributeImpl.prototype.getFeatureID = function () {
        return this.featureID;
    };
    ;
    return EAttributeImpl;
}(EAttributeBase));
export { EAttributeImpl };
