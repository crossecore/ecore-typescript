import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {EAttribute} from "./EAttribute";
import {EStructuralFeature} from "./EStructuralFeature";
import {EReference} from "./EReference";

export interface EReference
extends EStructuralFeature

{
	containment:boolean;
	container:boolean;
	resolveProxies:boolean;
	
	eOpposite:EReference;
	eReferenceType:EClass;
	eKeys: OrderedSet<EAttribute>;
	

}

