/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

///<summary>This class was generated.</summary>
import {EFactory} from "ecore/EFactory";
import {OrderedSet} from "ecore/OrderedSet";
import {EPackage} from "ecore/EPackage";
import {ENamedElement} from "ecore/ENamedElement";
import {EClassifier} from "ecore/EClassifier";
export interface EPackage
extends ENamedElement

{
	nsURI:string;
	nsPrefix:string;
	
	eFactoryInstance:EFactory;
	eClassifiers: OrderedSet<EClassifier>;
	eSubpackages: OrderedSet<EPackage>;
	eSuperPackage:EPackage;
	
	
	getEClassifier(name:string): EClassifier ;

}


