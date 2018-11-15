/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {TreeIterator} from "ecore/TreeIterator";
import {EReference} from "ecore/EReference";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {InternalEObject} from "ecore/InternalEObject";
import {EOperation} from "ecore/EOperation";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EObject} from "ecore/EObject";
import {List} from "ecore/List";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {Resource} from "ecore/Resource";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EObjectBase
extends BasicEObjectImpl
implements EObject

{


	
	public eIsSet(feature:EStructuralFeature): boolean {
		/*TODO implement function*/ 
		return null;
	};
	
	public eContainmentFeature(): EReference {
		/*TODO implement function*/ 
		return null;
	};
	
	public eIsProxy(): boolean {
		/*TODO implement function*/ 
		return null;
	};
	
	public eContainingFeature(): EStructuralFeature {
		/*TODO implement function*/ 
		return null;
	};
	
	public eClass(): EClass {
		/*TODO implement function*/ 
		return null;
	};
	
	public eContainer(): EObject {
		/*TODO implement function*/ 
		return null;
	};
	
	public eInvoke(operation:EOperation, arguments_:List<any>): any {
		/*TODO implement function*/ 
		return null;
	};
	
	public eSet(feature:EStructuralFeature, newValue:any): void {
		/*TODO implement function*/ 
		return null;
	};
	
	public eResource(): Resource {
		/*TODO implement function*/ 
		return null;
	};
	
	public eContents(): List<EObject> {
		/*TODO implement function*/ 
		return null;
	};
	
	public eCrossReferences(): List<EObject> {
		/*TODO implement function*/ 
		return null;
	};
	
	public eAllContents(): TreeIterator<EObject> {
		/*TODO implement function*/ 
		return null;
	};
	public eGet(...args:Array<any>):any {
		if(args.length === 1){
			
			return this.eGet_EStructuralFeature(args[0]);
		}
		if(args.length === 2){
			
			return this.eGet_EStructuralFeature_boolean(args[0], args[1]);
		}
	};
	
	public eGet_EStructuralFeature(feature:EStructuralFeature): any {
		/*TODO implement function*/ 
		return null;
	};
	public eGet_EStructuralFeature_boolean(feature:EStructuralFeature, resolve:boolean): any {
		/*TODO implement function*/ 
		return null;
	};
	
	public eUnset(feature:EStructuralFeature): void {
		/*TODO implement function*/ 
		return null;
	};








	//public eGetFromEObject = this.eGet;
}


