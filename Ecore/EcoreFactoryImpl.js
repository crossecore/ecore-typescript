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
define(["require", "exports", "ecore/ETypeParameterImpl", "ecore/EGenericTypeImpl", "ecore/EAnnotationImpl", "ecore/ENamedElementImpl", "ecore/EModelElementImpl", "ecore/EObjectImpl", "ecore/EReferenceImpl", "ecore/EClassImpl", "ecore/EAttributeImpl", "ecore/EStructuralFeatureImpl", "ecore/EEnumImpl", "ecore/EStringToStringMapEntryImpl", "ecore/EDataTypeImpl", "ecore/EParameterImpl", "ecore/ETypedElementImpl", "ecore/EEnumLiteralImpl", "ecore/EPackageImpl", "ecore/EClassifierImpl", "ecore/EOperationImpl", "ecore/EFactoryImpl"], function (require, exports, ETypeParameterImpl_1, EGenericTypeImpl_1, EAnnotationImpl_1, ENamedElementImpl_1, EModelElementImpl_1, EObjectImpl_1, EReferenceImpl_1, EClassImpl_1, EAttributeImpl_1, EStructuralFeatureImpl_1, EEnumImpl_1, EStringToStringMapEntryImpl_1, EDataTypeImpl_1, EParameterImpl_1, ETypedElementImpl_1, EEnumLiteralImpl_1, EPackageImpl_1, EClassifierImpl_1, EOperationImpl_1, EFactoryImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
     * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
     * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
     *
     * contributor: Simon Schwichtenberg
     */
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
});
