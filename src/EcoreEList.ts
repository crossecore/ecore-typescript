/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {NotifyingList} from "./NotifyingList";
import {EStructuralFeature} from "./EStructuralFeature";






export interface EcoreEList<E> extends NotifyingList<E>
{
    //from AbstractEList
    addUnique(o:E):void;

    hasNavigableInverse():boolean;
    hasInstanceClass():boolean;
    getEStructuralFeature():EStructuralFeature;
    getInverseEReference():EStructuralFeature;
    getInverseFeatureClass():Function;
}

