import {OrderedSet} from "./OrderedSet";
import {ENamedElement} from "./ENamedElement";
import {EPackage} from "./EPackage";
import {ETypeParameter} from "./ETypeParameter";

export interface EClassifier
extends ENamedElement

{
	instanceClassName:string;
	instanceClass:Function;
	defaultValue:any;
	instanceTypeName:string;
	
	ePackage:EPackage;
	eTypeParameters: OrderedSet<ETypeParameter>;
	
	
	isInstance(object:any): boolean ;
	
	getClassifierID(): number ;

}

