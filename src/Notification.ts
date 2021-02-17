/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */




    export interface Notification
    {
        getNotifier():any;
        getEventType():number;

        getNewValue():any;
        getOldValue():any;
        //TODO expectedClass is a class descriptor
        getFeatureID(expectedClass:Function):number
        getPosition():number
        merge(notification:Notification):boolean;
    }


