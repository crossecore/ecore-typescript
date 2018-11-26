import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EDataTypeImpl} from "./EDataTypeImpl";
import {EEnumLiteral} from "./EEnumLiteral";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {EEnum} from "./EEnum";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
		
			export class EEnumBase
			extends EDataTypeImpl
			implements EEnum
			{
				private _eLiterals:OrderedSet<EEnumLiteral> = null;
				
				get eLiterals():OrderedSet<EEnumLiteral>{
					if(this._eLiterals===null){
						this._eLiterals = new OrderedSet<EEnumLiteral>(this, EcorePackageLiterals.EENUM_ELITERALS, EcorePackageLiterals.EENUMLITERAL_EENUM);
							
					}
					return this._eLiterals;
					
				}
				
				

				public getEEnumLiteral(...args:Array<any>):any {
					if(args.length === 1){
						
						return this.getEEnumLiteral_string(args[0]);
					}
					if(args.length === 1){
						
						return this.getEEnumLiteral_number(args[0]);
					}
				};
				
				public getEEnumLiteral_string(name:string): EEnumLiteral {
					/*TODO implement function*/ 
					return null;
				};
				public getEEnumLiteral_number(value:number): EEnumLiteral {
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
						case EcorePackageLiterals.EENUM_ELITERALS:
							return this.eLiterals.basicAdd(otherEnd as EEnumLiteral, msgs);
					}
					//return this.eInverseAddFromEDataType(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEEnum = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUM_ELITERALS:
							return this.eLiterals.basicRemove(otherEnd as EEnumLiteral, msgs);
					}
					//return this.eInverseRemoveFromEDataType(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEEnum = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EENUM_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EENUM_NAME:
							return this.name;
						case EcorePackageLiterals.EENUM_INSTANCECLASSNAME:
							return this.instanceClassName;
						case EcorePackageLiterals.EENUM_INSTANCECLASS:
							return this.instanceClass;
						case EcorePackageLiterals.EENUM_DEFAULTVALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EENUM_INSTANCETYPENAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.EENUM_EPACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.EENUM_ETYPEPARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.EENUM_SERIALIZABLE:
							return this.serializable;
						case EcorePackageLiterals.EENUM_ELITERALS:
							return this.eLiterals;
					}
					//return this.eGetFromEDataType(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EENUM_ELITERALS:
							this.eLiterals.clear();
							this.eLiterals.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
