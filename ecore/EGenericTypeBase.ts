import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EGenericType} from "./EGenericType";
import {EClassifier} from "./EClassifier";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {ETypeParameter} from "./ETypeParameter";
		
			export class EGenericTypeBase
			extends BasicEObjectImpl
			implements EGenericType
			{
				private _eUpperBound:EGenericType = null;
				get eUpperBound():EGenericType{
				
					return this._eUpperBound;
				}
				set eUpperBound(value:EGenericType) {
					if (value != this._eUpperBound) {
						let msgs:NotificationChain = null;
						if (this._eUpperBound != null){
							msgs = (this._eUpperBound).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
						}
						msgs = this.basicSetEUpperBound(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND , value, value));
					}
				}
				private _eTypeArguments:OrderedSet<EGenericType> = null;
				
				get eTypeArguments():OrderedSet<EGenericType>{
					if(this._eTypeArguments===null){
						this._eTypeArguments = new OrderedSet<EGenericType>(this, EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS);
							
					}
					return this._eTypeArguments;
					
				}
				
				
				get eRawType():EClassifier{
				
					//TODO implement derivation
					return null;
				}
				private _eLowerBound:EGenericType = null;
				get eLowerBound():EGenericType{
				
					return this._eLowerBound;
				}
				set eLowerBound(value:EGenericType) {
					if (value != this._eLowerBound) {
						let msgs:NotificationChain = null;
						if (this._eLowerBound != null){
							msgs = (this._eLowerBound).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
						}
						msgs = this.basicSetELowerBound(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND , value, value));
					}
				}
				private _eTypeParameter:ETypeParameter = null;
				get eTypeParameter():ETypeParameter{
				
					return this._eTypeParameter;
				}
				set eTypeParameter(value:ETypeParameter) {
					let oldvalue = this._eTypeParameter;
					this._eTypeParameter = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER , oldvalue, value));
					}
				}
				private _eClassifier:EClassifier = null;
				get eClassifier():EClassifier{
				
					return this._eClassifier;
				}
				set eClassifier(value:EClassifier) {
					let oldvalue = this._eClassifier;
					this._eClassifier = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER , oldvalue, value));
					}
				}

				
				public isInstance(object:any): boolean {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EGenericTypeBase.eStaticClass;
				}
			
			
				public basicSetETypeParameter(newobj:ETypeParameter, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eTypeParameter;
					this._eTypeParameter = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetELowerBound(newobj:EGenericType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eLowerBound;
					this._eLowerBound = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetEClassifier(newobj:EClassifier, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eClassifier;
					this._eClassifier = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetEUpperBound(newobj:EGenericType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eUpperBound;
					this._eUpperBound = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND, oldobj, newobj);
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
						case EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND:
							return this.eUpperBound;
						case EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS:
							return this.eTypeArguments;
						case EcorePackageLiterals.EGENERICTYPE_ERAWTYPE:
							return this.eRawType;
						case EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND:
							return this.eLowerBound;
						case EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER:
							return this.eTypeParameter;
						case EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER:
							return this.eClassifier;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND:
							this.eUpperBound = <EGenericType> newValue;
							return;
						case EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS:
							this.eTypeArguments.clear();
							this.eTypeArguments.addAll(newValue);
							return;
						case EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND:
							this.eLowerBound = <EGenericType> newValue;
							return;
						case EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER:
							this.eTypeParameter = <ETypeParameter> newValue;
							return;
						case EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER:
							this.eClassifier = <EClassifier> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
