import { EFactory } from "./EFactory";

export class EPackageRegistryImpl{


    constructor(){
        console.log("yes")
    }

    protected registry = new Map<String, EFactory>()

    public static INSTANCE = new EPackageRegistryImpl()

    public set(nsUri:string, efactory:EFactory){
        this.registry.set(nsUri, efactory)
    }
    
    public get(nsUri:string){
        return this.registry.get(nsUri)
    }

    public getEFactory(nsUri:string){
        if(this.registry.has(nsUri)){
            return this.registry.get(nsUri)
        }
        return null;
    }

    public getEPackage(nsUri:string){

        const factory = this.getEFactory(nsUri)
        if(factory!==null){
            return factory.ePackage
        }
        return null;
    }
}