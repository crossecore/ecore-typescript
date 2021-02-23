/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */



import { EPackage } from "./EPackage";
import { EcorePackageImpl } from "./EcorePackageImpl";
import { EcoreFactoryImpl } from "./EcoreFactoryImpl";

import { EClass } from "./EClass";
import { EObject } from "./EObject";
import { EFactory } from "./EFactory";

import { EReference } from "./EReference";

import { ENamedElement } from "./ENamedElement";
import { EReferenceImpl } from "./EReferenceImpl";
import { EClassImpl } from "./EClassImpl";
import { ENamedElementImpl } from "./ENamedElementImpl";
import { EAttributeImpl } from "./EAttributeImpl";
import { EStructuralFeature } from "./EStructuralFeature";
import { AbstractCollection } from "./AbstractCollection";
import { EDataType } from "./EDataType";
import { EDataTypeImpl } from "./EDataTypeImpl";
import { BasicEObjectImpl } from "./BasicEObjectImpl";
import { OrderedSet } from "./OrderedSet";
import { EAttribute } from "./EAttribute";
//import { EPackageRegistryImpl } from "./EPackageRegistryImpl";


interface EObjectRegistry {
    [index: string]: EObject;
}

interface ResolveJobRegistry {
    [index: string]: Array<ResolveJob>;
}

interface ResolveJob {
    eObject: EObject;
    eStructuralFeature: EStructuralFeature;
    value: string;
}

export class XmiResource {

    private factory: EFactory = EcoreFactoryImpl.eINSTANCE;
    private epackage: EPackage = EcorePackageImpl.eINSTANCE; //TODO make dynamic
    private domParser: DOMParser;


    private root: EObject;

    private resolveJobs: Array<ResolveJob> = []; //TODO define type
    private eobjectRegistry: EObjectRegistry;

    constructor(epackage: EPackage, efactory: EFactory, domParser: DOMParser) {
        this.factory = efactory;
        this.epackage = epackage;

        this.domParser = domParser;

        this.resolveJobs = [];
        this.eobjectRegistry = {};
    }




    public load = (xml: string): EObject => {

        let parser = this.domParser;
        let xmlDoc = parser.parseFromString(xml, "text/xml");

        this.rootnode(xmlDoc.childNodes[0] as Element);

        return this.root;
    }

    public rootnode = (node: Element) => {


        let classifierId = node.nodeName.split(':')[1];

        let eclassifier = this.epackage.getEClassifier(classifierId);

        if (eclassifier instanceof EClassImpl) {

            let eclass = eclassifier as EClass;

            this.root = this.factory.create(eclass);

            this.addEStructuralFeatures(this.root, node)

            this.lateResolve();
        }


    }

    protected resolveEList = (specification: string) => {



        let result = new Array<EObject>();
        let supertypes = specification.split(' ');

        if (supertypes != null) {

            for (let i = 0; i < supertypes.length; i++) {
                //for (string s in supertypes)

                let s = supertypes[i];

                let supertype = this.resolveEObject(s) as EClass;
                //TODO assure it is eclass
                result.push(supertype);
            }
        }
        return result;


    }

    protected resolveEObject = (specification: string) => {
        if (specification === null) {
            return null;
        }
        else if (specification.lastIndexOf("#//") === 0) {

            let name = specification.replace("#//", "");
            let segments = name.split("/");

            let queue = new Array<string>();


            for (let i = 0; i < segments.length; i++) {
                let segment = segments[i];

                queue.push(segment);
            }

            return this.resolveRecurr(queue, this.root);
        }
        else if (specification.indexOf("http://www.eclipse.org/emf/2002/Ecore#") !== -1) {
            //ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString

            let index = specification.indexOf("http://www.eclipse.org/emf/2002/Ecore#//");
            let name = specification.substring(index + 40, specification.length);
            let segments = name.split("/");

            let queue = new Array<string>();


            for (let i = 0; i < segments.length; i++) {
                let segment = segments[i];

                queue.push(segment);
            }

            return this.resolveRecurr(queue, EcorePackageImpl.eINSTANCE);

        }
    }

    private resolveRecurr = (path: Array<string>, current: EObject) => {

        if (path.length === 0) {
            return current;

        }

        let segment = path.shift();

        //FIXME: eContents needs to return Array
        let econtents = current.eContents() as Array<EObject>;

        for (let i = 0; i < econtents.length; i++) {

            let content = econtents[i] as EObject;

            if (content instanceof ENamedElementImpl) {

                if ((content as ENamedElement).name === segment) {
                    return this.resolveRecurr(path, content)
                }
            }
        }




    }

