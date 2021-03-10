import {EDataType} from "./EDataType";
import {ENamedElement} from "./ENamedElement";
import {EStructuralFeatureImpl} from "./EStructuralFeatureImpl";
import {EDataTypeImpl} from "./EDataTypeImpl";
import {EEnum} from "./EEnum";
import {EModelElement} from "./EModelElement";
import {EReferenceImpl} from "./EReferenceImpl";
import {EPackage} from "./EPackage";
import {EAnnotation} from "./EAnnotation";
import {EFactory} from "./EFactory";
import {EAttribute} from "./EAttribute";
import {EAnnotationImpl} from "./EAnnotationImpl";
import {EClass} from "./EClass";
import {EAttributeImpl} from "./EAttributeImpl";
import {EClassImpl} from "./EClassImpl";
import {EObject} from "./EObject";
import {EcoreFactory} from "./EcoreFactory";
import {EParameter} from "./EParameter";
import {EModelElementImpl} from "./EModelElementImpl";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EReference} from "./EReference";
import {EStringToStringMapEntryImpl} from "./EStringToStringMapEntryImpl";
import {ETypedElementImpl} from "./ETypedElementImpl";
import {EFactoryImpl} from "./EFactoryImpl";
import {EParameterImpl} from "./EParameterImpl";
import {EObjectImpl} from "./EObjectImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {EClassifier} from "./EClassifier";
import {EEnumLiteralImpl} from "./EEnumLiteralImpl";
import {EGenericTypeImpl} from "./EGenericTypeImpl";
import {ETypedElement} from "./ETypedElement";
import {EPackageImpl} from "./EPackageImpl";
import {ETypeParameterImpl} from "./ETypeParameterImpl";
import {EStringToStringMapEntry} from "./EStringToStringMapEntry";
import {EGenericType} from "./EGenericType";
import {EEnumLiteral} from "./EEnumLiteral";
import {EOperation} from "./EOperation";
import {EClassifierImpl} from "./EClassifierImpl";
import {EEnumImpl} from "./EEnumImpl";
import {AllInstances} from "./AllInstances";
import {EOperationImpl} from "./EOperationImpl";
import {ETypeParameter} from "./ETypeParameter";
export class EcoreFactoryImpl extends EFactoryImpl implements EcoreFactory{
	public static eINSTANCE : EcoreFactory = EcoreFactoryImpl.init();
	public static init() : EcoreFactory 
	{
		return new EcoreFactoryImpl();
	}
	
