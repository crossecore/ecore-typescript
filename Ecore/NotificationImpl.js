/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var NotificationImpl = (function () {
    /*
     public NotificationImpl(int eventType, object oldValue, object newValue): this(eventType, oldValue, newValue, NO_INDEX)
     {

     }

     public NotificationImpl(int eventType, object oldValue, object newValue, bool isSetChange): this(eventType, oldValue, newValue, isSetChange ? IS_SET_CHANGE_INDEX : NO_INDEX)
     {

     }
     */
    function NotificationImpl(eventType, oldValue, newValue, position, wasSet) {
        var _this = this;
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
        this.add = function (notification) {
            return _this.next.add(notification);
        };
        this.dispatch = function () {
            var notifier = _this.getNotifier();
            if (notifier != null && _this.getEventType() != -1) {
                notifier.eNotify(_this);
            }
            if (_this.next != null) {
                _this.next.dispatch();
            }
        };
        this.eventType = eventType;
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.position = position;
        this.primitiveType = NotificationImpl.PRIMITIVE_TYPE_OBJECT;
        if (wasSet != undefined && !wasSet) {
            this.position = NotificationImpl.IS_SET_CHANGE_INDEX - position - 1;
        }
    }
    NotificationImpl.prototype.getNotifier = function () {
        return null;
    };
    NotificationImpl.prototype.getEventType = function () {
        return this.eventType;
    };
    NotificationImpl.prototype.getNewValue = function () {
        return this.newValue;
    };
    NotificationImpl.SET = 1;
    NotificationImpl.UNSET = 2;
    NotificationImpl.ADD = 2;
    NotificationImpl.REMOVE = 3;
    NotificationImpl.ADD_MANY = 5;
    NotificationImpl.REMOVE_MANY = 6;
    NotificationImpl.MOVE = 7;
    NotificationImpl.NO_INDEX = -1;
    NotificationImpl.IS_SET_CHANGE_INDEX = NotificationImpl.NO_INDEX - 1;
    NotificationImpl.NO_FEATURE_ID = -1;
    NotificationImpl.PRIMITIVE_TYPE_OBJECT = -1;
    return NotificationImpl;
}());
export { NotificationImpl };
