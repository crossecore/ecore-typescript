import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EReference} from "ecore/EReference";

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

