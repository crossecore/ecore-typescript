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
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
export interface EAnnotation
extends EModelElement

{
	source:string;
	
	details: OrderedSet<EStringToStringMapEntry>;
	eModelElement:EModelElement;
	contents: OrderedSet<EObject>;
	references: OrderedSet<EObject>;
	

}


