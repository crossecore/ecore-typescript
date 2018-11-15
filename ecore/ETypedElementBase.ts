/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {EGenericType} from "ecore/EGenericType";
import {ETypedElement} from "ecore/ETypedElement";
import {EClassifier} from "ecore/EClassifier";
import {InternalEObject} from "ecore/InternalEObject";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class ETypedElementBase
extends ENamedElementImpl
implements ETypedElement

{
	private _upperBound:number = 0;
	get upperBound():number{
		return this._upperBound;
	}
	set upperBound(value:number){
		this._upperBound = value; 
	}
	private _unique:boolean = false;
	get unique():boolean{
		return this._unique;
	}
	set unique(value:boolean){
		this._unique = value; 
	}
	get many():boolean{
		//TODO implement derivation
		return null;
	}
	private _ordered:boolean = false;
	get ordered():boolean{
		return this._ordered;
	}
	set ordered(value:boolean){
		this._ordered = value; 
	}
	private _lowerBound:number = 0;
	get lowerBound():number{
		return this._lowerBound;
	}
	set lowerBound(value:number){
		this._lowerBound = value; 
	}
	get required():boolean{
		//TODO implement derivation
		return null;
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

	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.ETYPEDELEMENT;
		return null;
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
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
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
	//public eGetFromETypedElement = this.eGet;
}


