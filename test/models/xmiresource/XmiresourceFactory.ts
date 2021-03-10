import {EFactory} from "ecore/EFactory";
import {Root} from "xmiresource/Root";
import {Child} from "xmiresource/Child";
export interface XmiresourceFactory extends EFactory{
	createRoot():Root;
	createChild():Child;
}
