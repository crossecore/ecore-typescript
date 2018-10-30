/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EStructuralFeatureBase
extends ETypedElementImpl
implements EStructuralFeature

{
	get defaultValue():any{
		//TODO implement derivation
		return null;
	}
	private _volatile:boolean = false;
	get volatile():boolean{
		return this._volatile;
	}
	set volatile(value:boolean){
		this._volatile = value; 
	}
	private _defaultValueLiteral:string = "";
	get defaultValueLiteral():string{
		return this._defaultValueLiteral;
	}
	set defaultValueLiteral(value:string){
		this._defaultValueLiteral = value; 
	}
	private _changeable:boolean = false;
	get changeable():boolean{
		return this._changeable;
	}
	set changeable(value:boolean){
		this._changeable = value; 
	}
	private _unsettable:boolean = false;
	get unsettable():boolean{
		return this._unsettable;
	}
	set unsettable(value:boolean){
		this._unsettable = value; 
	}
	private _transient:boolean = false;
	get transient():boolean{
		return this._transient;
	}
	set transient(value:boolean){
		this._transient = value; 
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
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.ESTRUCTURALFEATURE;
		return null;
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
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
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
	//public eGetFromEStructuralFeature = this.eGet;
}


