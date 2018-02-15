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
define(["require", "exports", "ecore/EPackageImpl", "ecore/EcoreFactoryImpl"], function (require, exports, EPackageImpl_1, EcoreFactoryImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EcorePackageImpl = (function (_super) {
        __extends(EcorePackageImpl, _super);
        function EcorePackageImpl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isCreated = false;
            _this.createPackageContents = function () {
                if (_this.isCreated)
                    return;
                _this.isCreated = true;
                _this.EAttributeEClass = _this.createEClass(EcorePackageImpl.EATTRIBUTE);
                _this.createEAttribute(_this.EAttributeEClass, EcorePackageImpl.EATTRIBUTE_ID);
                _this.createEReference(_this.EAttributeEClass, EcorePackageImpl.EATTRIBUTE_EATTRIBUTETYPE);
                _this.EAnnotationEClass = _this.createEClass(EcorePackageImpl.EANNOTATION);
                _this.createEAttribute(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_SOURCE);
                _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_DETAILS);
                _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_EMODELELEMENT);
                _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_CONTENTS);
                _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_REFERENCES);
                _this.EClassEClass = _this.createEClass(EcorePackageImpl.ECLASS);
                _this.createEAttribute(_this.EClassEClass, EcorePackageImpl.ECLASS_ABSTRACT);
                _this.createEAttribute(_this.EClassEClass, EcorePackageImpl.ECLASS_INTERFACE);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_ESUPERTYPES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EOPERATIONS);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLATTRIBUTES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLREFERENCES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EREFERENCES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EATTRIBUTES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLCONTAINMENTS);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLOPERATIONS);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLSTRUCTURALFEATURES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLSUPERTYPES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EIDATTRIBUTE);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_ESTRUCTURALFEATURES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EGENERICSUPERTYPES);
                _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLGENERICSUPERTYPES);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___ISSUPERTYPEOF__SOMECLASS);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATURECOUNT);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATUREID);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATUREID__FEATURE);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATURENAME);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETOPERATIONCOUNT);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETEOPERATION__OPERATIONID);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETOPERATIONID__OPERATION);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETOVERRIDE__OPERATION);
                _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATURETYPE__FEATURE);
                _this.EClassifierEClass = _this.createEClass(EcorePackageImpl.ECLASSIFIER);
                _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCECLASSNAME);
                _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCECLASS);
                _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_DEFAULTVALUE);
                _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCETYPENAME);
                _this.createEReference(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_EPACKAGE);
                _this.createEReference(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_ETYPEPARAMETERS);
                _this.createEOperation(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER___ISINSTANCE__OBJECT);
                _this.createEOperation(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER___GETCLASSIFIERID);
                _this.EDataTypeEClass = _this.createEClass(EcorePackageImpl.EDATATYPE);
                _this.createEAttribute(_this.EDataTypeEClass, EcorePackageImpl.EDATATYPE_SERIALIZABLE);
                _this.EEnumEClass = _this.createEClass(EcorePackageImpl.EENUM);
                _this.createEReference(_this.EEnumEClass, EcorePackageImpl.EENUM_ELITERALS);
                _this.createEOperation(_this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERAL__NAME);
                _this.createEOperation(_this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERAL__VALUE);
                _this.createEOperation(_this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERALBYLITERAL__LITERAL);
                _this.EEnumLiteralEClass = _this.createEClass(EcorePackageImpl.EENUMLITERAL);
                _this.createEAttribute(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_VALUE);
                _this.createEAttribute(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_INSTANCE);
                _this.createEAttribute(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_LITERAL);
                _this.createEReference(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_EENUM);
                _this.EFactoryEClass = _this.createEClass(EcorePackageImpl.EFACTORY);
                _this.createEReference(_this.EFactoryEClass, EcorePackageImpl.EFACTORY_EPACKAGE);
                _this.createEOperation(_this.EFactoryEClass, EcorePackageImpl.EFACTORY___CREATE__ECLASS);
                _this.createEOperation(_this.EFactoryEClass, EcorePackageImpl.EFACTORY___CREATEFROMSTRING__EDATATYPE__LITERALVALUE);
                _this.createEOperation(_this.EFactoryEClass, EcorePackageImpl.EFACTORY___CONVERTTOSTRING__EDATATYPE__INSTANCEVALUE);
                _this.EModelElementEClass = _this.createEClass(EcorePackageImpl.EMODELELEMENT);
                _this.createEReference(_this.EModelElementEClass, EcorePackageImpl.EMODELELEMENT_EANNOTATIONS);
                _this.createEOperation(_this.EModelElementEClass, EcorePackageImpl.EMODELELEMENT___GETEANNOTATION__SOURCE);
                _this.ENamedElementEClass = _this.createEClass(EcorePackageImpl.ENAMEDELEMENT);
                _this.createEAttribute(_this.ENamedElementEClass, EcorePackageImpl.ENAMEDELEMENT_NAME);
                _this.EObjectEClass = _this.createEClass(EcorePackageImpl.EOBJECT);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECLASS);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EISPROXY);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ERESOURCE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAINER);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAININGFEATURE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAINMENTFEATURE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTENTS);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EALLCONTENTS);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECROSSREFERENCES);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EGET__FEATURE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EGET__FEATURE__RESOLVE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ESET__FEATURE__NEWVALUE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EISSET__FEATURE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EUNSET__FEATURE);
                _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EINVOKE__OPERATION__ARGUMENTS);
                _this.EOperationEClass = _this.createEClass(EcorePackageImpl.EOPERATION);
                _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_ECONTAININGCLASS);
                _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_ETYPEPARAMETERS);
                _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_EPARAMETERS);
                _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_EEXCEPTIONS);
                _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_EGENERICEXCEPTIONS);
                _this.createEOperation(_this.EOperationEClass, EcorePackageImpl.EOPERATION___GETOPERATIONID);
                _this.createEOperation(_this.EOperationEClass, EcorePackageImpl.EOPERATION___ISOVERRIDEOF__SOMEOPERATION);
                _this.EPackageEClass = _this.createEClass(EcorePackageImpl.EPACKAGE);
                _this.createEAttribute(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_NSURI);
                _this.createEAttribute(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_NSPREFIX);
                _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_EFACTORYINSTANCE);
                _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_ECLASSIFIERS);
                _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_ESUBPACKAGES);
                _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_ESUPERPACKAGE);
                _this.createEOperation(_this.EPackageEClass, EcorePackageImpl.EPACKAGE___GETECLASSIFIER__NAME);
                _this.EParameterEClass = _this.createEClass(EcorePackageImpl.EPARAMETER);
                _this.createEReference(_this.EParameterEClass, EcorePackageImpl.EPARAMETER_EOPERATION);
                _this.EReferenceEClass = _this.createEClass(EcorePackageImpl.EREFERENCE);
                _this.createEAttribute(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_CONTAINMENT);
                _this.createEAttribute(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_CONTAINER);
                _this.createEAttribute(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_RESOLVEPROXIES);
                _this.createEReference(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EOPPOSITE);
                _this.createEReference(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EREFERENCETYPE);
                _this.createEReference(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EKEYS);
                _this.EStructuralFeatureEClass = _this.createEClass(EcorePackageImpl.ESTRUCTURALFEATURE);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_CHANGEABLE);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_VOLATILE);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_TRANSIENT);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUE);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_UNSETTABLE);
                _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DERIVED);
                _this.createEReference(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_ECONTAININGCLASS);
                _this.createEOperation(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE___GETFEATUREID);
                _this.createEOperation(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE___GETCONTAINERCLASS);
                _this.ETypedElementEClass = _this.createEClass(EcorePackageImpl.ETYPEDELEMENT);
                _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_ORDERED);
                _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_UNIQUE);
                _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_LOWERBOUND);
                _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_UPPERBOUND);
                _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_MANY);
                _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_REQUIRED);
                _this.createEReference(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_ETYPE);
                _this.createEReference(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_EGENERICTYPE);
                _this.EStringToStringMapEntryEClass = _this.createEClass(EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY);
                _this.createEAttribute(_this.EStringToStringMapEntryEClass, EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_KEY);
                _this.createEAttribute(_this.EStringToStringMapEntryEClass, EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_VALUE);
                _this.EGenericTypeEClass = _this.createEClass(EcorePackageImpl.EGENERICTYPE);
                _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_EUPPERBOUND);
                _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ETYPEARGUMENTS);
                _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ERAWTYPE);
                _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ELOWERBOUND);
                _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ETYPEPARAMETER);
                _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ECLASSIFIER);
                _this.createEOperation(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE___ISINSTANCE__OBJECT);
                _this.ETypeParameterEClass = _this.createEClass(EcorePackageImpl.ETYPEPARAMETER);
                _this.createEReference(_this.ETypeParameterEClass, EcorePackageImpl.ETYPEPARAMETER_EBOUNDS);
                _this.EBigDecimalEDataType = _this.createEDataType(EcorePackageImpl.EBIGDECIMAL);
                _this.EBigIntegerEDataType = _this.createEDataType(EcorePackageImpl.EBIGINTEGER);
                _this.EBooleanEDataType = _this.createEDataType(EcorePackageImpl.EBOOLEAN);
                _this.EBooleanObjectEDataType = _this.createEDataType(EcorePackageImpl.EBOOLEANOBJECT);
                _this.EByteEDataType = _this.createEDataType(EcorePackageImpl.EBYTE);
                _this.EByteArrayEDataType = _this.createEDataType(EcorePackageImpl.EBYTEARRAY);
                _this.EByteObjectEDataType = _this.createEDataType(EcorePackageImpl.EBYTEOBJECT);
                _this.ECharEDataType = _this.createEDataType(EcorePackageImpl.ECHAR);
                _this.ECharacterObjectEDataType = _this.createEDataType(EcorePackageImpl.ECHARACTEROBJECT);
                _this.EDateEDataType = _this.createEDataType(EcorePackageImpl.EDATE);
                _this.EDiagnosticChainEDataType = _this.createEDataType(EcorePackageImpl.EDIAGNOSTICCHAIN);
                _this.EDoubleEDataType = _this.createEDataType(EcorePackageImpl.EDOUBLE);
                _this.EDoubleObjectEDataType = _this.createEDataType(EcorePackageImpl.EDOUBLEOBJECT);
                _this.EEListEDataType = _this.createEDataType(EcorePackageImpl.EELIST);
                _this.EEnumeratorEDataType = _this.createEDataType(EcorePackageImpl.EENUMERATOR);
                _this.EFeatureMapEDataType = _this.createEDataType(EcorePackageImpl.EFEATUREMAP);
                _this.EFeatureMapEntryEDataType = _this.createEDataType(EcorePackageImpl.EFEATUREMAPENTRY);
                _this.EFloatEDataType = _this.createEDataType(EcorePackageImpl.EFLOAT);
                _this.EFloatObjectEDataType = _this.createEDataType(EcorePackageImpl.EFLOATOBJECT);
                _this.EIntEDataType = _this.createEDataType(EcorePackageImpl.EINT);
                _this.EIntegerObjectEDataType = _this.createEDataType(EcorePackageImpl.EINTEGEROBJECT);
                _this.EJavaClassEDataType = _this.createEDataType(EcorePackageImpl.EJAVACLASS);
                _this.EJavaObjectEDataType = _this.createEDataType(EcorePackageImpl.EJAVAOBJECT);
                _this.ELongEDataType = _this.createEDataType(EcorePackageImpl.ELONG);
                _this.ELongObjectEDataType = _this.createEDataType(EcorePackageImpl.ELONGOBJECT);
                _this.EMapEDataType = _this.createEDataType(EcorePackageImpl.EMAP);
                _this.EResourceEDataType = _this.createEDataType(EcorePackageImpl.ERESOURCE);
                _this.EResourceSetEDataType = _this.createEDataType(EcorePackageImpl.ERESOURCESET);
                _this.EShortEDataType = _this.createEDataType(EcorePackageImpl.ESHORT);
                _this.EShortObjectEDataType = _this.createEDataType(EcorePackageImpl.ESHORTOBJECT);
                _this.EStringEDataType = _this.createEDataType(EcorePackageImpl.ESTRING);
                _this.ETreeIteratorEDataType = _this.createEDataType(EcorePackageImpl.ETREEITERATOR);
                _this.EInvocationTargetExceptionEDataType = _this.createEDataType(EcorePackageImpl.EINVOCATIONTARGETEXCEPTION);
            };
            _this.isInitialized = false;
            _this.initializePackageContents = function () {
                if (_this.isInitialized)
                    return;
                _this.isInitialized = true;
                // Initialize package
                var name = EcorePackageImpl.eNAME;
                var nsPrefix = EcorePackageImpl.eNS_PREFIX;
                var nsURI = EcorePackageImpl.eNS_URI;
                _this.EAttributeEClass.eSuperTypes.add(_this.getEStructuralFeature());
                _this.EAnnotationEClass.eSuperTypes.add(_this.getEModelElement());
                _this.EClassEClass.eSuperTypes.add(_this.getEClassifier_());
                _this.EClassifierEClass.eSuperTypes.add(_this.getENamedElement());
                _this.EDataTypeEClass.eSuperTypes.add(_this.getEClassifier_());
                _this.EEnumEClass.eSuperTypes.add(_this.getEDataType());
                _this.EEnumLiteralEClass.eSuperTypes.add(_this.getENamedElement());
                _this.EFactoryEClass.eSuperTypes.add(_this.getEModelElement());
                _this.ENamedElementEClass.eSuperTypes.add(_this.getEModelElement());
                _this.EOperationEClass.eSuperTypes.add(_this.getETypedElement());
                _this.EPackageEClass.eSuperTypes.add(_this.getENamedElement());
                _this.EParameterEClass.eSuperTypes.add(_this.getETypedElement());
                _this.EReferenceEClass.eSuperTypes.add(_this.getEStructuralFeature());
                _this.EStructuralFeatureEClass.eSuperTypes.add(_this.getETypedElement());
                _this.ETypedElementEClass.eSuperTypes.add(_this.getENamedElement());
                _this.ETypeParameterEClass.eSuperTypes.add(_this.getENamedElement());
                var op = null;
                _this.initEClass(_this.EAttributeEClass, 
                /*EAttribute*/ null, "EAttribute", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEAttribute_ID(), _this.ecorePackage.getEBoolean(), "iD", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEAttribute_EAttributeType(), _this.ecorePackage.getEDataType(), null, "eAttributeType", null, 1, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EAnnotationEClass, 
                /*EAnnotation*/ null, "EAnnotation", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEAnnotation_Source(), _this.ecorePackage.getEString(), "source", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEAnnotation_Details(), _this.ecorePackage.getEStringToStringMapEntry(), null, "details", null, 0, -1, 
                /*EAnnotation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEAnnotation_EModelElement(), _this.ecorePackage.getEModelElement(), _this.getEModelElement_EAnnotations(), "eModelElement", null, 0, 1, 
                /*EAnnotation*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEAnnotation_Contents(), _this.ecorePackage.getEObject(), null, "contents", null, 0, -1, 
                /*EAnnotation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEAnnotation_References(), _this.ecorePackage.getEObject(), null, "references", null, 0, -1, 
                /*EAnnotation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EClassEClass, 
                /*EClass*/ null, "EClass", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEClass_Abstract(), _this.ecorePackage.getEBoolean(), "abstract", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEClass_Interface(), _this.ecorePackage.getEBoolean(), "interface", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_ESuperTypes(), _this.ecorePackage.getEClass(), null, "eSuperTypes", null, 0, -1, 
                /*EClass*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EOperations(), _this.ecorePackage.getEOperation(), _this.getEOperation_EContainingClass(), "eOperations", null, 0, -1, 
                /*EClass*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllAttributes(), _this.ecorePackage.getEAttribute(), null, "eAllAttributes", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllReferences(), _this.ecorePackage.getEReference(), null, "eAllReferences", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EReferences(), _this.ecorePackage.getEReference(), null, "eReferences", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAttributes(), _this.ecorePackage.getEAttribute(), null, "eAttributes", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllContainments(), _this.ecorePackage.getEReference(), null, "eAllContainments", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllOperations(), _this.ecorePackage.getEOperation(), null, "eAllOperations", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllStructuralFeatures(), _this.ecorePackage.getEStructuralFeature(), null, "eAllStructuralFeatures", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllSuperTypes(), _this.ecorePackage.getEClass(), null, "eAllSuperTypes", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EIDAttribute(), _this.ecorePackage.getEAttribute(), null, "eIDAttribute", null, 0, 1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EStructuralFeatures(), _this.ecorePackage.getEStructuralFeature(), _this.getEStructuralFeature_EContainingClass(), "eStructuralFeatures", null, 0, -1, 
                /*EClass*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EGenericSuperTypes(), _this.ecorePackage.getEGenericType(), null, "eGenericSuperTypes", null, 0, -1, 
                /*EClass*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClass_EAllGenericSuperTypes(), _this.ecorePackage.getEGenericType(), null, "eAllGenericSuperTypes", null, 0, -1, 
                /*EClass*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__IsSuperTypeOf__SomeClass(), _this.getEBoolean(), "isSuperTypeOf", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "someClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetFeatureCount__(), _this.getEBoolean(), "getFeatureCount", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetEStructuralFeature__FeatureID(), _this.getEBoolean(), "getEStructuralFeature", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "featureID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetFeatureID__Feature(), _this.getEBoolean(), "getFeatureID", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetEStructuralFeature__FeatureName(), _this.getEBoolean(), "getEStructuralFeature", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "featureName", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetOperationCount__(), _this.getEBoolean(), "getOperationCount", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetEOperation__OperationID(), _this.getEBoolean(), "getEOperation", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "operationID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetOperationID__Operation(), _this.getEBoolean(), "getOperationID", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetOverride__Operation(), _this.getEBoolean(), "getOverride", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClass__GetFeatureType__Feature(), _this.getEBoolean(), "getFeatureType", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClass(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EClassifierEClass, 
                /*EClassifier*/ null, "EClassifier", EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEClassifier_InstanceClassName(), _this.ecorePackage.getEString(), "instanceClassName", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEClassifier_InstanceClass(), _this.ecorePackage.getEJavaClass(), "instanceClass", null, 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEClassifier_DefaultValue(), _this.ecorePackage.getEJavaObject(), "defaultValue", null, 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEClassifier_InstanceTypeName(), _this.ecorePackage.getEString(), "instanceTypeName", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClassifier_EPackage(), _this.ecorePackage.getEPackage(), _this.getEPackage_EClassifiers(), "ePackage", null, 0, 1, 
                /*EClassifier*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEClassifier_ETypeParameters(), _this.ecorePackage.getETypeParameter(), null, "eTypeParameters", null, 0, -1, 
                /*EClassifier*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClassifier__IsInstance__Object(), _this.getEBoolean(), "isInstance", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEClassifier_(), "object", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEClassifier__GetClassifierID__(), _this.getEBoolean(), "getClassifierID", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EDataTypeEClass, 
                /*EDataType*/ null, "EDataType", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEDataType_Serializable(), _this.ecorePackage.getEBoolean(), "serializable", "true", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EEnumEClass, 
                /*EEnum*/ null, "EEnum", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getEEnum_ELiterals(), _this.ecorePackage.getEEnumLiteral(), _this.getEEnumLiteral_EEnum(), "eLiterals", null, 0, -1, 
                /*EEnum*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEEnum__GetEEnumLiteral__Name(), _this.getEBoolean(), "getEEnumLiteral", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEEnum(), "name", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEEnum__GetEEnumLiteral__Value(), _this.getEBoolean(), "getEEnumLiteral", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEEnum(), "value", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEEnum__GetEEnumLiteralByLiteral__Literal(), _this.getEBoolean(), "getEEnumLiteralByLiteral", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEEnum(), "literal", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EEnumLiteralEClass, 
                /*EEnumLiteral*/ null, "EEnumLiteral", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEEnumLiteral_Value(), _this.ecorePackage.getEInt(), "value", "0", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEEnumLiteral_Instance(), _this.ecorePackage.getEEnumerator(), "instance", null, 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEEnumLiteral_Literal(), _this.ecorePackage.getEString(), "literal", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEEnumLiteral_EEnum(), _this.ecorePackage.getEEnum(), _this.getEEnum_ELiterals(), "eEnum", null, 0, 1, 
                /*EEnumLiteral*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EFactoryEClass, 
                /*EFactory*/ null, "EFactory", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getEFactory_EPackage(), _this.ecorePackage.getEPackage(), _this.getEPackage_EFactoryInstance(), "ePackage", null, 1, 1, 
                /*EFactory*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEFactory__Create__EClass(), _this.getEBoolean(), "create", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEFactory(), "eClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEFactory__CreateFromString__EDataType__LiteralValue(), _this.getEBoolean(), "createFromString", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEFactory(), "eDataType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEFactory(), "literalValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEFactory__ConvertToString__EDataType__InstanceValue(), _this.getEBoolean(), "convertToString", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEFactory(), "eDataType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEFactory(), "instanceValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EModelElementEClass, 
                /*EModelElement*/ null, "EModelElement", EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getEModelElement_EAnnotations(), _this.ecorePackage.getEAnnotation_(), _this.getEAnnotation_EModelElement(), "eAnnotations", null, 0, -1, 
                /*EModelElement*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEModelElement__GetEAnnotation__Source(), _this.getEBoolean(), "getEAnnotation", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEModelElement(), "source", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.ENamedElementEClass, 
                /*ENamedElement*/ null, "ENamedElement", EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getENamedElement_Name(), _this.ecorePackage.getEString(), "name", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EObjectEClass, 
                /*EObject*/ null, "EObject", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EClass__(), _this.getEBoolean(), "eClass", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EIsProxy__(), _this.getEBoolean(), "eIsProxy", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EResource__(), _this.getEBoolean(), "eResource", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EContainer__(), _this.getEBoolean(), "eContainer", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EContainingFeature__(), _this.getEBoolean(), "eContainingFeature", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EContainmentFeature__(), _this.getEBoolean(), "eContainmentFeature", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EContents__(), _this.getEBoolean(), "eContents", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EAllContents__(), _this.getEBoolean(), "eAllContents", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__ECrossReferences__(), _this.getEBoolean(), "eCrossReferences", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EGet__Feature(), _this.getEBoolean(), "eGet", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EGet__Feature__Resolve(), _this.getEBoolean(), "eGet", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "resolve", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__ESet__Feature__NewValue(), _this.getEBoolean(), "eSet", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "newValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EIsSet__Feature(), _this.getEBoolean(), "eIsSet", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EUnset__Feature(), _this.getEBoolean(), "eUnset", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEObject__EInvoke__Operation__Arguments(), _this.getEBoolean(), "eInvoke", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEObject(), "arguments", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EOperationEClass, 
                /*EOperation*/ null, "EOperation", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getEOperation_EContainingClass(), _this.ecorePackage.getEClass(), _this.getEClass_EOperations(), "eContainingClass", null, 0, 1, 
                /*EOperation*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEOperation_ETypeParameters(), _this.ecorePackage.getETypeParameter(), null, "eTypeParameters", null, 0, -1, 
                /*EOperation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEOperation_EParameters(), _this.ecorePackage.getEParameter(), _this.getEParameter_EOperation(), "eParameters", null, 0, -1, 
                /*EOperation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEOperation_EExceptions(), _this.ecorePackage.getEClassifier_(), null, "eExceptions", null, 0, -1, 
                /*EOperation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEOperation_EGenericExceptions(), _this.ecorePackage.getEGenericType(), null, "eGenericExceptions", null, 0, -1, 
                /*EOperation*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEOperation__GetOperationID__(), _this.getEBoolean(), "getOperationID", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEOperation__IsOverrideOf__SomeOperation(), _this.getEBoolean(), "isOverrideOf", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEOperation(), "someOperation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EPackageEClass, 
                /*EPackage*/ null, "EPackage", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEPackage_NsURI(), _this.ecorePackage.getEString(), "nsURI", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEPackage_NsPrefix(), _this.ecorePackage.getEString(), "nsPrefix", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEPackage_EFactoryInstance(), _this.ecorePackage.getEFactory(), _this.getEFactory_EPackage(), "eFactoryInstance", null, 1, 1, 
                /*EPackage*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEPackage_EClassifiers(), _this.ecorePackage.getEClassifier_(), _this.getEClassifier_EPackage(), "eClassifiers", null, 0, -1, 
                /*EPackage*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEPackage_ESubpackages(), _this.ecorePackage.getEPackage(), _this.getEPackage_ESuperPackage(), "eSubpackages", null, 0, -1, 
                /*EPackage*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEPackage_ESuperPackage(), _this.ecorePackage.getEPackage(), _this.getEPackage_ESubpackages(), "eSuperPackage", null, 0, 1, 
                /*EPackage*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEPackage__GetEClassifier__Name(), _this.getEBoolean(), "getEClassifier", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEPackage(), "name", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EParameterEClass, 
                /*EParameter*/ null, "EParameter", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getEParameter_EOperation(), _this.ecorePackage.getEOperation(), _this.getEOperation_EParameters(), "eOperation", null, 0, 1, 
                /*EParameter*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EReferenceEClass, 
                /*EReference*/ null, "EReference", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEReference_Containment(), _this.ecorePackage.getEBoolean(), "containment", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEReference_Container(), _this.ecorePackage.getEBoolean(), "container", "false", 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEReference_ResolveProxies(), _this.ecorePackage.getEBoolean(), "resolveProxies", "true", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEReference_EOpposite(), _this.ecorePackage.getEReference(), null, "eOpposite", null, 0, 1, 
                /*EReference*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEReference_EReferenceType(), _this.ecorePackage.getEClass(), null, "eReferenceType", null, 1, 1, 
                /*EReference*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEReference_EKeys(), _this.ecorePackage.getEAttribute(), null, "eKeys", null, 0, -1, 
                /*EReference*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EStructuralFeatureEClass, 
                /*EStructuralFeature*/ null, "EStructuralFeature", EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Changeable(), _this.ecorePackage.getEBoolean(), "changeable", "true", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Volatile(), _this.ecorePackage.getEBoolean(), "volatile", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Transient(), _this.ecorePackage.getEBoolean(), "transient", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_DefaultValueLiteral(), _this.ecorePackage.getEString(), "defaultValueLiteral", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_DefaultValue(), _this.ecorePackage.getEJavaObject(), "defaultValue", null, 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Unsettable(), _this.ecorePackage.getEBoolean(), "unsettable", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Derived(), _this.ecorePackage.getEBoolean(), "derived", "false", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEStructuralFeature_EContainingClass(), _this.ecorePackage.getEClass(), _this.getEClass_EStructuralFeatures(), "eContainingClass", null, 0, 1, 
                /*EStructuralFeature*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEStructuralFeature__GetFeatureID__(), _this.getEBoolean(), "getFeatureID", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEStructuralFeature__GetContainerClass__(), _this.getEBoolean(), "getContainerClass", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.ETypedElementEClass, 
                /*ETypedElement*/ null, "ETypedElement", EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getETypedElement_Ordered(), _this.ecorePackage.getEBoolean(), "ordered", "true", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getETypedElement_Unique(), _this.ecorePackage.getEBoolean(), "unique", "true", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getETypedElement_LowerBound(), _this.ecorePackage.getEInt(), "lowerBound", "0", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getETypedElement_UpperBound(), _this.ecorePackage.getEInt(), "upperBound", "1", 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getETypedElement_Many(), _this.ecorePackage.getEBoolean(), "many", "false", 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getETypedElement_Required(), _this.ecorePackage.getEBoolean(), "required", "false", 0, 1, 
                /*EAttribute*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getETypedElement_EType(), _this.ecorePackage.getEClassifier_(), null, "eType", null, 0, 1, 
                /*ETypedElement*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getETypedElement_EGenericType(), _this.ecorePackage.getEGenericType(), null, "eGenericType", null, 0, 1, 
                /*ETypedElement*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EStringToStringMapEntryEClass, 
                /*EStringToStringMapEntry*/ null, "EStringToStringMapEntry", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEAttribute_EClassifier(_this.getEStringToStringMapEntry_Key(), _this.ecorePackage.getEString(), "key", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEAttribute_EClassifier(_this.getEStringToStringMapEntry_Value(), _this.ecorePackage.getEString(), "value", null, 0, 1, 
                /*EAttribute*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, !EPackageImpl_1.EPackageImpl.IS_ID, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.EGenericTypeEClass, 
                /*EGenericType*/ null, "EGenericType", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getEGenericType_EUpperBound(), _this.ecorePackage.getEGenericType(), null, "eUpperBound", null, 0, 1, 
                /*EGenericType*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEGenericType_ETypeArguments(), _this.ecorePackage.getEGenericType(), null, "eTypeArguments", null, 0, -1, 
                /*EGenericType*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEGenericType_ERawType(), _this.ecorePackage.getEClassifier_(), null, "eRawType", null, 1, 1, 
                /*EGenericType*/ null, EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, !EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEGenericType_ELowerBound(), _this.ecorePackage.getEGenericType(), null, "eLowerBound", null, 0, 1, 
                /*EGenericType*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEGenericType_ETypeParameter(), _this.ecorePackage.getETypeParameter(), null, "eTypeParameter", null, 0, 1, 
                /*EGenericType*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEReference(_this.getEGenericType_EClassifier(), _this.ecorePackage.getEClassifier_(), null, "eClassifier", null, 0, 1, 
                /*EGenericType*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, !EPackageImpl_1.EPackageImpl.IS_COMPOSITE, EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add initEOperation to EPackageImpl
                op = _this.initEOperation_3(_this.getEGenericType__IsInstance__Object(), _this.getEBoolean(), "isInstance", 0, 1, EPackageImpl_1.EPackageImpl.IS_UNIQUE, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                //TODO add addEParameter to EPackageImpl
                //this.addEParameter_3(op, this.getEGenericType(), "object", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
                _this.initEClass(_this.ETypeParameterEClass, 
                /*ETypeParameter*/ null, "ETypeParameter", !EPackageImpl_1.EPackageImpl.IS_ABSTRACT, !EPackageImpl_1.EPackageImpl.IS_INTERFACE, EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEReference(_this.getETypeParameter_EBounds(), _this.ecorePackage.getEGenericType(), null, "eBounds", null, 0, -1, 
                /*ETypeParameter*/ null, !EPackageImpl_1.EPackageImpl.IS_TRANSIENT, !EPackageImpl_1.EPackageImpl.IS_VOLATILE, EPackageImpl_1.EPackageImpl.IS_CHANGEABLE, EPackageImpl_1.EPackageImpl.IS_COMPOSITE, !EPackageImpl_1.EPackageImpl.IS_RESOLVE_PROXIES, !EPackageImpl_1.EPackageImpl.IS_UNSETTABLE, EPackageImpl_1.EPackageImpl.IS_UNIQUE, !EPackageImpl_1.EPackageImpl.IS_DERIVED, EPackageImpl_1.EPackageImpl.IS_ORDERED);
                _this.initEDataType(_this.EBigDecimalEDataType, null, "EBigDecimal", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EBigIntegerEDataType, null, "EBigInteger", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EBooleanEDataType, null, "EBoolean", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EBooleanObjectEDataType, null, "EBooleanObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EByteEDataType, null, "EByte", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EByteArrayEDataType, null, "EByteArray", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EByteObjectEDataType, null, "EByteObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.ECharEDataType, null, "EChar", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.ECharacterObjectEDataType, null, "ECharacterObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EDateEDataType, null, "EDate", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EDiagnosticChainEDataType, null, "EDiagnosticChain", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EDoubleEDataType, null, "EDouble", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EDoubleObjectEDataType, null, "EDoubleObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EEListEDataType, null, "EEList", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EEnumeratorEDataType, null, "EEnumerator", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EFeatureMapEDataType, null, "EFeatureMap", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EFeatureMapEntryEDataType, null, "EFeatureMapEntry", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EFloatEDataType, null, "EFloat", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EFloatObjectEDataType, null, "EFloatObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EIntEDataType, null, "EInt", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EIntegerObjectEDataType, null, "EIntegerObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EJavaClassEDataType, null, "EJavaClass", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EJavaObjectEDataType, null, "EJavaObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.ELongEDataType, null, "ELong", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.ELongObjectEDataType, null, "ELongObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EMapEDataType, null, "EMap", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EResourceEDataType, null, "EResource", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EResourceSetEDataType, null, "EResourceSet", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EShortEDataType, null, "EShort", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EShortObjectEDataType, null, "EShortObject", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EStringEDataType, null, "EString", EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.ETreeIteratorEDataType, null, "ETreeIterator", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
                _this.initEDataType(_this.EInvocationTargetExceptionEDataType, null, "EInvocationTargetException", !EPackageImpl_1.EPackageImpl.IS_SERIALIZABLE, !EPackageImpl_1.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            };
            _this.EAttributeEClass = null;
            _this.EAnnotationEClass = null;
            _this.EClassEClass = null;
            _this.EClassifierEClass = null;
            _this.EDataTypeEClass = null;
            _this.EEnumEClass = null;
            _this.EEnumLiteralEClass = null;
            _this.EFactoryEClass = null;
            _this.EModelElementEClass = null;
            _this.ENamedElementEClass = null;
            _this.EObjectEClass = null;
            _this.EOperationEClass = null;
            _this.EPackageEClass = null;
            _this.EParameterEClass = null;
            _this.EReferenceEClass = null;
            _this.EStructuralFeatureEClass = null;
            _this.ETypedElementEClass = null;
            _this.EStringToStringMapEntryEClass = null;
            _this.EGenericTypeEClass = null;
            _this.ETypeParameterEClass = null;
            _this.EBigDecimalEDataType = null;
            _this.EBigIntegerEDataType = null;
            _this.EBooleanEDataType = null;
            _this.EBooleanObjectEDataType = null;
            _this.EByteEDataType = null;
            _this.EByteArrayEDataType = null;
            _this.EByteObjectEDataType = null;
            _this.ECharEDataType = null;
            _this.ECharacterObjectEDataType = null;
            _this.EDateEDataType = null;
            _this.EDiagnosticChainEDataType = null;
            _this.EDoubleEDataType = null;
            _this.EDoubleObjectEDataType = null;
            _this.EEListEDataType = null;
            _this.EEnumeratorEDataType = null;
            _this.EFeatureMapEDataType = null;
            _this.EFeatureMapEntryEDataType = null;
            _this.EFloatEDataType = null;
            _this.EFloatObjectEDataType = null;
            _this.EIntEDataType = null;
            _this.EIntegerObjectEDataType = null;
            _this.EJavaClassEDataType = null;
            _this.EJavaObjectEDataType = null;
            _this.ELongEDataType = null;
            _this.ELongObjectEDataType = null;
            _this.EMapEDataType = null;
            _this.EResourceEDataType = null;
            _this.EResourceSetEDataType = null;
            _this.EShortEDataType = null;
            _this.EShortObjectEDataType = null;
            _this.EStringEDataType = null;
            _this.ETreeIteratorEDataType = null;
            _this.EInvocationTargetExceptionEDataType = null;
            _this.getEObject = function () { return _this.EObjectEClass; };
            _this.getEObject__EClass__ = function () { return _this.EObjectEClass.eOperations.at(0); };
            _this.getEObject__EIsProxy__ = function () { return _this.EObjectEClass.eOperations.at(1); };
            _this.getEObject__EResource__ = function () { return _this.EObjectEClass.eOperations.at(2); };
            _this.getEObject__EContainer__ = function () { return _this.EObjectEClass.eOperations.at(3); };
            _this.getEObject__EContainingFeature__ = function () { return _this.EObjectEClass.eOperations.at(4); };
            _this.getEObject__EContainmentFeature__ = function () { return _this.EObjectEClass.eOperations.at(5); };
            _this.getEObject__EContents__ = function () { return _this.EObjectEClass.eOperations.at(6); };
            _this.getEObject__EAllContents__ = function () { return _this.EObjectEClass.eOperations.at(7); };
            _this.getEObject__ECrossReferences__ = function () { return _this.EObjectEClass.eOperations.at(8); };
            _this.getEObject__EGet__Feature = function () { return _this.EObjectEClass.eOperations.at(9); };
            _this.getEObject__EGet__Feature__Resolve = function () { return _this.EObjectEClass.eOperations.at(10); };
            _this.getEObject__ESet__Feature__NewValue = function () { return _this.EObjectEClass.eOperations.at(11); };
            _this.getEObject__EIsSet__Feature = function () { return _this.EObjectEClass.eOperations.at(12); };
            _this.getEObject__EUnset__Feature = function () { return _this.EObjectEClass.eOperations.at(13); };
            _this.getEObject__EInvoke__Operation__Arguments = function () { return _this.EObjectEClass.eOperations.at(14); };
            _this.getEModelElement = function () { return _this.EModelElementEClass; };
            _this.getEModelElement_EAnnotations = function () { return _this.EModelElementEClass.eStructuralFeatures.at(0); };
            _this.getEModelElement__GetEAnnotation__Source = function () { return _this.EModelElementEClass.eOperations.at(0); };
            _this.getEStringToStringMapEntry = function () { return _this.EStringToStringMapEntryEClass; };
            _this.getEStringToStringMapEntry_Key = function () { return _this.EStringToStringMapEntryEClass.eStructuralFeatures.at(0); };
            _this.getEStringToStringMapEntry_Value = function () { return _this.EStringToStringMapEntryEClass.eStructuralFeatures.at(1); };
            _this.getEGenericType = function () { return _this.EGenericTypeEClass; };
            _this.getEGenericType_EUpperBound = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(0); };
            _this.getEGenericType_ETypeArguments = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(1); };
            _this.getEGenericType_ERawType = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(2); };
            _this.getEGenericType_ELowerBound = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(3); };
            _this.getEGenericType_ETypeParameter = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(4); };
            _this.getEGenericType_EClassifier = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(5); };
            _this.getEGenericType__IsInstance__Object = function () { return _this.EGenericTypeEClass.eOperations.at(0); };
            _this.getEAnnotation_ = function () { return _this.EAnnotationEClass; };
            _this.getEAnnotation_Source = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(0); };
            _this.getEAnnotation_Details = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(1); };
            _this.getEAnnotation_EModelElement = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(2); };
            _this.getEAnnotation_Contents = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(3); };
            _this.getEAnnotation_References = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(4); };
            _this.getEFactory = function () { return _this.EFactoryEClass; };
            _this.getEFactory_EPackage = function () { return _this.EFactoryEClass.eStructuralFeatures.at(0); };
            _this.getEFactory__Create__EClass = function () { return _this.EFactoryEClass.eOperations.at(0); };
            _this.getEFactory__CreateFromString__EDataType__LiteralValue = function () { return _this.EFactoryEClass.eOperations.at(1); };
            _this.getEFactory__ConvertToString__EDataType__InstanceValue = function () { return _this.EFactoryEClass.eOperations.at(2); };
            _this.getENamedElement = function () { return _this.ENamedElementEClass; };
            _this.getENamedElement_Name = function () { return _this.ENamedElementEClass.eStructuralFeatures.at(0); };
            _this.getEClassifier_ = function () { return _this.EClassifierEClass; };
            _this.getEClassifier_InstanceClassName = function () { return _this.EClassifierEClass.eStructuralFeatures.at(0); };
            _this.getEClassifier_InstanceClass = function () { return _this.EClassifierEClass.eStructuralFeatures.at(1); };
            _this.getEClassifier_DefaultValue = function () { return _this.EClassifierEClass.eStructuralFeatures.at(2); };
            _this.getEClassifier_InstanceTypeName = function () { return _this.EClassifierEClass.eStructuralFeatures.at(3); };
            _this.getEClassifier_EPackage = function () { return _this.EClassifierEClass.eStructuralFeatures.at(4); };
            _this.getEClassifier_ETypeParameters = function () { return _this.EClassifierEClass.eStructuralFeatures.at(5); };
            _this.getEClassifier__IsInstance__Object = function () { return _this.EClassifierEClass.eOperations.at(0); };
            _this.getEClassifier__GetClassifierID__ = function () { return _this.EClassifierEClass.eOperations.at(1); };
            _this.getEEnumLiteral = function () { return _this.EEnumLiteralEClass; };
            _this.getEEnumLiteral_Value = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(0); };
            _this.getEEnumLiteral_Instance = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(1); };
            _this.getEEnumLiteral_Literal = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(2); };
            _this.getEEnumLiteral_EEnum = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(3); };
            _this.getEPackage = function () { return _this.EPackageEClass; };
            _this.getEPackage_NsURI = function () { return _this.EPackageEClass.eStructuralFeatures.at(0); };
            _this.getEPackage_NsPrefix = function () { return _this.EPackageEClass.eStructuralFeatures.at(1); };
            _this.getEPackage_EFactoryInstance = function () { return _this.EPackageEClass.eStructuralFeatures.at(2); };
            _this.getEPackage_EClassifiers = function () { return _this.EPackageEClass.eStructuralFeatures.at(3); };
            _this.getEPackage_ESubpackages = function () { return _this.EPackageEClass.eStructuralFeatures.at(4); };
            _this.getEPackage_ESuperPackage = function () { return _this.EPackageEClass.eStructuralFeatures.at(5); };
            _this.getEPackage__GetEClassifier__Name = function () { return _this.EPackageEClass.eOperations.at(0); };
            _this.getETypedElement = function () { return _this.ETypedElementEClass; };
            _this.getETypedElement_Ordered = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(0); };
            _this.getETypedElement_Unique = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(1); };
            _this.getETypedElement_LowerBound = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(2); };
            _this.getETypedElement_UpperBound = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(3); };
            _this.getETypedElement_Many = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(4); };
            _this.getETypedElement_Required = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(5); };
            _this.getETypedElement_EType = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(6); };
            _this.getETypedElement_EGenericType = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(7); };
            _this.getETypeParameter = function () { return _this.ETypeParameterEClass; };
            _this.getETypeParameter_EBounds = function () { return _this.ETypeParameterEClass.eStructuralFeatures.at(0); };
            _this.getEClass = function () { return _this.EClassEClass; };
            _this.getEClass_Abstract = function () { return _this.EClassEClass.eStructuralFeatures.at(0); };
            _this.getEClass_Interface = function () { return _this.EClassEClass.eStructuralFeatures.at(1); };
            _this.getEClass_ESuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(2); };
            _this.getEClass_EOperations = function () { return _this.EClassEClass.eStructuralFeatures.at(3); };
            _this.getEClass_EAllAttributes = function () { return _this.EClassEClass.eStructuralFeatures.at(4); };
            _this.getEClass_EAllReferences = function () { return _this.EClassEClass.eStructuralFeatures.at(5); };
            _this.getEClass_EReferences = function () { return _this.EClassEClass.eStructuralFeatures.at(6); };
            _this.getEClass_EAttributes = function () { return _this.EClassEClass.eStructuralFeatures.at(7); };
            _this.getEClass_EAllContainments = function () { return _this.EClassEClass.eStructuralFeatures.at(8); };
            _this.getEClass_EAllOperations = function () { return _this.EClassEClass.eStructuralFeatures.at(9); };
            _this.getEClass_EAllStructuralFeatures = function () { return _this.EClassEClass.eStructuralFeatures.at(10); };
            _this.getEClass_EAllSuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(11); };
            _this.getEClass_EIDAttribute = function () { return _this.EClassEClass.eStructuralFeatures.at(12); };
            _this.getEClass_EStructuralFeatures = function () { return _this.EClassEClass.eStructuralFeatures.at(13); };
            _this.getEClass_EGenericSuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(14); };
            _this.getEClass_EAllGenericSuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(15); };
            _this.getEClass__IsSuperTypeOf__SomeClass = function () { return _this.EClassEClass.eOperations.at(0); };
            _this.getEClass__GetFeatureCount__ = function () { return _this.EClassEClass.eOperations.at(1); };
            _this.getEClass__GetEStructuralFeature__FeatureID = function () { return _this.EClassEClass.eOperations.at(2); };
            _this.getEClass__GetFeatureID__Feature = function () { return _this.EClassEClass.eOperations.at(3); };
            _this.getEClass__GetEStructuralFeature__FeatureName = function () { return _this.EClassEClass.eOperations.at(4); };
            _this.getEClass__GetOperationCount__ = function () { return _this.EClassEClass.eOperations.at(5); };
            _this.getEClass__GetEOperation__OperationID = function () { return _this.EClassEClass.eOperations.at(6); };
            _this.getEClass__GetOperationID__Operation = function () { return _this.EClassEClass.eOperations.at(7); };
            _this.getEClass__GetOverride__Operation = function () { return _this.EClassEClass.eOperations.at(8); };
            _this.getEClass__GetFeatureType__Feature = function () { return _this.EClassEClass.eOperations.at(9); };
            _this.getEDataType = function () { return _this.EDataTypeEClass; };
            _this.getEDataType_Serializable = function () { return _this.EDataTypeEClass.eStructuralFeatures.at(0); };
            _this.getEOperation = function () { return _this.EOperationEClass; };
            _this.getEOperation_EContainingClass = function () { return _this.EOperationEClass.eStructuralFeatures.at(0); };
            _this.getEOperation_ETypeParameters = function () { return _this.EOperationEClass.eStructuralFeatures.at(1); };
            _this.getEOperation_EParameters = function () { return _this.EOperationEClass.eStructuralFeatures.at(2); };
            _this.getEOperation_EExceptions = function () { return _this.EOperationEClass.eStructuralFeatures.at(3); };
            _this.getEOperation_EGenericExceptions = function () { return _this.EOperationEClass.eStructuralFeatures.at(4); };
            _this.getEOperation__GetOperationID__ = function () { return _this.EOperationEClass.eOperations.at(0); };
            _this.getEOperation__IsOverrideOf__SomeOperation = function () { return _this.EOperationEClass.eOperations.at(1); };
            _this.getEParameter = function () { return _this.EParameterEClass; };
            _this.getEParameter_EOperation = function () { return _this.EParameterEClass.eStructuralFeatures.at(0); };
            _this.getEStructuralFeature = function () { return _this.EStructuralFeatureEClass; };
            _this.getEStructuralFeature_Changeable = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(0); };
            _this.getEStructuralFeature_Volatile = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(1); };
            _this.getEStructuralFeature_Transient = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(2); };
            _this.getEStructuralFeature_DefaultValueLiteral = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(3); };
            _this.getEStructuralFeature_DefaultValue = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(4); };
            _this.getEStructuralFeature_Unsettable = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(5); };
            _this.getEStructuralFeature_Derived = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(6); };
            _this.getEStructuralFeature_EContainingClass = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(7); };
            _this.getEStructuralFeature__GetFeatureID__ = function () { return _this.EStructuralFeatureEClass.eOperations.at(0); };
            _this.getEStructuralFeature__GetContainerClass__ = function () { return _this.EStructuralFeatureEClass.eOperations.at(1); };
            _this.getEEnum = function () { return _this.EEnumEClass; };
            _this.getEEnum_ELiterals = function () { return _this.EEnumEClass.eStructuralFeatures.at(0); };
            _this.getEEnum__GetEEnumLiteral__Name = function () { return _this.EEnumEClass.eOperations.at(0); };
            _this.getEEnum__GetEEnumLiteral__Value = function () { return _this.EEnumEClass.eOperations.at(1); };
            _this.getEEnum__GetEEnumLiteralByLiteral__Literal = function () { return _this.EEnumEClass.eOperations.at(2); };
            _this.getEAttribute = function () { return _this.EAttributeEClass; };
            _this.getEAttribute_ID = function () { return _this.EAttributeEClass.eStructuralFeatures.at(0); };
            _this.getEAttribute_EAttributeType = function () { return _this.EAttributeEClass.eStructuralFeatures.at(1); };
            _this.getEReference = function () { return _this.EReferenceEClass; };
            _this.getEReference_Containment = function () { return _this.EReferenceEClass.eStructuralFeatures.at(0); };
            _this.getEReference_Container = function () { return _this.EReferenceEClass.eStructuralFeatures.at(1); };
            _this.getEReference_ResolveProxies = function () { return _this.EReferenceEClass.eStructuralFeatures.at(2); };
            _this.getEReference_EOpposite = function () { return _this.EReferenceEClass.eStructuralFeatures.at(3); };
            _this.getEReference_EReferenceType = function () { return _this.EReferenceEClass.eStructuralFeatures.at(4); };
            _this.getEReference_EKeys = function () { return _this.EReferenceEClass.eStructuralFeatures.at(5); };
            _this.getEBigDecimal = function () { return _this.EBigDecimalEDataType; };
            _this.getEBigInteger = function () { return _this.EBigIntegerEDataType; };
            _this.getEBoolean = function () { return _this.EBooleanEDataType; };
            _this.getEBooleanObject = function () { return _this.EBooleanObjectEDataType; };
            _this.getEByte = function () { return _this.EByteEDataType; };
            _this.getEByteArray = function () { return _this.EByteArrayEDataType; };
            _this.getEByteObject = function () { return _this.EByteObjectEDataType; };
            _this.getEChar = function () { return _this.ECharEDataType; };
            _this.getECharacterObject = function () { return _this.ECharacterObjectEDataType; };
            _this.getEDate = function () { return _this.EDateEDataType; };
            _this.getEDiagnosticChain = function () { return _this.EDiagnosticChainEDataType; };
            _this.getEDouble = function () { return _this.EDoubleEDataType; };
            _this.getEDoubleObject = function () { return _this.EDoubleObjectEDataType; };
            _this.getEEList = function () { return _this.EEListEDataType; };
            _this.getEEnumerator = function () { return _this.EEnumeratorEDataType; };
            _this.getEFeatureMap = function () { return _this.EFeatureMapEDataType; };
            _this.getEFeatureMapEntry = function () { return _this.EFeatureMapEntryEDataType; };
            _this.getEFloat = function () { return _this.EFloatEDataType; };
            _this.getEFloatObject = function () { return _this.EFloatObjectEDataType; };
            _this.getEInt = function () { return _this.EIntEDataType; };
            _this.getEIntegerObject = function () { return _this.EIntegerObjectEDataType; };
            _this.getEJavaClass = function () { return _this.EJavaClassEDataType; };
            _this.getEJavaObject = function () { return _this.EJavaObjectEDataType; };
            _this.getELong = function () { return _this.ELongEDataType; };
            _this.getELongObject = function () { return _this.ELongObjectEDataType; };
            _this.getEMap = function () { return _this.EMapEDataType; };
            _this.getEResource = function () { return _this.EResourceEDataType; };
            _this.getEResourceSet = function () { return _this.EResourceSetEDataType; };
            _this.getEShort = function () { return _this.EShortEDataType; };
            _this.getEShortObject = function () { return _this.EShortObjectEDataType; };
            _this.getEString = function () { return _this.EStringEDataType; };
            _this.getETreeIterator = function () { return _this.ETreeIteratorEDataType; };
            _this.getEInvocationTargetException = function () { return _this.EInvocationTargetExceptionEDataType; };
            return _this;
            /*
            public static Literals = {
                EATTRIBUTE: EcorePackageImpl.eINSTANCE.getEAttribute(),
                
                EANNOTATION: EcorePackageImpl.eINSTANCE.getEAnnotation_(),
                
                ECLASS: EcorePackageImpl.eINSTANCE.getEClass(),
                
                ECLASSIFIER: EcorePackageImpl.eINSTANCE.getEClassifier_(),
                
                EDATATYPE: EcorePackageImpl.eINSTANCE.getEDataType(),
                
                EENUM: EcorePackageImpl.eINSTANCE.getEEnum(),
                
                EENUMLITERAL: EcorePackageImpl.eINSTANCE.getEEnumLiteral(),
                
                EFACTORY: EcorePackageImpl.eINSTANCE.getEFactory(),
                
                EMODELELEMENT: EcorePackageImpl.eINSTANCE.getEModelElement(),
                
                ENAMEDELEMENT: EcorePackageImpl.eINSTANCE.getENamedElement(),
                
                EOBJECT: EcorePackageImpl.eINSTANCE.getEObject(),
                
                EOPERATION: EcorePackageImpl.eINSTANCE.getEOperation(),
                
                EPACKAGE: EcorePackageImpl.eINSTANCE.getEPackage(),
                
                EPARAMETER: EcorePackageImpl.eINSTANCE.getEParameter(),
                
                EREFERENCE: EcorePackageImpl.eINSTANCE.getEReference(),
                
                ESTRUCTURALFEATURE: EcorePackageImpl.eINSTANCE.getEStructuralFeature(),
                
                ETYPEDELEMENT: EcorePackageImpl.eINSTANCE.getETypedElement(),
                
                EBIGDECIMAL: EcorePackageImpl.eINSTANCE.getEBigDecimal(),
                EBIGINTEGER: EcorePackageImpl.eINSTANCE.getEBigInteger(),
                EBOOLEAN: EcorePackageImpl.eINSTANCE.getEBoolean(),
                EBOOLEANOBJECT: EcorePackageImpl.eINSTANCE.getEBooleanObject(),
                EBYTE: EcorePackageImpl.eINSTANCE.getEByte(),
                EBYTEARRAY: EcorePackageImpl.eINSTANCE.getEByteArray(),
                EBYTEOBJECT: EcorePackageImpl.eINSTANCE.getEByteObject(),
                ECHAR: EcorePackageImpl.eINSTANCE.getEChar(),
                ECHARACTEROBJECT: EcorePackageImpl.eINSTANCE.getECharacterObject(),
                EDATE: EcorePackageImpl.eINSTANCE.getEDate(),
                EDIAGNOSTICCHAIN: EcorePackageImpl.eINSTANCE.getEDiagnosticChain(),
                EDOUBLE: EcorePackageImpl.eINSTANCE.getEDouble(),
                EDOUBLEOBJECT: EcorePackageImpl.eINSTANCE.getEDoubleObject(),
                EELIST: EcorePackageImpl.eINSTANCE.getEEList(),
                EENUMERATOR: EcorePackageImpl.eINSTANCE.getEEnumerator(),
                EFEATUREMAP: EcorePackageImpl.eINSTANCE.getEFeatureMap(),
                EFEATUREMAPENTRY: EcorePackageImpl.eINSTANCE.getEFeatureMapEntry(),
                EFLOAT: EcorePackageImpl.eINSTANCE.getEFloat(),
                EFLOATOBJECT: EcorePackageImpl.eINSTANCE.getEFloatObject(),
                EINT: EcorePackageImpl.eINSTANCE.getEInt(),
                EINTEGEROBJECT: EcorePackageImpl.eINSTANCE.getEIntegerObject(),
                EJAVACLASS: EcorePackageImpl.eINSTANCE.getEJavaClass(),
                EJAVAOBJECT: EcorePackageImpl.eINSTANCE.getEJavaObject(),
                ELONG: EcorePackageImpl.eINSTANCE.getELong(),
                ELONGOBJECT: EcorePackageImpl.eINSTANCE.getELongObject(),
                EMAP: EcorePackageImpl.eINSTANCE.getEMap(),
                ERESOURCE: EcorePackageImpl.eINSTANCE.getEResource(),
                ERESOURCESET: EcorePackageImpl.eINSTANCE.getEResourceSet(),
                ESHORT: EcorePackageImpl.eINSTANCE.getEShort(),
                ESHORTOBJECT: EcorePackageImpl.eINSTANCE.getEShortObject(),
                ESTRING: EcorePackageImpl.eINSTANCE.getEString(),
                ESTRINGTOSTRINGMAPENTRY: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry(),
                
                ETREEITERATOR: EcorePackageImpl.eINSTANCE.getETreeIterator(),
                EGENERICTYPE: EcorePackageImpl.eINSTANCE.getEGenericType(),
                
                ETYPEPARAMETER: EcorePackageImpl.eINSTANCE.getETypeParameter(),
                
                EINVOCATIONTARGETEXCEPTION: EcorePackageImpl.eINSTANCE.getEInvocationTargetException(),
                EMODELELEMENT_EANNOTATIONS: EcorePackageImpl.eINSTANCE.getEModelElement_EAnnotations(),
                ESTRINGTOSTRINGMAPENTRY_KEY: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry_Key(),
                ESTRINGTOSTRINGMAPENTRY_VALUE: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry_Value(),
                EGENERICTYPE_EUPPERBOUND: EcorePackageImpl.eINSTANCE.getEGenericType_EUpperBound(),
                EGENERICTYPE_ETYPEARGUMENTS: EcorePackageImpl.eINSTANCE.getEGenericType_ETypeArguments(),
                EGENERICTYPE_ERAWTYPE: EcorePackageImpl.eINSTANCE.getEGenericType_ERawType(),
                EGENERICTYPE_ELOWERBOUND: EcorePackageImpl.eINSTANCE.getEGenericType_ELowerBound(),
                EGENERICTYPE_ETYPEPARAMETER: EcorePackageImpl.eINSTANCE.getEGenericType_ETypeParameter(),
                EGENERICTYPE_ECLASSIFIER: EcorePackageImpl.eINSTANCE.getEGenericType_EClassifier(),
                EANNOTATION_SOURCE: EcorePackageImpl.eINSTANCE.getEAnnotation_Source(),
                EANNOTATION_DETAILS: EcorePackageImpl.eINSTANCE.getEAnnotation_Details(),
                EANNOTATION_EMODELELEMENT: EcorePackageImpl.eINSTANCE.getEAnnotation_EModelElement(),
                EANNOTATION_CONTENTS: EcorePackageImpl.eINSTANCE.getEAnnotation_Contents(),
                EANNOTATION_REFERENCES: EcorePackageImpl.eINSTANCE.getEAnnotation_References(),
                EFACTORY_EPACKAGE: EcorePackageImpl.eINSTANCE.getEFactory_EPackage(),
                ENAMEDELEMENT_NAME: EcorePackageImpl.eINSTANCE.getENamedElement_Name(),
                ECLASSIFIER_INSTANCECLASSNAME: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceClassName(),
                ECLASSIFIER_INSTANCECLASS: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceClass(),
                ECLASSIFIER_DEFAULTVALUE: EcorePackageImpl.eINSTANCE.getEClassifier_DefaultValue(),
                ECLASSIFIER_INSTANCETYPENAME: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceTypeName(),
                ECLASSIFIER_EPACKAGE: EcorePackageImpl.eINSTANCE.getEClassifier_EPackage(),
                ECLASSIFIER_ETYPEPARAMETERS: EcorePackageImpl.eINSTANCE.getEClassifier_ETypeParameters(),
                EENUMLITERAL_VALUE: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Value(),
                EENUMLITERAL_INSTANCE: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Instance(),
                EENUMLITERAL_LITERAL: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Literal(),
                EENUMLITERAL_EENUM: EcorePackageImpl.eINSTANCE.getEEnumLiteral_EEnum(),
                EPACKAGE_NSURI: EcorePackageImpl.eINSTANCE.getEPackage_NsURI(),
                EPACKAGE_NSPREFIX: EcorePackageImpl.eINSTANCE.getEPackage_NsPrefix(),
                EPACKAGE_EFACTORYINSTANCE: EcorePackageImpl.eINSTANCE.getEPackage_EFactoryInstance(),
                EPACKAGE_ECLASSIFIERS: EcorePackageImpl.eINSTANCE.getEPackage_EClassifiers(),
                EPACKAGE_ESUBPACKAGES: EcorePackageImpl.eINSTANCE.getEPackage_ESubpackages(),
                EPACKAGE_ESUPERPACKAGE: EcorePackageImpl.eINSTANCE.getEPackage_ESuperPackage(),
                ETYPEDELEMENT_ORDERED: EcorePackageImpl.eINSTANCE.getETypedElement_Ordered(),
                ETYPEDELEMENT_UNIQUE: EcorePackageImpl.eINSTANCE.getETypedElement_Unique(),
                ETYPEDELEMENT_LOWERBOUND: EcorePackageImpl.eINSTANCE.getETypedElement_LowerBound(),
                ETYPEDELEMENT_UPPERBOUND: EcorePackageImpl.eINSTANCE.getETypedElement_UpperBound(),
                ETYPEDELEMENT_MANY: EcorePackageImpl.eINSTANCE.getETypedElement_Many(),
                ETYPEDELEMENT_REQUIRED: EcorePackageImpl.eINSTANCE.getETypedElement_Required(),
                ETYPEDELEMENT_ETYPE: EcorePackageImpl.eINSTANCE.getETypedElement_EType(),
                ETYPEDELEMENT_EGENERICTYPE: EcorePackageImpl.eINSTANCE.getETypedElement_EGenericType(),
                ETYPEPARAMETER_EBOUNDS: EcorePackageImpl.eINSTANCE.getETypeParameter_EBounds(),
                ECLASS_ABSTRACT: EcorePackageImpl.eINSTANCE.getEClass_Abstract(),
                ECLASS_INTERFACE: EcorePackageImpl.eINSTANCE.getEClass_Interface(),
                ECLASS_ESUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_ESuperTypes(),
                ECLASS_EOPERATIONS: EcorePackageImpl.eINSTANCE.getEClass_EOperations(),
                ECLASS_EALLATTRIBUTES: EcorePackageImpl.eINSTANCE.getEClass_EAllAttributes(),
                ECLASS_EALLREFERENCES: EcorePackageImpl.eINSTANCE.getEClass_EAllReferences(),
                ECLASS_EREFERENCES: EcorePackageImpl.eINSTANCE.getEClass_EReferences(),
                ECLASS_EATTRIBUTES: EcorePackageImpl.eINSTANCE.getEClass_EAttributes(),
                ECLASS_EALLCONTAINMENTS: EcorePackageImpl.eINSTANCE.getEClass_EAllContainments(),
                ECLASS_EALLOPERATIONS: EcorePackageImpl.eINSTANCE.getEClass_EAllOperations(),
                ECLASS_EALLSTRUCTURALFEATURES: EcorePackageImpl.eINSTANCE.getEClass_EAllStructuralFeatures(),
                ECLASS_EALLSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EAllSuperTypes(),
                ECLASS_EIDATTRIBUTE: EcorePackageImpl.eINSTANCE.getEClass_EIDAttribute(),
                ECLASS_ESTRUCTURALFEATURES: EcorePackageImpl.eINSTANCE.getEClass_EStructuralFeatures(),
                ECLASS_EGENERICSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EGenericSuperTypes(),
                ECLASS_EALLGENERICSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EAllGenericSuperTypes(),
                EDATATYPE_SERIALIZABLE: EcorePackageImpl.eINSTANCE.getEDataType_Serializable(),
                EOPERATION_ECONTAININGCLASS: EcorePackageImpl.eINSTANCE.getEOperation_EContainingClass(),
                EOPERATION_ETYPEPARAMETERS: EcorePackageImpl.eINSTANCE.getEOperation_ETypeParameters(),
                EOPERATION_EPARAMETERS: EcorePackageImpl.eINSTANCE.getEOperation_EParameters(),
                EOPERATION_EEXCEPTIONS: EcorePackageImpl.eINSTANCE.getEOperation_EExceptions(),
                EOPERATION_EGENERICEXCEPTIONS: EcorePackageImpl.eINSTANCE.getEOperation_EGenericExceptions(),
                EPARAMETER_EOPERATION: EcorePackageImpl.eINSTANCE.getEParameter_EOperation(),
                ESTRUCTURALFEATURE_CHANGEABLE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Changeable(),
                ESTRUCTURALFEATURE_VOLATILE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Volatile(),
                ESTRUCTURALFEATURE_TRANSIENT: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Transient(),
                ESTRUCTURALFEATURE_DEFAULTVALUELITERAL: EcorePackageImpl.eINSTANCE.getEStructuralFeature_DefaultValueLiteral(),
                ESTRUCTURALFEATURE_DEFAULTVALUE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_DefaultValue(),
                ESTRUCTURALFEATURE_UNSETTABLE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Unsettable(),
                ESTRUCTURALFEATURE_DERIVED: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Derived(),
                ESTRUCTURALFEATURE_ECONTAININGCLASS: EcorePackageImpl.eINSTANCE.getEStructuralFeature_EContainingClass(),
                EENUM_ELITERALS: EcorePackageImpl.eINSTANCE.getEEnum_ELiterals(),
                EATTRIBUTE_ID: EcorePackageImpl.eINSTANCE.getEAttribute_ID(),
                EATTRIBUTE_EATTRIBUTETYPE: EcorePackageImpl.eINSTANCE.getEAttribute_EAttributeType(),
                EREFERENCE_CONTAINMENT: EcorePackageImpl.eINSTANCE.getEReference_Containment(),
                EREFERENCE_CONTAINER: EcorePackageImpl.eINSTANCE.getEReference_Container(),
                EREFERENCE_RESOLVEPROXIES: EcorePackageImpl.eINSTANCE.getEReference_ResolveProxies(),
                EREFERENCE_EOPPOSITE: EcorePackageImpl.eINSTANCE.getEReference_EOpposite(),
                EREFERENCE_EREFERENCETYPE: EcorePackageImpl.eINSTANCE.getEReference_EReferenceType(),
                EREFERENCE_EKEYS: EcorePackageImpl.eINSTANCE.getEReference_EKeys()
            }
            */
        }
        /*
        constructor(){
            //no private constructors in TypeScript
            super(EcorePackageImpl.eNS_URI, EcoreFactoryImpl.eINSTANCE as any as EFactory);
        }
        */
        EcorePackageImpl.init = function () {
            // Obtain or create and register package
            var theEcorePackage = new EcorePackageImpl();
            theEcorePackage.ecorePackage = theEcorePackage;
            theEcorePackage.ecoreFactory = EcoreFactoryImpl_1.EcoreFactoryImpl.eINSTANCE;
            // Create package meta-data objects
            theEcorePackage.createPackageContents();
            // Initialize created meta-data
            theEcorePackage.initializePackageContents();
            return theEcorePackage;
        };
        EcorePackageImpl.eNAME = "ecore";
        EcorePackageImpl.eNS_URI = "http://www.eclipse.org/emf/2002/Ecore";
        EcorePackageImpl.eNS_PREFIX = "ecore";
        EcorePackageImpl.EOBJECT = 10;
        EcorePackageImpl.EOBJECT_FEATURE_COUNT = 0;
        EcorePackageImpl.EOBJECT_OPERATION_COUNT = 15;
        EcorePackageImpl.EOBJECT___ECLASS = 0;
        EcorePackageImpl.EOBJECT___EISPROXY = 1;
        EcorePackageImpl.EOBJECT___ERESOURCE = 2;
        EcorePackageImpl.EOBJECT___ECONTAINER = 3;
        EcorePackageImpl.EOBJECT___ECONTAININGFEATURE = 4;
        EcorePackageImpl.EOBJECT___ECONTAINMENTFEATURE = 5;
        EcorePackageImpl.EOBJECT___ECONTENTS = 6;
        EcorePackageImpl.EOBJECT___EALLCONTENTS = 7;
        EcorePackageImpl.EOBJECT___ECROSSREFERENCES = 8;
        EcorePackageImpl.EOBJECT___EGET__FEATURE = 9;
        EcorePackageImpl.EOBJECT___EGET__FEATURE__RESOLVE = 10;
        EcorePackageImpl.EOBJECT___ESET__FEATURE__NEWVALUE = 11;
        EcorePackageImpl.EOBJECT___EISSET__FEATURE = 12;
        EcorePackageImpl.EOBJECT___EUNSET__FEATURE = 13;
        EcorePackageImpl.EOBJECT___EINVOKE__OPERATION__ARGUMENTS = 14;
        EcorePackageImpl.EMODELELEMENT = 8;
        EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT = 1;
        EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT = 1;
        EcorePackageImpl.EMODELELEMENT_EANNOTATIONS = 0;
        EcorePackageImpl.EMODELELEMENT___GETEANNOTATION__SOURCE = 0;
        EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY = 48;
        EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_FEATURE_COUNT = 2;
        EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_OPERATION_COUNT = 0;
        EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_KEY = 0;
        EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_VALUE = 1;
        EcorePackageImpl.EGENERICTYPE = 50;
        EcorePackageImpl.EGENERICTYPE_FEATURE_COUNT = 6;
        EcorePackageImpl.EGENERICTYPE_OPERATION_COUNT = 1;
        EcorePackageImpl.EGENERICTYPE_EUPPERBOUND = 0;
        EcorePackageImpl.EGENERICTYPE_ETYPEARGUMENTS = 1;
        EcorePackageImpl.EGENERICTYPE_ERAWTYPE = 2;
        EcorePackageImpl.EGENERICTYPE_ELOWERBOUND = 3;
        EcorePackageImpl.EGENERICTYPE_ETYPEPARAMETER = 4;
        EcorePackageImpl.EGENERICTYPE_ECLASSIFIER = 5;
        EcorePackageImpl.EGENERICTYPE___ISINSTANCE__OBJECT = 0;
        EcorePackageImpl.EANNOTATION = 1;
        EcorePackageImpl.EANNOTATION_FEATURE_COUNT = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 5;
        EcorePackageImpl.EANNOTATION_OPERATION_COUNT = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 0;
        EcorePackageImpl.EANNOTATION_EANNOTATIONS = 0;
        EcorePackageImpl.EANNOTATION_SOURCE = 1;
        EcorePackageImpl.EANNOTATION_DETAILS = 2;
        EcorePackageImpl.EANNOTATION_EMODELELEMENT = 3;
        EcorePackageImpl.EANNOTATION_CONTENTS = 4;
        EcorePackageImpl.EANNOTATION_REFERENCES = 5;
        EcorePackageImpl.EFACTORY = 7;
        EcorePackageImpl.EFACTORY_FEATURE_COUNT = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 1;
        EcorePackageImpl.EFACTORY_OPERATION_COUNT = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 3;
        EcorePackageImpl.EFACTORY_EANNOTATIONS = 0;
        EcorePackageImpl.EFACTORY_EPACKAGE = 1;
        EcorePackageImpl.EFACTORY___CREATE__ECLASS = 0;
        EcorePackageImpl.EFACTORY___CREATEFROMSTRING__EDATATYPE__LITERALVALUE = 1;
        EcorePackageImpl.EFACTORY___CONVERTTOSTRING__EDATATYPE__INSTANCEVALUE = 2;
        EcorePackageImpl.ENAMEDELEMENT = 9;
        EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 1;
        EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 0;
        EcorePackageImpl.ENAMEDELEMENT_EANNOTATIONS = 0;
        EcorePackageImpl.ENAMEDELEMENT_NAME = 1;
        EcorePackageImpl.ECLASSIFIER = 3;
        EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 6;
        EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 2;
        EcorePackageImpl.ECLASSIFIER_EANNOTATIONS = 0;
        EcorePackageImpl.ECLASSIFIER_NAME = 1;
        EcorePackageImpl.ECLASSIFIER_INSTANCECLASSNAME = 2;
        EcorePackageImpl.ECLASSIFIER_INSTANCECLASS = 3;
        EcorePackageImpl.ECLASSIFIER_DEFAULTVALUE = 4;
        EcorePackageImpl.ECLASSIFIER_INSTANCETYPENAME = 5;
        EcorePackageImpl.ECLASSIFIER_EPACKAGE = 6;
        EcorePackageImpl.ECLASSIFIER_ETYPEPARAMETERS = 7;
        EcorePackageImpl.ECLASSIFIER___ISINSTANCE__OBJECT = 0;
        EcorePackageImpl.ECLASSIFIER___GETCLASSIFIERID = 1;
        EcorePackageImpl.EENUMLITERAL = 6;
        EcorePackageImpl.EENUMLITERAL_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 4;
        EcorePackageImpl.EENUMLITERAL_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageImpl.EENUMLITERAL_EANNOTATIONS = 0;
        EcorePackageImpl.EENUMLITERAL_NAME = 1;
        EcorePackageImpl.EENUMLITERAL_VALUE = 2;
        EcorePackageImpl.EENUMLITERAL_INSTANCE = 3;
        EcorePackageImpl.EENUMLITERAL_LITERAL = 4;
        EcorePackageImpl.EENUMLITERAL_EENUM = 5;
        EcorePackageImpl.EPACKAGE = 12;
        EcorePackageImpl.EPACKAGE_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 6;
        EcorePackageImpl.EPACKAGE_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 1;
        EcorePackageImpl.EPACKAGE_EANNOTATIONS = 0;
        EcorePackageImpl.EPACKAGE_NAME = 1;
        EcorePackageImpl.EPACKAGE_NSURI = 2;
        EcorePackageImpl.EPACKAGE_NSPREFIX = 3;
        EcorePackageImpl.EPACKAGE_EFACTORYINSTANCE = 4;
        EcorePackageImpl.EPACKAGE_ECLASSIFIERS = 5;
        EcorePackageImpl.EPACKAGE_ESUBPACKAGES = 6;
        EcorePackageImpl.EPACKAGE_ESUPERPACKAGE = 7;
        EcorePackageImpl.EPACKAGE___GETECLASSIFIER__NAME = 0;
        EcorePackageImpl.ETYPEDELEMENT = 16;
        EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 8;
        EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageImpl.ETYPEDELEMENT_EANNOTATIONS = 0;
        EcorePackageImpl.ETYPEDELEMENT_NAME = 1;
        EcorePackageImpl.ETYPEDELEMENT_ORDERED = 2;
        EcorePackageImpl.ETYPEDELEMENT_UNIQUE = 3;
        EcorePackageImpl.ETYPEDELEMENT_LOWERBOUND = 4;
        EcorePackageImpl.ETYPEDELEMENT_UPPERBOUND = 5;
        EcorePackageImpl.ETYPEDELEMENT_MANY = 6;
        EcorePackageImpl.ETYPEDELEMENT_REQUIRED = 7;
        EcorePackageImpl.ETYPEDELEMENT_ETYPE = 8;
        EcorePackageImpl.ETYPEDELEMENT_EGENERICTYPE = 9;
        EcorePackageImpl.ETYPEPARAMETER = 51;
        EcorePackageImpl.ETYPEPARAMETER_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 1;
        EcorePackageImpl.ETYPEPARAMETER_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageImpl.ETYPEPARAMETER_EANNOTATIONS = 0;
        EcorePackageImpl.ETYPEPARAMETER_NAME = 1;
        EcorePackageImpl.ETYPEPARAMETER_EBOUNDS = 2;
        EcorePackageImpl.ECLASS = 2;
        EcorePackageImpl.ECLASS_FEATURE_COUNT = EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT + 16;
        EcorePackageImpl.ECLASS_OPERATION_COUNT = EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT + 10;
        EcorePackageImpl.ECLASS_EANNOTATIONS = 0;
        EcorePackageImpl.ECLASS_NAME = 1;
        EcorePackageImpl.ECLASS_INSTANCECLASSNAME = 2;
        EcorePackageImpl.ECLASS_INSTANCECLASS = 3;
        EcorePackageImpl.ECLASS_DEFAULTVALUE = 4;
        EcorePackageImpl.ECLASS_INSTANCETYPENAME = 5;
        EcorePackageImpl.ECLASS_EPACKAGE = 6;
        EcorePackageImpl.ECLASS_ETYPEPARAMETERS = 7;
        EcorePackageImpl.ECLASS_ABSTRACT = 8;
        EcorePackageImpl.ECLASS_INTERFACE = 9;
        EcorePackageImpl.ECLASS_ESUPERTYPES = 10;
        EcorePackageImpl.ECLASS_EOPERATIONS = 11;
        EcorePackageImpl.ECLASS_EALLATTRIBUTES = 12;
        EcorePackageImpl.ECLASS_EALLREFERENCES = 13;
        EcorePackageImpl.ECLASS_EREFERENCES = 14;
        EcorePackageImpl.ECLASS_EATTRIBUTES = 15;
        EcorePackageImpl.ECLASS_EALLCONTAINMENTS = 16;
        EcorePackageImpl.ECLASS_EALLOPERATIONS = 17;
        EcorePackageImpl.ECLASS_EALLSTRUCTURALFEATURES = 18;
        EcorePackageImpl.ECLASS_EALLSUPERTYPES = 19;
        EcorePackageImpl.ECLASS_EIDATTRIBUTE = 20;
        EcorePackageImpl.ECLASS_ESTRUCTURALFEATURES = 21;
        EcorePackageImpl.ECLASS_EGENERICSUPERTYPES = 22;
        EcorePackageImpl.ECLASS_EALLGENERICSUPERTYPES = 23;
        EcorePackageImpl.ECLASS___ISSUPERTYPEOF__SOMECLASS = 0;
        EcorePackageImpl.ECLASS___GETFEATURECOUNT = 1;
        EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATUREID = 2;
        EcorePackageImpl.ECLASS___GETFEATUREID__FEATURE = 3;
        EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATURENAME = 4;
        EcorePackageImpl.ECLASS___GETOPERATIONCOUNT = 5;
        EcorePackageImpl.ECLASS___GETEOPERATION__OPERATIONID = 6;
        EcorePackageImpl.ECLASS___GETOPERATIONID__OPERATION = 7;
        EcorePackageImpl.ECLASS___GETOVERRIDE__OPERATION = 8;
        EcorePackageImpl.ECLASS___GETFEATURETYPE__FEATURE = 9;
        EcorePackageImpl.EDATATYPE = 4;
        EcorePackageImpl.EDATATYPE_FEATURE_COUNT = EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT + 1;
        EcorePackageImpl.EDATATYPE_OPERATION_COUNT = EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT + 0;
        EcorePackageImpl.EDATATYPE_EANNOTATIONS = 0;
        EcorePackageImpl.EDATATYPE_NAME = 1;
        EcorePackageImpl.EDATATYPE_INSTANCECLASSNAME = 2;
        EcorePackageImpl.EDATATYPE_INSTANCECLASS = 3;
        EcorePackageImpl.EDATATYPE_DEFAULTVALUE = 4;
        EcorePackageImpl.EDATATYPE_INSTANCETYPENAME = 5;
        EcorePackageImpl.EDATATYPE_EPACKAGE = 6;
        EcorePackageImpl.EDATATYPE_ETYPEPARAMETERS = 7;
        EcorePackageImpl.EDATATYPE_SERIALIZABLE = 8;
        EcorePackageImpl.EOPERATION = 11;
        EcorePackageImpl.EOPERATION_FEATURE_COUNT = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 5;
        EcorePackageImpl.EOPERATION_OPERATION_COUNT = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 2;
        EcorePackageImpl.EOPERATION_EANNOTATIONS = 0;
        EcorePackageImpl.EOPERATION_NAME = 1;
        EcorePackageImpl.EOPERATION_ORDERED = 2;
        EcorePackageImpl.EOPERATION_UNIQUE = 3;
        EcorePackageImpl.EOPERATION_LOWERBOUND = 4;
        EcorePackageImpl.EOPERATION_UPPERBOUND = 5;
        EcorePackageImpl.EOPERATION_MANY = 6;
        EcorePackageImpl.EOPERATION_REQUIRED = 7;
        EcorePackageImpl.EOPERATION_ETYPE = 8;
        EcorePackageImpl.EOPERATION_EGENERICTYPE = 9;
        EcorePackageImpl.EOPERATION_ECONTAININGCLASS = 10;
        EcorePackageImpl.EOPERATION_ETYPEPARAMETERS = 11;
        EcorePackageImpl.EOPERATION_EPARAMETERS = 12;
        EcorePackageImpl.EOPERATION_EEXCEPTIONS = 13;
        EcorePackageImpl.EOPERATION_EGENERICEXCEPTIONS = 14;
        EcorePackageImpl.EOPERATION___GETOPERATIONID = 0;
        EcorePackageImpl.EOPERATION___ISOVERRIDEOF__SOMEOPERATION = 1;
        EcorePackageImpl.EPARAMETER = 13;
        EcorePackageImpl.EPARAMETER_FEATURE_COUNT = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 1;
        EcorePackageImpl.EPARAMETER_OPERATION_COUNT = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageImpl.EPARAMETER_EANNOTATIONS = 0;
        EcorePackageImpl.EPARAMETER_NAME = 1;
        EcorePackageImpl.EPARAMETER_ORDERED = 2;
        EcorePackageImpl.EPARAMETER_UNIQUE = 3;
        EcorePackageImpl.EPARAMETER_LOWERBOUND = 4;
        EcorePackageImpl.EPARAMETER_UPPERBOUND = 5;
        EcorePackageImpl.EPARAMETER_MANY = 6;
        EcorePackageImpl.EPARAMETER_REQUIRED = 7;
        EcorePackageImpl.EPARAMETER_ETYPE = 8;
        EcorePackageImpl.EPARAMETER_EGENERICTYPE = 9;
        EcorePackageImpl.EPARAMETER_EOPERATION = 10;
        EcorePackageImpl.ESTRUCTURALFEATURE = 15;
        EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 8;
        EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 2;
        EcorePackageImpl.ESTRUCTURALFEATURE_EANNOTATIONS = 0;
        EcorePackageImpl.ESTRUCTURALFEATURE_NAME = 1;
        EcorePackageImpl.ESTRUCTURALFEATURE_ORDERED = 2;
        EcorePackageImpl.ESTRUCTURALFEATURE_UNIQUE = 3;
        EcorePackageImpl.ESTRUCTURALFEATURE_LOWERBOUND = 4;
        EcorePackageImpl.ESTRUCTURALFEATURE_UPPERBOUND = 5;
        EcorePackageImpl.ESTRUCTURALFEATURE_MANY = 6;
        EcorePackageImpl.ESTRUCTURALFEATURE_REQUIRED = 7;
        EcorePackageImpl.ESTRUCTURALFEATURE_ETYPE = 8;
        EcorePackageImpl.ESTRUCTURALFEATURE_EGENERICTYPE = 9;
        EcorePackageImpl.ESTRUCTURALFEATURE_CHANGEABLE = 10;
        EcorePackageImpl.ESTRUCTURALFEATURE_VOLATILE = 11;
        EcorePackageImpl.ESTRUCTURALFEATURE_TRANSIENT = 12;
        EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL = 13;
        EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUE = 14;
        EcorePackageImpl.ESTRUCTURALFEATURE_UNSETTABLE = 15;
        EcorePackageImpl.ESTRUCTURALFEATURE_DERIVED = 16;
        EcorePackageImpl.ESTRUCTURALFEATURE_ECONTAININGCLASS = 17;
        EcorePackageImpl.ESTRUCTURALFEATURE___GETFEATUREID = 0;
        EcorePackageImpl.ESTRUCTURALFEATURE___GETCONTAINERCLASS = 1;
        EcorePackageImpl.EENUM = 5;
        EcorePackageImpl.EENUM_FEATURE_COUNT = EcorePackageImpl.EDATATYPE_FEATURE_COUNT + 1;
        EcorePackageImpl.EENUM_OPERATION_COUNT = EcorePackageImpl.EDATATYPE_OPERATION_COUNT + 3;
        EcorePackageImpl.EENUM_EANNOTATIONS = 0;
        EcorePackageImpl.EENUM_NAME = 1;
        EcorePackageImpl.EENUM_INSTANCECLASSNAME = 2;
        EcorePackageImpl.EENUM_INSTANCECLASS = 3;
        EcorePackageImpl.EENUM_DEFAULTVALUE = 4;
        EcorePackageImpl.EENUM_INSTANCETYPENAME = 5;
        EcorePackageImpl.EENUM_EPACKAGE = 6;
        EcorePackageImpl.EENUM_ETYPEPARAMETERS = 7;
        EcorePackageImpl.EENUM_SERIALIZABLE = 8;
        EcorePackageImpl.EENUM_ELITERALS = 9;
        EcorePackageImpl.EENUM___GETEENUMLITERAL__NAME = 0;
        EcorePackageImpl.EENUM___GETEENUMLITERAL__VALUE = 1;
        EcorePackageImpl.EENUM___GETEENUMLITERALBYLITERAL__LITERAL = 2;
        EcorePackageImpl.EATTRIBUTE = 0;
        EcorePackageImpl.EATTRIBUTE_FEATURE_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
        EcorePackageImpl.EATTRIBUTE_OPERATION_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
        EcorePackageImpl.EATTRIBUTE_EANNOTATIONS = 0;
        EcorePackageImpl.EATTRIBUTE_NAME = 1;
        EcorePackageImpl.EATTRIBUTE_ORDERED = 2;
        EcorePackageImpl.EATTRIBUTE_UNIQUE = 3;
        EcorePackageImpl.EATTRIBUTE_LOWERBOUND = 4;
        EcorePackageImpl.EATTRIBUTE_UPPERBOUND = 5;
        EcorePackageImpl.EATTRIBUTE_MANY = 6;
        EcorePackageImpl.EATTRIBUTE_REQUIRED = 7;
        EcorePackageImpl.EATTRIBUTE_ETYPE = 8;
        EcorePackageImpl.EATTRIBUTE_EGENERICTYPE = 9;
        EcorePackageImpl.EATTRIBUTE_CHANGEABLE = 10;
        EcorePackageImpl.EATTRIBUTE_VOLATILE = 11;
        EcorePackageImpl.EATTRIBUTE_TRANSIENT = 12;
        EcorePackageImpl.EATTRIBUTE_DEFAULTVALUELITERAL = 13;
        EcorePackageImpl.EATTRIBUTE_DEFAULTVALUE = 14;
        EcorePackageImpl.EATTRIBUTE_UNSETTABLE = 15;
        EcorePackageImpl.EATTRIBUTE_DERIVED = 16;
        EcorePackageImpl.EATTRIBUTE_ECONTAININGCLASS = 17;
        EcorePackageImpl.EATTRIBUTE_ID = 18;
        EcorePackageImpl.EATTRIBUTE_EATTRIBUTETYPE = 19;
        EcorePackageImpl.EREFERENCE = 14;
        EcorePackageImpl.EREFERENCE_FEATURE_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
        EcorePackageImpl.EREFERENCE_OPERATION_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
        EcorePackageImpl.EREFERENCE_EANNOTATIONS = 0;
        EcorePackageImpl.EREFERENCE_NAME = 1;
        EcorePackageImpl.EREFERENCE_ORDERED = 2;
        EcorePackageImpl.EREFERENCE_UNIQUE = 3;
        EcorePackageImpl.EREFERENCE_LOWERBOUND = 4;
        EcorePackageImpl.EREFERENCE_UPPERBOUND = 5;
        EcorePackageImpl.EREFERENCE_MANY = 6;
        EcorePackageImpl.EREFERENCE_REQUIRED = 7;
        EcorePackageImpl.EREFERENCE_ETYPE = 8;
        EcorePackageImpl.EREFERENCE_EGENERICTYPE = 9;
        EcorePackageImpl.EREFERENCE_CHANGEABLE = 10;
        EcorePackageImpl.EREFERENCE_VOLATILE = 11;
        EcorePackageImpl.EREFERENCE_TRANSIENT = 12;
        EcorePackageImpl.EREFERENCE_DEFAULTVALUELITERAL = 13;
        EcorePackageImpl.EREFERENCE_DEFAULTVALUE = 14;
        EcorePackageImpl.EREFERENCE_UNSETTABLE = 15;
        EcorePackageImpl.EREFERENCE_DERIVED = 16;
        EcorePackageImpl.EREFERENCE_ECONTAININGCLASS = 17;
        EcorePackageImpl.EREFERENCE_CONTAINMENT = 18;
        EcorePackageImpl.EREFERENCE_CONTAINER = 19;
        EcorePackageImpl.EREFERENCE_RESOLVEPROXIES = 20;
        EcorePackageImpl.EREFERENCE_EOPPOSITE = 21;
        EcorePackageImpl.EREFERENCE_EREFERENCETYPE = 22;
        EcorePackageImpl.EREFERENCE_EKEYS = 23;
        EcorePackageImpl.EBIGDECIMAL = 17;
        EcorePackageImpl.EBIGINTEGER = 18;
        EcorePackageImpl.EBOOLEAN = 19;
        EcorePackageImpl.EBOOLEANOBJECT = 20;
        EcorePackageImpl.EBYTE = 21;
        EcorePackageImpl.EBYTEARRAY = 22;
        EcorePackageImpl.EBYTEOBJECT = 23;
        EcorePackageImpl.ECHAR = 24;
        EcorePackageImpl.ECHARACTEROBJECT = 25;
        EcorePackageImpl.EDATE = 26;
        EcorePackageImpl.EDIAGNOSTICCHAIN = 27;
        EcorePackageImpl.EDOUBLE = 28;
        EcorePackageImpl.EDOUBLEOBJECT = 29;
        EcorePackageImpl.EELIST = 30;
        EcorePackageImpl.EENUMERATOR = 31;
        EcorePackageImpl.EFEATUREMAP = 32;
        EcorePackageImpl.EFEATUREMAPENTRY = 33;
        EcorePackageImpl.EFLOAT = 34;
        EcorePackageImpl.EFLOATOBJECT = 35;
        EcorePackageImpl.EINT = 36;
        EcorePackageImpl.EINTEGEROBJECT = 37;
        EcorePackageImpl.EJAVACLASS = 38;
        EcorePackageImpl.EJAVAOBJECT = 39;
        EcorePackageImpl.ELONG = 40;
        EcorePackageImpl.ELONGOBJECT = 41;
        EcorePackageImpl.EMAP = 42;
        EcorePackageImpl.ERESOURCE = 43;
        EcorePackageImpl.ERESOURCESET = 44;
        EcorePackageImpl.ESHORT = 45;
        EcorePackageImpl.ESHORTOBJECT = 46;
        EcorePackageImpl.ESTRING = 47;
        EcorePackageImpl.ETREEITERATOR = 49;
        EcorePackageImpl.EINVOCATIONTARGETEXCEPTION = 52;
        /*Important: Call init() AFTER metaobject ids have been assigned.*/
        EcorePackageImpl.eINSTANCE = EcorePackageImpl.init();
        return EcorePackageImpl;
    }(EPackageImpl_1.EPackageImpl));
    exports.EcorePackageImpl = EcorePackageImpl;
});
