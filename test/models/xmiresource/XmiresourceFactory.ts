import {Root} from "xmiresource/Root";
import {Child} from "xmiresource/Child";
import {EFactory} from "ecore/EFactory";
export interface XmiresourceFactory extends EFactory{
	createRoot():Root;
	createChild():Child;
}
