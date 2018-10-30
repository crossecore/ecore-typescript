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
import { ENotificationImpl } from "ecore/ENotificationImpl";
import { BasicEObjectImpl } from "ecore/BasicEObjectImpl";
import { OrderedSet } from "ecore/OrderedSet";
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
import { NotificationImpl } from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
var EGenericTypeBase = (function (_super) {
    __extends(EGenericTypeBase, _super);
    function EGenericTypeBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eTypeParameter = null;
        _this._eLowerBound = null;
        _this._eClassifier = null;
        _this._eTypeArguments = null;
        _this._eUpperBound = null;
        return _this;
        //public eGetFromEGenericType = this.eGet;
    }
    Object.defineProperty(EGenericTypeBase.prototype, "eTypeParameter", {
        get: function () {
            return this._eTypeParameter;
        },
        set: function (value) {
            var oldvalue = this._eTypeParameter;
            this._eTypeParameter = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER, oldvalue, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eLowerBound", {
        get: function () {
            return this._eLowerBound;
        },
        set: function (value) {
            if (value != this._eLowerBound) {
                var msgs = null;
                if (this._eLowerBound != null) {
                    msgs = (this._eLowerBound).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
                }
                msgs = this.basicSetELowerBound(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, value, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eRawType", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eClassifier", {
        get: function () {
            return this._eClassifier;
        },
        set: function (value) {
            var oldvalue = this._eClassifier;
            this._eClassifier = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER, oldvalue, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eTypeArguments", {
        get: function () {
            if (this._eTypeArguments === null) {
                this._eTypeArguments = new OrderedSet(this, EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS);
            }
            return this._eTypeArguments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eUpperBound", {
        get: function () {
            return this._eUpperBound;
        },
        set: function (value) {
            if (value != this._eUpperBound) {
                var msgs = null;
                if (this._eUpperBound != null) {
                    msgs = (this._eUpperBound).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
                }
                msgs = this.basicSetEUpperBound(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, value, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    EGenericTypeBase.prototype.isInstance = function (object) {
        /*TODO implement function*/
        return null;
    };
    ;
    EGenericTypeBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.EGENERICTYPE;
        return null;
    };
    EGenericTypeBase.prototype.basicSetETypeParameter = function (newobj, msgs) {
        var oldobj = this._eTypeParameter;
        this._eTypeParameter = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.basicSetELowerBound = function (newobj, msgs) {
        var oldobj = this._eLowerBound;
        this._eLowerBound = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.basicSetEClassifier = function (newobj, msgs) {
        var oldobj = this._eClassifier;
        this._eClassifier = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.basicSetEUpperBound = function (newobj, msgs) {
        var oldobj = this._eUpperBound;
        this._eUpperBound = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND:
                return this.eUpperBound;
            case EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS:
                return this.eTypeArguments;
            case EcorePackageLiterals.EGENERICTYPE_ERAWTYPE:
                return this.eRawType;
            case EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND:
                return this.eLowerBound;
            case EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER:
                return this.eTypeParameter;
            case EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER:
                return this.eClassifier;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EGenericTypeBase;
}(BasicEObjectImpl));
export { EGenericTypeBase };
