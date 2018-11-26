/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EObject} from "./EObject";
import {OrderedSet} from "./OrderedSet";
import {EAttribute} from "./EAttribute";
import {EReference} from "./EReference";
import {Collection} from "./Collection";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EClassImpl} from "./EClassImpl";
import {EClass} from "./EClass";
import {AbstractCollection} from "./AbstractCollection";
import {EAttributeImpl} from "./EAttributeImpl";
import {EReferenceImpl} from "./EReferenceImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {EPackage} from "./EPackage";
import {EFactory} from "./EFactory";


interface EObjectRegistry{
  [index:string]:EObject;
}

interface ResolveJobRegistry{
  [index:string]:Array<ResolveJob>;
}

interface ResolveJob{
  eObject:EObject;
  eStructuralFeature:EStructuralFeature;
  value:string;
}

export class JsonResource{

  epackage:EPackage;
  efactory:EFactory;

  resolveJobs:ResolveJobRegistry;
  eobjectRegistry:EObjectRegistry;

  constructor(p:EPackage, f:EFactory){
    this.epackage = p;
    this.efactory = f;

    this.resolveJobs = {};
    this.eobjectRegistry = {};
  }

    private getId = (eObject:EObject):string => {

        var result:string = "";
        var eclass = eObject.eClass();
        var idFeature:EAttribute = null;

        for(let attribute of eclass.eAllAttributes){

            if(attribute.iD){
                idFeature = attribute;
                return eObject.eGet(idFeature);

            }
        }

        if(idFeature===null){

            //TODO generate uuid / hash value; use id attribute if present
            //generate uuid
        }

        return result;

    }

    private validEAllReferences = (eobject:EObject, features:OrderedSet<EReference>) : OrderedSet<EReference> => {

        var result = new OrderedSet<EReference>();

        for(let feature of features){


            if(!feature.transient && !feature.derived){

                if(eobject.eGet(feature) != null){

                    if(feature.many && !(eobject.eGet(feature) as OrderedSet<any>).isEmpty()){
                        result.add(feature);
                    }
                    else if(!feature.many){
                        result.add(feature);
                    }
                }
            }
        }


        return result;
    }


    private validEAllAttributes = (eobject:EObject, features:OrderedSet<EAttribute>) : OrderedSet<EAttribute> => {

        var result = new OrderedSet<EAttribute>();

        for(let feature of features){


            if(!feature.transient && !feature.derived){

                if(eobject.eGet(feature) != null){

                    if(feature.many && !(eobject.eGet(feature) as OrderedSet<any>).isEmpty()){
                        result.add(feature);
                    }
                    else if(!feature.many){
                        result.add(feature);
                    }
                }
            }
        }


        return result;
    }


    public getById = (id:string):EObject =>{
      if(this.eobjectRegistry[id]!==undefined){
        return this.eobjectRegistry[id];
      }
      else{
        return null;
      }
    }

    public fromJson = (doc:any):EObject =>{


      let classifierId = doc['type'];
      let eclassifier = this.epackage.getEClassifier(classifierId);

      if (eclassifier instanceof EClassImpl) {

        let eclass = eclassifier as EClass;

        let eobject = this.efactory.create(eclass);

        (eobject as BasicEObjectImpl)._uuid = doc._id;

        this.eobjectRegistry[doc._id] = eobject;


        this.addEStructuralFeatures(eobject, doc);


        if (this.resolveJobs[doc._id] !== undefined) {

          while (this.resolveJobs[doc._id].length > 0) {


            let job = this.resolveJobs[doc._id].pop();

            if (job.eStructuralFeature.many) {

              //remember: eGet call by reference
              let x = job.eObject.eGet(job.eStructuralFeature) as AbstractCollection<EObject>;
              x.add(eobject);
            }
            else {
              job.eObject.eSet(job.eStructuralFeature, eobject);
            }

          }

        }

        return eobject;
      }
    }

