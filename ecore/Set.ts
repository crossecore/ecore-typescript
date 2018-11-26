/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {AbstractCollection} from "./AbstractCollection";

export class Set<T> extends AbstractCollection<T> {


  protected isUnique = (): boolean => {
    return true;
  };

  public select = (lambda: (element: T) => boolean): Set<T> => {

    var result: Set<T> = new Set<T>();

    this.filter(lambda).forEach((element: T) => {
      result.add(element);
    });

    return result;
  };

  public asSequence = ():Set<T> =>{

    let result = new Set<T>();
    for(let item of this){
      result.push(item);
    }
    return result;

  }


}
