/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {EModelElement} from "ecore/EModelElement";
import {OrderedSet} from "ecore/OrderedSet";
import {EObject} from "ecore/EObject";
import {EPackage} from "ecore/EPackage";
import {EDataType} from "ecore/EDataType";
import {EClass} from "ecore/EClass";
export interface EFactory
extends EModelElement

{
	
	ePackage:EPackage;
	
	
	createFromString(eDataType:EDataType, literalValue:string): any ;
	
	create(eClass:EClass): EObject ;
	
	convertToString(eDataType:EDataType, instanceValue:any): string ;

}


