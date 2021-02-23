import {MyEnum} from "xmiresource/MyEnum";
import {Root} from "xmiresource/Root";
import {Child} from "xmiresource/Child";
import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";

export interface Root
extends InternalEObject

{
	singleAttribute:number;
	
	manyAttribute:OrderedSet<number>;
	enum:MyEnum;
	
	singleReference:Root;
	manyReference: OrderedSet<Root>;
	singleChild:Child;
	manyChildren: OrderedSet<Child>;
	

}

