import {OrderedSet} from "ecore/OrderedSet";
import {ENamedElement} from "ecore/ENamedElement";
import {EPackage} from "ecore/EPackage";
import {ETypeParameter} from "ecore/ETypeParameter";

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

