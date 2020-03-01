/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


import {Notification} from "./Notification";
import {NotificationChain} from "./NotificationChain";
import {EList} from "./EList";
export interface NotifyingList<T> extends EList<T>
    {
        isNotificationRequired():boolean;
        hasInverse():boolean;
        dispatchNotification(notification:Notification):void;
        basicAdd(item:T , notifications:NotificationChain):NotificationChain;
        basicRemove(item:T, notifications:NotificationChain):NotificationChain;
        inverseAdd(item:T, notifications:NotificationChain):NotificationChain;
        inverseRemove(item:T, notifications:NotificationChain):NotificationChain;

    }

