/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {ETypeParameter} from "ecore/ETypeParameter";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {EParameter} from "ecore/EParameter";
import {EOperation} from "ecore/EOperation";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EOperationBase
extends ETypedElementImpl
implements EOperation

{
	private _eGenericExceptions:OrderedSet<EGenericType> = null;
	get eGenericExceptions():OrderedSet<EGenericType>{
		if(this._eGenericExceptions===null){
			this._eGenericExceptions = new OrderedSet<EGenericType>(this, EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS);
				
		}
		return this._eGenericExceptions;
		
	}
	
	
	private _eExceptions:OrderedSet<EClassifier> = null;
	get eExceptions():OrderedSet<EClassifier>{
		if(this._eExceptions===null){
			this._eExceptions = new OrderedSet<EClassifier>(this, EcorePackageLiterals.EOPERATION_EEXCEPTIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION_EEXCEPTIONS);
				
		}
		return this._eExceptions;
		
	}
	
	
	get eContainingClass():EClass{
	
		if (this.eContainerFeatureID() != EcorePackageLiterals.EOPERATION_ECONTAININGCLASS) return null;
		return this.eInternalContainer() as EClass;
	}
	private _eParameters:OrderedSet<EParameter> = null;
	get eParameters():OrderedSet<EParameter>{
		if(this._eParameters===null){
			this._eParameters = new OrderedSet<EParameter>(this, EcorePackageLiterals.EOPERATION_EPARAMETERS, EcorePackageLiterals.EPARAMETER_EOPERATION);
				
		}
		return this._eParameters;
		
	}
	
	
	private _eTypeParameters:OrderedSet<ETypeParameter> = null;
	get eTypeParameters():OrderedSet<ETypeParameter>{
		if(this._eTypeParameters===null){
			this._eTypeParameters = new OrderedSet<ETypeParameter>(this, EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS);
				
		}
		return this._eTypeParameters;
		
	}
	
	

	
	public isOverrideOf(someOperation:EOperation): boolean {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};
	
	public getOperationID(): number {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EOPERATION;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
				if (this.eInternalContainer() != null) {
					msgs = this.eBasicRemoveFromContainer(msgs);
				}
				return this.basicSetEContainingClass(otherEnd as EClass, msgs);
			case EcorePackageLiterals.EOPERATION_EPARAMETERS:
				return this.eParameters.basicAdd(otherEnd as EParameter, msgs);
		}
		//return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEOperation = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
				return this.basicSetEContainingClass(null, msgs);
			case EcorePackageLiterals.EOPERATION_EPARAMETERS:
				return this.eParameters.basicRemove(otherEnd as EParameter, msgs);
		}
		//return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEOperation = this.eInverseRemove;

	public basicSetEContainingClass(newobj:EClass, msgs:NotificationChain):NotificationChain {
			msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EOPERATION_ECONTAININGCLASS, msgs);
			return msgs;
	}
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.EOPERATION_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.EOPERATION_NAME:
				return this.name;
			case EcorePackageLiterals.EOPERATION_ORDERED:
				return this.ordered;
			case EcorePackageLiterals.EOPERATION_UNIQUE:
				return this.unique;
			case EcorePackageLiterals.EOPERATION_LOWERBOUND:
				return this.lowerBound;
			case EcorePackageLiterals.EOPERATION_UPPERBOUND:
				return this.upperBound;
			case EcorePackageLiterals.EOPERATION_MANY:
				return this.many;
			case EcorePackageLiterals.EOPERATION_REQUIRED:
				return this.required;
			case EcorePackageLiterals.EOPERATION_ETYPE:
				return this.eType;
			case EcorePackageLiterals.EOPERATION_EGENERICTYPE:
				return this.eGenericType;
			case EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
				return this.eContainingClass;
			case EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS:
				return this.eTypeParameters;
			case EcorePackageLiterals.EOPERATION_EPARAMETERS:
				return this.eParameters;
			case EcorePackageLiterals.EOPERATION_EEXCEPTIONS:
				return this.eExceptions;
			case EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS:
				return this.eGenericExceptions;
		}
		//return this.eGetFromETypedElement(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEOperation = this.eGet;
}


