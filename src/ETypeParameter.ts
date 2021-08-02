import {OrderedSet} from "ecore/OrderedSet";
import {ENamedElement} from "ecore/ENamedElement";
import {EGenericType} from "ecore/EGenericType";

export interface ETypeParameter
extends ENamedElement

{
	
	eBounds: OrderedSet<EGenericType>;
	

}

