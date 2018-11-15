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
var NotificationImpl_1 = require("ecore/NotificationImpl");
var ENotificationImpl = (function (_super) {
    __extends(ENotificationImpl, _super);
    /*
    public constructor( notifier:InternalEObject, eventType:number , featureID:number, oldValue:any, newValue:any){
        this(notifier, eventType, featureID, oldValue, newValue, NotificationImpl.NO_INDEX)
    }
    */
    function ENotificationImpl(notifier, eventType, featureID, oldValue, newValue, position) {
        var _this = _super.call(this, eventType, oldValue, newValue, position, false) || this;
        _this.featureID = NotificationImpl_1.NotificationImpl.NO_FEATURE_ID;
        _this.getFeature = function () {
            if (_this.feature == null && _this.featureID != NotificationImpl_1.NotificationImpl.NO_FEATURE_ID) {
                var eClass = _this.notifier.eClass();
                _this.feature = eClass.getEStructuralFeature(_this.featureID);
            }
            return _this.feature;
        };
        _this.notifier = notifier;
        _this.featureID = featureID;
        return _this;
    }
    ENotificationImpl.prototype.getNotifier = function () {
        return this.notifier;
    };
    return ENotificationImpl;
}(NotificationImpl_1.NotificationImpl));
exports.ENotificationImpl = ENotificationImpl;
//# sourceMappingURL=ENotificationImpl.js.map