/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EClassifierBase} from "ecore/EClassifierBase";

///<summary>This class was generated.</summary>


export class EClassifierImpl
    extends EClassifierBase {
    //implement your generated class here

    protected metaObjectID: number = -1;
    public setClassifierID = (id: number): void => {
        this.metaObjectID = id;
    }


    protected generatedInstanceClassName: string;
    public setGeneratedInstanceClass = (isGenerated: boolean): void => {
        if (isGenerated) {
            if (this.generatedInstanceClassName == null) {
                this.generatedInstanceClassName = this.instanceClassName;
                this.instanceClassName = null;
            }
        }
        else if (this.generatedInstanceClassName != null) {
            this.instanceClassName = this.generatedInstanceClassName;
            this.generatedInstanceClassName = null;
        }

    }


    public basicSetInstanceTypeName = (newInstanceTypeName: string): void => {
        let oldInstanceTypeName = this.instanceTypeName;
        this.instanceTypeName = newInstanceTypeName;

        /*
         if (eNotificationRequired())
         {
         eNotify
         (new ENotificationImpl(this, Notification.SET, EcorePackage.ECLASSIFIER__INSTANCE_TYPE_NAME, oldInstanceTypeName, newInstanceTypeName));
         }
         */
    }

    private _instanceClass:Function = null;
    get instanceClass():Function{
        return this._instanceClass;
    }
    set instanceClass(value:Function){
        this._instanceClass = value;
    }

    public getClassifierID() {
        if (this.metaObjectID == -1) {
            this.metaObjectID = this.computeClassifierID();
        }
        return this.metaObjectID;
    }

    private computeClassifierID(): number {
        return this.ePackage != null ?
            this.ePackage.eClassifiers.indexOf(this) :
            -1;
    }
}
	

