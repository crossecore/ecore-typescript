import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EDataTypeImpl} from "ecore/EDataTypeImpl";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EEnum} from "ecore/EEnum";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class EEnumBase
			extends EDataTypeImpl
			implements EEnum
			{
				private _eLiterals:OrderedSet<EEnumLiteral> = null;
				
				get eLiterals():OrderedSet<EEnumLiteral>{
					if(this._eLiterals===null){
						this._eLiterals = new OrderedSet<EEnumLiteral>(this, EcorePackageLiterals.EENUM__E_LITERALS, EcorePackageLiterals.EENUM_LITERAL__E_ENUM);
							
					}
					return this._eLiterals;
					
				}
				
				

				public getEEnumLiteral(...args:Array<any>):any {
					if(
						typeof args[0] === "number"
					)
					{
						return this.getEEnumLiteral_EInt(args[0]);
					}
					if(
						typeof args[0] === "string"
					)
					{
						return this.getEEnumLiteral_EString(args[0]);
					}
				};
				
				public getEEnumLiteral_EString(name:string): EEnumLiteral {
					/*TODO implement function*/ 
					return null;
				};
				public getEEnumLiteral_EInt(value:number): EEnumLiteral {
					/*TODO implement function*/ 
					return null;
				};
				
				public getEEnumLiteralByLiteral(literal:string): EEnumLiteral {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EEnumBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUM__E_LITERALS:
							return this.eLiterals.basicAdd(otherEnd as EEnumLiteral, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUM__E_LITERALS:
							return this.eLiterals.basicRemove(otherEnd as EEnumLiteral, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EENUM__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EENUM__NAME:
							return this.name;
						case EcorePackageLiterals.EENUM__INSTANCE_CLASS_NAME:
							return this.instanceClassName;
						case EcorePackageLiterals.EENUM__INSTANCE_CLASS:
							return this.instanceClass;
						case EcorePackageLiterals.EENUM__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EENUM__INSTANCE_TYPE_NAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.EENUM__E_PACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.EENUM__E_TYPE_PARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.EENUM__SERIALIZABLE:
							return this.serializable;
						case EcorePackageLiterals.EENUM__E_LITERALS:
							return this.eLiterals;
					}
					//return this.eGetFromEDataType(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EENUM__E_LITERALS:
							this.eLiterals.clear();
							this.eLiterals.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
