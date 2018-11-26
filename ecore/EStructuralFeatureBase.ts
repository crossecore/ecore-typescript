import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {ETypedElementImpl} from "./ETypedElementImpl";
		
			export class EStructuralFeatureBase
			extends ETypedElementImpl
			implements EStructuralFeature
			{
				private _changeable:boolean = false;
				get changeable():boolean{
					return this._changeable;
				}
				set changeable(value:boolean){
					this._changeable = value; 
				}
				private _volatile:boolean = false;
				get volatile():boolean{
					return this._volatile;
				}
				set volatile(value:boolean){
					this._volatile = value; 
				}
				private _transient:boolean = false;
				get transient():boolean{
					return this._transient;
				}
				set transient(value:boolean){
					this._transient = value; 
				}
				private _defaultValueLiteral:string = '';
				get defaultValueLiteral():string{
					return this._defaultValueLiteral;
				}
				set defaultValueLiteral(value:string){
					this._defaultValueLiteral = value; 
				}
				get defaultValue():any{
					//TODO implement derivation
					return null;
				}
				private _unsettable:boolean = false;
				get unsettable():boolean{
					return this._unsettable;
				}
				set unsettable(value:boolean){
					this._unsettable = value; 
				}
				private _derived:boolean = false;
				get derived():boolean{
					return this._derived;
				}
				set derived(value:boolean){
					this._derived = value; 
				}
				get eContainingClass():EClass{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS) return null;
					return this.eInternalContainer() as EClass;
				}

				
				public getContainerClass(): Function {
					/*TODO implement function*/ 
					return null;
				};
				
				public getFeatureID(): number {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EStructuralFeatureBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEContainingClass(otherEnd as EClass, msgs);
					}
					//return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEStructuralFeature = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS:
							return this.basicSetEContainingClass(null, msgs);
					}
					//return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEStructuralFeature = this.eInverseRemove;
			
				public basicSetEContainingClass(newobj:EClass, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURALFEATURE_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_NAME:
							return this.name;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_ORDERED:
							return this.ordered;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_UNIQUE:
							return this.unique;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_LOWERBOUND:
							return this.lowerBound;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_UPPERBOUND:
							return this.upperBound;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_MANY:
							return this.many;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_REQUIRED:
							return this.required;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_ETYPE:
							return this.eType;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_EGENERICTYPE:
							return this.eGenericType;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_CHANGEABLE:
							return this.changeable;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_VOLATILE:
							return this.volatile;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_TRANSIENT:
							return this.transient;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL:
							return this.defaultValueLiteral;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUE:
							return this.defaultValue;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_UNSETTABLE:
							return this.unsettable;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_DERIVED:
							return this.derived;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS:
							return this.eContainingClass;
					}
					//return this.eGetFromETypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURALFEATURE_CHANGEABLE:
							this.changeable = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_VOLATILE:
							this.volatile = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_TRANSIENT:
							this.transient = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL:
							this.defaultValueLiteral = <string> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_UNSETTABLE:
							this.unsettable = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURALFEATURE_DERIVED:
							this.derived = <boolean> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
