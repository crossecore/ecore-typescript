import {EClass} from "ecore/EClass";
import {EList} from "ecore/EList";
import {EObject} from "ecore/EObject";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {Resource} from "ecore/Resource";
import {EOperation} from "ecore/EOperation";
import {TreeIterator} from "ecore/TreeIterator";
import {InternalEObject} from "ecore/InternalEObject";
import {EReference} from "ecore/EReference";

export interface EObject
extends InternalEObject

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
	eGet_EStructuralFeature_EBoolean(feature:EStructuralFeature, resolve:boolean): any ;
	
	eUnset(feature:EStructuralFeature): void ;

}

