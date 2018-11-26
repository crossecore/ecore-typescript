import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EStringToStringMapEntry} from "./EStringToStringMapEntry";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
		
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
						case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY:
							return this.key;
						case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE:
							return this.value;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY:
							this.key = <string> newValue;
							return;
						case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE:
							this.value = <string> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
