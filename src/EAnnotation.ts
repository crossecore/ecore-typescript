import {OrderedSet} from "ecore/OrderedSet";
import {EMap} from "ecore/EMap";
import {EObject} from "ecore/EObject";
import {EModelElement} from "ecore/EModelElement";

export interface EAnnotation
extends EModelElement

{
	source:string;
	
	details:EMap<string, string>;
	eModelElement:EModelElement;
	contents: OrderedSet<EObject>;
	references: OrderedSet<EObject>;
	

}

