/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EStructuralFeatureBase} from "ecore/EStructuralFeatureBase";

///<summary>This class was generated.</summary>

	export class EStructuralFeatureImpl
	extends EStructuralFeatureBase
	
	{
		protected featureID:number = -1;
		public setFeatureID(id:number):void
		{
			this.featureID = id;
		}

		public getFeatureID(): number {

			return this.featureID;
		};

		private containerClass_:Function;
		public setContainerClass= (f:Function)=>
		{
			this.containerClass_ = f;


		}


        public getContainerClass(): Function {
			return this.containerClass_;
        };


	}
	

