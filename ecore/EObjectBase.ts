import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {Resource} from "./Resource";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EClass} from "./EClass";
import {EList} from "./EList";
import {NotificationChain} from "./NotificationChain";
import {EObject} from "./EObject";
import {EOperation} from "./EOperation";
import {TreeIterator} from "./TreeIterator";
import {InternalEObject} from "./InternalEObject";
import {EReference} from "./EReference";
		
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
				
				public eContainingFeature(): EStructuralFeature {
					/*TODO implement function*/ 
					return null;
				};
				
				public eIsProxy(): boolean {
					/*TODO implement function*/ 
					return null;
				};
				
				public eClass(): EClass {
					/*TODO implement function*/ 
					return null;
				};
				
				public eInvoke(operation:EOperation, arguments_:EList<any>): any {
					/*TODO implement function*/ 
					return null;
				};
				
				public eContainer(): EObject {
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
				
				public eCrossReferences(): EList<EObject> {
					/*TODO implement function*/ 
					return null;
				};
				
				public eContents(): EList<EObject> {
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
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EObjectBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
