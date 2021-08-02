import {OrderedSet} from "ecore/OrderedSet";
import {ENamedElement} from "ecore/ENamedElement";
import {EClassifier} from "ecore/EClassifier";
import {EGenericType} from "ecore/EGenericType";

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

