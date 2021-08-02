import {EDataType} from "ecore/EDataType";
import {ENamedElement} from "ecore/ENamedElement";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EClassifier} from "ecore/EClassifier";
import {EEnum} from "ecore/EEnum";
import {EModelElement} from "ecore/EModelElement";
import {EPackage} from "ecore/EPackage";
import {EAnnotation} from "ecore/EAnnotation";
import {EFactory} from "ecore/EFactory";
import {ETypedElement} from "ecore/ETypedElement";
import {EAttribute} from "ecore/EAttribute";
import {EClass} from "ecore/EClass";
import {Switch} from "ecore/Switch";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EObject} from "ecore/EObject";
import {EParameter} from "ecore/EParameter";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EGenericType} from "ecore/EGenericType";
import {EcorePackage} from "ecore/EcorePackage";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {EOperation} from "ecore/EOperation";
import {EReference} from "ecore/EReference";
import {ETypeParameter} from "ecore/ETypeParameter";
export class EcoreSwitch<T> extends Switch<T> {
	protected static modelPackage:EcorePackage;
	
	constructor(){
		super();
		if (EcoreSwitch.modelPackage == null) {
			EcoreSwitch.modelPackage = EcorePackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === EcoreSwitch.modelPackage;
	}
	
	public doSwitch3(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case EcorePackageImpl.EATTRIBUTE: {
				let obj:EAttribute = <EAttribute>theEObject;
				let result:T = this.caseEAttribute(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseETypedElement(obj);
				if (result == null) result = this.caseEStructuralFeature(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EANNOTATION: {
				let obj:EAnnotation = <EAnnotation>theEObject;
				let result:T = this.caseEAnnotation(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ECLASS: {
				let obj:EClass = <EClass>theEObject;
				let result:T = this.caseEClass(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseEClassifier(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ECLASSIFIER: {
				let obj:EClassifier = <EClassifier>theEObject;
				let result:T = this.caseEClassifier(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EDATATYPE: {
				let obj:EDataType = <EDataType>theEObject;
				let result:T = this.caseEDataType(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseEClassifier(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EENUM: {
				let obj:EEnum = <EEnum>theEObject;
				let result:T = this.caseEEnum(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseEClassifier(obj);
				if (result == null) result = this.caseEDataType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EENUMLITERAL: {
				let obj:EEnumLiteral = <EEnumLiteral>theEObject;
				let result:T = this.caseEEnumLiteral(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EFACTORY: {
				let obj:EFactory = <EFactory>theEObject;
				let result:T = this.caseEFactory(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EMODELELEMENT: {
				let obj:EModelElement = <EModelElement>theEObject;
				let result:T = this.caseEModelElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ENAMEDELEMENT: {
				let obj:ENamedElement = <ENamedElement>theEObject;
				let result:T = this.caseENamedElement(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EOBJECT: {
				let obj:EObject = <EObject>theEObject;
				let result:T = this.caseEObject(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EOPERATION: {
				let obj:EOperation = <EOperation>theEObject;
				let result:T = this.caseEOperation(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseETypedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EPACKAGE: {
				let obj:EPackage = <EPackage>theEObject;
				let result:T = this.caseEPackage(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EPARAMETER: {
				let obj:EParameter = <EParameter>theEObject;
				let result:T = this.caseEParameter(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseETypedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EREFERENCE: {
				let obj:EReference = <EReference>theEObject;
				let result:T = this.caseEReference(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseETypedElement(obj);
				if (result == null) result = this.caseEStructuralFeature(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ESTRUCTURALFEATURE: {
				let obj:EStructuralFeature = <EStructuralFeature>theEObject;
				let result:T = this.caseEStructuralFeature(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.caseETypedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ETYPEDELEMENT: {
				let obj:ETypedElement = <ETypedElement>theEObject;
				let result:T = this.caseETypedElement(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY: {
				let obj:EStringToStringMapEntry = <EStringToStringMapEntry>theEObject;
				let result:T = this.caseEStringToStringMapEntry(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EGENERICTYPE: {
				let obj:EGenericType = <EGenericType>theEObject;
				let result:T = this.caseEGenericType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ETYPEPARAMETER: {
				let obj:ETypeParameter = <ETypeParameter>theEObject;
				let result:T = this.caseETypeParameter(obj);
				if (result == null) result = this.caseEModelElement(obj);
				if (result == null) result = this.caseENamedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseEAttribute(object:EAttribute):T {
		return null;
	}
	public caseEAnnotation(object:EAnnotation):T {
		return null;
	}
	public caseEClass(object:EClass):T {
		return null;
	}
	public caseEClassifier(object:EClassifier):T {
		return null;
	}
	public caseEDataType(object:EDataType):T {
		return null;
	}
	public caseEEnum(object:EEnum):T {
		return null;
	}
	public caseEEnumLiteral(object:EEnumLiteral):T {
		return null;
	}
	public caseEFactory(object:EFactory):T {
		return null;
	}
	public caseEModelElement(object:EModelElement):T {
		return null;
	}
	public caseENamedElement(object:ENamedElement):T {
		return null;
	}
	public caseEObject(object:EObject):T {
		return null;
	}
	public caseEOperation(object:EOperation):T {
		return null;
	}
	public caseEPackage(object:EPackage):T {
		return null;
	}
	public caseEParameter(object:EParameter):T {
		return null;
	}
	public caseEReference(object:EReference):T {
		return null;
	}
	public caseEStructuralFeature(object:EStructuralFeature):T {
		return null;
	}
	public caseETypedElement(object:ETypedElement):T {
		return null;
	}
	public caseEStringToStringMapEntry(object:EStringToStringMapEntry):T {
		return null;
	}
	public caseEGenericType(object:EGenericType):T {
		return null;
	}
	public caseETypeParameter(object:ETypeParameter):T {
		return null;
	}
	
}

