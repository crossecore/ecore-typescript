/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {AbstractCollection} from "ecore/AbstractCollection";
export class OrderedSet<T> extends AbstractCollection<T>{

    protected isUnique =():boolean =>{
        return true;
    }

    public at = (index:number) =>{
        return this[index];
    }

    public select = (lambda: (element:T) => boolean):OrderedSet<T>=>{

        var result:OrderedSet<T> = new OrderedSet<T>();

        this.filter(lambda).forEach((element:T)=>{result.add(element)});

        return result;
    }
}

