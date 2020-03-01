import {EClass} from "./EClass";
import {EList} from "./EList";
import {EObject} from "./EObject";
import {EStructuralFeature} from "./EStructuralFeature";
import {Resource} from "./Resource";
import {EOperation} from "./EOperation";
import {TreeIterator} from "./TreeIterator";
import {EReference} from "./EReference";
import {Notifier} from "./Notifier";

export interface EObject
extends Notifier

{
	
	
	
	eIsSet(feature:EStructuralFeature): boolean ;
	
	eContainmentFeature(): EReference ;
	
	eIsProxy(): boolean ;
	
	eContainingFeature(): EStructuralFeature ;
	
	eClass(): EClass ;
	
	eContainer(): EObject ;
	
	eInvoke(operation:EOperation, arguments_:EList<any>): any ;
	
	eSet(feature:EStructuralFeature, newValue:any): void ;
	
	eResource(): Resource ;
	
	eContents(): EList<EObject> ;
	
	eCrossReferences(): EList<EObject> ;
	
	eAllContents(): TreeIterator<EObject> ;
	eGet(...args:Array<any>):any;
	
	eGet_EStructuralFeature(feature:EStructuralFeature): any ;
	eGet_EStructuralFeature_boolean(feature:EStructuralFeature, resolve:boolean): any ;
	
	eUnset(feature:EStructuralFeature): void ;

}

