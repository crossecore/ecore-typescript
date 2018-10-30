/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EModelElement} from "ecore/EModelElement";
import {EAnnotation} from "ecore/EAnnotation";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EModelElementBase
extends BasicEObjectImpl
implements EModelElement

{
	private _eAnnotations:OrderedSet<EAnnotation> = null;
	get eAnnotations():OrderedSet<EAnnotation>{
		if(this._eAnnotations===null){
			this._eAnnotations = new OrderedSet<EAnnotation>(this, EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, EcorePackageLiterals.EANNOTATION_EMODELELEMENT);
				
		}
		return this._eAnnotations;
		
	}
	
	

	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EMODELELEMENT;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
				return this.eAnnotations.basicAdd(otherEnd as EAnnotation, msgs);
		}
		//return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEModelElement = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
				return this.eAnnotations.basicRemove(otherEnd as EAnnotation, msgs);
		}
		//return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEModelElement = this.eInverseRemove;


	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
				return this.eAnnotations;
		}
		//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEModelElement = this.eGet;
}


