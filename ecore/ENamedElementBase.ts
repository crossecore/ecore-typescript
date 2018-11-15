/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EModelElementImpl} from "ecore/EModelElementImpl";
import {NotificationChain} from "ecore/NotificationChain";
import {ENamedElement} from "ecore/ENamedElement";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class ENamedElementBase
extends EModelElementImpl
implements ENamedElement

{
	private _name:string = "";
	get name():string{
		return this._name;
	}
	set name(value:string){
		this._name = value; 
	}

	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.ENAMEDELEMENT;
		return null;
	}



	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.ENAMEDELEMENT_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.ENAMEDELEMENT_NAME:
				return this.name;
		}
		//return this.eGetFromEModelElement(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromENamedElement = this.eGet;
}


