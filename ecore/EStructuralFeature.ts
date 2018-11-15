/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
///<summary>This class was generated.</summary>
import {OrderedSet} from "ecore/OrderedSet";
import {ETypedElement} from "ecore/ETypedElement";
import {EClass} from "ecore/EClass";
export interface EStructuralFeature
extends ETypedElement

{
	changeable:boolean;
	volatile:boolean;
	transient:boolean;
	defaultValueLiteral:string;
	defaultValue:any;
	unsettable:boolean;
	derived:boolean;
	
	eContainingClass:EClass;
	
	
	getContainerClass(): Function ;
	
	getFeatureID(): number ;

}


