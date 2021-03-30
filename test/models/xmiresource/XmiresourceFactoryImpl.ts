import {EFactoryImpl} from "ecore/EFactoryImpl";
import {EClass} from "ecore/EClass";
import {EDataType} from "ecore/EDataType";
import {EObject} from "ecore/EObject";
import {RootImpl} from "xmiresource/RootImpl";
import {MyEnum} from "xmiresource/MyEnum";
import {Root} from "xmiresource/Root";
import {XmiresourcePackageLiterals} from "xmiresource/XmiresourcePackageLiterals";
import {XmiresourceFactory} from "xmiresource/XmiresourceFactory";
import {ChildImpl} from "xmiresource/ChildImpl";
import {Child} from "xmiresource/Child";
export class XmiresourceFactoryImpl extends EFactoryImpl implements XmiresourceFactory{
	public static eINSTANCE : XmiresourceFactory = XmiresourceFactoryImpl.init();
	public static init() : XmiresourceFactory 
	{
		return new XmiresourceFactoryImpl();
	}
	
	public createRoot = () : Root => {
		let theRoot = new RootImpl();
		
		
		return theRoot;
	}
	public createChild = () : Child => {
		let theChild = new ChildImpl();
		
		
		return theChild;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case XmiresourcePackageLiterals.ROOT: return this.createRoot();
			case XmiresourcePackageLiterals.CHILD: return this.createChild();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case XmiresourcePackageLiterals.MYENUM:
			return this.createMyEnumFromString(eDataType, initialValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case XmiresourcePackageLiterals.MYENUM:
			return this.convertMyEnumToString(eDataType, instanceValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	
	public createMyEnumFromString(eDataType:EDataType, initialValue:string):MyEnum {
		let result:MyEnum = MyEnum.get_string(initialValue);
		if (result == null)
			throw new Error(
				"The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertMyEnumToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
}
