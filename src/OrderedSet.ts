/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {AbstractCollection} from "./AbstractCollection";
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
    
    public collect = <T2>(lambda: (element:T)=>T2):OrderedSet<T2> => {

        var result = new OrderedSet<T2>();
        for (let element in this)
        {
            result.add(lambda.call(element));
        }

        return result;

    }

    public collect2 = <T2>(lambda: (element:T)=>T2):OrderedSet<T2> => {

        var result = new OrderedSet<T2>();

        for (let element in this)
        {
            var e:AbstractCollection<T2> = lambda.call(element);

            for(var i=0;i<e.size();i++) {

                var ee: T2 = e[i];
                result.add(ee);
            }
        }

        return result;

    }    
}

