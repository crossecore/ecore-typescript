/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


    import {EPackage} from "./EPackage";
import {EObject} from "./EObject";
import {EClass} from "./EClass";
export abstract class Switch<T>{



        public defaultCase(eObject:EObject):T{
            return null;
        }

        private isEObject(e: EObject): e is EObject {
            return (<EObject>e).eClass !== undefined;
        }


        public doSwitch(...args:Array<any>):T{

            if(args.length === 2 && this.isEObject(args[0]) && this.isEObject(args[1])){
                return this.doSwitch1(args[0] as EClass, args[1] as EObject);
            }
            else if(args.length === 1 && this.isEObject(args[0])){
                return this.doSwitch2(args[0] as EObject);
            }
            else if(args.length === 2 && typeof args[0] === "number" && this.isEObject(args[1])){
                return this.doSwitch3(args[0], args[1] as EObject);
            }
        }

        private doSwitch1(eClass:EClass, eObject:EObject):T
        {
            if (this.isSwitchFor(eClass.ePackage))
            {
                return this.doSwitch3(eClass.getClassifierID(), eObject);
            }
            else
            {
                var eSuperTypes = eClass.eSuperTypes;
                return eSuperTypes.isEmpty() ? this.defaultCase(eObject) : this.doSwitch1(eSuperTypes.at(0), eObject);
            }
        }

        private doSwitch2(eObject:EObject):T
        {
            return this.doSwitch1(eObject.eClass(), eObject);
        }

        private doSwitch3(classifierID:number,  eObject:EObject):T
        {
            return null;
        }

        public abstract isSwitchFor(ePackage:EPackage):boolean;
    }