    public addEStructuralFeatures = (eobject: EObject, node: Element) => {


        for (let i = 0; i < node.attributes.length; i++) {



            let attribute = node.attributes[i];



            let name = attribute.name;


            let estructuralfeature = eobject.eClass().getEStructuralFeature(name);

            if (estructuralfeature instanceof EAttributeImpl) {

                let etype = estructuralfeature.eType;
                let value = attribute.value;


                if (etype.ePackage.nsURI === "http://www.eclipse.org/emf/2002/Ecore") {

                    if (etype.name == "EBigDecimal") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EBigInteger") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EBoolean") {
                        eobject.eSet(estructuralfeature, value == "true" ? true : false);
                    }
                    else if (etype.name == "EBooleanObject") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EByteArray") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EByteObject") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EChar") {
                        eobject.eSet(estructuralfeature, value);
                    }
                    else if (etype.name == "ECharacterObject") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDate") {
                        eobject.eSet(estructuralfeature, Date.parse(value));
                    }
                    else if (etype.name == "EDateEDiagnosticChain") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDiagnosticChain") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDouble") {
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EDoubleObject") {
                        throw new Error('not implemented');
                    }
                    //EEList
                    //EEnumerator
                    //EFeatureMap
                    //EFeatureMapEntry
                    else if (etype.name == "EFloat") {
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EFloatObject") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EInt") {
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EIntegerObject") {
                        throw new Error('not implemented');
                    }
                    //EJavaClass
                    //EJavaObject
                    else if (etype.name == "ELong") {
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "ELongObject") {
                        throw new Error('not implemented');
                    }
                    //EMap
                    //EResource
                    //EResourceSet
                    else if (etype.name == "EShort") {
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EShortObject") {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EString") {
                        eobject.eSet(estructuralfeature, value);
                    }
                    //ETreeIterator
                    //EInvocationTargetException



                }
                else if (etype instanceof EDataTypeImpl) {

                    //TODO use namespace-factory map
                    let literalvalue = this.factory.createFromString(etype as EDataType, value);

                    eobject.eSet(estructuralfeature, literalvalue);
                }
            }
            else if (estructuralfeature instanceof EReferenceImpl) {

                if (estructuralfeature.many) {





                    this.resolve(eobject, estructuralfeature, attribute.value);


                }
                else {

                    this.resolve(eobject, estructuralfeature, attribute.value);

                }
            }



        }

        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];


            if (child.nodeType === child.ELEMENT_NODE) {

                let element = child as Element;

                let containment_name = element.localName;

                let containment = eobject.eClass().getEStructuralFeature(containment_name);

                if (containment instanceof EReferenceImpl) {

                    let containment_er = containment as EReferenceImpl;


                    if (containment_er.containment) {

                        let classifierId2 = containment.eType.name;

                        for (let i = 0; i < element.attributes.length; i++) {
                            if (element.attributes[i].name === 'xsi:type') {
                                classifierId2 = element.attributes[i].value.split(':')[1];
                            }
                        }
                        let eclassifier2 = this.epackage.getEClassifier(classifierId2);


                        if (eclassifier2 instanceof EClassImpl) {

                            if (containment_er.eType.name === "EStringToStringMapEntry") {

                                //TODO
                                console.log("EStringToStringMapEntry");
                            }
                            else {
                                var eclass2 = eclassifier2 as EClass;
                                var eobject2 = this.factory.create(eclass2);


                                if (containment_er.many) {
                                    this.addEStructuralFeatures(eobject2, element);//TODO is Element cast safe here?

                                    let items = eobject.eGet(containment_er) as AbstractCollection<EObject>;
                                    const copy = items.slice()
                                    copy.push(eobject2);
                                    eobject.eSet(containment_er, copy);

                                }
                                else {
                                    this.addEStructuralFeatures(eobject2, element);//TODO is Element cast safe here?
                                    (eobject2)
                                    eobject.eSet(containment_er, eobject2);
                                }

                            }

                        }
                        else {

                        }

                    }
                }
            }

        }
    }

    private resolve(eobject: EObject, estructuralfeature: EStructuralFeature, value: string) {

        if (this.eobjectRegistry[value] !== undefined) {

            if (estructuralfeature.many) {

                //TODO eGet is call by reference
                let items = eobject.eGet(estructuralfeature) as AbstractCollection<EObject>;
                items.add(this.eobjectRegistry[value]);

            }
            else {
                eobject.eSet(estructuralfeature, this.eobjectRegistry[value]);
            }


        }
        else {

            let resolveJob: ResolveJob = {
                "eObject": eobject,
                "eStructuralFeature": estructuralfeature,
                "value": value
            };


            this.resolveJobs.push(resolveJob);
        }
    }


    public lateResolve = () => {
        for (let job of this.resolveJobs) {

            var eobject = job.eObject;
            var feature = job.eStructuralFeature;
            var path = job.value;


            if (!feature.many) {
                eobject.eSet(feature, this.resolveEObject(path));
            }
            else if (feature.many) {
                eobject.eSet(feature, this.resolveEList(path));
            }

        }
    }

    public save(root: EObject) {

        return this.doSave(root, null, 0)
    }

    /*
    private serialize(feature:EStructuralFeature, value:any):string{
        const epackage = feature.eInternalContainer().eClass().ePackage
        const efactory = EPackageRegistryImpl.INSTANCE.get(epackage.nsURI)
        return efactory.convertToString(feature.eType as EDataType, value)
    }
    */
    protected doSave(eobject: EObject, containment: EReference, level: number): string {


        const result = new Array<string>()
        const indent = new Array<string>(level)
        indent.fill("\t")
        const indent2 = indent.join("")
        console.log(`|${indent2}|`)
        console.log(level)

        const attributes = eobject.eClass().eAllAttributes as OrderedSet<EStructuralFeature>
        const attributesMany = attributes.select(a => a.many)
        const attributesSingle = attributes.select(a => !a.many)
        const containments = eobject.eClass().eAllContainments
        const references = eobject.eClass().eAllReferences as OrderedSet<EStructuralFeature>
        references.removeAll(containments)

        const xmiattributes = attributesSingle.concat(references)
        const childnodes = attributesMany.concat(containments)
        const nsPrefix = eobject.eClass().ePackage.nsPrefix
        let tag: string;
        if (containment) {

            tag = containment.name
            result.push(indent2)
            result.push(`<${tag}`)
            result.push(" ")
            result.push(`xmi:id="${(eobject as BasicEObjectImpl)._uuid}"`)
            if (eobject.eClass() !== containment.eType) {
                result.push(indent2)
                result.push(" ")
                result.push(`xmi:type="${nsPrefix}:${eobject.eClass().name}"`)
            }

        }
        else {
            const nsURI = eobject.eClass().ePackage.nsURI
            tag = `${nsPrefix}:${eobject.eClass().name}`

            result.push(`<?xml version="1.0" encoding="UTF-8"?>`)
            result.push("\n")
            result.push(`<${tag}`)
            result.push(" ")
            result.push(`xmi:version="2.0"`)
            result.push(" ")
            result.push(`xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`)
            result.push(" ")
            result.push(`xmlns:${nsPrefix}="${nsURI}"`)
            result.push(" ")
            result.push(`xmi:id="${(eobject as BasicEObjectImpl)._uuid}"`)

        }

        for (let i = 0; i < xmiattributes.length; i++) {
            let feature = xmiattributes[i]
            if (!feature.transient) {

                if (feature instanceof EAttributeImpl) {

                    if (!feature.many) {

                        const value = eobject.eGet(feature)
                        if (value !== null && value + "" !== feature.defaultValueLiteral) {
                            //const serializedValue = this.serialize(feature, value)
                            result.push(" ")
                            result.push(`${feature.name}="${value}"`)
                        }

                    }

                }
                else if (feature instanceof EReferenceImpl) {
                    let ereference = feature as EReference
                    if (ereference.many) {
                        const values = eobject.eGet(feature) as AbstractCollection<any>

                        if (values.notEmpty()) {
                            result.push(" ")
                            result.push(`${ereference.name}=`)
                            result.push(`"`)
                            result.push(values.map(v => (v as BasicEObjectImpl)._uuid).join(" "))
                            result.push(`"`)
                        }


                    }
                    else {

                        const value = eobject.eGet(feature)

                        if (value !== null) {
                            result.push(" ")
                            result.push(`${ereference.name}="${(value as BasicEObjectImpl)._uuid}"`)
                        }

                    }
                }
            }
        }

        if (childnodes.length > 0) {
            result.push(">")
            for (let i = 0; i < childnodes.length; i++) {
                const feature = childnodes[i]
                if (feature instanceof EAttributeImpl) {
                    const values = eobject.eGet(feature) as AbstractCollection<any>
                    if (values.notEmpty()) {
                        for (let value of values) {
                            //const serializedValue = this.serialize(feature, value)
                            result.push("\n")
                            result.push(indent2 + "\t")
                            result.push(`<${feature.name}>${value}</${feature.name}>`)

                        }
                    }
                }
                else if (feature instanceof EReferenceImpl) {
                    if (feature.many) {
                        const values = eobject.eGet(feature) as AbstractCollection<any>
                        for (let value of values) {
                            if (value !== null) {
                                result.push("\n")
                                result.push(this.doSave(value, feature, level + 1))
                            }
                        }
                    }
                    else {
                        const value = eobject.eGet(feature)
                        if (value !== null) {
                            result.push("\n")
                            result.push(this.doSave(value, feature, level + 1))
                        }
                    }
                }
            }
            result.push("\n")
            result.push(indent2)
            result.push(`</${tag}>`)
        }
        else {

            result.push("/>")
        }



        return result.join("")

    }


}


