/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EAttribute} from "ecore/EAttribute";
import {EAnnotation} from "ecore/EAnnotation";
import {EReference} from "ecore/EReference";
import {EGenericType} from "ecore/EGenericType";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {InternalEObject} from "ecore/InternalEObject";
import {EOperation} from "ecore/EOperation";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EClassBase
extends EClassifierImpl
implements EClass

{
	private _interface:boolean = false;
	get interface():boolean{
		return this._interface;
	}
	set interface(value:boolean){
		this._interface = value; 
	}
	private _abstract:boolean = false;
	get abstract():boolean{
		return this._abstract;
	}
	set abstract(value:boolean){
		this._abstract = value; 
	}
	get eIDAttribute():EAttribute{
	
		//TODO implement derivation
		return null;
	}
	get eAllReferences():OrderedSet<EReference>{
		//TODO implement derivation
		return null;
		
	}
	
	
	get eAllContainments():OrderedSet<EReference>{
		//TODO implement derivation
		return null;
		
	}
	
	
	get eAllSuperTypes():OrderedSet<EClass>{
		//TODO implement derivation
		return null;
		
	}
	
	
	private _eStructuralFeatures:OrderedSet<EStructuralFeature> = null;
	get eStructuralFeatures():OrderedSet<EStructuralFeature>{
		if(this._eStructuralFeatures===null){
			this._eStructuralFeatures = new OrderedSet<EStructuralFeature>(this, EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES, EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS);
				
		}
		return this._eStructuralFeatures;
		
	}
	
	
	get eAllOperations():OrderedSet<EOperation>{
		//TODO implement derivation
		return null;
		
	}
	
	
	get eAllGenericSuperTypes():OrderedSet<EGenericType>{
		//TODO implement derivation
		return null;
		
	}
	
	
	get eAttributes():OrderedSet<EAttribute>{
		//TODO implement derivation
		return null;
		
	}
	
	
	get eAllStructuralFeatures():OrderedSet<EStructuralFeature>{
		//TODO implement derivation
		return null;
		
	}
	
	
	get eReferences():OrderedSet<EReference>{
		//TODO implement derivation
		return null;
		
	}
	
	
	private _eOperations:OrderedSet<EOperation> = null;
	get eOperations():OrderedSet<EOperation>{
		if(this._eOperations===null){
			this._eOperations = new OrderedSet<EOperation>(this, EcorePackageLiterals.ECLASS_EOPERATIONS, EcorePackageLiterals.EOPERATION_ECONTAININGCLASS);
				
		}
		return this._eOperations;
		
	}
	
	
	get eAllAttributes():OrderedSet<EAttribute>{
		//TODO implement derivation
		return null;
		
	}
	
	
	private _eGenericSuperTypes:OrderedSet<EGenericType> = null;
	get eGenericSuperTypes():OrderedSet<EGenericType>{
		if(this._eGenericSuperTypes===null){
			this._eGenericSuperTypes = new OrderedSet<EGenericType>(this, EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES);
				
		}
		return this._eGenericSuperTypes;
		
	}
	
	
	private _eSuperTypes:OrderedSet<EClass> = null;
	get eSuperTypes():OrderedSet<EClass>{
		if(this._eSuperTypes===null){
			this._eSuperTypes = new OrderedSet<EClass>(this, EcorePackageLiterals.ECLASS_ESUPERTYPES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASS_ESUPERTYPES);
				
		}
		return this._eSuperTypes;
		
	}
	
	

	
	public isInstance(object:any): boolean {
		/*TODO implement function*/ 
		return null;
	};
	
	public isSuperTypeOf(someClass:EClass): boolean {
		/*TODO implement function*/ 
		return null;
	};
	
	public getOverride(operation:EOperation): EOperation {
		/*TODO implement function*/ 
		return null;
	};
	
	public getFeatureType(feature:EStructuralFeature): EGenericType {
		/*TODO implement function*/ 
		return null;
	};
	
	public getFeatureID(feature:EStructuralFeature): number {
		/*TODO implement function*/ 
		return null;
	};
	
	public getFeatureCount(): number {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};
	
	public getOperationID(operation:EOperation): number {
		/*TODO implement function*/ 
		return null;
	};
	

	public getEStructuralFeature(...args:Array<any>):any {
		if(args.length === 1 && typeof args[0] === "number"){
			
			return this.getEStructuralFeature_number(args[0]);
		}
		if(args.length === 1 && typeof args[0] === "string"){
			
			return this.getEStructuralFeature_string(args[0]);
		}
	};
	
	public getEStructuralFeature_number(featureID:number): EStructuralFeature {
    for(let feature of this.eAllStructuralFeatures)
    {
      if (feature.getFeatureID() == featureID)
      {
        return feature;
      }
    }

    return null;
	};
	public getEStructuralFeature_string(featureName:string): EStructuralFeature {
    for(let feature of this.eAllStructuralFeatures)
    {
      if (feature.name == featureName)
      {
        return feature;
      }
    }

    return null;
	};
	
	public getOperationCount(): number {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEOperation(operationID:number): EOperation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.ECLASS;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
				return this.eStructuralFeatures.basicAdd(otherEnd as EStructuralFeature, msgs);
			case EcorePackageLiterals.ECLASS_EOPERATIONS:
				return this.eOperations.basicAdd(otherEnd as EOperation, msgs);
		}
		//return this.eInverseAddFromEClassifier(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEClass = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
				return this.eStructuralFeatures.basicRemove(otherEnd as EStructuralFeature, msgs);
			case EcorePackageLiterals.ECLASS_EOPERATIONS:
				return this.eOperations.basicRemove(otherEnd as EOperation, msgs);
		}
		//return this.eInverseRemoveFromEClassifier(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEClass = this.eInverseRemove;


	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
		switch (featureID) {
			case EcorePackageLiterals.ECLASS_EANNOTATIONS:
				return this.eAnnotations;
			case EcorePackageLiterals.ECLASS_NAME:
				return this.name;
			case EcorePackageLiterals.ECLASS_INSTANCECLASSNAME:
				return this.instanceClassName;
			case EcorePackageLiterals.ECLASS_INSTANCECLASS:
				return this.instanceClass;
			case EcorePackageLiterals.ECLASS_DEFAULTVALUE:
				return this.defaultValue;
			case EcorePackageLiterals.ECLASS_INSTANCETYPENAME:
				return this.instanceTypeName;
			case EcorePackageLiterals.ECLASS_EPACKAGE:
				return this.ePackage;
			case EcorePackageLiterals.ECLASS_ETYPEPARAMETERS:
				return this.eTypeParameters;
			case EcorePackageLiterals.ECLASS_ABSTRACT:
				return this.abstract;
			case EcorePackageLiterals.ECLASS_INTERFACE:
				return this.interface;
			case EcorePackageLiterals.ECLASS_ESUPERTYPES:
				return this.eSuperTypes;
			case EcorePackageLiterals.ECLASS_EOPERATIONS:
				return this.eOperations;
			case EcorePackageLiterals.ECLASS_EALLATTRIBUTES:
				return this.eAllAttributes;
			case EcorePackageLiterals.ECLASS_EALLREFERENCES:
				return this.eAllReferences;
			case EcorePackageLiterals.ECLASS_EREFERENCES:
				return this.eReferences;
			case EcorePackageLiterals.ECLASS_EATTRIBUTES:
				return this.eAttributes;
			case EcorePackageLiterals.ECLASS_EALLCONTAINMENTS:
				return this.eAllContainments;
			case EcorePackageLiterals.ECLASS_EALLOPERATIONS:
				return this.eAllOperations;
			case EcorePackageLiterals.ECLASS_EALLSTRUCTURALFEATURES:
				return this.eAllStructuralFeatures;
			case EcorePackageLiterals.ECLASS_EALLSUPERTYPES:
				return this.eAllSuperTypes;
			case EcorePackageLiterals.ECLASS_EIDATTRIBUTE:
				return this.eIDAttribute;
			case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
				return this.eStructuralFeatures;
			case EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES:
				return this.eGenericSuperTypes;
			case EcorePackageLiterals.ECLASS_EALLGENERICSUPERTYPES:
				return this.eAllGenericSuperTypes;
		}
		//return this.eGetFromEClassifier(featureID, resolve, coreType);
		return super.eGet(featureID, resolve, coreType);
	}
	//public eGetFromEClass = this.eGet;
}


