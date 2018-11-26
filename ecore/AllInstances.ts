/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EObject} from "./EObject";
import {EClass} from "./EClass";
import {EClassifier} from "./EClassifier";
import {EClassImpl} from "./EClassImpl";



export class AllInstances{

    private instances : Map<string, Array<EObject>> = new Map<string, Array<EObject>>();
    private subclasses: Map<EClassifier, Array<EClassifier>> = new Map<EClassifier, Array<EClassifier>>();
    public static INSTANCE:AllInstances = new AllInstances();

    public put(i:EObject, classname:string):void{
        let list:Array<EObject>;
        if(this.instances.has(classname)){
            list = this.instances.get(classname);
        }else{
            list = new Array<EObject>();

        }
        list.push(i);

        this.instances.set(classname, list);
    }

    public allInstances(eclass:EClass):Array<EObject>{
        let result = new Array<EObject>();


        if(this.subclasses.size===0){

            for(let eclassifier of eclass.ePackage.eClassifiers){

                if(eclassifier instanceof EClassImpl){

                    if(!this.subclasses.has(eclassifier)){
                        this.subclasses.set(eclassifier, new Array<EClassifier>());
                    }


                    for(let supertype of eclassifier.eSuperTypes){

                        if(!this.subclasses.has(supertype)){
                            this.subclasses.set(supertype, new Array<EClassifier>());
                        }

                        let list = this.subclasses.get(supertype);
                        list.push(eclassifier);
                        this.subclasses.set(supertype, list);

                    }
                }
            }
        }
        console.log("here "+this.subclasses.size);

        let queue = new Array<EClass>()//this.subclasses.get(eclass);

        queue.push(eclass);
        do{

            let next = queue.shift();
            if(this.instances.has(next.name)){
                console.log(next.name+": "+this.instances.get(next.name).length);
                for(let y of this.instances.get(next.name)){

                    result.push(y);
                }
            }

            if(this.subclasses.has(next)){
                for(let subclass of this.subclasses.get(next)){
                    if(subclass instanceof EClassImpl){

                        queue.push(subclass);
                    }

                }
            }



        }while(queue.length>0);

        return result;
    }
}