/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ArrayList } from "ecore/ArrayList";
import { NotificationImpl } from "ecore/NotificationImpl";
import { ENotificationImpl } from 'ecore/ENotificationImpl';
var AbstractCollection = (function (_super) {
    __extends(AbstractCollection, _super);
    //protected internalCollection:ArrayList<T>;
    /*
    constructor(owner:InternalEObject ,  featureId:number)
    {

        super( owner, featureId, AbstractCollection.NO_FEATURE)
    }
    */
    function AbstractCollection(owner, featureId, oppositeFeatureId) {
        var _this = _super.call(this) || this;
        _this.featureId = AbstractCollection.NO_FEATURE;
        _this.oppositeFeatureId = AbstractCollection.NO_FEATURE;
        _this.createNotification = function (eventType, oldValue, newValue, index, wasSet) {
            return new ENotificationImpl(_this.owner, eventType, _this.featureId, oldValue, newValue);
        };
        //protected isUnique:boolean = true;
        _this.isUnique = function () {
            return false;
        };
        //Base functions START
        /*
         public new void Add(T element)
         {
         add(element);
         }
         */
        _this.add = function (element) {
            if (_this.isUnique() && _this.containsX(element)) {
                return false;
            }
            else {
                _this.addUnique(element);
                return true;
            }
        };
        _this.remove = function (item) {
            if (_this.containsX(item)) {
                _this.remove_(item);
                return true;
            }
            else {
                return false;
            }
        };
        _this.remove_ = function (element) {
            if (_this.isNotificationRequired()) {
                var notifications = null;
                //bool oldIsSet = isSet();
                var oldIsSet = _this.size() != 0;
                /*
                 if (hasShadow())
                 {
                 notifications = shadowRemove(basicGet(index), null);
                 }
                 */
                _this.removeX(element);
                var oldObject = element;
                //TODO determine index if possible
                var index = 1000;
                var notification = _this.createNotification(NotificationImpl.REMOVE, oldObject, null, index, oldIsSet);
                if (_this.hasInverse() && oldObject != null) {
                    notifications = _this.inverseRemove(oldObject, notifications);
                    if (notifications == null) {
                        _this.dispatchNotification(notification);
                    }
                    else {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                else {
                    if (notifications == null) {
                        _this.dispatchNotification(notification);
                    }
                    else {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                return oldObject;
            }
            else {
                _this.removeX(element);
                var oldObject = element;
                if (_this.hasInverse() && oldObject != null) {
                    var notifications = _this.inverseRemove(oldObject, null);
                    if (notifications != null)
                        notifications.dispatch();
                }
                return oldObject;
            }
        };
        //Base functions END
        //EcoreEList START
        _this.isNotificationRequired = function () {
            if (_this.owner != null) {
                return _this.owner.eNotificationRequired();
            }
            return false;
        };
        _this.basicAdd = function (element, notifications) {
            if (_this.isNotificationRequired()) {
                var index = _this.length;
                var oldIsSet = _this.length > 0; // isSet();
                //doAddUnique(index, object);
                _this.push(element);
                var notification = _this.createNotification(NotificationImpl.ADD, null, element, index, oldIsSet);
                if (notifications == null) {
                    notifications = notification;
                }
                else {
                    notifications.add(notification);
                }
            }
            else {
                _this.push(element);
            }
            return notifications;
        };
        _this.basicRemove = function (element, notifications) {
            //int index = indexOf(object);
            //if (index != -1)
            if (_this.containsX(element)) {
                if (_this.isNotificationRequired()) {
                    //bool oldIsSet = isSet();
                    var oldIsSet = _this.size() != 0;
                    //Object oldObject = doRemove(index);
                    var oldObject = element;
                    //TODO fix me:
                    var index = 1000;
                    _this.removeX(element);
                    var notification = _this.createNotification(NotificationImpl.REMOVE, oldObject, null, index, oldIsSet);
                    if (notifications == null) {
                        notifications = notification;
                    }
                    else {
                        notifications.add(notification);
                    }
                }
                else {
                    //doRemove(index);
                    _this.removeX(element);
                }
            }
            return notifications;
        };
        _this.inverseAdd = function (element, notifications) {
            //Double assertions: see https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
            var internalEObject = element;
            if (_this.hasNavigableInverse()) {
                if (!_this.hasInstanceClass()) {
                    return internalEObject.eInverseAdd(_this.owner, internalEObject.eClass().getFeatureID(_this.getInverseEReference()), null, notifications);
                }
                else {
                    return internalEObject.eInverseAdd(_this.owner, _this.oppositeFeatureId, _this.getInverseFeatureClass(), notifications);
                }
            }
            else {
                return internalEObject.eInverseAdd(_this.owner, AbstractCollection.EOPPOSITE_FEATURE_BASE - _this.featureId, null, notifications);
            }
        };
        _this.inverseRemove = function (element, notifications) {
            var internalEObject = element;
            if (_this.hasNavigableInverse()) {
                if (!_this.hasInstanceClass()) {
                    return internalEObject.eInverseRemove(_this.owner, internalEObject.eClass().getFeatureID(_this.getInverseEReference()), null, notifications);
                }
                else {
                    return internalEObject.eInverseRemove(_this.owner, _this.oppositeFeatureId, _this.getInverseFeatureClass(), notifications);
                }
            }
            else {
                return internalEObject.eInverseRemove(_this.owner, AbstractCollection.EOPPOSITE_FEATURE_BASE - _this.featureId, null, notifications);
            }
        };
        _this.hasNavigableInverse = function () {
            return _this.oppositeFeatureId >= 0;
        };
        _this.hasInstanceClass = function () {
            //from EcoreEList, needed for generics
            return true;
        };
        _this.hasInverse = function () {
            return _this.oppositeFeatureId != AbstractCollection.NO_FEATURE;
            /*
             try
             {
             //non-navigable inverse is the containment feature
             var eclass = _owner.eClass();
             var estructuralfeatures = eclass.eStructuralFeatures;
    
             var ereference = _owner.eClass().getEStructuralFeature(_featureId) as EReference;
    
             return ereference.eOpposite.containment;
             }
             catch (NullReferenceException e)
             {
             return false;
             }
             */
        };
        _this.getEStructuralFeature = function () {
            //from EcoreEList
            //return owner.eClass().getEStructuralFeature(getFeatureID());
            return _this.owner.eClass().getEStructuralFeature(_this.featureId);
        };
        _this.getInverseEReference = function () {
            //from EcoreEList
            //return ((EReference)getEStructuralFeature()).getEOpposite();
            return _this.getEStructuralFeature().eOpposite;
        };
        _this.getInverseFeatureClass = function () {
            //from EcoreEList
            //return ((EClass)getEStructuralFeature().getEType()).getInstanceClass();
            //TODO fix
            //return ((EClass)getEStructuralFeature().eType).instanceClass;
            return null;
        };
        _this.dispatchNotification = function (notification) {
            //from EcoreElist
            _this.owner.eNotify(notification);
        };
        _this.addUnique = function (element) {
            if (_this.isNotificationRequired()) {
                //int index = size;
                var index = _this.size();
                //boolean oldIsSet = isSet();
                var oldIsSet = _this.notEmpty();
                //doAddUnique(object);
                _this.addX(element);
                var notification = _this.createNotification(NotificationImpl.ADD, null, element, index, oldIsSet);
                if (_this.hasInverse()) {
                    var notifications = _this.inverseAdd(element, null);
                    /*
                     if (hasShadow())
                     {
                     notifications = shadowAdd(object, notifications);
                     }
                     */
                    if (notifications == null) {
                        _this.dispatchNotification(notification);
                    }
                    else {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                else {
                    _this.dispatchNotification(notification);
                }
            }
            else {
                //doAddUnique(object);
                _this.addX(element);
                if (_this.hasInverse()) {
                    var notifications = _this.inverseAdd(element, null);
                    if (notifications != null) {
                        notifications.dispatch();
                    }
                }
            }
        };
        //EcoreEList END
        //OCL START
        _this.sortedBy = function (lambda) {
            new Error("NotImplemented");
        };
        /*
        public Collection<T2> flatten<T2> = ()=>
        {
    
            var result = new Set<T2>();
    
            for (let element:any in internalCollection)
            {
                if (element instanceof Collection<T2>)
                {
    
                    var subcollection = <Collection<T2>> element;
                    for (let e:T2 of subcollection.flatten<T2>().asSet())
                    {
                        result.add(e);
                    }
    
                }
            else if (element instanceof T2)
                {
                    var e = <T2>element;
                    result.add(e);
    
                }
            }
    
            return result;
    
        }
        */
        _this.equals = function (c) {
            throw new Error("operation not implemented");
        };
        _this.notEquals = function (c) {
            return !_this.equals(c);
        };
        _this.size = function () {
            return _this.length;
        };
        /* Already defined in Array.prototype
         public includes = (element:T):boolean=>{

         return this.indexOf(element)!==-1;
         }
         */
        //FIXME
        _this.includes___ = function (element) {
            return _this.containsX(element);
        };
        _this.excludes = function (element) {
            return !_this.containsX(element);
        };
        _this.count = function (element) {
            throw new Error("operation not implemented");
        };
        _this.includesAll = function (c) {
            throw new Error("operation not implemented");
        };
        _this.excludesAll = function (c) {
            throw new Error("operation not implemented");
        };
        _this.isEmpty = function () {
            return _this.length === 0;
        };
        _this.notEmpty = function () {
            return _this.length > 0;
        };
        _this.max = function () {
            throw new Error("operation not implemented");
        };
        _this.min = function () {
            throw new Error("operation not implemented");
        };
        _this.sum = function () {
            throw new Error("operation not implemented");
        };
        _this.any = function (lambda) {
            //TODO nullpointer
            return _this.filter(lambda)[0];
        };
        _this.exists = function (lambda) {
            return _this.some(lambda);
        };
        _this.forAll = function (lambda) {
            return _this.every(lambda);
        };
        _this.owner = owner !== undefined ? owner : null;
        _this.featureId = featureId !== undefined ? featureId : AbstractCollection.NO_FEATURE;
        _this.oppositeFeatureId = oppositeFeatureId !== undefined ? oppositeFeatureId : AbstractCollection.NO_FEATURE;
        return _this;
        //this.internalCollection = new ArrayList<T>();
    }
    AbstractCollection.EOPPOSITE_FEATURE_BASE = -1;
    AbstractCollection.NO_FEATURE = Number.MIN_VALUE;
    return AbstractCollection;
}(ArrayList));
export { AbstractCollection };
//}
