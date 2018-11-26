import {OrderedSet} from "./OrderedSet";
import {EFactory} from "./EFactory";
import {ENamedElement} from "./ENamedElement";
import {EClassifier} from "./EClassifier";
import {EPackage} from "./EPackage";

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

