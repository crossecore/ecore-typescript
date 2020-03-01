import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EDataType} from "./EDataType";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {EClassifierImpl} from "./EClassifierImpl";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
		
			export class EDataTypeBase
			extends EClassifierImpl
			implements EDataType
			{
				private _serializable:boolean = false;
				get serializable():boolean{
					return this._serializable;
				}
				set serializable(value:boolean){
					this._serializable = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EDataTypeBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EDATATYPE_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EDATATYPE_NAME:
							return this.name;
						case EcorePackageLiterals.EDATATYPE_INSTANCECLASSNAME:
							return this.instanceClassName;
						case EcorePackageLiterals.EDATATYPE_INSTANCECLASS:
							return this.instanceClass;
						case EcorePackageLiterals.EDATATYPE_DEFAULTVALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EDATATYPE_INSTANCETYPENAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.EDATATYPE_EPACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.EDATATYPE_ETYPEPARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.EDATATYPE_SERIALIZABLE:
							return this.serializable;
					}
					//return this.eGetFromEClassifier(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EDATATYPE_SERIALIZABLE:
							this.serializable = <boolean> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
