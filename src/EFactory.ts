import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {EDataType} from "ecore/EDataType";
import {EObject} from "ecore/EObject";
import {EModelElement} from "ecore/EModelElement";
import {EPackage} from "ecore/EPackage";

export interface EFactory
extends EModelElement

{
	
	ePackage:EPackage;
	
	
	createFromString(eDataType:EDataType, literalValue:string): any ;
	
	create(eClass:EClass): EObject ;
	
	convertToString(eDataType:EDataType, instanceValue:any): string ;

}

