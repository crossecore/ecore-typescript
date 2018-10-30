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
import { ENamedElementImpl } from "ecore/ENamedElementImpl";
import { ENotificationImpl } from "ecore/ENotificationImpl";
import { OrderedSet } from "ecore/OrderedSet";
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
import { NotificationImpl } from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
var EPackageBase = (function (_super) {
    __extends(EPackageBase, _super);
    function EPackageBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nsPrefix = "";
        _this._nsURI = "";
        _this._eSubpackages = null;
        _this._eClassifiers = null;
        _this._eFactoryInstance = null;
        return _this;
        //public eGetFromEPackage = this.eGet;
    }
    Object.defineProperty(EPackageBase.prototype, "nsPrefix", {
        get: function () {
            return this._nsPrefix;
        },
        set: function (value) {
            this._nsPrefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "nsURI", {
        get: function () {
            return this._nsURI;
        },
        set: function (value) {
            this._nsURI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eSubpackages", {
        get: function () {
            if (this._eSubpackages === null) {
                this._eSubpackages = new OrderedSet(this, EcorePackageLiterals.EPACKAGE_ESUBPACKAGES, EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE);
            }
            return this._eSubpackages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eSuperPackage", {
        get: function () {
            if (this.eContainerFeatureID() != EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE)
                return null;
            return this.eInternalContainer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eClassifiers", {
        get: function () {
            if (this._eClassifiers === null) {
                this._eClassifiers = new OrderedSet(this, EcorePackageLiterals.EPACKAGE_ECLASSIFIERS, EcorePackageLiterals.ECLASSIFIER_EPACKAGE);
            }
            return this._eClassifiers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eFactoryInstance", {
        get: function () {
            return this._eFactoryInstance;
        },
        set: function (value) {
            if (value != this._eFactoryInstance) {
                var msgs = null;
                if (this._eFactoryInstance != null) {
                    msgs = (this._eFactoryInstance).eInverseRemove(this, EcorePackageLiterals.EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, EcorePackageLiterals.EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
                }
                msgs = this.basicSetEFactoryInstance(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, value, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    EPackageBase.prototype.getEClassifier = function (name) {
        /*TODO implement function*/
        return null;
    };
    ;
    EPackageBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    EPackageBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.EPACKAGE;
        return null;
    };
    EPackageBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
                return this.eSubpackages.basicAdd(otherEnd, msgs);
            case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetESuperPackage(otherEnd, msgs);
            case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
                return this.eClassifiers.basicAdd(otherEnd, msgs);
            case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
                if (this._eFactoryInstance != null) {
                    msgs = this._eFactoryInstance.eInverseRemove(this, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
                }
                return this.basicSetEFactoryInstance(otherEnd, msgs);
        }
        //return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEPackage = this.eInverseAdd;
    EPackageBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
                return this.eSubpackages.basicRemove(otherEnd, msgs);
            case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
                return this.basicSetESuperPackage(null, msgs);
            case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
                return this.eClassifiers.basicRemove(otherEnd, msgs);
            case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
                return this.basicSetEFactoryInstance(null, msgs);
        }
        //return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEPackage = this.eInverseRemove;
    EPackageBase.prototype.basicSetESuperPackage = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE, msgs);
        return msgs;
    };
    EPackageBase.prototype.basicSetEFactoryInstance = function (newobj, msgs) {
        var oldobj = this._eFactoryInstance;
        this._eFactoryInstance = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EPackageBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.EPACKAGE_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals.EPACKAGE_NAME:
                return this.name;
            case EcorePackageLiterals.EPACKAGE_NSURI:
                return this.nsURI;
            case EcorePackageLiterals.EPACKAGE_NSPREFIX:
                return this.nsPrefix;
            case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
                return this.eFactoryInstance;
            case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
                return this.eClassifiers;
            case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
                return this.eSubpackages;
            case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
                return this.eSuperPackage;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EPackageBase;
}(ENamedElementImpl));
export { EPackageBase };
