import {OrderedSet} from "ecore/OrderedSet";
import {EAnnotation} from "ecore/EAnnotation";
import {InternalEObject} from "ecore/InternalEObject";

export interface EModelElement
extends InternalEObject

{
	
	eAnnotations: OrderedSet<EAnnotation>;
	
	
	getEAnnotation(source:string): EAnnotation ;

}

