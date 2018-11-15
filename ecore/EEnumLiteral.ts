/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {OrderedSet} from "ecore/OrderedSet";
import {ENamedElement} from "ecore/ENamedElement";
import {EEnum} from "ecore/EEnum";
import {Enumerator} from "ecore/Enumerator";
export interface EEnumLiteral
extends ENamedElement

{
	value:number;
	instance:Enumerator;
	literal:string;
	
	eEnum:EEnum;
	

}


