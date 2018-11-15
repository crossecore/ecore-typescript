/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {ETypedElementBase} from "ecore/ETypedElementBase";

///<summary>This class was generated.</summary>

	export class ETypedElementImpl
	extends ETypedElementBase
	
	{
    get many():boolean{
      return this.upperBound == -1 || this.upperBound >1;
    }
	}
	

