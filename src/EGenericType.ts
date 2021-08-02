import {OrderedSet} from "ecore/OrderedSet";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
import {InternalEObject} from "ecore/InternalEObject";
import {ETypeParameter} from "ecore/ETypeParameter";

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

