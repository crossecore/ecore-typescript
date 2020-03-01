import {ETypedElement} from "./ETypedElement";
import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EClassifier} from "./EClassifier";
import {EGenericType} from "./EGenericType";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
		
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
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.ETYPEDELEMENT_ETYPE , oldvalue, value));
					}
				}
				private _eGenericType:EGenericType = null;
				get eGenericType():EGenericType{
				
					return this._eGenericType;
				}
				set eGenericType(value:EGenericType) {
					if (value != this._eGenericType) {
						let msgs:NotificationChain = null;
						if (this._eGenericType != null){
							msgs = (this._eGenericType).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, /*null*/ null, msgs);
						}
						msgs = this.basicSetEGenericType(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ETypedElementBase.eStaticClass;
				}
			
			
				public basicSetEGenericType(newobj:EGenericType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eGenericType;
					this._eGenericType = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE, oldobj, newobj);
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
					let oldobj = this._eType;
					this._eType = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.ETYPEDELEMENT_ETYPE, oldobj, newobj);
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
						case EcorePackageLiterals.ETYPEDELEMENT_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ETYPEDELEMENT_NAME:
							return this.name;
						case EcorePackageLiterals.ETYPEDELEMENT_ORDERED:
							return this.ordered;
						case EcorePackageLiterals.ETYPEDELEMENT_UNIQUE:
							return this.unique;
						case EcorePackageLiterals.ETYPEDELEMENT_LOWERBOUND:
							return this.lowerBound;
						case EcorePackageLiterals.ETYPEDELEMENT_UPPERBOUND:
							return this.upperBound;
						case EcorePackageLiterals.ETYPEDELEMENT_MANY:
							return this.many;
						case EcorePackageLiterals.ETYPEDELEMENT_REQUIRED:
							return this.required;
						case EcorePackageLiterals.ETYPEDELEMENT_ETYPE:
							return this.eType;
						case EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE:
							return this.eGenericType;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ETYPEDELEMENT_ORDERED:
							this.ordered = <boolean> newValue;
							return;
						case EcorePackageLiterals.ETYPEDELEMENT_UNIQUE:
							this.unique = <boolean> newValue;
							return;
						case EcorePackageLiterals.ETYPEDELEMENT_LOWERBOUND:
							this.lowerBound = <number> newValue;
							return;
						case EcorePackageLiterals.ETYPEDELEMENT_UPPERBOUND:
							this.upperBound = <number> newValue;
							return;
						case EcorePackageLiterals.ETYPEDELEMENT_ETYPE:
							this.eType = <EClassifier> newValue;
							return;
						case EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE:
							this.eGenericType = <EGenericType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
