/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {ETypeParameter} from "ecore/ETypeParameter";
import {EGenericType} from "ecore/EGenericType";
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
export class ETypeParameterBase
extends ENamedElementImpl
implements ETypeParameter

{
	private _eBounds:OrderedSet<EGenericType> = null;
	get eBounds():OrderedSet<EGenericType>{
		if(this._eBounds===null){
			this._eBounds = new OrderedSet<EGenericType>(this, EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS);
				
		}
		return this._eBounds;
		
	}
	
	

	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.ETYPEPARAMETER;
		return null;
	}



	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.ETYPEPARAMETER_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.ETYPEPARAMETER_NAME:
				return this.name;
			case EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS:
				return this.eBounds;
		}
		//return this.eGetFromENamedElement(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromETypeParameter = this.eGet;
}


