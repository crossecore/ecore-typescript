/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {ETypeParameterImpl} from "ecore/ETypeParameterImpl";
import {EDataType} from "ecore/EDataType";
import {EEnum} from "ecore/EEnum";
import {EGenericTypeImpl} from "ecore/EGenericTypeImpl";
import {EReference} from "ecore/EReference";
import {EClassifier} from "ecore/EClassifier";
import {ETypedElement} from "ecore/ETypedElement";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EAnnotationImpl} from "ecore/EAnnotationImpl";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {EParameter} from "ecore/EParameter";
import {EObject} from "ecore/EObject";
import {EModelElementImpl} from "ecore/EModelElementImpl";
import {EObjectImpl} from "ecore/EObjectImpl";
import {ENamedElement} from "ecore/ENamedElement";
import {EReferenceImpl} from "ecore/EReferenceImpl";
import {EClassImpl} from "ecore/EClassImpl";
import {EAttributeImpl} from "ecore/EAttributeImpl";
import {EStructuralFeatureImpl} from "ecore/EStructuralFeatureImpl";
import {EClass} from "ecore/EClass";
import {EEnumImpl} from "ecore/EEnumImpl";
import {EFactory} from "ecore/EFactory";
import {EStringToStringMapEntryImpl} from "ecore/EStringToStringMapEntryImpl";
import {EDataTypeImpl} from "ecore/EDataTypeImpl";
import {EModelElement} from "ecore/EModelElement";
import {EAttribute} from "ecore/EAttribute";
import {EPackage} from "ecore/EPackage";
import {ETypeParameter} from "ecore/ETypeParameter";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EGenericType} from "ecore/EGenericType";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {EParameterImpl} from "ecore/EParameterImpl";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
import {EEnumLiteralImpl} from "ecore/EEnumLiteralImpl";
import {EOperation} from "ecore/EOperation";
import {EcoreFactory} from "ecore/EcoreFactory";
import {EPackageImpl} from "ecore/EPackageImpl";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {EOperationImpl} from "ecore/EOperationImpl";
import {EFactoryImpl} from "ecore/EFactoryImpl";
export class EcoreFactoryImpl extends EFactoryImpl implements EcoreFactory{
	public static eINSTANCE : EcoreFactory = EcoreFactoryImpl.init();
	public static init() : EcoreFactory 
	{
		return new EcoreFactoryImpl();
	}
	
	public createEAttribute = () : EAttribute => {
		var theEAttribute = new EAttributeImpl();
		return theEAttribute;
	}
	public createEAnnotation = () : EAnnotation => {
		var theEAnnotation = new EAnnotationImpl();
		return theEAnnotation;
	}
	public createEClass = () : EClass => {
		var theEClass = new EClassImpl();
		return theEClass;
	}
	public createEClassifier = () : EClassifier => {
		var theEClassifier = new EClassifierImpl();
		return theEClassifier;
	}
	public createEDataType = () : EDataType => {
		var theEDataType = new EDataTypeImpl();
		return theEDataType;
	}
	public createEEnum = () : EEnum => {
		var theEEnum = new EEnumImpl();
		return theEEnum;
	}
	public createEEnumLiteral = () : EEnumLiteral => {
		var theEEnumLiteral = new EEnumLiteralImpl();
		return theEEnumLiteral;
	}
	public createEFactory = () : EFactory => {
		var theEFactory = new EFactoryImpl();
		return theEFactory;
	}
	public createEModelElement = () : EModelElement => {
		var theEModelElement = new EModelElementImpl();
		return theEModelElement;
	}
	public createENamedElement = () : ENamedElement => {
		var theENamedElement = new ENamedElementImpl();
		return theENamedElement;
	}
	public createEObject = () : EObject => {
		var theEObject = new EObjectImpl();
		return theEObject;
	}
	public createEOperation = () : EOperation => {
		var theEOperation = new EOperationImpl();
		return theEOperation;
	}
	public createEPackage = () : EPackage => {
		var theEPackage = new EPackageImpl();
		return theEPackage;
	}
	public createEParameter = () : EParameter => {
		var theEParameter = new EParameterImpl();
		return theEParameter;
	}
	public createEReference = () : EReference => {
		var theEReference = new EReferenceImpl();
		return theEReference;
	}
	public createEStructuralFeature = () : EStructuralFeature => {
		var theEStructuralFeature = new EStructuralFeatureImpl();
		return theEStructuralFeature;
	}
	public createETypedElement = () : ETypedElement => {
		var theETypedElement = new ETypedElementImpl();
		return theETypedElement;
	}
	public createEStringToStringMapEntry = () : EStringToStringMapEntry => {
		var theEStringToStringMapEntry = new EStringToStringMapEntryImpl();
		return theEStringToStringMapEntry;
	}
	public createEGenericType = () : EGenericType => {
		var theEGenericType = new EGenericTypeImpl();
		return theEGenericType;
	}
	public createETypeParameter = () : ETypeParameter => {
		var theETypeParameter = new ETypeParameterImpl();
		return theETypeParameter;
	}
}


