/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

export interface Collection<T>
{
    add(element:T):boolean;
    remove(element:T):boolean;
    equals(c:Collection<T>):boolean;
    notEquals(c:Collection<T>):boolean;
    size():number;
    //includes(element:T):boolean;
    excludes(element:T):boolean;
    count(element:T):number;
    includesAll(c:Collection<T>):boolean;
    excludesAll(c:Collection<T>):boolean;
    isEmpty():boolean;
    notEmpty():boolean;
    max():T;
    min():T;
    sum():T;
    //asSet():Set<T>;
    //asOrderedSet():OrderedSet<T>;
    //asSequence():Sequence<T>;
    //asBag():Bag<T>;
    //flatten():Collection;
    any(lambda: (element:T) => boolean):T;
    //closure
    exists(lambda: (element:T) => boolean):boolean;
    forAll(lambda: (element:T) => boolean):boolean;
}
