/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EDataTypeImpl} from "ecore/EDataTypeImpl";
import {EAnnotation} from "ecore/EAnnotation";
import {EEnum} from "ecore/EEnum";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {InternalEObject} from "ecore/InternalEObject";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EEnumBase
extends EDataTypeImpl
implements EEnum

{
	private _eLiterals:OrderedSet<EEnumLiteral> = null;
	get eLiterals():OrderedSet<EEnumLiteral>{
		if(this._eLiterals===null){
			this._eLiterals = new OrderedSet<EEnumLiteral>(this, EcorePackageLiterals.EENUM_ELITERALS, EcorePackageLiterals.EENUMLITERAL_EENUM);
				
		}
		return this._eLiterals;
		
	}
	
	

	
	public isInstance(object:any): boolean {
		/*TODO implement function*/ 
		return null;
	};
	public getEEnumLiteral(...args:Array<any>):any {
		if(args.length === 1){
			
			return this.getEEnumLiteral_string(args[0]);
		}
		if(args.length === 1){
			
			return this.getEEnumLiteral_number(args[0]);
		}
	};
	
	public getEEnumLiteral_string(name:string): EEnumLiteral {
		/*TODO implement function*/ 
		return null;
	};
	public getEEnumLiteral_number(value:number): EEnumLiteral {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEEnumLiteralByLiteral(literal:string): EEnumLiteral {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};
	



	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EENUM;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EENUM_ELITERALS:
				return this.eLiterals.basicAdd(otherEnd as EEnumLiteral, msgs);
		}
		//return this.eInverseAddFromEDataType(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEEnum = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EENUM_ELITERALS:
				return this.eLiterals.basicRemove(otherEnd as EEnumLiteral, msgs);
		}
		//return this.eInverseRemoveFromEDataType(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEEnum = this.eInverseRemove;


	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.EENUM_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.EENUM_NAME:
				return this.name;
			case EcorePackageLiterals.EENUM_INSTANCECLASSNAME:
				return this.instanceClassName;
			case EcorePackageLiterals.EENUM_INSTANCECLASS:
				return this.instanceClass;
			case EcorePackageLiterals.EENUM_DEFAULTVALUE:
				return this.defaultValue;
			case EcorePackageLiterals.EENUM_INSTANCETYPENAME:
				return this.instanceTypeName;
			case EcorePackageLiterals.EENUM_EPACKAGE:
				return this.ePackage;
			case EcorePackageLiterals.EENUM_ETYPEPARAMETERS:
				return this.eTypeParameters;
			case EcorePackageLiterals.EENUM_SERIALIZABLE:
				return this.serializable;
			case EcorePackageLiterals.EENUM_ELITERALS:
				return this.eLiterals;
		}
		//return this.eGetFromEDataType(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEEnum = this.eGet;
}


