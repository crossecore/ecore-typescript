import {OrderedSet} from "ecore/OrderedSet";
import {Enumerator} from "ecore/Enumerator";
import {ENamedElement} from "ecore/ENamedElement";
import {EEnum} from "ecore/EEnum";

export interface EEnumLiteral
extends ENamedElement

{
	value:number;
	instance:Enumerator;
	literal:string;
	
	eEnum:EEnum;
	

}

