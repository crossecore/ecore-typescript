/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {OrderedSet} from "ecore/OrderedSet";
import {ENamedElement} from "ecore/ENamedElement";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
export interface ETypedElement
extends ENamedElement

{
	ordered:boolean;
	unique:boolean;
	lowerBound:number;
	upperBound:number;
	many:boolean;
	required:boolean;
	
	eType:EClassifier;
	eGenericType:EGenericType;
	

}


