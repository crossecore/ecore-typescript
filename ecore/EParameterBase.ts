/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
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
export class EParameterBase
extends ETypedElementImpl
implements EParameter

{
	get eOperation():EOperation{
	
		if (this.eContainerFeatureID() != EcorePackageLiterals.EPARAMETER_EOPERATION) return null;
		return this.eInternalContainer() as EOperation;
	}

	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EPARAMETER;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EPARAMETER_EOPERATION:
				if (this.eInternalContainer() != null) {
					msgs = this.eBasicRemoveFromContainer(msgs);
				}
				return this.basicSetEOperation(otherEnd as EOperation, msgs);
		}
		//return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEParameter = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EPARAMETER_EOPERATION:
				return this.basicSetEOperation(null, msgs);
		}
		//return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEParameter = this.eInverseRemove;

	public basicSetEOperation(newobj:EOperation, msgs:NotificationChain):NotificationChain {
			msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EPARAMETER_EOPERATION, msgs);
			return msgs;
	}
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.EPARAMETER_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.EPARAMETER_NAME:
				return this.name;
			case EcorePackageLiterals.EPARAMETER_ORDERED:
				return this.ordered;
			case EcorePackageLiterals.EPARAMETER_UNIQUE:
				return this.unique;
			case EcorePackageLiterals.EPARAMETER_LOWERBOUND:
				return this.lowerBound;
			case EcorePackageLiterals.EPARAMETER_UPPERBOUND:
				return this.upperBound;
			case EcorePackageLiterals.EPARAMETER_MANY:
				return this.many;
			case EcorePackageLiterals.EPARAMETER_REQUIRED:
				return this.required;
			case EcorePackageLiterals.EPARAMETER_ETYPE:
				return this.eType;
			case EcorePackageLiterals.EPARAMETER_EGENERICTYPE:
				return this.eGenericType;
			case EcorePackageLiterals.EPARAMETER_EOPERATION:
				return this.eOperation;
		}
		//return this.eGetFromETypedElement(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEParameter = this.eGet;
}


