import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EDataType} from "ecore/EDataType";
import {EStructuralFeatureImpl} from "ecore/EStructuralFeatureImpl";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class EAttributeBase
			extends EStructuralFeatureImpl
			implements EAttribute
			{
				private _iD:boolean = false;
				get iD():boolean{
					return this._iD;
				}
				set iD(value:boolean){
					this._iD = value; 
				}
				get eAttributeType():EDataType{
				
					//TODO implement derivation
					return null;
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EAttributeBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EATTRIBUTE__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EATTRIBUTE__NAME:
							return this.name;
						case EcorePackageLiterals.EATTRIBUTE__ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EATTRIBUTE__UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EATTRIBUTE__LOWER_BOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EATTRIBUTE__UPPER_BOUND:
							return this.upperBound;
						case EcorePackageLiterals.EATTRIBUTE__MANY:
							return this.many;
						case EcorePackageLiterals.EATTRIBUTE__REQUIRED:
							return this.required;
						case EcorePackageLiterals.EATTRIBUTE__E_TYPE:
							return this.eType;
						case EcorePackageLiterals.EATTRIBUTE__E_GENERIC_TYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EATTRIBUTE__CHANGEABLE:
							return this.changeable;
						case EcorePackageLiterals.EATTRIBUTE__VOLATILE:
							return this.volatile;
						case EcorePackageLiterals.EATTRIBUTE__TRANSIENT:
							return this.transient;
						case EcorePackageLiterals.EATTRIBUTE__DEFAULT_VALUE_LITERAL:
							return this.defaultValueLiteral;
						case EcorePackageLiterals.EATTRIBUTE__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EATTRIBUTE__UNSETTABLE:
							return this.unsettable;
						case EcorePackageLiterals.EATTRIBUTE__DERIVED:
							return this.derived;
						case EcorePackageLiterals.EATTRIBUTE__E_CONTAINING_CLASS:
							return this.eContainingClass;
						case EcorePackageLiterals.EATTRIBUTE__I_D:
							return this.iD;
						case EcorePackageLiterals.EATTRIBUTE__E_ATTRIBUTE_TYPE:
							return this.eAttributeType;
					}
					//return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EATTRIBUTE__I_D:
							this.iD = <boolean> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
