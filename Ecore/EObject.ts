/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
///<summary>This class was generated.</summary>
import {TreeIterator} from "ecore/TreeIterator";
import {EOperation} from "ecore/EOperation";
import {Notifier} from "ecore/Notifier";
import {EObject} from "ecore/EObject";
import {List} from "ecore/List";
import {Resource} from "ecore/Resource";
import {EReference} from "ecore/EReference";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EClass} from "ecore/EClass";
export interface EObject
extends Notifier

{
	
	
	
	eIsSet(feature:EStructuralFeature): boolean ;
	
	eContainmentFeature(): EReference ;
	
	eIsProxy(): boolean ;
	
	eContainingFeature(): EStructuralFeature ;
	
	eClass(): EClass ;
	
	eContainer(): EObject ;
	
	eInvoke(operation:EOperation, arguments_:List<any>): any ;
	
	eSet(feature:EStructuralFeature, newValue:any): void ;
	
	eResource(): Resource ;
	
	eContents(): List<EObject> ;
	
	eCrossReferences(): List<EObject> ;
	
	eAllContents(): TreeIterator<EObject> ;
	eGet(...args:Array<any>):any;
	
	eGet_EStructuralFeature(feature:EStructuralFeature): any ;
	eGet_EStructuralFeature_boolean(feature:EStructuralFeature, resolve:boolean): any ;
	
	eUnset(feature:EStructuralFeature): void ;

}


