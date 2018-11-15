/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAttribute} from "ecore/EAttribute";
import {EPackage} from "ecore/EPackage";
import {EDataType} from "ecore/EDataType";
import {EReference} from "ecore/EReference";
import {EClass} from "ecore/EClass";
export interface EcorePackage extends EPackage {
	getEObject():EClass;
	
	getEModelElement():EClass;
	getEModelElement_EAnnotations():EReference;
	
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
	
	getEAnnotation_():EClass;
	getEAnnotation_Details():EReference;
	getEAnnotation_EModelElement():EReference;
	getEAnnotation_Contents():EReference;
	getEAnnotation_References():EReference;
	
	getEAnnotation_Source():EAttribute;
	getEFactory():EClass;
	getEFactory_EPackage():EReference;
	
	getENamedElement():EClass;
	
	getENamedElement_Name():EAttribute;
	getEClassifier_():EClass;
	getEClassifier_EPackage():EReference;
	getEClassifier_ETypeParameters():EReference;
	
	getEClassifier_InstanceClassName():EAttribute;
	getEClassifier_InstanceClass():EAttribute;
	getEClassifier_DefaultValue():EAttribute;
	getEClassifier_InstanceTypeName():EAttribute;
	getEEnumLiteral():EClass;
	getEEnumLiteral_EEnum():EReference;
	
	getEEnumLiteral_Value():EAttribute;
	getEEnumLiteral_Instance():EAttribute;
	getEEnumLiteral_Literal():EAttribute;
	getEPackage():EClass;
	getEPackage_EFactoryInstance():EReference;
	getEPackage_EClassifiers():EReference;
	getEPackage_ESubpackages():EReference;
	getEPackage_ESuperPackage():EReference;
	
	getEPackage_NsURI():EAttribute;
	getEPackage_NsPrefix():EAttribute;
	getETypedElement():EClass;
	getETypedElement_EType():EReference;
	getETypedElement_EGenericType():EReference;
	
	getETypedElement_Ordered():EAttribute;
	getETypedElement_Unique():EAttribute;
	getETypedElement_LowerBound():EAttribute;
	getETypedElement_UpperBound():EAttribute;
	getETypedElement_Many():EAttribute;
	getETypedElement_Required():EAttribute;
	getETypeParameter():EClass;
	getETypeParameter_EBounds():EReference;
	
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
	getEOperation():EClass;
	getEOperation_EContainingClass():EReference;
	getEOperation_ETypeParameters():EReference;
	getEOperation_EParameters():EReference;
	getEOperation_EExceptions():EReference;
	getEOperation_EGenericExceptions():EReference;
	
	getEParameter():EClass;
	getEParameter_EOperation():EReference;
	
	getEStructuralFeature():EClass;
	getEStructuralFeature_EContainingClass():EReference;
	
	getEStructuralFeature_Changeable():EAttribute;
	getEStructuralFeature_Volatile():EAttribute;
	getEStructuralFeature_Transient():EAttribute;
	getEStructuralFeature_DefaultValueLiteral():EAttribute;
	getEStructuralFeature_DefaultValue():EAttribute;
	getEStructuralFeature_Unsettable():EAttribute;
	getEStructuralFeature_Derived():EAttribute;
	getEEnum():EClass;
	getEEnum_ELiterals():EReference;
	
	getEAttribute():EClass;
	getEAttribute_EAttributeType():EReference;
	
	getEAttribute_ID():EAttribute;
	getEReference():EClass;
	getEReference_EOpposite():EReference;
	getEReference_EReferenceType():EReference;
	getEReference_EKeys():EReference;
	
	getEReference_Containment():EAttribute;
	getEReference_Container():EAttribute;
	getEReference_ResolveProxies():EAttribute;
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