  private addEStructuralFeatures = (eobject:EObject, document:any) =>{

    for(let key in document){

      var estructuralfeature = eobject.eClass().getEStructuralFeature(key);

      if (estructuralfeature instanceof EAttributeImpl)
      {
        if (!estructuralfeature.many)
        {
          var etype = estructuralfeature.eType;
          var value = document[key];

          //TODO fix nsURI
          if (etype.ePackage.nsURI === "http://www.eclipse.org/emf/2002/Ecore" || true)
          {

            if (etype.name == "EBigDecimal")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EBigInteger")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EBoolean")
            {
              eobject.eSet(estructuralfeature, value == "true" ? true : false);
            }
            else if (etype.name == "EBooleanObject")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EByteArray")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EByteObject")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EChar")
            {
              eobject.eSet(estructuralfeature, value);
            }
            else if (etype.name == "ECharacterObject")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EDate")
            {
              eobject.eSet(estructuralfeature, Date.parse(value));
            }
            else if (etype.name == "EDateEDiagnosticChain")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EDiagnosticChain")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EDouble")
            {
              eobject.eSet(estructuralfeature, +value);
            }
            else if (etype.name == "EDoubleObject")
            {
              throw new Error('not implemented');
            }
            //EEList
            //EEnumerator
            //EFeatureMap
            //EFeatureMapEntry
            else if (etype.name == "EFloat")
            {
              eobject.eSet(estructuralfeature, +value);
            }
            else if (etype.name == "EFloatObject")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EInt")
            {
              eobject.eSet(estructuralfeature, +value);
            }
            else if (etype.name == "EIntegerObject")
            {
              throw new Error('not implemented');
            }
            //EJavaClass
            //EJavaObject
            else if (etype.name == "ELong")
            {
              eobject.eSet(estructuralfeature, +value);
            }
            else if (etype.name == "ELongObject")
            {
              throw new Error('not implemented');
            }
            //EMap
            //EResource
            //EResourceSet
            else if (etype.name == "EShort")
            {
              eobject.eSet(estructuralfeature, +value);
            }
            else if (etype.name == "EShortObject")
            {
              throw new Error('not implemented');
            }
            else if (etype.name == "EString")
            {
              eobject.eSet(estructuralfeature, value);
            }
            //ETreeIterator
            //EInvocationTargetException

          }
          else
          {
            //custom package


          }

        }
        else if (estructuralfeature.many)
        {

        }
        else
        {

        }
      }
      else if (estructuralfeature instanceof EReferenceImpl)
      {

        if(estructuralfeature.many){

          var values = document[key];


          for(let value of values){

            this.resolve(eobject, estructuralfeature,value);
          }

        }
        else{

          this.resolve(eobject, estructuralfeature,document[key]);

        }

      }

    }

  }

  private resolve(eobject:EObject, estructuralfeature:EStructuralFeature, value:string){

    if(this.eobjectRegistry[value]!==undefined){

      if(estructuralfeature.many){

        //TODO eGet is call by reference
        let items = eobject.eGet(estructuralfeature) as AbstractCollection<EObject>;
        items.add(this.eobjectRegistry[value]);

      }
      else{
        eobject.eSet(estructuralfeature, this.eobjectRegistry[value]);
      }


    }
    else{

      let resolveJob: ResolveJob = {
        "eObject": eobject,
        "eStructuralFeature": estructuralfeature,
        "value": value
      };

      if(this.resolveJobs[value]===undefined){
        this.resolveJobs[value] = new Array<ResolveJob>();
      }

      this.resolveJobs[value].push(resolveJob);
    }
  }


    public asJson = (eobject:EObject):any=> {

        var result:any = {};

        var eClass = eobject.eClass();

        var attributes = this.validEAllAttributes(eobject, eClass.eAllAttributes);
        var ereferences = this.validEAllReferences(eobject, eClass.eAllReferences);

        //TODO this is specific for the persistence technology (e.g. CouchDB)
        //TODO safe cast
        result["_id"] = (eobject as BasicEObjectImpl)._uuid;

        result["type"] = eClass.name; //TODO nsPrefix

        for(let feature of attributes){

            result[feature.name] = eobject.eGet(feature);
            //TODO many
        }
        for(let feature of ereferences){

            if(feature.many){


                var items:Array<EObject> = eobject.eGet(feature) as Array<EObject>;

                var itemIds = new Array<string>();
                for(var item of items){

                    itemIds.push((item as BasicEObjectImpl)._uuid);
                    result[feature.name] = itemIds;
                }


            }
            else{
                result[feature.name] = (eobject.eGet(feature) as BasicEObjectImpl)._uuid;
            }
        }

        return result;

    }
}
