import {Notifier} from "./Notifier";
import {Resource} from "./Resource";
import {TreeIterator} from "./TreeIterator";


export interface ResourceSet extends Notifier{

     //getResources():EList<Resource>;


     getAllContents():TreeIterator<Notifier>;


    //getAdapterFactories():EList<AdapterFactory>;


     getLoadOptions():Map<any, any>;



     //getEObject(uri:URI,  loadOnDemand:boolean):EObject;


     //getResource( uri:URI,  loadOnDemand:boolean):Resource;



     //createResource(uri:URI):Resource;



     //createResource( uri:URI,  contentType:String):Resource;


     //getResourceFactoryRegistry():Resource.Factory.Registry;



     //setResourceFactoryRegistry( resourceFactoryRegistry:Resource.Factory.Registry):void;



     //getURIConverter():URIConverter;


     //setURIConverter( converter:URIConverter):void;



     //getPackageRegistry():EPackage.Registry;



    //setPackageRegistry(packageRegistry:EPackage.Registry ):void;

}