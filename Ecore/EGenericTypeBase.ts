/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {ETypeParameter} from "ecore/ETypeParameter";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EGenericTypeBase
extends BasicEObjectImpl
implements EGenericType

{
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
	get eRawType():EClassifier{
	
		//TODO implement derivation
		return null;
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
	private _eTypeArguments:OrderedSet<EGenericType> = null;
	get eTypeArguments():OrderedSet<EGenericType>{
		if(this._eTypeArguments===null){
			this._eTypeArguments = new OrderedSet<EGenericType>(this, EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS);
				
		}
		return this._eTypeArguments;
		
	}
	
	
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

	
	public isInstance(object:any): boolean {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EGENERICTYPE;
		return null;
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
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
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
	//public eGetFromEGenericType = this.eGet;
}


