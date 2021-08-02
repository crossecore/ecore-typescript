import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
		
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
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_CONTAINING_CLASS) return null;
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
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_CONTAINING_CLASS:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEContainingClass(otherEnd as EClass, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_CONTAINING_CLASS:
							return this.basicSetEContainingClass(null, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__NAME:
							return this.name;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__ORDERED:
							return this.ordered;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__UNIQUE:
							return this.unique;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__LOWER_BOUND:
							return this.lowerBound;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__UPPER_BOUND:
							return this.upperBound;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__MANY:
							return this.many;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__REQUIRED:
							return this.required;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_TYPE:
							return this.eType;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_GENERIC_TYPE:
							return this.eGenericType;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__CHANGEABLE:
							return this.changeable;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__VOLATILE:
							return this.volatile;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__TRANSIENT:
							return this.transient;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL:
							return this.defaultValueLiteral;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__UNSETTABLE:
							return this.unsettable;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__DERIVED:
							return this.derived;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_CONTAINING_CLASS:
							return this.eContainingClass;
					}
					//return this.eGetFromETypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__CHANGEABLE:
							this.changeable = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__VOLATILE:
							this.volatile = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__TRANSIENT:
							this.transient = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL:
							this.defaultValueLiteral = <string> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__UNSETTABLE:
							this.unsettable = <boolean> newValue;
							return;
						case EcorePackageLiterals.ESTRUCTURAL_FEATURE__DERIVED:
							this.derived = <boolean> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
