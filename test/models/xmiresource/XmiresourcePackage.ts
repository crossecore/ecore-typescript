import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EEnum} from "ecore/EEnum";
import {EReference} from "ecore/EReference";
import {EPackage} from "ecore/EPackage";
export interface XmiresourcePackage extends EPackage {
	getRoot():EClass;
	getRoot_SingleReference():EReference;
	getRoot_ManyReference():EReference;
	getRoot_SingleChild():EReference;
	getRoot_ManyChildren():EReference;
	
	getRoot_SingleAttribute():EAttribute;
	getRoot_ManyAttribute():EAttribute;
	getRoot_Boolean():EAttribute;
	getRoot_Char():EAttribute;
	getRoot_Date():EAttribute;
	getRoot_Double():EAttribute;
	getRoot_Float():EAttribute;
	getRoot_Int():EAttribute;
	getRoot_Long():EAttribute;
	getRoot_Short():EAttribute;
	getRoot_String():EAttribute;
	getRoot_Enum():EAttribute;
	getRoot_IntegerObject():EAttribute;
	getRoot_Bigint():EAttribute;
	getChild():EClass;
	
	getMyEnum():EEnum;
}
