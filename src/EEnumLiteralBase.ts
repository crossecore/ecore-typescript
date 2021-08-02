import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {Enumerator} from "ecore/Enumerator";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EEnum} from "ecore/EEnum";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
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
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EENUM_LITERAL__E_ENUM) return null;
					return this.eInternalContainer() as EEnum;
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EEnumLiteralBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUM_LITERAL__E_ENUM:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEEnum(otherEnd as EEnum, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EENUM_LITERAL__E_ENUM:
							return this.basicSetEEnum(null, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EENUM_LITERAL__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EENUM_LITERAL__NAME:
							return this.name;
						case EcorePackageLiterals.EENUM_LITERAL__VALUE:
							return this.value;
						case EcorePackageLiterals.EENUM_LITERAL__INSTANCE:
							return this.instance;
						case EcorePackageLiterals.EENUM_LITERAL__LITERAL:
							return this.literal;
						case EcorePackageLiterals.EENUM_LITERAL__E_ENUM:
							return this.eEnum;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EENUM_LITERAL__VALUE:
							this.value = <number> newValue;
							return;
						case EcorePackageLiterals.EENUM_LITERAL__INSTANCE:
							this.instance = <Enumerator> newValue;
							return;
						case EcorePackageLiterals.EENUM_LITERAL__LITERAL:
							this.literal = <string> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
