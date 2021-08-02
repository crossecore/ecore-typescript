import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {ENamedElement} from "ecore/ENamedElement";
import {EModelElementImpl} from "ecore/EModelElementImpl";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class ENamedElementBase
			extends EModelElementImpl
			implements ENamedElement
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ENamedElementBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ENAMED_ELEMENT__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ENAMED_ELEMENT__NAME:
							return this.name;
					}
					//return this.eGetFromEModelElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ENAMED_ELEMENT__NAME:
							this.name = <string> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
