/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {EDataType} from "ecore/EDataType";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EDataTypeBase
extends EClassifierImpl
implements EDataType

{
	private _serializable:boolean = false;
	get serializable():boolean{
		return this._serializable;
	}
	set serializable(value:boolean){
		this._serializable = value; 
	}

	
	public isInstance(object:any): boolean {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};
	
	public getClassifierID(): number {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EDATATYPE;
		return null;
	}



	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.EDATATYPE_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.EDATATYPE_NAME:
				return this.name;
			case EcorePackageLiterals.EDATATYPE_INSTANCECLASSNAME:
				return this.instanceClassName;
			case EcorePackageLiterals.EDATATYPE_INSTANCECLASS:
				return this.instanceClass;
			case EcorePackageLiterals.EDATATYPE_DEFAULTVALUE:
				return this.defaultValue;
			case EcorePackageLiterals.EDATATYPE_INSTANCETYPENAME:
				return this.instanceTypeName;
			case EcorePackageLiterals.EDATATYPE_EPACKAGE:
				return this.ePackage;
			case EcorePackageLiterals.EDATATYPE_ETYPEPARAMETERS:
				return this.eTypeParameters;
			case EcorePackageLiterals.EDATATYPE_SERIALIZABLE:
				return this.serializable;
		}
		//return this.eGetFromEClassifier(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEDataType = this.eGet;
}


