import {OrderedSet} from "./OrderedSet";
import {EAnnotation} from "./EAnnotation";
import {InternalEObject} from "./InternalEObject";

export interface EModelElement
extends InternalEObject

{
	
	eAnnotations: OrderedSet<EAnnotation>;
	
	
	getEAnnotation(source:string): EAnnotation ;

}

