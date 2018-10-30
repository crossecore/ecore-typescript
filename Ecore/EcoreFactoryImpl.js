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
import { ETypeParameterImpl } from "ecore/ETypeParameterImpl";
import { EGenericTypeImpl } from "ecore/EGenericTypeImpl";
import { EAnnotationImpl } from "ecore/EAnnotationImpl";
import { ENamedElementImpl } from "ecore/ENamedElementImpl";
import { EModelElementImpl } from "ecore/EModelElementImpl";
import { EObjectImpl } from "ecore/EObjectImpl";
import { EReferenceImpl } from "ecore/EReferenceImpl";
import { EClassImpl } from "ecore/EClassImpl";
import { EAttributeImpl } from "ecore/EAttributeImpl";
import { EStructuralFeatureImpl } from "ecore/EStructuralFeatureImpl";
import { EEnumImpl } from "ecore/EEnumImpl";
import { EStringToStringMapEntryImpl } from "ecore/EStringToStringMapEntryImpl";
import { EDataTypeImpl } from "ecore/EDataTypeImpl";
import { EParameterImpl } from "ecore/EParameterImpl";
import { ETypedElementImpl } from "ecore/ETypedElementImpl";
import { EEnumLiteralImpl } from "ecore/EEnumLiteralImpl";
import { EPackageImpl } from "ecore/EPackageImpl";
import { EClassifierImpl } from "ecore/EClassifierImpl";
import { EOperationImpl } from "ecore/EOperationImpl";
import { EFactoryImpl } from "ecore/EFactoryImpl";
var EcoreFactoryImpl = (function (_super) {
    __extends(EcoreFactoryImpl, _super);
    function EcoreFactoryImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createEAttribute = function () {
            var theEAttribute = new EAttributeImpl();
            return theEAttribute;
        };
        _this.createEAnnotation = function () {
            var theEAnnotation = new EAnnotationImpl();
            return theEAnnotation;
        };
        _this.createEClass = function () {
            var theEClass = new EClassImpl();
            return theEClass;
        };
        _this.createEClassifier = function () {
            var theEClassifier = new EClassifierImpl();
            return theEClassifier;
        };
        _this.createEDataType = function () {
            var theEDataType = new EDataTypeImpl();
            return theEDataType;
        };
        _this.createEEnum = function () {
            var theEEnum = new EEnumImpl();
            return theEEnum;
        };
        _this.createEEnumLiteral = function () {
            var theEEnumLiteral = new EEnumLiteralImpl();
            return theEEnumLiteral;
        };
        _this.createEFactory = function () {
            var theEFactory = new EFactoryImpl();
            return theEFactory;
        };
        _this.createEModelElement = function () {
            var theEModelElement = new EModelElementImpl();
            return theEModelElement;
        };
        _this.createENamedElement = function () {
            var theENamedElement = new ENamedElementImpl();
            return theENamedElement;
        };
        _this.createEObject = function () {
            var theEObject = new EObjectImpl();
            return theEObject;
        };
        _this.createEOperation = function () {
            var theEOperation = new EOperationImpl();
            return theEOperation;
        };
        _this.createEPackage = function () {
            var theEPackage = new EPackageImpl();
            return theEPackage;
        };
        _this.createEParameter = function () {
            var theEParameter = new EParameterImpl();
            return theEParameter;
        };
        _this.createEReference = function () {
            var theEReference = new EReferenceImpl();
            return theEReference;
        };
        _this.createEStructuralFeature = function () {
            var theEStructuralFeature = new EStructuralFeatureImpl();
            return theEStructuralFeature;
        };
        _this.createETypedElement = function () {
            var theETypedElement = new ETypedElementImpl();
            return theETypedElement;
        };
        _this.createEStringToStringMapEntry = function () {
            var theEStringToStringMapEntry = new EStringToStringMapEntryImpl();
            return theEStringToStringMapEntry;
        };
        _this.createEGenericType = function () {
            var theEGenericType = new EGenericTypeImpl();
            return theEGenericType;
        };
        _this.createETypeParameter = function () {
            var theETypeParameter = new ETypeParameterImpl();
            return theETypeParameter;
        };
        return _this;
    }
    EcoreFactoryImpl.init = function () {
        return new EcoreFactoryImpl();
    };
    EcoreFactoryImpl.eINSTANCE = EcoreFactoryImpl.init();
    return EcoreFactoryImpl;
}(EFactoryImpl));
export { EcoreFactoryImpl };
