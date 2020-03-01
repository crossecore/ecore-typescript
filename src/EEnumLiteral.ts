import {OrderedSet} from "./OrderedSet";
import {Enumerator} from "./Enumerator";
import {ENamedElement} from "./ENamedElement";
import {EEnum} from "./EEnum";

export interface EEnumLiteral
extends ENamedElement

{
	value:number;
	instance:Enumerator;
	literal:string;
	
	eEnum:EEnum;
	

}

