import {ETypedElement} from "ecore/ETypedElement";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EClassifier} from "ecore/EClassifier";
import {EGenericType} from "ecore/EGenericType";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class ETypedElementBase
			extends ENamedElementImpl
			implements ETypedElement
			{
				private _ordered:boolean = false;
				get ordered():boolean{
					return this._ordered;
				}
				set ordered(value:boolean){
					this._ordered = value; 
				}
				private _unique:boolean = false;
				get unique():boolean{
					return this._unique;
				}
				set unique(value:boolean){
					this._unique = value; 
				}
				private _lowerBound:number = 0;
				get lowerBound():number{
					return this._lowerBound;
				}
				set lowerBound(value:number){
					this._lowerBound = value; 
				}
				private _upperBound:number = 0;
				get upperBound():number{
					return this._upperBound;
				}
				set upperBound(value:number){
					this._upperBound = value; 
				}
				get many():boolean{
					//TODO implement derivation
					return null;
				}
				get required():boolean{
					//TODO implement derivation
					return null;
				}
				private _eType:EClassifier = null;
				get eType():EClassifier{
				
					return this._eType;
				}
				set eType(value:EClassifier) {
					let oldvalue = this._eType;
					this._eType = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.ETYPED_ELEMENT__E_TYPE , oldvalue, value));
					}
				}
				private _eGenericType:EGenericType = null;
				get eGenericType():EGenericType{
				
					return this._eGenericType;
				}
				set eGenericType(value:EGenericType) {
					if (value != this.eGenericType) {
						let msgs:NotificationChain = null;
						if (this.eGenericType != null){
							msgs = (this.eGenericType).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPED_ELEMENT__E_GENERIC_TYPE, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPED_ELEMENT__E_GENERIC_TYPE, /*null*/ null, msgs);
						}
						msgs = this.basicSetEGenericType(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.ETYPED_ELEMENT__E_GENERIC_TYPE , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ETypedElementBase.eStaticClass;
				}
			
			
				public basicSetEGenericType(newobj:EGenericType, msgs:NotificationChain):NotificationChain {
					const oldobj = this._eGenericType;
					this._eGenericType = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.ETYPED_ELEMENT__E_GENERIC_TYPE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetEType(newobj:EClassifier, msgs:NotificationChain):NotificationChain {
					const oldobj = this._eType;
					this._eType = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.ETYPED_ELEMENT__E_TYPE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ETYPED_ELEMENT__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ETYPED_ELEMENT__NAME:
							return this.name;
						case EcorePackageLiterals.ETYPED_ELEMENT__ORDERED:
							return this.ordered;
						case EcorePackageLiterals.ETYPED_ELEMENT__UNIQUE:
							return this.unique;
						case EcorePackageLiterals.ETYPED_ELEMENT__LOWER_BOUND:
							return this.lowerBound;
						case EcorePackageLiterals.ETYPED_ELEMENT__UPPER_BOUND:
							return this.upperBound;
						case EcorePackageLiterals.ETYPED_ELEMENT__MANY:
							return this.many;
						case EcorePackageLiterals.ETYPED_ELEMENT__REQUIRED:
							return this.required;
						case EcorePackageLiterals.ETYPED_ELEMENT__E_TYPE:
							return this.eType;
						case EcorePackageLiterals.ETYPED_ELEMENT__E_GENERIC_TYPE:
							return this.eGenericType;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ETYPED_ELEMENT__ORDERED:
							this.ordered = <boolean> newValue;
							return;
						case EcorePackageLiterals.ETYPED_ELEMENT__UNIQUE:
							this.unique = <boolean> newValue;
							return;
						case EcorePackageLiterals.ETYPED_ELEMENT__LOWER_BOUND:
							this.lowerBound = <number> newValue;
							return;
						case EcorePackageLiterals.ETYPED_ELEMENT__UPPER_BOUND:
							this.upperBound = <number> newValue;
							return;
						case EcorePackageLiterals.ETYPED_ELEMENT__E_TYPE:
							this.eType = <EClassifier> newValue;
							return;
						case EcorePackageLiterals.ETYPED_ELEMENT__E_GENERIC_TYPE:
							this.eGenericType = <EGenericType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
