/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {InternalEObject} from "./InternalEObject";
import {EClass} from "./EClass";
import {EMap} from "./EMap";


export class EcoreEMap<K, V> implements EMap<K,V>{

    protected entryEClass:EClass;
    protected entryClass:Function;
    private hashmap:any;

    constructor(entryEClass:EClass, entryClass:Function, owner:InternalEObject, featureID:number){

        this.entryClass = entryClass;
        this.entryEClass = entryEClass;
        this.hashmap = {};
    }

    public get(key:any):V{

        return this.hashmap[key];
    }

    public put(key:K, value:V):V{

        let oldValue;
        if(this.containsKey(key)){
            oldValue = this.hashmap[key];
        }
        this.hashmap[key]= value;
        return oldValue;
    }


    public set(value:any):void{
        this.hashmap = {};

        this.putAll(value);
    }

    public containsKey(key:any):boolean{

        return this.hashmap[key]!==undefined;
    }

    public putAll(map:any):void{
        for(let prop in map) {
            if (map.hasOwnProperty(prop)) {
                this.hashmap.put(prop, map[prop]);
            }

        }
    }

    public isEmpty():boolean{
        for(let prop in this.hashmap) {
            if (this.hashmap.hasOwnProperty(prop)) {
                return false;
            }

        }
        return true;
    }




}