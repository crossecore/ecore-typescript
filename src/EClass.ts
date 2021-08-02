import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EClassifier} from "ecore/EClassifier";
import {EGenericType} from "ecore/EGenericType";
import {EOperation} from "ecore/EOperation";
import {EReference} from "ecore/EReference";

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
	
	getEStructuralFeature_EInt(featureID:number): EStructuralFeature ;
	getEStructuralFeature_EString(featureName:string): EStructuralFeature ;
	
	getOperationCount(): number ;
	
	getEOperation(operationID:number): EOperation ;

}

