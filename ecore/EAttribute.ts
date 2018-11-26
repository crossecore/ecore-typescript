import {OrderedSet} from "./OrderedSet";
import {EDataType} from "./EDataType";
import {EStructuralFeature} from "./EStructuralFeature";

export interface EAttribute
extends EStructuralFeature

{
	iD:boolean;
	
	eAttributeType:EDataType;
	

}

