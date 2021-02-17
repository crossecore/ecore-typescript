/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


import { AbstractCollection } from "./AbstractCollection";
import { Notification } from "./Notification";
import { NotificationChain } from "./NotificationChain";
import { NotificationChainImpl } from "./NotificationChainImpl";
import { Notifier } from "./Notifier";



export class NotificationImpl implements NotificationChain, Notification {

    public static SET: number = 1;
    public static UNSET: number = 2;
    public static ADD: number = 3;
    public static REMOVE: number = 4;

    public static ADD_MANY: number = 5;
    public static REMOVE_MANY: number = 6;
    public static MOVE: number = 7;

    public static NO_INDEX: number = -1;
    public static IS_SET_CHANGE_INDEX: number = NotificationImpl.NO_INDEX - 1;

    public static NO_FEATURE_ID: number = -1;

    public static PRIMITIVE_TYPE_OBJECT: number = -1;
    public static PRIMITIVE_TYPE_BOOLEAN: number = 0;
    public static PRIMITIVE_TYPE_BYTE: number = 1;
    public static PRIMITIVE_TYPE_CHAR: number = 2;
    public static PRIMITIVE_TYPE_DOUBLE: number = 3;
    public static PRIMITIVE_TYPE_FLOAT: number = 4;
    public static PRIMITIVE_TYPE_INT: number = 5;
    public static PRIMITIVE_TYPE_LONG: number = 6;
    public static PRIMITIVE_TYPE_SHORT: number = 7;


    protected next: NotificationChain;

    protected eventType: number;
    protected oldValue: any;
    protected newValue: any;
    protected position: number;
    protected primitiveType: number;

    protected oldSimplePrimitiveValue: any;
    protected newSimplePrimitiveValue: any;

    /*
     public NotificationImpl(int eventType, object oldValue, object newValue): this(eventType, oldValue, newValue, NO_INDEX)
     {

     }

     public NotificationImpl(int eventType, object oldValue, object newValue, bool isSetChange): this(eventType, oldValue, newValue, isSetChange ? IS_SET_CHANGE_INDEX : NO_INDEX)
     {

     }
     */

