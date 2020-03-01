import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {Enumerator} from "./Enumerator";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EEnumLiteral} from "./EEnumLiteral";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {EEnum} from "./EEnum";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
		
			export class EEnumLiteralBase
			extends ENamedElementImpl
			implements EEnumLiteral
			{
				private _value:number = 0;
				get value():number{
					return this._value;
				}
				set value(value:number){
					this._value = value; 
				}
				private _instance:Enumerator = null;
				get instance():Enumerator{
					return this._instance;
				}
				set instance(value:Enumerator){
					this._instance = value; 
				}
				private _literal:string = '';
				get literal():string{
					return this._literal;
				}
				set literal(value:string){
					this._literal = value; 
				}
				get eEnum():EEnum{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EENUMLITERAL_EENUM) return null;
					return this.eInternalContainer() as EEnum;
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EEnumLiteralBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUMLITERAL_EENUM:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEEnum(otherEnd as EEnum, msgs);
					}
					//return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEEnumLiteral = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUMLITERAL_EENUM:
							return this.basicSetEEnum(null, msgs);
					}
					//return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEEnumLiteral = this.eInverseRemove;
			
				public basicSetEEnum(newobj:EEnum, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EENUMLITERAL_EENUM, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EENUMLITERAL_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EENUMLITERAL_NAME:
							return this.name;
						case EcorePackageLiterals.EENUMLITERAL_VALUE:
							return this.value;
						case EcorePackageLiterals.EENUMLITERAL_INSTANCE:
							return this.instance;
						case EcorePackageLiterals.EENUMLITERAL_LITERAL:
							return this.literal;
						case EcorePackageLiterals.EENUMLITERAL_EENUM:
							return this.eEnum;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EENUMLITERAL_VALUE:
							this.value = <number> newValue;
							return;
						case EcorePackageLiterals.EENUMLITERAL_INSTANCE:
							this.instance = <Enumerator> newValue;
							return;
						case EcorePackageLiterals.EENUMLITERAL_LITERAL:
							this.literal = <string> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
