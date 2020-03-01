import {OrderedSet} from "./OrderedSet";
import {EGenericType} from "./EGenericType";
import {EClassifier} from "./EClassifier";
import {InternalEObject} from "./InternalEObject";
import {ETypeParameter} from "./ETypeParameter";

export interface EGenericType
extends InternalEObject

{
	
	eUpperBound:EGenericType;
	eTypeArguments: OrderedSet<EGenericType>;
	eRawType:EClassifier;
	eLowerBound:EGenericType;
	eTypeParameter:ETypeParameter;
	eClassifier:EClassifier;
	
	
	isInstance(object:any): boolean ;

}

