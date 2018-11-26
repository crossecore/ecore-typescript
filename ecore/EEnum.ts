import {OrderedSet} from "./OrderedSet";
import {EDataType} from "./EDataType";
import {EEnumLiteral} from "./EEnumLiteral";

export interface EEnum
extends EDataType

{
	
	eLiterals: OrderedSet<EEnumLiteral>;
	
	getEEnumLiteral(...args:Array<any>):any;
	
	getEEnumLiteral_string(name:string): EEnumLiteral ;
	getEEnumLiteral_number(value:number): EEnumLiteral ;
	
	getEEnumLiteralByLiteral(literal:string): EEnumLiteral ;

}

