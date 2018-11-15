/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


    import {Notification} from "ecore/Notification";
import {Adapter} from "ecore/Adapter";
export interface Notifier
    {



        //TODO use other type of list?
        eAdapters():Array<Adapter>;

        eNotify(notification:Notification):void;

    }


