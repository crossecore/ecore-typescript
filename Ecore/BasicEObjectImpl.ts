/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


import {InternalEObject} from "ecore/InternalEObject";
import {BasicNotifierImpl} from "ecore/BasicNotifierImpl";
import {NotificationChain} from "ecore/NotificationChain";
import {EObject} from "ecore/EObject";
import {EClass} from "ecore/EClass";
import {EStructuralFeature} from "ecore/EStructuralFeature";
//import {EcorePackageImpl} from "./EcorePackageImpl";
//import {EcorePackageImpl} from "./EcorePackageImpl";
import {EReference} from "ecore/EReference";
import {List} from "ecore/List";
import {EOperation} from "ecore/EOperation";
import {Resource} from "ecore/Resource";
import {TreeIterator} from "ecore/TreeIterator";

export class BasicEObjectImpl extends BasicNotifierImpl implements EObject, InternalEObject
    {



        public static EOPPOSITE_FEATURE_BASE:number = -1;

        protected _eContainer:InternalEObject = null;
        protected _eContainerFeatureID:number = -1;

        public _eStaticClass:EClass = null;

        public eBasicSetContainer(newContainer:InternalEObject , newContainerFeatureID:number,  notifications:NotificationChain):NotificationChain{
            this.eBasicSetContainer_(newContainer, newContainerFeatureID);

            return notifications;
        }

        //TODO fix quickfix for overloading
        protected eBasicSetContainer_(newContainer:InternalEObject, newContainerFeatureID:number):void
        {

            this._eContainer = newContainer;
            this._eContainerFeatureID = newContainerFeatureID;
        }

        public eInternalContainer():InternalEObject
        {

            return this._eContainer;
        }

        public eContainerFeatureID():number
        {
            return this._eContainerFeatureID;
        }



        public eBasicRemoveFromContainer(notifications:NotificationChain):NotificationChain{

            return notifications;
        }

        public eGet(...args:Array<any>):any {

            if(typeof args[0] === "number" &&
                typeof args[1] === "boolean" &&
                typeof args[2] === "boolean"){
                return this.eGet_number_boolean_boolean(args[0],args[1],args[2]);
            }
            else{
                return this.eGet_EStructuralFeature_boolean_boolean(args[0],args[1],args[2]);
            }


        }



        public eGet_EStructuralFeature_boolean_boolean(feature:EStructuralFeature, resolve:boolean, coreType:boolean):any
        {

            let featureID:number = this.eDerivedStructuralFeatureID_EStructuralFeature(feature);

            /*
             if (featureID >= 0)
             {
             */
            return this.eGet(featureID, resolve, coreType);
            /*
             }
             else
             {
             return eOpenGet(eFeature, resolve);
             }
             */
        }

        public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any
        {
            let eFeature:EStructuralFeature = this.eClass().getEStructuralFeature(featureID);
            return eFeature;
        }

        public eDerivedStructuralFeatureID_EStructuralFeature(eStructuralFeature:EStructuralFeature):number
        {

            let containerClass = null;
            /*
             Class <?> containerClass = eStructuralFeature.getContainerClass();
             if (containerClass == null)
             {
             return eClass().getFeatureID(eStructuralFeature);
             }
             else
             {
             assert eClass().getEAllStructuralFeatures().contains(eStructuralFeature) : "The feature '" + eStructuralFeature.getName() + "' is not a valid feature";
             */
            return this.eDerivedStructuralFeatureID_number_Function(eStructuralFeature.getFeatureID(), containerClass);
            /*}*/
        }

        public eDerivedStructuralFeatureID_number_Function(baseFeatureID:number, baseClass:Function):number
        {
            return baseFeatureID;
        }

        public eClass():EClass
        {
            return this.eStaticClass();
        }

        // Subclasses MUST override this function
        protected eStaticClass():EClass
        {
            //FIXME causes circular dependency
            //return EcorePackageImpl.eINSTANCE.getEObject();
            //return EcorePackageImpl.eINSTANCE.getEObject();
            return null;
        }

        public eInverseAdd(...args:Array<any>):NotificationChain{

            if(args.length===4){
                return this.eInverseAdd4(args[0],args[1],args[2],args[3]);
            }
            else{
                return this.eInverseAdd3(args[0],args[1],args[2]);
            }
        }
        //public eInverseAddFromBasicEObjectImpl = this.eInverseAdd;

        public eInverseAdd4( otherEnd:InternalEObject, featureID:number, baseClass:Function , msgs:NotificationChain ):NotificationChain
        {

            if (featureID >= 0)
            {
                //return eInverseAdd(otherEnd, eDerivedStructuralFeatureID(featureID, baseClass), msgs);
                return this.eInverseAdd3(otherEnd, featureID, msgs);
            }
            else
            {
                if (this.eInternalContainer() != null)
                {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.eBasicSetContainer(otherEnd, featureID, msgs);
            }
            //return this.eInverseAdd(otherEnd, featureID, msgs);
        }

        public eInverseRemove(...args:Array<any>):NotificationChain{

            if(args.length===4){
                return this.eInverseRemove4(args[0],args[1],args[2],args[3]);
            }
            else {
                return this.eInverseRemove3(args[0], args[1], args[2]);
            }
        }
        //public eInverseRemoveFromBasicEObjectImpl = this.eInverseRemove;

        public eInverseAdd3(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain
        {

            //return eDynamicInverseAdd(otherEnd, featureID, msgs);

            //call generated function
            return msgs;
        }

        //TODO fix quickfix and create a delegator mehtod for eInverseRemove
        public eInverseRemove4(otherEnd:InternalEObject, featureID:number, baseClass:Function, msgs:NotificationChain):NotificationChain
        {

            if (featureID >= 0)
            {
                //return eInverseRemove(otherEnd, eDerivedStructuralFeatureID(featureID, baseClass), msgs);
                return this.eInverseRemove(otherEnd, featureID, msgs);
            }
            else
            {
                return this.eBasicSetContainer(null, featureID, msgs);
            }

        }

        public eInverseRemove3(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain
        {

            //return eDynamicInverseRemove(otherEnd, featureID, msgs);
            return msgs;
        }

        public eIsSet(feature:EStructuralFeature): boolean {
            /*TODO implement function*/
            return null;
        };

        public eContainmentFeature(): EReference{
            /*TODO implement function*/
            return null;
        };

        public eIsProxy(): boolean{
            /*TODO implement function*/
            return null;
        };

        public eContainingFeature(): EStructuralFeature{
            /*TODO implement function*/
            return null;
        };

        public eContainer(): EObject{
            /*TODO implement function*/
            return null;
        };

        public eInvoke(operation:EOperation, args:List<any>): any{
            /*TODO implement function*/
            return null;
        };

        public eSet(feature:EStructuralFeature, newValue:any): void {
            /*TODO implement function*/
            return null;
        };

        public eResource(): Resource {
            /*TODO implement function*/
            return null;
        };

        public eContents(): List<EObject>{
            /*TODO implement function*/
            return null;
        };

        public eCrossReferences(): List<EObject>{
            /*TODO implement function*/
            return null;
        };

        public eAllContents(): TreeIterator<EObject>{
            /*TODO implement function*/
            return null;
        };

        public eGet_EStructuralFeature(feature:EStructuralFeature): any {
            /*TODO implement function*/
            return null;
        };

        public eGet_EStructuralFeature_boolean(feature:EStructuralFeature, resolve:boolean): any{
            /*TODO implement function*/
            return null;
        };

        public eUnset(feature:EStructuralFeature): void{
            /*TODO implement function*/
            return null;
        };

        eURIFragmentSegment(eFeature: EStructuralFeature, eObject: EObject): string {
            return undefined;
        }

        eObjectForURIFragmentSegment(uriFragmentSegment: string): EObject {
            return undefined;
        }

        eSetClass(eClass: EClass): void {
        }

        eBaseStructuralFeatureID(derivedFeatureID: number, baseClass: Function): number {
            return undefined;
        }

        eDerivedStructuralFeatureID(baseFeatureID: number, baseClass: Function): number {
            return undefined;
        }

        eDerivedOperationID(baseOperationID: number, baseClass: Function): number {
            return undefined;
        }


        eResolveProxy(proxy: InternalEObject): EObject {
            return undefined;
        }
    }

