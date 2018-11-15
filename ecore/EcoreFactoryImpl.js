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
var ETypeParameterImpl_1 = require("ecore/ETypeParameterImpl");
var EGenericTypeImpl_1 = require("ecore/EGenericTypeImpl");
var EAnnotationImpl_1 = require("ecore/EAnnotationImpl");
var ENamedElementImpl_1 = require("ecore/ENamedElementImpl");
var EModelElementImpl_1 = require("ecore/EModelElementImpl");
var EObjectImpl_1 = require("ecore/EObjectImpl");
var EReferenceImpl_1 = require("ecore/EReferenceImpl");
var EClassImpl_1 = require("ecore/EClassImpl");
var EAttributeImpl_1 = require("ecore/EAttributeImpl");
var EStructuralFeatureImpl_1 = require("ecore/EStructuralFeatureImpl");
var EEnumImpl_1 = require("ecore/EEnumImpl");
var EStringToStringMapEntryImpl_1 = require("ecore/EStringToStringMapEntryImpl");
var EDataTypeImpl_1 = require("ecore/EDataTypeImpl");
var EParameterImpl_1 = require("ecore/EParameterImpl");
var ETypedElementImpl_1 = require("ecore/ETypedElementImpl");
var EEnumLiteralImpl_1 = require("ecore/EEnumLiteralImpl");
var EPackageImpl_1 = require("ecore/EPackageImpl");
var EClassifierImpl_1 = require("ecore/EClassifierImpl");
var EOperationImpl_1 = require("ecore/EOperationImpl");
var EFactoryImpl_1 = require("ecore/EFactoryImpl");
var EcoreFactoryImpl = (function (_super) {
    __extends(EcoreFactoryImpl, _super);
    function EcoreFactoryImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createEAttribute = function () {
            var theEAttribute = new EAttributeImpl_1.EAttributeImpl();
            return theEAttribute;
        };
        _this.createEAnnotation = function () {
            var theEAnnotation = new EAnnotationImpl_1.EAnnotationImpl();
            return theEAnnotation;
        };
        _this.createEClass = function () {
            var theEClass = new EClassImpl_1.EClassImpl();
            return theEClass;
        };
        _this.createEClassifier = function () {
            var theEClassifier = new EClassifierImpl_1.EClassifierImpl();
            return theEClassifier;
        };
        _this.createEDataType = function () {
            var theEDataType = new EDataTypeImpl_1.EDataTypeImpl();
            return theEDataType;
        };
        _this.createEEnum = function () {
            var theEEnum = new EEnumImpl_1.EEnumImpl();
            return theEEnum;
        };
        _this.createEEnumLiteral = function () {
            var theEEnumLiteral = new EEnumLiteralImpl_1.EEnumLiteralImpl();
            return theEEnumLiteral;
        };
        _this.createEFactory = function () {
            var theEFactory = new EFactoryImpl_1.EFactoryImpl();
            return theEFactory;
        };
        _this.createEModelElement = function () {
            var theEModelElement = new EModelElementImpl_1.EModelElementImpl();
            return theEModelElement;
        };
        _this.createENamedElement = function () {
            var theENamedElement = new ENamedElementImpl_1.ENamedElementImpl();
            return theENamedElement;
        };
        _this.createEObject = function () {
            var theEObject = new EObjectImpl_1.EObjectImpl();
            return theEObject;
        };
        _this.createEOperation = function () {
            var theEOperation = new EOperationImpl_1.EOperationImpl();
            return theEOperation;
        };
        _this.createEPackage = function () {
            var theEPackage = new EPackageImpl_1.EPackageImpl();
            return theEPackage;
        };
        _this.createEParameter = function () {
            var theEParameter = new EParameterImpl_1.EParameterImpl();
            return theEParameter;
        };
        _this.createEReference = function () {
            var theEReference = new EReferenceImpl_1.EReferenceImpl();
            return theEReference;
        };
        _this.createEStructuralFeature = function () {
            var theEStructuralFeature = new EStructuralFeatureImpl_1.EStructuralFeatureImpl();
            return theEStructuralFeature;
        };
        _this.createETypedElement = function () {
            var theETypedElement = new ETypedElementImpl_1.ETypedElementImpl();
            return theETypedElement;
        };
        _this.createEStringToStringMapEntry = function () {
            var theEStringToStringMapEntry = new EStringToStringMapEntryImpl_1.EStringToStringMapEntryImpl();
            return theEStringToStringMapEntry;
        };
        _this.createEGenericType = function () {
            var theEGenericType = new EGenericTypeImpl_1.EGenericTypeImpl();
            return theEGenericType;
        };
        _this.createETypeParameter = function () {
            var theETypeParameter = new ETypeParameterImpl_1.ETypeParameterImpl();
            return theETypeParameter;
        };
        return _this;
    }
    EcoreFactoryImpl.init = function () {
        return new EcoreFactoryImpl();
    };
    EcoreFactoryImpl.eINSTANCE = EcoreFactoryImpl.init();
    return EcoreFactoryImpl;
}(EFactoryImpl_1.EFactoryImpl));
exports.EcoreFactoryImpl = EcoreFactoryImpl;
//# sourceMappingURL=EcoreFactoryImpl.js.map