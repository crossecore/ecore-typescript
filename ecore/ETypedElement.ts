import {OrderedSet} from "./OrderedSet";
import {ENamedElement} from "./ENamedElement";
import {EClassifier} from "./EClassifier";
import {EGenericType} from "./EGenericType";

export interface ETypedElement
extends ENamedElement

{
	ordered:boolean;
	unique:boolean;
	lowerBound:number;
	upperBound:number;
	many:boolean;
	required:boolean;
	
	eType:EClassifier;
	eGenericType:EGenericType;
	

}

