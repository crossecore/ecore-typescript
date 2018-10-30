/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {EParameter} from "ecore/EParameter";
import {EOperation} from "ecore/EOperation";
import {OrderedSet} from "ecore/OrderedSet";
import {ETypeParameter} from "ecore/ETypeParameter";
import {EGenericType} from "ecore/EGenericType";
import {ETypedElement} from "ecore/ETypedElement";
import {EClassifier} from "ecore/EClassifier";
import {EClass} from "ecore/EClass";
export interface EOperation
extends ETypedElement

{
	
	eContainingClass:EClass;
	eTypeParameters: OrderedSet<ETypeParameter>;
	eParameters: OrderedSet<EParameter>;
	eExceptions: OrderedSet<EClassifier>;
	eGenericExceptions: OrderedSet<EGenericType>;
	
	
	isOverrideOf(someOperation:EOperation): boolean ;
	
	getOperationID(): number ;

}


