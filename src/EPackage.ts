import {OrderedSet} from "ecore/OrderedSet";
import {EFactory} from "ecore/EFactory";
import {ENamedElement} from "ecore/ENamedElement";
import {EClassifier} from "ecore/EClassifier";
import {EPackage} from "ecore/EPackage";

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