    public constructor(eventType: number, oldValue: any, newValue: any, position: number, wasSet?: boolean) {

        this.eventType = eventType;
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.position = position;
        this.primitiveType = NotificationImpl.PRIMITIVE_TYPE_OBJECT;
        if (wasSet != undefined && !wasSet) {
            this.position = NotificationImpl.IS_SET_CHANGE_INDEX - position - 1;
        }
    }
    getOldValue = (): any => {

        return this.oldValue;
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
    public getPosition = (): number => {
        return this.position < 0 ? this.position < NotificationImpl.IS_SET_CHANGE_INDEX ? NotificationImpl.IS_SET_CHANGE_INDEX - this.position - 1 : NotificationImpl.NO_INDEX : this.position;
    }

    protected isFeatureUnsettable = (): boolean => {
        return false;
    }

    public getFeatureID = (expectedClass: any) => {
        return NotificationImpl.NO_FEATURE_ID;
    }

    protected getFeatureDefaultValue = (): any => {
        return null;
    }

    /*
    https://git.eclipse.org/c/emf/org.eclipse.emf.git/tree/plugins/org.eclipse.emf.common/src/org/eclipse/emf/common/notify/impl/NotificationImpl.java#n710
    */
    public wasSet = (): boolean => {
        switch (this.eventType) {
            case NotificationImpl.SET:
                {
                    if (this.isFeatureUnsettable()) {
                        return this.position != NotificationImpl.IS_SET_CHANGE_INDEX;
                    }
                    break;
                }
            case NotificationImpl.UNSET:
                {
                    if (this.isFeatureUnsettable()) {
                        return this.position == NotificationImpl.IS_SET_CHANGE_INDEX;
                    }
                    break;
                }
            case NotificationImpl.ADD:
            case NotificationImpl.ADD_MANY:
            case NotificationImpl.REMOVE:
            case NotificationImpl.REMOVE_MANY:
            case NotificationImpl.MOVE:
                {
                    return this.position > NotificationImpl.IS_SET_CHANGE_INDEX;
                }
            default:
                {
                    return false;
                }
        }

        const defaultValue = this.getFeatureDefaultValue();

        if (this.primitiveType === NotificationImpl.PRIMITIVE_TYPE_OBJECT) {
            return defaultValue == null ? this.oldValue != null : !defaultValue.equals(this.oldValue);
        }
        else {
            return defaultValue != null && defaultValue != this.oldSimplePrimitiveValue
        }
    }

    public merge = (notification: Notification): boolean => {

        switch (this.eventType) {
            case NotificationImpl.SET:
            case NotificationImpl.UNSET:
                {
                    const notificationEventType = notification.getEventType();
                    switch (notificationEventType) {
                        case NotificationImpl.SET:
                        case NotificationImpl.UNSET:
                            {
                                const notificationNotifier = notification.getNotifier();
                                if (notificationNotifier == this.getNotifier() && this.getFeatureID(null) == notification.getFeatureID(null)) {
                                    this.newValue = notification.getNewValue();
                                    if (notification.getEventType() == NotificationImpl.SET) {
                                        this.eventType = NotificationImpl.SET;
                                    }
                                    return true;
                                }
                            }
                    }
                }
            case NotificationImpl.REMOVE:
                {
                    const notificationEventType = notification.getEventType();
                    switch (notificationEventType) {
                        case NotificationImpl.REMOVE:
                            {
                                const notificationNotifier = notification.getNotifier();
                                if (notificationNotifier == this.getNotifier() && this.getFeatureID(null) == notification.getFeatureID(null)) {
                                    const originalWasSet = this.wasSet();
                                    const originalPosition = this.getPosition();
                                    const notificationPosition = notification.getPosition();

                                    this.eventType = NotificationImpl.REMOVE_MANY;
                                    const removedValues = new AbstractCollection<Object>();
                                    if (originalPosition <= notificationPosition) {
                                        removedValues.add(this.oldValue);
                                        removedValues.add(notification.getOldValue());
                                        this.newValue = [this.position = originalPosition, notificationPosition + 1]
                                    }
                                    else {
                                        removedValues.add(notification.getOldValue());
                                        removedValues.add(this.oldValue);
                                        this.newValue = [this.position = originalPosition, notificationPosition]
                                    }
                                    this.oldValue = removedValues;

                                    if (!originalWasSet) {
                                        this.position = NotificationImpl.IS_SET_CHANGE_INDEX - this.position - 1;
                                    }

                                    return true;
                                }
                                break;
                            }
                    }
                    break;
                }
            case NotificationImpl.REMOVE_MANY:
                {
                    const notificationEventType = notification.getEventType();
                    switch (notificationEventType) {
                        case NotificationImpl.REMOVE:
                            {
                                const notificationNotifier = notification.getNotifier();
                                if (notificationNotifier == this.getNotifier() && this.getFeatureID(null) == notification.getFeatureID(null)) {
                                    const originalWasSet = this.wasSet();
                                    let notificationPosition = notification.getPosition();

                                    const positions = this.newValue as Array<number>;
                                    const newPositions = new Array<number>(positions.length + 1);

                                    let index = 0;
                                    while (index < positions.length) {
                                        const oldPosition = positions[index];
                                        if (oldPosition <= notificationPosition) {
                                            newPositions[index++] = oldPosition;
                                            ++notificationPosition;
                                        }
                                        else {
                                            break;
                                        }
                                    }

                                    const list = this.oldValue as Array<any>;
                                    list[index] = notification.getOldValue();
                                    newPositions[index] = notificationPosition;

                                    while (++index < newPositions.length) {
                                        newPositions[index] = positions[index - 1];
                                    }

                                    this.newValue = newPositions;

                                    if (!originalWasSet) {
                                        this.position = NotificationImpl.IS_SET_CHANGE_INDEX - newPositions[0];
                                    }

                                    return true;
                                }
                                break;
                            }
                    }
                    break;
                }
        }

        return false;

    }

    public add = (newNotification: Notification): boolean => {
        if (newNotification == null) {
            return false;
        }
        else {
            if (this.merge(newNotification)) {
                return false;
            }

            if (this.next == null) {
                if (newNotification instanceof NotificationImpl) {
                    this.next = <NotificationImpl>newNotification;
                    return true;
                }
                else {
                    this.next = new NotificationChainImpl();
                    return this.next.add(newNotification);
                }
            }
            else {
                return this.next.add(newNotification);
            }
        }
    }

    public dispatch = (): void => {

        var notifier: any = this.getNotifier();
        if (notifier != null && this.getEventType() != -1) {
            (<Notifier>notifier).eNotify(this);
        }

        if (this.next != null) {
            this.next.dispatch();
        }


    }

    public getNotifier(): any {
        return null;

    }


    public getEventType(): number {
        return this.eventType;
    }

    public getNewValue(): any {
        return this.newValue;
    }
}


