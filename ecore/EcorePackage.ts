import {EAttribute} from "./EAttribute";
import {EReference} from "./EReference";
import {EDataType} from "./EDataType";
import {EClass} from "./EClass";
import {EPackage} from "./EPackage";
export interface EcorePackage extends EPackage {
	getEModelElement():EClass;
	getEModelElement_EAnnotations():EReference;
	
	getENamedElement():EClass;
	
	getENamedElement_Name():EAttribute;
	getETypedElement():EClass;
	getETypedElement_EType():EReference;
	getETypedElement_EGenericType():EReference;
	
	getETypedElement_Ordered():EAttribute;
	getETypedElement_Unique():EAttribute;
	getETypedElement_LowerBound():EAttribute;
	getETypedElement_UpperBound():EAttribute;
	getETypedElement_Many():EAttribute;
	getETypedElement_Required():EAttribute;
	getEStructuralFeature():EClass;
	getEStructuralFeature_EContainingClass():EReference;
	
	getEStructuralFeature_Changeable():EAttribute;
	getEStructuralFeature_Volatile():EAttribute;
	getEStructuralFeature_Transient():EAttribute;
	getEStructuralFeature_DefaultValueLiteral():EAttribute;
	getEStructuralFeature_DefaultValue():EAttribute;
	getEStructuralFeature_Unsettable():EAttribute;
	getEStructuralFeature_Derived():EAttribute;
	getEAttribute():EClass;
	getEAttribute_EAttributeType():EReference;
	
	getEAttribute_ID():EAttribute;
	getEAnnotation_():EClass;
	getEAnnotation_Details():EReference;
	getEAnnotation_EModelElement():EReference;
	getEAnnotation_Contents():EReference;
	getEAnnotation_References():EReference;
	
	getEAnnotation_Source():EAttribute;
	getEClassifier_():EClass;
	getEClassifier_EPackage():EReference;
	getEClassifier_ETypeParameters():EReference;
	
	getEClassifier_InstanceClassName():EAttribute;
	getEClassifier_InstanceClass():EAttribute;
	getEClassifier_DefaultValue():EAttribute;
	getEClassifier_InstanceTypeName():EAttribute;
	getEClass():EClass;
	getEClass_ESuperTypes():EReference;
	getEClass_EOperations():EReference;
	getEClass_EAllAttributes():EReference;
	getEClass_EAllReferences():EReference;
	getEClass_EReferences():EReference;
	getEClass_EAttributes():EReference;
	getEClass_EAllContainments():EReference;
	getEClass_EAllOperations():EReference;
	getEClass_EAllStructuralFeatures():EReference;
	getEClass_EAllSuperTypes():EReference;
	getEClass_EIDAttribute():EReference;
	getEClass_EStructuralFeatures():EReference;
	getEClass_EGenericSuperTypes():EReference;
	getEClass_EAllGenericSuperTypes():EReference;
	
	getEClass_Abstract():EAttribute;
	getEClass_Interface():EAttribute;
	getEDataType():EClass;
	
	getEDataType_Serializable():EAttribute;
	getEEnum():EClass;
	getEEnum_ELiterals():EReference;
	
	getEEnumLiteral():EClass;
	getEEnumLiteral_EEnum():EReference;
	
	getEEnumLiteral_Value():EAttribute;
	getEEnumLiteral_Instance():EAttribute;
	getEEnumLiteral_Literal():EAttribute;
	getEFactory():EClass;
	getEFactory_EPackage():EReference;
	
	getEObject():EClass;
	
	getEOperation():EClass;
	getEOperation_EContainingClass():EReference;
	getEOperation_ETypeParameters():EReference;
	getEOperation_EParameters():EReference;
	getEOperation_EExceptions():EReference;
	getEOperation_EGenericExceptions():EReference;
	
	getEPackage():EClass;
	getEPackage_EFactoryInstance():EReference;
	getEPackage_EClassifiers():EReference;
	getEPackage_ESubpackages():EReference;
	getEPackage_ESuperPackage():EReference;
	
	getEPackage_NsURI():EAttribute;
	getEPackage_NsPrefix():EAttribute;
	getEParameter():EClass;
	getEParameter_EOperation():EReference;
	
	getEReference():EClass;
	getEReference_EOpposite():EReference;
	getEReference_EReferenceType():EReference;
	getEReference_EKeys():EReference;
	
	getEReference_Containment():EAttribute;
	getEReference_Container():EAttribute;
	getEReference_ResolveProxies():EAttribute;
	getEStringToStringMapEntry():EClass;
	
	getEStringToStringMapEntry_Key():EAttribute;
	getEStringToStringMapEntry_Value():EAttribute;
	getEGenericType():EClass;
	getEGenericType_EUpperBound():EReference;
	getEGenericType_ETypeArguments():EReference;
	getEGenericType_ERawType():EReference;
	getEGenericType_ELowerBound():EReference;
	getEGenericType_ETypeParameter():EReference;
	getEGenericType_EClassifier():EReference;
	
	getETypeParameter():EClass;
	getETypeParameter_EBounds():EReference;
	
	getEBigDecimal():EDataType;
	getEBigInteger():EDataType;
	getEBoolean():EDataType;
	getEBooleanObject():EDataType;
	getEByte():EDataType;
	getEByteArray():EDataType;
	getEByteObject():EDataType;
	getEChar():EDataType;
	getECharacterObject():EDataType;
	getEDate():EDataType;
	getEDiagnosticChain():EDataType;
	getEDouble():EDataType;
	getEDoubleObject():EDataType;
	getEEList():EDataType;
	getEEnumerator():EDataType;
	getEFeatureMap():EDataType;
	getEFeatureMapEntry():EDataType;
	getEFloat():EDataType;
	getEFloatObject():EDataType;
	getEInt():EDataType;
	getEIntegerObject():EDataType;
	getEJavaClass():EDataType;
	getEJavaObject():EDataType;
	getELong():EDataType;
	getELongObject():EDataType;
	getEMap():EDataType;
	getEResource():EDataType;
	getEResourceSet():EDataType;
	getEShort():EDataType;
	getEShortObject():EDataType;
	getEString():EDataType;
	getETreeIterator():EDataType;
	getEInvocationTargetException():EDataType;
}
