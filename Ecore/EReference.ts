/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {EAttribute} from "ecore/EAttribute";
import {OrderedSet} from "ecore/OrderedSet";
import {EReference} from "ecore/EReference";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EClass} from "ecore/EClass";
export interface EReference
extends EStructuralFeature

{
	containment:boolean;
	container:boolean;
	resolveProxies:boolean;
	
	eOpposite:EReference;
	eReferenceType:EClass;
	eKeys: OrderedSet<EAttribute>;
	

}


