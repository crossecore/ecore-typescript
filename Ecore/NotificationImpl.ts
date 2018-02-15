/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


import {Notification} from "ecore/Notification";
import {NotificationChain} from "ecore/NotificationChain";
import {Notifier} from "ecore/Notifier";



    export class NotificationImpl implements NotificationChain, Notification
    {

        public static SET:number = 1;
        public static UNSET:number = 2;
        public static ADD:number = 2;
        public static REMOVE:number = 3;

        public static ADD_MANY:number = 5;
        public static REMOVE_MANY:number = 6;
        public static MOVE:number = 7;

        public static NO_INDEX:number = -1;
        public static IS_SET_CHANGE_INDEX:number = NotificationImpl.NO_INDEX - 1;

        public static NO_FEATURE_ID:number = -1;

        public static PRIMITIVE_TYPE_OBJECT:number = -1;

        protected next:NotificationChain;

        protected eventType:number;
        protected oldValue:any;
        protected newValue:any;
        protected position:number;
        protected primitiveType:number;

        /*
         public NotificationImpl(int eventType, object oldValue, object newValue): this(eventType, oldValue, newValue, NO_INDEX)
         {

         }

         public NotificationImpl(int eventType, object oldValue, object newValue, bool isSetChange): this(eventType, oldValue, newValue, isSetChange ? IS_SET_CHANGE_INDEX : NO_INDEX)
         {

         }
         */

        public constructor(eventType:number, oldValue:any, newValue:any, position:number, wasSet?:boolean)
        {

            this.eventType = eventType;
            this.oldValue = oldValue;
            this.newValue = newValue;
            this.position = position;
            this.primitiveType = NotificationImpl.PRIMITIVE_TYPE_OBJECT;
            if (wasSet!=undefined && !wasSet)
            {
                this.position = NotificationImpl.IS_SET_CHANGE_INDEX - position - 1;
            }
        }


        /**
         * !!! NO CONSTRUCTOR OVERLOADING ALLOWED IN TYPESCRIPT !!!
         */
        /*
        public constructor(eventType:number, oldValue:any, newValue:any, position:number)
        {

            this.eventType = eventType;
            this.oldValue = oldValue;
            this.newValue = newValue;
            this.position = position;
            this.primitiveType = NotificationImpl.PRIMITIVE_TYPE_OBJECT;

        }
        */



        public add = (notification:Notification):boolean =>
        {
            return this.next.add(notification);
        }

        public dispatch = ():void=>
        {

            var notifier:any = this.getNotifier();
            if (notifier != null && this.getEventType() != -1)
            {
                (<Notifier>notifier).eNotify(this);
            }

            if (this.next != null)
            {
                this.next.dispatch();
            }


        }

        public getNotifier():any
            {
                return null;

            }


        public getEventType():number
            {
                return this.eventType;
            }

        public getNewValue():any
            {
                return this.newValue;
            }
        }


