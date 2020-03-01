/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


import {NotificationImpl} from "./NotificationImpl";
import {InternalEObject} from "./InternalEObject";
import {EStructuralFeature} from "./EStructuralFeature";
import {EClass} from "./EClass";
export class ENotificationImpl extends NotificationImpl
    {

        protected notifier:InternalEObject;
        protected featureID:number = NotificationImpl.NO_FEATURE_ID;
        protected feature:EStructuralFeature;

        /*
        public constructor( notifier:InternalEObject, eventType:number , featureID:number, oldValue:any, newValue:any){
            this(notifier, eventType, featureID, oldValue, newValue, NotificationImpl.NO_INDEX)
        }
        */


        public constructor( notifier:InternalEObject, eventType:number , featureID:number, oldValue:any, newValue:any, position?:number){
            super(eventType, oldValue, newValue, position, false);
            this.notifier = notifier;
            this.featureID = featureID;
        }


        public getFeature = ():any =>
        {
            if (this.feature == null && this.featureID != NotificationImpl.NO_FEATURE_ID)
            {
                let eClass:EClass = this.notifier.eClass();
                this.feature = eClass.getEStructuralFeature(this.featureID);
            }
            return this.feature;
        }


        public getNotifier():any
        {
          return this.notifier;

        }
    }




