import {InternalEObject} from "ecore/InternalEObject";
import {EClass} from "ecore/EClass";
import {EMap} from "ecore/EMap";


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


    public set(value:any){
        this.hashmap = {};

        this.putAll(value);
    }

    public containsKey(key:K){

        this.hashmap[key]!==undefined;
    }

    public putAll(map:any){
        for(let prop in map) {
            if (map.hasOwnProperty(prop)) {
                this.hashmap.put(prop, map[prop]);
            }

        }
    }

    public isEmpty(){
        for(let prop in this.hashmap) {
            if (this.hashmap.hasOwnProperty(prop)) {
                return false;
            }

        }
        return true;
    }




}