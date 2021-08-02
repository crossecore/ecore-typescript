import {ETypedElement} from "ecore/ETypedElement";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {EParameter} from "ecore/EParameter";
import {EClassifier} from "ecore/EClassifier";
import {EGenericType} from "ecore/EGenericType";
import {EOperation} from "ecore/EOperation";
import {ETypeParameter} from "ecore/ETypeParameter";

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

