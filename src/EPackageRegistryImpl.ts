import { EPackage } from "./EPackage";

export class EPackageRegistryImpl{


    constructor(){
        
    }

    protected registry = new Map<String, EPackage>()

    public static INSTANCE = new EPackageRegistryImpl()

    public set(nsUri:string, epackage:EPackage){
        this.registry.set(nsUri, epackage)
    }
    
    public get(nsUri:string){
        return this.registry.get(nsUri)
    }

    public getEFactory(nsUri:string){
        if(this.registry.has(nsUri)){
            const epackage = this.registry.get(nsUri)
            return epackage.eFactoryInstance
        }
        return null;
    }

    public getEPackage(nsUri:string){

        if(this.registry.has(nsUri)){
            return this.registry.get(nsUri)
        }
        return null;
    }
}