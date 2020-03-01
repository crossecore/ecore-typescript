/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

export interface EMap<K, V> /*TODO extends EList<Map.Entry<K, V>>*/{

    get(key:any):V;

    put(key:K, value:V):V;

    //TODO
    //putAll(map:Map<? extends K, ? extends V>):void;

    //TODO
    //putAll(map:EMap<? extends K, ? extends V> ):void;

    //TODO
    //indexOfKey(key:any):number;

    containsKey(key:any):boolean;

    //TODO
    //containsValue(value:any):boolean;

    //TODO
    //removeKey(key:any):V;

    //TODO
    //map():Map<K, V>;

    //TODO
    //entrySet():Set<Map.Entry<K, V>> ;

    //TODO
    //keySet:Set<K>();

    //TODO
    //values():Collection<V> ;


}