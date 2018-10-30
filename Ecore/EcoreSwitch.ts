/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EFactory} from "ecore/EFactory";
import {EModelElement} from "ecore/EModelElement";
import {EAttribute} from "ecore/EAttribute";
import {EAnnotation} from "ecore/EAnnotation";
import {EPackage} from "ecore/EPackage";
import {EDataType} from "ecore/EDataType";
import {ETypeParameter} from "ecore/ETypeParameter";
import {EEnum} from "ecore/EEnum";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EReference} from "ecore/EReference";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {ETypedElement} from "ecore/ETypedElement";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EParameter} from "ecore/EParameter";
import {EcorePackage} from "ecore/EcorePackage";
import {EOperation} from "ecore/EOperation";
import {EObject} from "ecore/EObject";
import {ENamedElement} from "ecore/ENamedElement";
import {EClass} from "ecore/EClass";
import {Switch} from "ecore/Switch";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
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
	
	public doSwitch(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case EcorePackageImpl.EATTRIBUTE: {
				let eattribute:EAttribute = <EAttribute>theEObject;
				let result:T = this.caseEAttribute(eattribute);
				if (result == null) result = this.caseEModelElement(eattribute);
				if (result == null) result = this.caseENamedElement(eattribute);
				if (result == null) result = this.caseETypedElement(eattribute);
				if (result == null) result = this.caseEStructuralFeature(eattribute);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EANNOTATION: {
				let eannotation:EAnnotation = <EAnnotation>theEObject;
				let result:T = this.caseEAnnotation(eannotation);
				if (result == null) result = this.caseEModelElement(eannotation);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ECLASS: {
				let eclass:EClass = <EClass>theEObject;
				let result:T = this.caseEClass(eclass);
				if (result == null) result = this.caseEModelElement(eclass);
				if (result == null) result = this.caseENamedElement(eclass);
				if (result == null) result = this.caseEClassifier(eclass);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ECLASSIFIER: {
				let eclassifier:EClassifier = <EClassifier>theEObject;
				let result:T = this.caseEClassifier(eclassifier);
				if (result == null) result = this.caseEModelElement(eclassifier);
				if (result == null) result = this.caseENamedElement(eclassifier);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EDATATYPE: {
				let edatatype:EDataType = <EDataType>theEObject;
				let result:T = this.caseEDataType(edatatype);
				if (result == null) result = this.caseEModelElement(edatatype);
				if (result == null) result = this.caseENamedElement(edatatype);
				if (result == null) result = this.caseEClassifier(edatatype);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EENUM: {
				let eenum:EEnum = <EEnum>theEObject;
				let result:T = this.caseEEnum(eenum);
				if (result == null) result = this.caseEModelElement(eenum);
				if (result == null) result = this.caseENamedElement(eenum);
				if (result == null) result = this.caseEClassifier(eenum);
				if (result == null) result = this.caseEDataType(eenum);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EENUMLITERAL: {
				let eenumliteral:EEnumLiteral = <EEnumLiteral>theEObject;
				let result:T = this.caseEEnumLiteral(eenumliteral);
				if (result == null) result = this.caseEModelElement(eenumliteral);
				if (result == null) result = this.caseENamedElement(eenumliteral);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EFACTORY: {
				let efactory:EFactory = <EFactory>theEObject;
				let result:T = this.caseEFactory(efactory);
				if (result == null) result = this.caseEModelElement(efactory);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EMODELELEMENT: {
				let emodelelement:EModelElement = <EModelElement>theEObject;
				let result:T = this.caseEModelElement(emodelelement);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ENAMEDELEMENT: {
				let enamedelement:ENamedElement = <ENamedElement>theEObject;
				let result:T = this.caseENamedElement(enamedelement);
				if (result == null) result = this.caseEModelElement(enamedelement);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EOBJECT: {
				let eobject:EObject = <EObject>theEObject;
				let result:T = this.caseEObject(eobject);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EOPERATION: {
				let eoperation:EOperation = <EOperation>theEObject;
				let result:T = this.caseEOperation(eoperation);
				if (result == null) result = this.caseEModelElement(eoperation);
				if (result == null) result = this.caseENamedElement(eoperation);
				if (result == null) result = this.caseETypedElement(eoperation);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EPACKAGE: {
				let epackage:EPackage = <EPackage>theEObject;
				let result:T = this.caseEPackage(epackage);
				if (result == null) result = this.caseEModelElement(epackage);
				if (result == null) result = this.caseENamedElement(epackage);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EPARAMETER: {
				let eparameter:EParameter = <EParameter>theEObject;
				let result:T = this.caseEParameter(eparameter);
				if (result == null) result = this.caseEModelElement(eparameter);
				if (result == null) result = this.caseENamedElement(eparameter);
				if (result == null) result = this.caseETypedElement(eparameter);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EREFERENCE: {
				let ereference:EReference = <EReference>theEObject;
				let result:T = this.caseEReference(ereference);
				if (result == null) result = this.caseEModelElement(ereference);
				if (result == null) result = this.caseENamedElement(ereference);
				if (result == null) result = this.caseETypedElement(ereference);
				if (result == null) result = this.caseEStructuralFeature(ereference);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ESTRUCTURALFEATURE: {
				let estructuralfeature:EStructuralFeature = <EStructuralFeature>theEObject;
				let result:T = this.caseEStructuralFeature(estructuralfeature);
				if (result == null) result = this.caseEModelElement(estructuralfeature);
				if (result == null) result = this.caseENamedElement(estructuralfeature);
				if (result == null) result = this.caseETypedElement(estructuralfeature);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ETYPEDELEMENT: {
				let etypedelement:ETypedElement = <ETypedElement>theEObject;
				let result:T = this.caseETypedElement(etypedelement);
				if (result == null) result = this.caseEModelElement(etypedelement);
				if (result == null) result = this.caseENamedElement(etypedelement);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY: {
				let estringtostringmapentry:EStringToStringMapEntry = <EStringToStringMapEntry>theEObject;
				let result:T = this.caseEStringToStringMapEntry(estringtostringmapentry);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.EGENERICTYPE: {
				let egenerictype:EGenericType = <EGenericType>theEObject;
				let result:T = this.caseEGenericType(egenerictype);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case EcorePackageImpl.ETYPEPARAMETER: {
				let etypeparameter:ETypeParameter = <ETypeParameter>theEObject;
				let result:T = this.caseETypeParameter(etypeparameter);
				if (result == null) result = this.caseEModelElement(etypeparameter);
				if (result == null) result = this.caseENamedElement(etypeparameter);
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

