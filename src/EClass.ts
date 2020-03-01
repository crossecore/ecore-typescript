import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {EAttribute} from "./EAttribute";
import {EStructuralFeature} from "./EStructuralFeature";
import {EClassifier} from "./EClassifier";
import {EGenericType} from "./EGenericType";
import {EOperation} from "./EOperation";
import {EReference} from "./EReference";

export interface EClass
extends EClassifier

{
	abstract:boolean;
	interface:boolean;
	
	eSuperTypes: OrderedSet<EClass>;
	eOperations: OrderedSet<EOperation>;
	eAllAttributes: OrderedSet<EAttribute>;
	eAllReferences: OrderedSet<EReference>;
	eReferences: OrderedSet<EReference>;
	eAttributes: OrderedSet<EAttribute>;
	eAllContainments: OrderedSet<EReference>;
	eAllOperations: OrderedSet<EOperation>;
	eAllStructuralFeatures: OrderedSet<EStructuralFeature>;
	eAllSuperTypes: OrderedSet<EClass>;
	eIDAttribute:EAttribute;
	eStructuralFeatures: OrderedSet<EStructuralFeature>;
	eGenericSuperTypes: OrderedSet<EGenericType>;
	eAllGenericSuperTypes: OrderedSet<EGenericType>;
	
	
	isSuperTypeOf(someClass:EClass): boolean ;
	
	getOverride(operation:EOperation): EOperation ;
	
	getFeatureType(feature:EStructuralFeature): EGenericType ;
	
	getFeatureID(feature:EStructuralFeature): number ;
	
	getFeatureCount(): number ;
	
	getOperationID(operation:EOperation): number ;
	getEStructuralFeature(...args:Array<any>):any;
	
	getEStructuralFeature_number(featureID:number): EStructuralFeature ;
	getEStructuralFeature_string(featureName:string): EStructuralFeature ;
	
	getOperationCount(): number ;
	
	getEOperation(operationID:number): EOperation ;

}

