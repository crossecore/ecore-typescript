import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {Resource} from "ecore/Resource";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EClass} from "ecore/EClass";
import {EList} from "ecore/EList";
import {NotificationChain} from "ecore/NotificationChain";
import {EObject} from "ecore/EObject";
import {EOperation} from "ecore/EOperation";
import {TreeIterator} from "ecore/TreeIterator";
import {InternalEObject} from "ecore/InternalEObject";
import {EReference} from "ecore/EReference";
		
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
				
				public eInvoke(operation:EOperation, arguments_:EList<any>): any {
					/*TODO implement function*/ 
					return null;
				};
				
				public eSet(feature:EStructuralFeature, newValue:any): void {
					/*TODO implement function*/ 
					return null;
				};
				
				public eContents(): EList<EObject> {
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
				
				public eAllContents(): TreeIterator<EObject> {
					/*TODO implement function*/ 
					return null;
				};
				public eGet(...args:Array<any>):any {
					if(
						args[0] instanceof EStructuralFeature && 
						typeof args[1] === "boolean"
					)
					{
						return this.eGet_EStructuralFeature_EBoolean(args[0], args[1]);
					}
					if(
						args[0] instanceof EStructuralFeature
					)
					{
						return this.eGet_EStructuralFeature(args[0]);
					}
				};
				
				public eGet_EStructuralFeature_EBoolean(feature:EStructuralFeature, resolve:boolean): any {
					/*TODO implement function*/ 
					return null;
				};
				public eGet_EStructuralFeature(feature:EStructuralFeature): any {
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
			