	public createEAttribute = () : EAttribute => {
		let theEAttribute = new EAttributeImpl();
		
		AllInstances.INSTANCE.put(theEAttribute, "EAttribute");
		
		return theEAttribute;
	}
	public createEAnnotation = () : EAnnotation => {
		let theEAnnotation = new EAnnotationImpl();
		
		AllInstances.INSTANCE.put(theEAnnotation, "EAnnotation");
		
		return theEAnnotation;
	}
	public createEClass = () : EClass => {
		let theEClass = new EClassImpl();
		
		AllInstances.INSTANCE.put(theEClass, "EClass");
		
		return theEClass;
	}
	public createEClassifier = () : EClassifier => {
		let theEClassifier = new EClassifierImpl();
		
		AllInstances.INSTANCE.put(theEClassifier, "EClassifier");
		
		return theEClassifier;
	}
	public createEDataType = () : EDataType => {
		let theEDataType = new EDataTypeImpl();
		
		AllInstances.INSTANCE.put(theEDataType, "EDataType");
		
		return theEDataType;
	}
	public createEEnum = () : EEnum => {
		let theEEnum = new EEnumImpl();
		
		AllInstances.INSTANCE.put(theEEnum, "EEnum");
		
		return theEEnum;
	}
	public createEEnumLiteral = () : EEnumLiteral => {
		let theEEnumLiteral = new EEnumLiteralImpl();
		
		AllInstances.INSTANCE.put(theEEnumLiteral, "EEnumLiteral");
		
		return theEEnumLiteral;
	}
	public createEFactory = () : EFactory => {
		let theEFactory = new EFactoryImpl();
		
		AllInstances.INSTANCE.put(theEFactory, "EFactory");
		
		return theEFactory;
	}
	public createEModelElement = () : EModelElement => {
		let theEModelElement = new EModelElementImpl();
		
		AllInstances.INSTANCE.put(theEModelElement, "EModelElement");
		
		return theEModelElement;
	}
	public createENamedElement = () : ENamedElement => {
		let theENamedElement = new ENamedElementImpl();
		
		AllInstances.INSTANCE.put(theENamedElement, "ENamedElement");
		
		return theENamedElement;
	}
	public createEObject = () : EObject => {
		let theEObject = new EObjectImpl();
		
		AllInstances.INSTANCE.put(theEObject, "EObject");
		
		return theEObject;
	}
	public createEOperation = () : EOperation => {
		let theEOperation = new EOperationImpl();
		
		AllInstances.INSTANCE.put(theEOperation, "EOperation");
		
		return theEOperation;
	}
	public createEPackage = () : EPackage => {
		let theEPackage = new EPackageImpl();
		
		AllInstances.INSTANCE.put(theEPackage, "EPackage");
		
		return theEPackage;
	}
	public createEParameter = () : EParameter => {
		let theEParameter = new EParameterImpl();
		
		AllInstances.INSTANCE.put(theEParameter, "EParameter");
		
		return theEParameter;
	}
	public createEReference = () : EReference => {
		let theEReference = new EReferenceImpl();
		
		AllInstances.INSTANCE.put(theEReference, "EReference");
		
		return theEReference;
	}
	public createEStructuralFeature = () : EStructuralFeature => {
		let theEStructuralFeature = new EStructuralFeatureImpl();
		
		AllInstances.INSTANCE.put(theEStructuralFeature, "EStructuralFeature");
		
		return theEStructuralFeature;
	}
	public createETypedElement = () : ETypedElement => {
		let theETypedElement = new ETypedElementImpl();
		
		AllInstances.INSTANCE.put(theETypedElement, "ETypedElement");
		
		return theETypedElement;
	}
	public createEStringToStringMapEntry = () : EStringToStringMapEntry => {
		let theEStringToStringMapEntry = new EStringToStringMapEntryImpl();
		
		AllInstances.INSTANCE.put(theEStringToStringMapEntry, "EStringToStringMapEntry");
		
		return theEStringToStringMapEntry;
	}
	public createEGenericType = () : EGenericType => {
		let theEGenericType = new EGenericTypeImpl();
		
		AllInstances.INSTANCE.put(theEGenericType, "EGenericType");
		
		return theEGenericType;
	}
	public createETypeParameter = () : ETypeParameter => {
		let theETypeParameter = new ETypeParameterImpl();
		
		AllInstances.INSTANCE.put(theETypeParameter, "ETypeParameter");
		
		return theETypeParameter;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case 0: return this.createEAttribute();
			case 1: return this.createEAnnotation();
			case 2: return this.createEClass();
			case 4: return this.createEDataType();
			case 5: return this.createEEnum();
			case 6: return this.createEEnumLiteral();
			case 7: return this.createEFactory();
			case 10: return this.createEObject();
			case 11: return this.createEOperation();
			case 12: return this.createEPackage();
			case 13: return this.createEParameter();
			case 14: return this.createEReference();
			case 48: return this.createEStringToStringMapEntry();
			case 50: return this.createEGenericType();
			case 51: return this.createETypeParameter();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case 17: //EcorePackageImpl.EBIGDECIMAL
			return this.createEBigDecimalFromString(eDataType, initialValue);				
		case 18: //EcorePackageImpl.EBIGINTEGER
			return this.createEBigIntegerFromString(eDataType, initialValue);				
		case 19: //EcorePackageImpl.EBOOLEAN
			return this.createEBooleanFromString(eDataType, initialValue);				
		case 20: //EcorePackageImpl.EBOOLEANOBJECT
			return this.createEBooleanObjectFromString(eDataType, initialValue);				
		case 21: //EcorePackageImpl.EBYTE
			return this.createEByteFromString(eDataType, initialValue);				
		case 22: //EcorePackageImpl.EBYTEARRAY
			return this.createEByteArrayFromString(eDataType, initialValue);				
		case 23: //EcorePackageImpl.EBYTEOBJECT
			return this.createEByteObjectFromString(eDataType, initialValue);				
		case 24: //EcorePackageImpl.ECHAR
			return this.createECharFromString(eDataType, initialValue);				
		case 25: //EcorePackageImpl.ECHARACTEROBJECT
			return this.createECharacterObjectFromString(eDataType, initialValue);				
		case 26: //EcorePackageImpl.EDATE
			return this.createEDateFromString(eDataType, initialValue);				
		case 28: //EcorePackageImpl.EDOUBLE
			return this.createEDoubleFromString(eDataType, initialValue);				
		case 29: //EcorePackageImpl.EDOUBLEOBJECT
			return this.createEDoubleObjectFromString(eDataType, initialValue);				
		case 34: //EcorePackageImpl.EFLOAT
			return this.createEFloatFromString(eDataType, initialValue);				
		case 35: //EcorePackageImpl.EFLOATOBJECT
			return this.createEFloatObjectFromString(eDataType, initialValue);				
		case 36: //EcorePackageImpl.EINT
			return this.createEIntFromString(eDataType, initialValue);				
		case 37: //EcorePackageImpl.EINTEGEROBJECT
			return this.createEIntegerObjectFromString(eDataType, initialValue);				
		case 38: //EcorePackageImpl.EJAVACLASS
			return this.createEJavaClassFromString(eDataType, initialValue);				
		case 39: //EcorePackageImpl.EJAVAOBJECT
			return this.createEJavaObjectFromString(eDataType, initialValue);				
		case 40: //EcorePackageImpl.ELONG
			return this.createELongFromString(eDataType, initialValue);				
		case 41: //EcorePackageImpl.ELONGOBJECT
			return this.createELongObjectFromString(eDataType, initialValue);				
		case 45: //EcorePackageImpl.ESHORT
			return this.createEShortFromString(eDataType, initialValue);				
		case 46: //EcorePackageImpl.ESHORTOBJECT
			return this.createEShortObjectFromString(eDataType, initialValue);				
		case 47: //EcorePackageImpl.ESTRING
			return this.createEStringFromString(eDataType, initialValue);				
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case 17: //EcorePackageImpl.EBIGDECIMAL
			return this.convertEBigDecimalToString(eDataType, instanceValue);				
		case 18: //EcorePackageImpl.EBIGINTEGER
			return this.convertEBigIntegerToString(eDataType, instanceValue);				
		case 19: //EcorePackageImpl.EBOOLEAN
			return this.convertEBooleanToString(eDataType, instanceValue);				
		case 20: //EcorePackageImpl.EBOOLEANOBJECT
			return this.convertEBooleanObjectToString(eDataType, instanceValue);				
		case 21: //EcorePackageImpl.EBYTE
			return this.convertEByteToString(eDataType, instanceValue);				
		case 22: //EcorePackageImpl.EBYTEARRAY
			return this.convertEByteArrayToString(eDataType, instanceValue);				
		case 23: //EcorePackageImpl.EBYTEOBJECT
			return this.convertEByteObjectToString(eDataType, instanceValue);				
		case 24: //EcorePackageImpl.ECHAR
			return this.convertECharToString(eDataType, instanceValue);				
		case 25: //EcorePackageImpl.ECHARACTEROBJECT
			return this.convertECharacterObjectToString(eDataType, instanceValue);				
		case 26: //EcorePackageImpl.EDATE
			return this.convertEDateToString(eDataType, instanceValue);				
		case 28: //EcorePackageImpl.EDOUBLE
			return this.convertEDoubleToString(eDataType, instanceValue);				
		case 29: //EcorePackageImpl.EDOUBLEOBJECT
			return this.convertEDoubleObjectToString(eDataType, instanceValue);				
		case 34: //EcorePackageImpl.EFLOAT
			return this.convertEFloatToString(eDataType, instanceValue);				
		case 35: //EcorePackageImpl.EFLOATOBJECT
			return this.convertEFloatObjectToString(eDataType, instanceValue);				
		case 36: //EcorePackageImpl.EINT
			return this.convertEIntToString(eDataType, instanceValue);				
		case 37: //EcorePackageImpl.EINTEGEROBJECT
			return this.convertEIntegerObjectToString(eDataType, instanceValue);				
		case 38: //EcorePackageImpl.EJAVACLASS
			return this.convertEJavaClassToString(eDataType, instanceValue);				
		case 39: //EcorePackageImpl.EJAVAOBJECT
			return this.convertEJavaObjectToString(eDataType, instanceValue);				
		case 40: //EcorePackageImpl.ELONG
			return this.convertELongToString(eDataType, instanceValue);				
		case 41: //EcorePackageImpl.ELONGOBJECT
			return this.convertELongObjectToString(eDataType, instanceValue);				
		case 45: //EcorePackageImpl.ESHORT
			return this.convertEShortToString(eDataType, instanceValue);				
		case 46: //EcorePackageImpl.ESHORTOBJECT
			return this.convertEShortObjectToString(eDataType, instanceValue);				
		case 47: //EcorePackageImpl.ESTRING
			return this.convertEStringToString(eDataType, instanceValue);				
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	
	public createEBigDecimalFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEBigDecimalToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEBigIntegerFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEBigIntegerToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEBooleanFromString(eDataType:EDataType, initialValue:string):boolean {

		
		switch(initialValue?.toLowerCase()){
			case null: return null;
			case "true": return true;
			case "false": return false;
			default: throw new Error("Expecting true or false")

		}
		
	}
	
	
	public convertEBooleanToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEBooleanObjectFromString(eDataType:EDataType, initialValue:string):boolean {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEBooleanObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEByteFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEByteToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEByteArrayFromString(eDataType:EDataType, initialValue:string):Array<number> {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEByteArrayToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEByteObjectFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEByteObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createECharFromString(eDataType:EDataType, initialValue:string):string {

		return initialValue == null ? null : String.fromCharCode(Number.parseInt(initialValue))
	}
	
	public convertECharToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createECharacterObjectFromString(eDataType:EDataType, initialValue:string):string {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertECharacterObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEDateFromString(eDataType:EDataType, initialValue:string):Date {

		return initialValue == null ? null : new Date(initialValue)
	}
	
	public convertEDateToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEDoubleFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : Number.parseFloat(initialValue)
	}
	
	public convertEDoubleToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEDoubleObjectFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEDoubleObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEFloatFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : Number.parseFloat(initialValue)
	}
	
	public convertEFloatToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEFloatObjectFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEFloatObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEIntFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : Number.parseInt(initialValue)
	}
	
	public convertEIntToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue+""
	}
	public createEIntegerObjectFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEIntegerObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEJavaClassFromString(eDataType:EDataType, initialValue:string):Function {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEJavaClassToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEJavaObjectFromString(eDataType:EDataType, initialValue:string):any {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEJavaObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createELongFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertELongToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createELongObjectFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertELongObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEShortFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEShortToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEShortObjectFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEShortObjectToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEStringFromString(eDataType:EDataType, initialValue:string):string {

		return initialValue;
	}
	
	public convertEStringToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue;
	}
}
