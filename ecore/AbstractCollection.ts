/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EcoreEList} from "ecore/EcoreEList";
import {Collection} from "ecore/Collection";
import {InternalEObject} from "ecore/InternalEObject";
import {ArrayList} from "ecore/ArrayList";
import {NotificationChain} from "ecore/NotificationChain";
import {NotificationImpl} from "ecore/NotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EReference} from "ecore/EReference";
import {Notification} from "ecore/Notification";
import {ENotificationImpl} from 'ecore/ENotificationImpl';

export class AbstractCollection<T> extends ArrayList<T> implements EcoreEList<T>, Collection<T>
    {
        public static EOPPOSITE_FEATURE_BASE:number = -1;

        protected static NO_FEATURE:number = Number.MIN_VALUE;

        private owner:InternalEObject;
        private featureId:number = AbstractCollection.NO_FEATURE;
        private oppositeFeatureId:number = AbstractCollection.NO_FEATURE;
        //protected internalCollection:ArrayList<T>;


        /*
        constructor(owner:InternalEObject ,  featureId:number)
        {

            super( owner, featureId, AbstractCollection.NO_FEATURE)
        }
        */

        constructor(owner?:InternalEObject, featureId?:number, oppositeFeatureId?:number)
        {
            super();
            this.owner = owner!==undefined ? owner : null;
            this.featureId = featureId!==undefined ? featureId : AbstractCollection.NO_FEATURE;
            this.oppositeFeatureId = oppositeFeatureId!==undefined ? oppositeFeatureId : AbstractCollection.NO_FEATURE;
            //this.internalCollection = new ArrayList<T>();

        }

        protected createNotification = (eventType:number, oldValue:any, newValue:any, index:number, wasSet:boolean):NotificationImpl => {

          return new ENotificationImpl(this.owner, eventType, this.featureId, oldValue, newValue);

        }



        //protected isUnique:boolean = true;

        protected isUnique =():boolean =>{
          return false;
        }

        //Base functions START
        /*
         public new void Add(T element)
         {
         add(element);
         }
         */

        public add = (element:T ):boolean=>
        {

            if (this.isUnique() && this.containsX(element))
            {
                return false;
            }
            else
            {
                this.addUnique(element);
                return true;
            }

        }

        public addAll = (collection:Array<T>) :boolean =>{

            for(let item of collection){
                this.push(item); //TODO push or add?
            }

            return true;//TODO

        }

        public remove = (item:T):boolean=>
        {

            if (this.containsX(item))
            {
                this.remove_(item);
                return true;
            }
            else
            {
                return false;
            }
        }

        public remove_ = (element:T):T =>
        {
            if (this.isNotificationRequired())
            {
                var notifications:NotificationChain = null;
                //bool oldIsSet = isSet();
                var oldIsSet:boolean = this.size() != 0;
                /*
                 if (hasShadow())
                 {
                 notifications = shadowRemove(basicGet(index), null);
                 }
                 */
                this.removeX(element);
                var oldObject = element;
                //TODO determine index if possible
                var index = 1000;

                var notification:NotificationImpl = this.createNotification(NotificationImpl.REMOVE, oldObject, null, index, oldIsSet);
                if (this.hasInverse() && oldObject != null)
                {
                    notifications = this.inverseRemove(oldObject, notifications);
                    if (notifications == null)
                    {
                        this.dispatchNotification(notification);
                    }
                    else
                    {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                else
                {
                    if (notifications == null)
                    {
                        this.dispatchNotification(notification);
                    }
                    else
                    {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                return oldObject;
            }
            else
            {
                this.removeX(element);
                var oldObject:T = element;
                if (this.hasInverse() && oldObject != null)
                {
                    var notifications:NotificationChain = this.inverseRemove(oldObject, null);
                    if (notifications != null) notifications.dispatch();
                }
                return oldObject;
            }
        }
        //Base functions END

        //EcoreEList START

        public isNotificationRequired=():boolean =>
        {
            if(this.owner!=null){
                return this.owner.eNotificationRequired();
            }
            return false;

        }



        public basicAdd = (element:T, notifications:NotificationChain)=>
        {
            if (this.isNotificationRequired())
            {
                let index:number = this.length;
                let oldIsSet:boolean = this.length > 0;// isSet();
                //doAddUnique(index, object);
                this.push(element);

                let notification:NotificationImpl = this.createNotification(NotificationImpl.ADD, null, element, index, oldIsSet);
                if (notifications == null)
                {
                    notifications = notification;
                }
                else
                {
                    notifications.add(notification);
                }
            }
            else
            {
                this.push(element);
            }
            return notifications;
        }

        public basicRemove = (element:T, notifications:NotificationChain) =>
        {
            //int index = indexOf(object);
            //if (index != -1)
            if(this.containsX(element))
            {
                if (this.isNotificationRequired())
                {
                    //bool oldIsSet = isSet();
                    var oldIsSet:boolean = this.size() != 0;
                    //Object oldObject = doRemove(index);
                    var oldObject = element;
                    //TODO fix me:
                    var index = 1000;
                    this.removeX(element);

                    var notification:NotificationImpl = this.createNotification(NotificationImpl.REMOVE, oldObject, null, index, oldIsSet);
                    if (notifications == null)
                    {
                        notifications = notification;
                    }
                    else
                    {
                        notifications.add(notification);
                    }
                }
                else
                {
                    //doRemove(index);
                    this.removeX(element);
                }
            }
            return notifications;
        }

        public inverseAdd = (element:T, notifications:NotificationChain):NotificationChain=>
        {
            //Double assertions: see https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
            let internalEObject:InternalEObject = element as any as InternalEObject;
            if (this.hasNavigableInverse())
            {
                if (!this.hasInstanceClass())
                {
                    return internalEObject.eInverseAdd
                    (this.owner,
                        internalEObject.eClass().getFeatureID(this.getInverseEReference()),
                        null,
                        notifications);
                }
                else
                {
                    return internalEObject.eInverseAdd
                    (this.owner,
                        this.oppositeFeatureId,
                        this.getInverseFeatureClass(),
                        notifications);
                }
            }
            else
            {
                return internalEObject.eInverseAdd
                (this.owner,
                    AbstractCollection.EOPPOSITE_FEATURE_BASE - this.featureId,
                    null,
                    notifications);
            }

        }



    public inverseRemove=(element:T, notifications:NotificationChain):NotificationChain=>
    {
        let internalEObject:InternalEObject = element as any as InternalEObject;
        if (this.hasNavigableInverse())
        {
            if (!this.hasInstanceClass())
            {

                return internalEObject.eInverseRemove
                (this.owner,
                    internalEObject.eClass().getFeatureID(this.getInverseEReference()),
                    null,
                    notifications);
            }
            else
            {
                return internalEObject.eInverseRemove
                (this.owner,
                    this.oppositeFeatureId,
                    this.getInverseFeatureClass(),
                    notifications);
            }
        }
        else
        {
            return internalEObject.eInverseRemove
            (this.owner,
                AbstractCollection.EOPPOSITE_FEATURE_BASE - this.featureId,
                null,
                notifications);
        }
    }

    public hasNavigableInverse=():boolean=>
    {
        return this.oppositeFeatureId >= 0;
    }

    public hasInstanceClass=():boolean=>
    {
        //from EcoreEList, needed for generics
        return true;
    }

    public  hasInverse=():boolean=>
    {

        return this.oppositeFeatureId != AbstractCollection.NO_FEATURE;




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


    }

    public getEStructuralFeature=():EStructuralFeature=>
    {
        //from EcoreEList
        //return owner.eClass().getEStructuralFeature(getFeatureID());
        return this.owner.eClass().getEStructuralFeature(this.featureId);
    }

    public getInverseEReference=():EReference=>
    {
        //from EcoreEList
        //return ((EReference)getEStructuralFeature()).getEOpposite();
        return (<EReference>this.getEStructuralFeature()).eOpposite;
    }

    public getInverseFeatureClass=():Function=>
    {
        //from EcoreEList
        //return ((EClass)getEStructuralFeature().getEType()).getInstanceClass();

        //TODO fix
        //return ((EClass)getEStructuralFeature().eType).instanceClass;
        return null;
    }

    public dispatchNotification=(notification:Notification )=>
    {
        //from EcoreElist
        this.owner.eNotify(notification);
    }

    public addUnique=(element:T)=>
    {
        if (this.isNotificationRequired())
        {
            //int index = size;
            var index:number = this.size();

            //boolean oldIsSet = isSet();
            var oldIsSet:boolean = this.notEmpty();

            //doAddUnique(object);
            this.addX(element);


            var notification:NotificationImpl = this.createNotification(NotificationImpl.ADD, null, element, index, oldIsSet);

            if (this.hasInverse())
            {
                var notifications:NotificationChain = this.inverseAdd(element, null);
                /*
                 if (hasShadow())
                 {
                 notifications = shadowAdd(object, notifications);
                 }
                 */

                if (notifications == null)
                {
                    this.dispatchNotification(notification);
                }
                else
                {
                    notifications.add(notification);
                    notifications.dispatch();
                }
            }
            else
            {
                this.dispatchNotification(notification);
            }
        }
        else
        {
            //doAddUnique(object);
            this.addX(element);

            if (this.hasInverse())
            {
                var notifications:NotificationChain = this.inverseAdd(element, null);
                if (notifications != null)
                {
                    notifications.dispatch();
                }
            }
        }
    }

    //EcoreEList END


    //OCL START
    public sortedBy = <T2>(lambda:(T)=> T2) =>
    {
        new Error("NotImplemented");
    }

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
        public equals = (c:Collection<T>):boolean=>{

            throw new Error("operation not implemented");
        }

        public notEquals = (c:Collection<T>):boolean=>{

            return !this.equals(c);
        }

        public size = ():number=>{

            return this.length;

        }

        /* Already defined in Array.prototype
         public includes = (element:T):boolean=>{

         return this.indexOf(element)!==-1;
         }
         */
        //FIXME
        public includes___ = (element:T):boolean=>{

            return this.containsX(element);
        }

        public excludes = (element:T):boolean=>{

            return !this.containsX(element);
        }

        public count = (element:T):number=>{
            throw new Error("operation not implemented");
        }

        public includesAll = (c:Collection<T>):boolean=>{

            throw new Error("operation not implemented");
        }

        public excludesAll = (c:Collection<T>):boolean=>{

            throw new Error("operation not implemented");
        }

        public isEmpty = ():boolean=>{
            return this.length===0;
        }

        public notEmpty = ():boolean=>{
            return this.length>0;
        }

        public max = ():T=>{
            throw new Error("operation not implemented");
        }

        public min = ():T=>{
            throw new Error("operation not implemented");
        }

        public sum = ():T=>{
            throw new Error("operation not implemented");
        }

        public any = (lambda: (element:T) => boolean):T=>{

            //TODO nullpointer
            return this.filter(lambda)[0];

        }

        public exists = (lambda: (element:T) => boolean):boolean=>{

            return this.some(lambda);

        }

        public forAll = (lambda: (element:T) => boolean):boolean=>{

            return this.every(lambda);

        }





    }
//}
