/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EStringToStringMapEntryBase
extends BasicEObjectImpl
implements EStringToStringMapEntry

{
	private _key:string = "";
	get key():string{
		return this._key;
	}
	set key(value:string){
		this._key = value; 
	}
	private _value:string = "";
	get value():string{
		return this._value;
	}
	set value(value:string){
		this._value = value; 
	}


	protected eStaticClass():EClass{
		//return EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY;
		return null;
	}



	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY:
				return this.key;
			case EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE:
				return this.value;
		}
		//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEStringToStringMapEntry = this.eGet;
}


