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
define(["require", "exports", "ecore/ENotificationImpl", "ecore/BasicEObjectImpl", "ecore/OrderedSet", "ecore/EcorePackageLiterals", "ecore/NotificationImpl"], function (require, exports, ENotificationImpl_1, BasicEObjectImpl_1, OrderedSet_1, EcorePackageLiterals_1, NotificationImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
     * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
     * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
     *
     * contributor: Simon Schwichtenberg
     */
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
                    this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER, oldvalue, value));
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
                        msgs = (this._eLowerBound).eInverseRemove(this, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
                    }
                    if (value != null) {
                        msgs = value.eInverseAdd(this, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
                    }
                    msgs = this.basicSetELowerBound(value, msgs);
                    if (msgs != null) {
                        msgs.dispatch();
                    }
                }
                else if (this.eNotificationRequired()) {
                    this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, value, value));
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
                    this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER, oldvalue, value));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EGenericTypeBase.prototype, "eTypeArguments", {
            get: function () {
                if (this._eTypeArguments === null) {
                    this._eTypeArguments = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS);
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
                        msgs = (this._eUpperBound).eInverseRemove(this, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
                    }
                    if (value != null) {
                        msgs = value.eInverseAdd(this, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
                    }
                    msgs = this.basicSetEUpperBound(value, msgs);
                    if (msgs != null) {
                        msgs.dispatch();
                    }
                }
                else if (this.eNotificationRequired()) {
                    this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, value, value));
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
                var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER, oldobj, newobj);
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
                var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, oldobj, newobj);
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
                var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER, oldobj, newobj);
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
                var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, oldobj, newobj);
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
                case EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND:
                    return this.eUpperBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS:
                    return this.eTypeArguments;
                case EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ERAWTYPE:
                    return this.eRawType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND:
                    return this.eLowerBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER:
                    return this.eTypeParameter;
                case EcorePackageLiterals_1.EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER:
                    return this.eClassifier;
            }
            //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        return EGenericTypeBase;
    }(BasicEObjectImpl_1.BasicEObjectImpl));
    exports.EGenericTypeBase = EGenericTypeBase;
});
