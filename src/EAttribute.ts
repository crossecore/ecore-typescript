import {OrderedSet} from "ecore/OrderedSet";
import {EDataType} from "ecore/EDataType";
import {EStructuralFeature} from "ecore/EStructuralFeature";

export interface EAttribute
extends EStructuralFeature

{
	iD:boolean;
	
	eAttributeType:EDataType;
	

}

