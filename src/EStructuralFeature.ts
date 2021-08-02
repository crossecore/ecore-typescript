import {ETypedElement} from "ecore/ETypedElement";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";

export interface EStructuralFeature
extends ETypedElement

{
	changeable:boolean;
	volatile:boolean;
	transient:boolean;
	defaultValueLiteral:string;
	defaultValue:any;
	unsettable:boolean;
	derived:boolean;
	
	eContainingClass:EClass;
	
	
	getContainerClass(): Function ;
	
	getFeatureID(): number ;

}

