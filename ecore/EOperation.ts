import {ETypedElement} from "./ETypedElement";
import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {EParameter} from "./EParameter";
import {EClassifier} from "./EClassifier";
import {EGenericType} from "./EGenericType";
import {EOperation} from "./EOperation";
import {ETypeParameter} from "./ETypeParameter";

export interface EOperation
extends ETypedElement

{
	
	eContainingClass:EClass;
	eTypeParameters: OrderedSet<ETypeParameter>;
	eParameters: OrderedSet<EParameter>;
	eExceptions: OrderedSet<EClassifier>;
	eGenericExceptions: OrderedSet<EGenericType>;
	
	
	isOverrideOf(someOperation:EOperation): boolean ;
	
	getOperationID(): number ;

}

