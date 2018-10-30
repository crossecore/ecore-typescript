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
import { ENotificationImpl } from "ecore/ENotificationImpl";
import { BasicEObjectImpl } from "ecore/BasicEObjectImpl";
import { OrderedSet } from "ecore/OrderedSet";
import { EModelElementImpl } from "ecore/EModelElementImpl";
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
import { NotificationImpl } from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
var EAnnotationBase = (function (_super) {
    __extends(EAnnotationBase, _super);
    function EAnnotationBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._source = "";
        _this._details = null;
        _this._contents = null;
        _this._references = null;
        return _this;
        //public eGetFromEAnnotation = this.eGet;
    }
    Object.defineProperty(EAnnotationBase.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "details", {
        get: function () {
            if (this._details === null) {
                this._details = new OrderedSet(this, EcorePackageLiterals.EANNOTATION_DETAILS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION_DETAILS);
            }
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "contents", {
        get: function () {
            if (this._contents === null) {
                this._contents = new OrderedSet(this, EcorePackageLiterals.EANNOTATION_CONTENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION_CONTENTS);
            }
            return this._contents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "references", {
        get: function () {
            if (this._references === null) {
                this._references = new OrderedSet(this, EcorePackageLiterals.EANNOTATION_REFERENCES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION_REFERENCES);
            }
            return this._references;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "eModelElement", {
        get: function () {
            if (this.eContainerFeatureID() != EcorePackageLiterals.EANNOTATION_EMODELELEMENT)
                return null;
            return this.eInternalContainer();
        },
        set: function (value) {
            if (value != this.eInternalContainer()) {
                var msgs = null;
                if (this.eInternalContainer() != null) {
                    msgs = this.eInternalContainer().eInverseRemove(this, EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, /*EAnnotation*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, /*EAnnotation*/ null, msgs);
                }
                msgs = this.basicSetEModelElement(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EANNOTATION_EMODELELEMENT, value, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    EAnnotationBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    EAnnotationBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.EANNOTATION;
        return null;
    };
    EAnnotationBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEModelElement(otherEnd, msgs);
        }
        //return this.eInverseAddFromEModelElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEAnnotation = this.eInverseAdd;
    EAnnotationBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
                return this.basicSetEModelElement(null, msgs);
        }
        //return this.eInverseRemoveFromEModelElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEAnnotation = this.eInverseRemove;
    EAnnotationBase.prototype.basicSetEModelElement = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EANNOTATION_EMODELELEMENT, msgs);
        return msgs;
    };
    EAnnotationBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.EANNOTATION_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals.EANNOTATION_SOURCE:
                return this.source;
            case EcorePackageLiterals.EANNOTATION_DETAILS:
                return this.details;
            case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
                return this.eModelElement;
            case EcorePackageLiterals.EANNOTATION_CONTENTS:
                return this.contents;
            case EcorePackageLiterals.EANNOTATION_REFERENCES:
                return this.references;
        }
        //return this.eGetFromEModelElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EAnnotationBase;
}(EModelElementImpl));
export { EAnnotationBase };
