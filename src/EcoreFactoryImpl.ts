import {EDataType} from "ecore/EDataType";
import {ENamedElement} from "ecore/ENamedElement";
import {EStructuralFeatureImpl} from "ecore/EStructuralFeatureImpl";
import {EDataTypeImpl} from "ecore/EDataTypeImpl";
import {EEnum} from "ecore/EEnum";
import {EModelElement} from "ecore/EModelElement";
import {EReferenceImpl} from "ecore/EReferenceImpl";
import {EPackage} from "ecore/EPackage";
import {EAnnotation} from "ecore/EAnnotation";
import {EFactory} from "ecore/EFactory";
import {EAttribute} from "ecore/EAttribute";
import {EAnnotationImpl} from "ecore/EAnnotationImpl";
import {EClass} from "ecore/EClass";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EAttributeImpl} from "ecore/EAttributeImpl";
import {EClassImpl} from "ecore/EClassImpl";
import {EObject} from "ecore/EObject";
import {EcoreFactory} from "ecore/EcoreFactory";
import {EParameter} from "ecore/EParameter";
import {EModelElementImpl} from "ecore/EModelElementImpl";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {EReference} from "ecore/EReference";
import {EStringToStringMapEntryImpl} from "ecore/EStringToStringMapEntryImpl";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
import {EFactoryImpl} from "ecore/EFactoryImpl";
import {EParameterImpl} from "ecore/EParameterImpl";
import {EObjectImpl} from "ecore/EObjectImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EClassifier} from "ecore/EClassifier";
import {EEnumLiteralImpl} from "ecore/EEnumLiteralImpl";
import {EGenericTypeImpl} from "ecore/EGenericTypeImpl";
import {ETypedElement} from "ecore/ETypedElement";
import {EPackageImpl} from "ecore/EPackageImpl";
import {ETypeParameterImpl} from "ecore/ETypeParameterImpl";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EGenericType} from "ecore/EGenericType";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {EOperation} from "ecore/EOperation";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {EEnumImpl} from "ecore/EEnumImpl";
import {EOperationImpl} from "ecore/EOperationImpl";
import {ETypeParameter} from "ecore/ETypeParameter";
export class EcoreFactoryImpl extends EFactoryImpl implements EcoreFactory{
	public static eINSTANCE : EcoreFactory = EcoreFactoryImpl.init();
	public static init() : EcoreFactory 
	{
		return new EcoreFactoryImpl();
	}
	
