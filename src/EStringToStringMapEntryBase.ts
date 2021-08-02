import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class EStringToStringMapEntryBase
			extends BasicEObjectImpl
			implements EStringToStringMapEntry
			{
				private _key:string = '';
				get key():string{
					return this._key;
				}
				set key(value:string){
					this._key = value; 
				}
				private _value:string = '';
				get value():string{
					return this._value;
				}
				set value(value:string){
					this._value = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EStringToStringMapEntryBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ESTRING_TO_STRING_MAP_ENTRY__KEY:
							return this.key;
						case EcorePackageLiterals.ESTRING_TO_STRING_MAP_ENTRY__VALUE:
							return this.value;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ESTRING_TO_STRING_MAP_ENTRY__KEY:
							this.key = <string> newValue;
							return;
						case EcorePackageLiterals.ESTRING_TO_STRING_MAP_ENTRY__VALUE:
							this.value = <string> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
