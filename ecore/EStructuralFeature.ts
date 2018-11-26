import {ETypedElement} from "./ETypedElement";
import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";

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

