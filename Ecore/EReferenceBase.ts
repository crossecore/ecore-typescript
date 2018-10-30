/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAttribute} from "ecore/EAttribute";
import {EAnnotation} from "ecore/EAnnotation";
import {EReference} from "ecore/EReference";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EStructuralFeatureImpl} from "ecore/EStructuralFeatureImpl";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EReferenceBase
extends EStructuralFeatureImpl
implements EReference

{
	private _containment:boolean = false;
	get containment():boolean{
		return this._containment;
	}
	set containment(value:boolean){
		this._containment = value; 
	}
	get container():boolean{
		//TODO implement derivation
		return null;
	}
	private _resolveProxies:boolean = false;
	get resolveProxies():boolean{
		return this._resolveProxies;
	}
	set resolveProxies(value:boolean){
		this._resolveProxies = value; 
	}
	get eReferenceType():EClass{
	
		//TODO implement derivation
		return null;
	}
	private _eKeys:OrderedSet<EAttribute> = null;
	get eKeys():OrderedSet<EAttribute>{
		if(this._eKeys===null){
			this._eKeys = new OrderedSet<EAttribute>(this, EcorePackageLiterals.EREFERENCE_EKEYS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EREFERENCE_EKEYS);
				
		}
		return this._eKeys;
		
	}
	
	
	private _eOpposite:EReference = null;
	get eOpposite():EReference{
	
		return this._eOpposite;
	}
	set eOpposite(value:EReference) {
		let oldvalue = this._eOpposite;
		this._eOpposite = value;
		if (this.eNotificationRequired()){
			this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EREFERENCE_EOPPOSITE , oldvalue, value));
		}
	}

	
	public getContainerClass(): Function {
		/*TODO implement function*/ 
		return null;
	};
	
	public getFeatureID(): number {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EREFERENCE;
		return null;
	}


	public basicSetEOpposite(newobj:EReference, msgs:NotificationChain):NotificationChain {
		let oldobj = this._eOpposite;
		this._eOpposite = newobj;
		if (this.eNotificationRequired()) {
			let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EREFERENCE_EOPPOSITE, oldobj, newobj);
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
			case EcorePackageLiterals.EREFERENCE_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.EREFERENCE_NAME:
				return this.name;
			case EcorePackageLiterals.EREFERENCE_ORDERED:
				return this.ordered;
			case EcorePackageLiterals.EREFERENCE_UNIQUE:
				return this.unique;
			case EcorePackageLiterals.EREFERENCE_LOWERBOUND:
				return this.lowerBound;
			case EcorePackageLiterals.EREFERENCE_UPPERBOUND:
				return this.upperBound;
			case EcorePackageLiterals.EREFERENCE_MANY:
				return this.many;
			case EcorePackageLiterals.EREFERENCE_REQUIRED:
				return this.required;
			case EcorePackageLiterals.EREFERENCE_ETYPE:
				return this.eType;
			case EcorePackageLiterals.EREFERENCE_EGENERICTYPE:
				return this.eGenericType;
			case EcorePackageLiterals.EREFERENCE_CHANGEABLE:
				return this.changeable;
			case EcorePackageLiterals.EREFERENCE_VOLATILE:
				return this.volatile;
			case EcorePackageLiterals.EREFERENCE_TRANSIENT:
				return this.transient;
			case EcorePackageLiterals.EREFERENCE_DEFAULTVALUELITERAL:
				return this.defaultValueLiteral;
			case EcorePackageLiterals.EREFERENCE_DEFAULTVALUE:
				return this.defaultValue;
			case EcorePackageLiterals.EREFERENCE_UNSETTABLE:
				return this.unsettable;
			case EcorePackageLiterals.EREFERENCE_DERIVED:
				return this.derived;
			case EcorePackageLiterals.EREFERENCE_ECONTAININGCLASS:
				return this.eContainingClass;
			case EcorePackageLiterals.EREFERENCE_CONTAINMENT:
				return this.containment;
			case EcorePackageLiterals.EREFERENCE_CONTAINER:
				return this.container;
			case EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES:
				return this.resolveProxies;
			case EcorePackageLiterals.EREFERENCE_EOPPOSITE:
				return this.eOpposite;
			case EcorePackageLiterals.EREFERENCE_EREFERENCETYPE:
				return this.eReferenceType;
			case EcorePackageLiterals.EREFERENCE_EKEYS:
				return this.eKeys;
		}
		//return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEReference = this.eGet;
}


