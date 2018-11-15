"use strict";
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
var ENamedElementImpl_1 = require("ecore/ENamedElementImpl");
var ENotificationImpl_1 = require("ecore/ENotificationImpl");
var BasicEObjectImpl_1 = require("ecore/BasicEObjectImpl");
var EcorePackageLiterals_1 = require("ecore/EcorePackageLiterals");
var NotificationImpl_1 = require("ecore/NotificationImpl");
///<summary>This class was generated.</summary>
var ETypedElementBase = (function (_super) {
    __extends(ETypedElementBase, _super);
    function ETypedElementBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._upperBound = 0;
        _this._unique = false;
        _this._ordered = false;
        _this._lowerBound = 0;
        _this._eGenericType = null;
        _this._eType = null;
        return _this;
        //public eGetFromETypedElement = this.eGet;
    }
    Object.defineProperty(ETypedElementBase.prototype, "upperBound", {
        get: function () {
            return this._upperBound;
        },
        set: function (value) {
            this._upperBound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "unique", {
        get: function () {
            return this._unique;
        },
        set: function (value) {
            this._unique = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "many", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "ordered", {
        get: function () {
            return this._ordered;
        },
        set: function (value) {
            this._ordered = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "lowerBound", {
        get: function () {
            return this._lowerBound;
        },
        set: function (value) {
            this._lowerBound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "required", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "eGenericType", {
        get: function () {
            return this._eGenericType;
        },
        set: function (value) {
            if (value != this._eGenericType) {
                var msgs = null;
                if (this._eGenericType != null) {
                    msgs = (this._eGenericType).eInverseRemove(this, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, /*null*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, /*null*/ null, msgs);
                }
                msgs = this.basicSetEGenericType(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, value, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "eType", {
        get: function () {
            return this._eType;
        },
        set: function (value) {
            var oldvalue = this._eType;
            this._eType = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_ETYPE, oldvalue, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    ETypedElementBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    ETypedElementBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.ETYPEDELEMENT;
        return null;
    };
    ETypedElementBase.prototype.basicSetEGenericType = function (newobj, msgs) {
        var oldobj = this._eGenericType;
        this._eGenericType = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    ETypedElementBase.prototype.basicSetEType = function (newobj, msgs) {
        var oldobj = this._eType;
        this._eType = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_ETYPE, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    ETypedElementBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_NAME:
                return this.name;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_ORDERED:
                return this.ordered;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_UNIQUE:
                return this.unique;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_LOWERBOUND:
                return this.lowerBound;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_UPPERBOUND:
                return this.upperBound;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_MANY:
                return this.many;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_REQUIRED:
                return this.required;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_ETYPE:
                return this.eType;
            case EcorePackageLiterals_1.EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE:
                return this.eGenericType;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return ETypedElementBase;
}(ENamedElementImpl_1.ENamedElementImpl));
exports.ETypedElementBase = ETypedElementBase;
//# sourceMappingURL=ETypedElementBase.js.map