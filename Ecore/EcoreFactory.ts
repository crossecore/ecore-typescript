/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EFactory} from "ecore/EFactory";
import {EModelElement} from "ecore/EModelElement";
import {EAttribute} from "ecore/EAttribute";
import {EAnnotation} from "ecore/EAnnotation";
import {EPackage} from "ecore/EPackage";
import {EDataType} from "ecore/EDataType";
import {ETypeParameter} from "ecore/ETypeParameter";
import {EEnum} from "ecore/EEnum";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EReference} from "ecore/EReference";
import {EGenericType} from "ecore/EGenericType";
import {EClassifier} from "ecore/EClassifier";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {ETypedElement} from "ecore/ETypedElement";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EParameter} from "ecore/EParameter";
import {EOperation} from "ecore/EOperation";
import {EObject} from "ecore/EObject";
import {ENamedElement} from "ecore/ENamedElement";
import {EClass} from "ecore/EClass";
export interface EcoreFactory extends EFactory{
	createEAttribute():EAttribute;
	createEAnnotation():EAnnotation;
	createEClass():EClass;
	createEClassifier():EClassifier;
	createEDataType():EDataType;
	createEEnum():EEnum;
	createEEnumLiteral():EEnumLiteral;
	createEFactory():EFactory;
	createEModelElement():EModelElement;
	createENamedElement():ENamedElement;
	createEObject():EObject;
	createEOperation():EOperation;
	createEPackage():EPackage;
	createEParameter():EParameter;
	createEReference():EReference;
	createEStructuralFeature():EStructuralFeature;
	createETypedElement():ETypedElement;
	createEStringToStringMapEntry():EStringToStringMapEntry;
	createEGenericType():EGenericType;
	createETypeParameter():ETypeParameter;
}

