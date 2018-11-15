
export interface EMap<K, V>{

    get(key:any):V;
    put(key:K,value:V);

    //map()

    putAll(map:any):void;

    isEmpty():boolean;


}