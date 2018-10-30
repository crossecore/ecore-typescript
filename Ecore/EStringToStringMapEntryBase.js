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
import { BasicEObjectImpl } from "ecore/BasicEObjectImpl";
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
///<summary>This class was generated.</summary>
var EStringToStringMapEntryBase = (function (_super) {
    __extends(EStringToStringMapEntryBase, _super);
    function EStringToStringMapEntryBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._key = "";
        _this._value = "";
        return _this;
        //public eGetFromEStringToStringMapEntry = this.eGet;
    }
    Object.defineProperty(EStringToStringMapEntryBase.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EStringToStringMapEntryBase.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    EStringToStringMapEntryBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY;
        return null;
    };
    EStringToStringMapEntryBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY:
                return this.key;
            case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE:
                return this.value;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EStringToStringMapEntryBase;
}(BasicEObjectImpl));
export { EStringToStringMapEntryBase };
