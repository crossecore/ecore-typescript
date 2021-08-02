import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EDataType} from "ecore/EDataType";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
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
						case EcorePackageLiterals.EDATA_TYPE__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EDATA_TYPE__NAME:
							return this.name;
						case EcorePackageLiterals.EDATA_TYPE__INSTANCE_CLASS_NAME:
							return this.instanceClassName;
						case EcorePackageLiterals.EDATA_TYPE__INSTANCE_CLASS:
							return this.instanceClass;
						case EcorePackageLiterals.EDATA_TYPE__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EDATA_TYPE__INSTANCE_TYPE_NAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.EDATA_TYPE__E_PACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.EDATA_TYPE__E_TYPE_PARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.EDATA_TYPE__SERIALIZABLE:
							return this.serializable;
					}
					//return this.eGetFromEClassifier(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EDATA_TYPE__SERIALIZABLE:
							this.serializable = <boolean> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
