/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */



import {EPackage} from "./EPackage";
import {EcorePackageImpl} from "./EcorePackageImpl";
import {EcoreFactoryImpl} from "./EcoreFactoryImpl";

import {EClass} from "./EClass";
import {EObject} from "./EObject";
import {EFactory} from "./EFactory";

import {EReference} from "./EReference";

import {ENamedElement} from "./ENamedElement";
import {EReferenceImpl} from "./EReferenceImpl";
import {EClassImpl} from "./EClassImpl";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EAttributeImpl} from "./EAttributeImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {AbstractCollection} from "./AbstractCollection";
import {EDataType} from "./EDataType";
import {EDataTypeImpl} from "./EDataTypeImpl";


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

export class XmiResource{

    private factory:EFactory = EcoreFactoryImpl.eINSTANCE;
    private epackage:EPackage = EcorePackageImpl.eINSTANCE; //TODO make dynamic
    private domParser:DOMParser;


    private root:EObject;

    private resolveJobs:any = []; //TODO define type
    private eobjectRegistry:EObjectRegistry;

    constructor(epackage:EPackage, efactory:EFactory, domParser:DOMParser){
        this.factory = efactory;
        this.epackage = epackage;

        this.domParser = domParser;

        this.resolveJobs = {};
        this.eobjectRegistry = {};
    }




    public load = (xml:string):EObject =>{

        let parser = this.domParser;
        let xmlDoc = parser.parseFromString(xml,"text/xml");

        this.rootnode(xmlDoc.childNodes[2] as Element);

        return this.root;
    }

    public rootnode = (node:Element) => {


        let classifierId = node.nodeName.split(':')[1];

        let eclassifier = this.epackage.getEClassifier(classifierId);

        if(eclassifier instanceof EClassImpl){

            let eclass = eclassifier as EClass;

            this.root = this.factory.create(eclass);

            this.addEStructuralFeatures(this.root, node)

            this.lateResolve();
        }


    }

    protected resolveEList = (specification:string)=>{



        let result = new Array<EObject>();
        let supertypes = specification.split(' ');

        if (supertypes != null)
        {

            for(let i=0;i<supertypes.length;i++){
                //for (string s in supertypes)

                let s = supertypes[i];

                let supertype = this.resolveEObject(s) as EClass;
                //TODO assure it is eclass
                result.push(supertype);
            }
        }
        return result;


    }

    protected resolveEObject = (specification:string) => {
        if(specification===null){
            return null;
        }
        else if(specification.lastIndexOf("#//")===0){

            let name = specification.replace("#//", "");
            let segments = name.split("/");

            let queue = new Array<string>();


            for(let i=0;i<segments.length;i++){
                let segment = segments[i];

                queue.push(segment);
            }

            this.resolveRecurr(queue, this.root);


        }
    }

    private resolveRecurr = (path:Array<string>, current:EObject )=>{

        if(path.length===0){
            return current;

        }

        let segment = path.shift();

        //FIXME: eContents needs to return Array
        let econtents = new Array<EObject>();//current.eContents();

        for(let i=0; i<econtents.length;i++){

            let content = econtents[i] as EObject;

            if(content instanceof ENamedElementImpl){

                if((content as ENamedElement).name===segment){
                    return this.resolveRecurr(path, content)
                }
            }
        }




    }

    public addEStructuralFeatures = (eobject:EObject, node:Element)=>{

        console.log(node.nodeName);

        for (let i = 0; i < node.attributes.length; i++) {



            let attribute = node.attributes[i];



            let name = attribute.name;


            let estructuralfeature = eobject.eClass().getEStructuralFeature(name);

            if (estructuralfeature instanceof EAttributeImpl){

                let etype = estructuralfeature.eType;
                let value = attribute.value;

                if(etype.ePackage.nsURI==="http://www.eclipse.org/emf/2002/Ecore"){

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
                else if(etype instanceof EDataTypeImpl){

                    //TODO use namespace-factory map
                    let literalvalue = this.factory.createFromString(etype as EDataType, value);

                    eobject.eSet(estructuralfeature, literalvalue);
                }
            }
            else if(estructuralfeature instanceof EReferenceImpl){

                if(estructuralfeature.many){

                    var values = attribute.value;


                    for(let value of values){

                        this.resolve(eobject, estructuralfeature,value);
                    }

                }
                else{

                    this.resolve(eobject, estructuralfeature, attribute.value);

                }
            }



        }

        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];


            if(child.nodeType === child.ELEMENT_NODE){

                let element = child as Element;
                let containment_name = child.localName;

                let containment = eobject.eClass().getEStructuralFeature(containment_name);

                if(containment instanceof EReferenceImpl){

                    let containment_er = containment as EReferenceImpl;


                    if(containment_er.containment){

                        let classifierId2 = containment.eType.name;

                        for(let i=0; i< element.attributes.length;i++){
                            if(element.attributes[i].name==='xsi:type'){
                                classifierId2 = element.attributes[i].value.split(':')[1];
                            }
                        }

                        let eclassifier2 = this.epackage.getEClassifier(classifierId2);


                        if (eclassifier2 instanceof EClassImpl)
                        {

                            if (containment_er.eType.name === "EStringToStringMapEntry")
                            {

                                //TODO
                                console.log("EStringToStringMapEntry");
                            }
                            else
                            {
                                var eclass2 = eclassifier2 as EClass;
                                var eobject2 = this.factory.create(eclass2);

                                if (containment_er.many)
                                {
                                    this.addEStructuralFeatures(eobject2, element);//TODO is Element cast safe here?

                                    let items = eobject.eGet(containment_er) as AbstractCollection<EObject>;
                                    items.push(eobject2);


                                }
                                else
                                {
                                    this.addEStructuralFeatures(eobject2, element);//TODO is Element cast safe here?

                                    eobject.eSet(containment_er, eobject2);
                                }

                            }

                        }
                        else{
                            console.log("else");
                        }

                    }
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


    public lateResolve = () =>
    {
        for (let job of this.resolveJobs)
        {


            var eobject = job.eObject;
            var feature = job.eStructuralFeature;
            var path = job.value;


            if (!feature.many)
            {
                eobject.eSet(feature, this.resolveEObject(path));
            }
            else if (feature.many)
            {
                eobject.eSet(feature, this.resolveEList(path));
            }


        }
    }


}


