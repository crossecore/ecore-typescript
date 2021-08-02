import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ETypeParameter} from "ecore/ETypeParameter";
		
			export class EGenericTypeBase
			extends BasicEObjectImpl
			implements EGenericType
			{
				private _eUpperBound:EGenericType = null;
				get eUpperBound():EGenericType{
				
					return this._eUpperBound;
				}
				set eUpperBound(value:EGenericType) {
					if (value != this.eUpperBound) {
						let msgs:NotificationChain = null;
						if (this.eUpperBound != null){
							msgs = (this.eUpperBound).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERIC_TYPE__E_UPPER_BOUND, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERIC_TYPE__E_UPPER_BOUND, /*null*/ null, msgs);
						}
						msgs = this.basicSetEUpperBound(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERIC_TYPE__E_UPPER_BOUND , value, value));
					}
				}
				private _eTypeArguments:OrderedSet<EGenericType> = null;
				
				get eTypeArguments():OrderedSet<EGenericType>{
					if(this._eTypeArguments===null){
						this._eTypeArguments = new OrderedSet<EGenericType>(this, EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_ARGUMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_ARGUMENTS);
							
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
					if (value != this.eLowerBound) {
						let msgs:NotificationChain = null;
						if (this.eLowerBound != null){
							msgs = (this.eLowerBound).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERIC_TYPE__E_LOWER_BOUND, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERIC_TYPE__E_LOWER_BOUND, /*null*/ null, msgs);
						}
						msgs = this.basicSetELowerBound(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERIC_TYPE__E_LOWER_BOUND , value, value));
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
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_PARAMETER , oldvalue, value));
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
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EGENERIC_TYPE__E_CLASSIFIER , oldvalue, value));
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
			
			
				public basicSetEUpperBound(newobj:EGenericType, msgs:NotificationChain):NotificationChain {
					const oldobj = this._eUpperBound;
					this._eUpperBound = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERIC_TYPE__E_UPPER_BOUND, oldobj, newobj);
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
					const oldobj = this._eLowerBound;
					this._eLowerBound = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERIC_TYPE__E_LOWER_BOUND, oldobj, newobj);
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
					const oldobj = this._eClassifier;
					this._eClassifier = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERIC_TYPE__E_CLASSIFIER, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetETypeParameter(newobj:ETypeParameter, msgs:NotificationChain):NotificationChain {
					const oldobj = this._eTypeParameter;
					this._eTypeParameter = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_PARAMETER, oldobj, newobj);
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
						case EcorePackageLiterals.EGENERIC_TYPE__E_UPPER_BOUND:
							return this.eUpperBound;
						case EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_ARGUMENTS:
							return this.eTypeArguments;
						case EcorePackageLiterals.EGENERIC_TYPE__E_RAW_TYPE:
							return this.eRawType;
						case EcorePackageLiterals.EGENERIC_TYPE__E_LOWER_BOUND:
							return this.eLowerBound;
						case EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_PARAMETER:
							return this.eTypeParameter;
						case EcorePackageLiterals.EGENERIC_TYPE__E_CLASSIFIER:
							return this.eClassifier;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EGENERIC_TYPE__E_UPPER_BOUND:
							this.eUpperBound = <EGenericType> newValue;
							return;
						case EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_ARGUMENTS:
							this.eTypeArguments.clear();
							this.eTypeArguments.addAll(newValue);
							return;
						case EcorePackageLiterals.EGENERIC_TYPE__E_LOWER_BOUND:
							this.eLowerBound = <EGenericType> newValue;
							return;
						case EcorePackageLiterals.EGENERIC_TYPE__E_TYPE_PARAMETER:
							this.eTypeParameter = <ETypeParameter> newValue;
							return;
						case EcorePackageLiterals.EGENERIC_TYPE__E_CLASSIFIER:
							this.eClassifier = <EClassifier> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
