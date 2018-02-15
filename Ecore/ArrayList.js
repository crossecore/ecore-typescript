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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArrayList = (function (_super) {
        __extends(ArrayList, _super);
        function ArrayList() {
            /*
            private array:Array<T> = new Array<T>();
        
            get length():number{
                return this.array.length;
            }
        
            public push = (element:T):void=>{
                this.array.push(element);
            }
        
            public filter = (lambda):T[]=>{
                //TODO set type of lambda
                return this.array.filter(lambda);
            }
        
            public every = (lambda):boolean=>{
                //TODO set type of lambda
                return this.array.every(lambda);
            }
        
            public some = (lambda):boolean=>{
                //TODO set type of lambda
                return this.array.some(lambda);
            }
            */
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.containsX = function (element) {
                return _this.indexOf(element) > -1;
            };
            _this.sizeX = function () {
                return _this.length;
            };
            _this.addX = function (element) {
                _this.push(element);
                return true;
            };
            _this.removeX = function (element) {
                var index = _this.indexOf(element);
                if (index > -1) {
                    _this.splice(index, 1);
                    return true;
                }
                return false;
            };
            _this.isEmptyX = function () {
                return _this.length === 0;
            };
            return _this;
        }
        return ArrayList;
    }(Array));
    exports.ArrayList = ArrayList;
});
