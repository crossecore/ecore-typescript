import {OrderedSet} from "./OrderedSet";
import {ENamedElement} from "./ENamedElement";
import {EGenericType} from "./EGenericType";

export interface ETypeParameter
extends ENamedElement

{
	
	eBounds: OrderedSet<EGenericType>;
	

}

