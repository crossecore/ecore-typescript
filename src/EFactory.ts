import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {EDataType} from "./EDataType";
import {EObject} from "./EObject";
import {EModelElement} from "./EModelElement";
import {EPackage} from "./EPackage";

export interface EFactory
extends EModelElement

{
	
	ePackage:EPackage;
	
	
	createFromString(eDataType:EDataType, literalValue:string): any ;
	
	create(eClass:EClass): EObject ;
	
	convertToString(eDataType:EDataType, instanceValue:any): string ;

}

