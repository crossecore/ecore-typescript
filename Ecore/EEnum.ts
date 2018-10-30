/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {OrderedSet} from "ecore/OrderedSet";
import {EDataType} from "ecore/EDataType";
import {EEnumLiteral} from "ecore/EEnumLiteral";
export interface EEnum
extends EDataType

{
	
	eLiterals: OrderedSet<EEnumLiteral>;
	
	getEEnumLiteral(...args:Array<any>):any;
	
	getEEnumLiteral_string(name:string): EEnumLiteral ;
	getEEnumLiteral_number(value:number): EEnumLiteral ;
	
	getEEnumLiteralByLiteral(literal:string): EEnumLiteral ;

}


