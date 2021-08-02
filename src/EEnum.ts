import {OrderedSet} from "ecore/OrderedSet";
import {EDataType} from "ecore/EDataType";
import {EEnumLiteral} from "ecore/EEnumLiteral";

export interface EEnum
extends EDataType

{
	
	eLiterals: OrderedSet<EEnumLiteral>;
	
	getEEnumLiteral(...args:Array<any>):any;
	
	getEEnumLiteral_EString(name:string): EEnumLiteral ;
	getEEnumLiteral_EInt(value:number): EEnumLiteral ;
	
	getEEnumLiteralByLiteral(literal:string): EEnumLiteral ;

}

