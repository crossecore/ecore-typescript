import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";
import {MyEnum} from "xmiresource/MyEnum";
import {Root} from "xmiresource/Root";
import {Child} from "xmiresource/Child";

export interface Root
extends InternalEObject

{
	singleAttribute:number;
	
	manyAttribute:OrderedSet<number>;
	boolean:boolean;
	char:string;
	date:Date;
	double:number;
	float:number;
	int:number;
	long:number;
	short:number;
	string:string;
	enum:MyEnum;
	
	singleReference:Root;
	manyReference: OrderedSet<Root>;
	singleChild:Child;
	manyChildren: OrderedSet<Child>;
	

}

