/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAnnotation} from "ecore/EAnnotation";
import {EEnum} from "ecore/EEnum";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {InternalEObject} from "ecore/InternalEObject";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {Enumerator} from "ecore/Enumerator";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EEnumLiteralBase
extends ENamedElementImpl
implements EEnumLiteral

{
	private _literal:string = "";
	get literal():string{
		return this._literal;
	}
	set literal(value:string){
		this._literal = value; 
	}
	private _value:number = 0;
	get value():number{
		return this._value;
	}
	set value(value:number){
		this._value = value; 
	}
	private _instance:Enumerator = null;
	get instance():Enumerator{
		return this._instance;
	}
	set instance(value:Enumerator){
		this._instance = value; 
	}
	get eEnum():EEnum{
	
		if (this.eContainerFeatureID() != EcorePackageLiterals.EENUMLITERAL_EENUM) return null;
		return this.eInternalContainer() as EEnum;
	}

	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EENUMLITERAL;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EENUMLITERAL_EENUM:
				if (this.eInternalContainer() != null) {
					msgs = this.eBasicRemoveFromContainer(msgs);
				}
				return this.basicSetEEnum(otherEnd as EEnum, msgs);
		}
		//return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEEnumLiteral = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EENUMLITERAL_EENUM:
				return this.basicSetEEnum(null, msgs);
		}
		//return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEEnumLiteral = this.eInverseRemove;

	public basicSetEEnum(newobj:EEnum, msgs:NotificationChain):NotificationChain {
			msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EENUMLITERAL_EENUM, msgs);
			return msgs;
	}
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.EENUMLITERAL_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.EENUMLITERAL_NAME:
				return this.name;
			case EcorePackageLiterals.EENUMLITERAL_VALUE:
				return this.value;
			case EcorePackageLiterals.EENUMLITERAL_INSTANCE:
				return this.instance;
			case EcorePackageLiterals.EENUMLITERAL_LITERAL:
				return this.literal;
			case EcorePackageLiterals.EENUMLITERAL_EENUM:
				return this.eEnum;
		}
		//return this.eGetFromENamedElement(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEEnumLiteral = this.eGet;
}


