import {OrderedSet} from "./OrderedSet";
import {EMap} from "./EMap";
import {EObject} from "./EObject";
import {EModelElement} from "./EModelElement";

export interface EAnnotation
extends EModelElement

{
	source:string;
	
	details:EMap<string, string>;
	eModelElement:EModelElement;
	contents: OrderedSet<EObject>;
	references: OrderedSet<EObject>;
	

}

