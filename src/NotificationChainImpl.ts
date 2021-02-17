import { NotificationChain } from "./NotificationChain";
import { Notification } from "./Notification";
import { Notifier } from "./Notifier";

export class NotificationChainImpl extends Array<Notification> implements NotificationChain {
    dispatch() {
        let notification;
        let values = this.values()
        while(notification = values.next()){
            this.dispatch2(notification)
        }
    }
    
    protected dispatch2(notification:Notification){
        const notifier = notification.getNotifier();
        if (notifier != null && notification.getEventType() != -1)
        {
            (notifier as Notifier).eNotify(notification);
        }
    }

    public add = (newNotification: Notification): boolean => {

        let notification;
        let values = this.values()
        while(notification = values.next()){
            if ((notification as Notification).merge(newNotification)) {
                return false;
            }
        }

        this.push(newNotification);
        return true
    }
}
    
