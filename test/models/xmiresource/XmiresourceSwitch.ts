import {Switch} from "ecore/Switch";
import {EObject} from "ecore/EObject";
import {EPackage} from "ecore/EPackage";
import {XmiresourcePackageImpl} from "xmiresource/XmiresourcePackageImpl";
import {Root} from "xmiresource/Root";
import {Child} from "xmiresource/Child";
import {XmiresourcePackage} from "xmiresource/XmiresourcePackage";
export class XmiresourceSwitch<T> extends Switch<T> {
	protected static modelPackage:XmiresourcePackage;
	
	constructor(){
		super();
		if (XmiresourceSwitch.modelPackage == null) {
			XmiresourceSwitch.modelPackage = XmiresourcePackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === XmiresourceSwitch.modelPackage;
	}
	
	public doSwitch3(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case XmiresourcePackageImpl.ROOT: {
				let obj:Root = <Root>theEObject;
				let result:T = this.caseRoot(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case XmiresourcePackageImpl.CHILD: {
				let obj:Child = <Child>theEObject;
				let result:T = this.caseChild(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseRoot(object:Root):T {
		return null;
	}
	public caseChild(object:Child):T {
		return null;
	}
	
}

