import {EDataType} from "ecore/EDataType";
import {ENamedElement} from "ecore/ENamedElement";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EClassifier} from "ecore/EClassifier";
import {EEnum} from "ecore/EEnum";
import {EModelElement} from "ecore/EModelElement";
import {EPackage} from "ecore/EPackage";
import {EFactory} from "ecore/EFactory";
import {EAnnotation} from "ecore/EAnnotation";
import {ETypedElement} from "ecore/ETypedElement";
import {EAttribute} from "ecore/EAttribute";
import {EClass} from "ecore/EClass";
import {EObject} from "ecore/EObject";
import {EParameter} from "ecore/EParameter";
import {EStringToStringMapEntry} from "ecore/EStringToStringMapEntry";
import {EGenericType} from "ecore/EGenericType";
import {EEnumLiteral} from "ecore/EEnumLiteral";
import {EOperation} from "ecore/EOperation";
import {EReference} from "ecore/EReference";
import {ETypeParameter} from "ecore/ETypeParameter";
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
