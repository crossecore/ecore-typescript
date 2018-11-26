/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {TreeIterator} from "./TreeIterator";
import {EObject} from "./EObject";

export class ContentTreeIterator implements TreeIterator<EObject>, IterableIterator<EObject>{


  private index:number = 0;
  queue:Array<EObject>;

  constructor(root_:EObject) {


    this.queue = new Array<EObject>();

    this.addRecursively(root_);
  }

  private addRecursively(eObject:EObject){

    if(eObject!==null){
      this.queue.push(eObject);



      for(var child of (eObject.eContents() as Array<EObject>) ){
        if(child!==null){
          this.queue.push(child);
        }


      }

      for(var child of (eObject.eContents() as Array<EObject>) ){


        this.addRecursively(child);


      }
    }

  }

  public next(): IteratorResult<EObject> {



    if(this.index===this.queue.length){

      return {
        done:true,
        value: null
      }
    }
    else{
      return {
        done:false,
        value: this.queue[this.index++]}
    }


  }

  public hasNext():boolean{

    return this.index<this.queue.length;
  }

  [Symbol.iterator](): IterableIterator<EObject> {
    return this;
  }

  prune(): void {
    //TODO implement
  }

}
