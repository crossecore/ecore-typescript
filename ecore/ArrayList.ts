/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

export class ArrayList<T> extends Array<T> {
    /*
    private array:Array<T> = new Array<T>();

    get length():number{
        return this.array.length;
    }

    public push = (element:T):void=>{
        this.array.push(element);
    }

    public filter = (lambda):T[]=>{
        //TODO set type of lambda
        return this.array.filter(lambda);
    }

    public every = (lambda):boolean=>{
        //TODO set type of lambda
        return this.array.every(lambda);
    }

    public some = (lambda):boolean=>{
        //TODO set type of lambda
        return this.array.some(lambda);
    }
    */


    public containsX = (element:T):boolean=>{
        return this.indexOf(element)>-1;
    }

    public sizeX = ():number=>{
        return this.length;
    }

    public addX = (element:T):boolean=>{
        this.push(element);
        return true;
    }

    public removeX = (element:T):boolean=>{
        var index = this.indexOf(element);
        if(index>-1){
            this.splice(index, 1);
            return true;
        }

        return false;
    }

    public isEmptyX = ():boolean=>{
        return this.length===0;
    }


    public clear = ():void=>{
      this.splice(0, this.length);
    }
}