	public createEAttribute = () : EAttribute => {
		let theEAttribute = new EAttributeImpl();
		
		
		return theEAttribute;
	}
	public createEAnnotation = () : EAnnotation => {
		let theEAnnotation = new EAnnotationImpl();
		
		
		return theEAnnotation;
	}
	public createEClass = () : EClass => {
		let theEClass = new EClassImpl();
		
		
		return theEClass;
	}
	public createEClassifier = () : EClassifier => {
		let theEClassifier = new EClassifierImpl();
		
		
		return theEClassifier;
	}
	public createEDataType = () : EDataType => {
		let theEDataType = new EDataTypeImpl();
		
		
		return theEDataType;
	}
	public createEEnum = () : EEnum => {
		let theEEnum = new EEnumImpl();
		
		
		return theEEnum;
	}
	public createEEnumLiteral = () : EEnumLiteral => {
		let theEEnumLiteral = new EEnumLiteralImpl();
		
		
		return theEEnumLiteral;
	}
	public createEFactory = () : EFactory => {
		let theEFactory = new EFactoryImpl();
		
		
		return theEFactory;
	}
	public createEModelElement = () : EModelElement => {
		let theEModelElement = new EModelElementImpl();
		
		
		return theEModelElement;
	}
	public createENamedElement = () : ENamedElement => {
		let theENamedElement = new ENamedElementImpl();
		
		
		return theENamedElement;
	}
	public createEObject = () : EObject => {
		let theEObject = new EObjectImpl();
		
		
		return theEObject;
	}
	public createEOperation = () : EOperation => {
		let theEOperation = new EOperationImpl();
		
		
		return theEOperation;
	}
	public createEPackage = () : EPackage => {
		let theEPackage = new EPackageImpl();
		
		
		return theEPackage;
	}
	public createEParameter = () : EParameter => {
		let theEParameter = new EParameterImpl();
		
		
		return theEParameter;
	}
	public createEReference = () : EReference => {
		let theEReference = new EReferenceImpl();
		
		
		return theEReference;
	}
	public createEStructuralFeature = () : EStructuralFeature => {
		let theEStructuralFeature = new EStructuralFeatureImpl();
		
		
		return theEStructuralFeature;
	}
	public createETypedElement = () : ETypedElement => {
		let theETypedElement = new ETypedElementImpl();
		
		
		return theETypedElement;
	}
	public createEStringToStringMapEntry = () : EStringToStringMapEntry => {
		let theEStringToStringMapEntry = new EStringToStringMapEntryImpl();
		
		
		return theEStringToStringMapEntry;
	}
	public createEGenericType = () : EGenericType => {
		let theEGenericType = new EGenericTypeImpl();
		
		
		return theEGenericType;
	}
	public createETypeParameter = () : ETypeParameter => {
		let theETypeParameter = new ETypeParameterImpl();
		
		
		return theETypeParameter;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case EcorePackageImpl.EATTRIBUTE: return this.createEAttribute();
			case EcorePackageImpl.EANNOTATION: return this.createEAnnotation();
			case EcorePackageImpl.ECLASS: return this.createEClass();
			case EcorePackageImpl.EDATATYPE: return this.createEDataType();
			case EcorePackageImpl.EENUM: return this.createEEnum();
			case EcorePackageImpl.EENUMLITERAL: return this.createEEnumLiteral();
			case EcorePackageImpl.EFACTORY: return this.createEFactory();
			case EcorePackageImpl.EOBJECT: return this.createEObject();
			case EcorePackageImpl.EOPERATION: return this.createEOperation();
			case EcorePackageImpl.EPACKAGE: return this.createEPackage();
			case EcorePackageImpl.EPARAMETER: return this.createEParameter();
			case EcorePackageImpl.EREFERENCE: return this.createEReference();
			case EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY: return this.createEStringToStringMapEntry();
			case EcorePackageImpl.EGENERICTYPE: return this.createEGenericType();
			case EcorePackageImpl.ETYPEPARAMETER: return this.createETypeParameter();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case EcorePackageImpl.EBIGDECIMAL:
			return this.createEBigDecimalFromString(eDataType, initialValue);
		case EcorePackageImpl.EBIGINTEGER:
			return this.createEBigIntegerFromString(eDataType, initialValue);
		case EcorePackageImpl.EBOOLEAN:
			return this.createEBooleanFromString(eDataType, initialValue);
		case EcorePackageImpl.EBOOLEANOBJECT:
			return this.createEBooleanObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.EBYTE:
			return this.createEByteFromString(eDataType, initialValue);
		case EcorePackageImpl.EBYTEARRAY:
			return this.createEByteArrayFromString(eDataType, initialValue);
		case EcorePackageImpl.EBYTEOBJECT:
			return this.createEByteObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.ECHAR:
			return this.createECharFromString(eDataType, initialValue);
		case EcorePackageImpl.ECHARACTEROBJECT:
			return this.createECharacterObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.EDATE:
			return this.createEDateFromString(eDataType, initialValue);
		case EcorePackageImpl.EDOUBLE:
			return this.createEDoubleFromString(eDataType, initialValue);
		case EcorePackageImpl.EDOUBLEOBJECT:
			return this.createEDoubleObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.EFLOAT:
			return this.createEFloatFromString(eDataType, initialValue);
		case EcorePackageImpl.EFLOATOBJECT:
			return this.createEFloatObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.EINT:
			return this.createEIntFromString(eDataType, initialValue);
		case EcorePackageImpl.EINTEGEROBJECT:
			return this.createEIntegerObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.EJAVACLASS:
			return this.createEJavaClassFromString(eDataType, initialValue);
		case EcorePackageImpl.EJAVAOBJECT:
			return this.createEJavaObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.ELONG:
			return this.createELongFromString(eDataType, initialValue);
		case EcorePackageImpl.ELONGOBJECT:
			return this.createELongObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.ESHORT:
			return this.createEShortFromString(eDataType, initialValue);
		case EcorePackageImpl.ESHORTOBJECT:
			return this.createEShortObjectFromString(eDataType, initialValue);
		case EcorePackageImpl.ESTRING:
			return this.createEStringFromString(eDataType, initialValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case EcorePackageImpl.EBIGDECIMAL:
			return this.convertEBigDecimalToString(eDataType, instanceValue);
		case EcorePackageImpl.EBIGINTEGER:
			return this.convertEBigIntegerToString(eDataType, instanceValue);
		case EcorePackageImpl.EBOOLEAN:
			return this.convertEBooleanToString(eDataType, instanceValue);
		case EcorePackageImpl.EBOOLEANOBJECT:
			return this.convertEBooleanObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.EBYTE:
			return this.convertEByteToString(eDataType, instanceValue);
		case EcorePackageImpl.EBYTEARRAY:
			return this.convertEByteArrayToString(eDataType, instanceValue);
		case EcorePackageImpl.EBYTEOBJECT:
			return this.convertEByteObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.ECHAR:
			return this.convertECharToString(eDataType, instanceValue);
		case EcorePackageImpl.ECHARACTEROBJECT:
			return this.convertECharacterObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.EDATE:
			return this.convertEDateToString(eDataType, instanceValue);
		case EcorePackageImpl.EDOUBLE:
			return this.convertEDoubleToString(eDataType, instanceValue);
		case EcorePackageImpl.EDOUBLEOBJECT:
			return this.convertEDoubleObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.EFLOAT:
			return this.convertEFloatToString(eDataType, instanceValue);
		case EcorePackageImpl.EFLOATOBJECT:
			return this.convertEFloatObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.EINT:
			return this.convertEIntToString(eDataType, instanceValue);
		case EcorePackageImpl.EINTEGEROBJECT:
			return this.convertEIntegerObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.EJAVACLASS:
			return this.convertEJavaClassToString(eDataType, instanceValue);
		case EcorePackageImpl.EJAVAOBJECT:
			return this.convertEJavaObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.ELONG:
			return this.convertELongToString(eDataType, instanceValue);
		case EcorePackageImpl.ELONGOBJECT:
			return this.convertELongObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.ESHORT:
			return this.convertEShortToString(eDataType, instanceValue);
		case EcorePackageImpl.ESHORTOBJECT:
			return this.convertEShortObjectToString(eDataType, instanceValue);
		case EcorePackageImpl.ESTRING:
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

		return initialValue == null ? null : JSON.parse(initialValue);
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

		return initialValue == null ? null : JSON.parse(initialValue);
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

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEDateToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
	public createEDoubleFromString(eDataType:EDataType, initialValue:string):number {

		return initialValue == null ? null : JSON.parse(initialValue);
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

		return initialValue == null ? null : JSON.parse(initialValue);
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

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEIntToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
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

		return initialValue == null ? null : JSON.parse(initialValue);
	}
	
	public convertEStringToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : JSON.stringify(instanceValue);
	}
}
