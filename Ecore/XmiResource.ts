/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {EPackage} from "ecore/EPackage";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
import {EClassBase} from "ecore/EClassBase";
import {EClass} from "ecore/EClass";
import {EObject} from "ecore/EObject";
import {EFactory} from "ecore/EFactory";
import {EAttributeBase} from "ecore/EAttributeBase";
import {EReferenceBase} from "ecore/EReferenceBase";
import {EReference} from "ecore/EReference";
import {ENamedElementBase} from "ecore/ENamedElementBase";
import {ENamedElement} from "ecore/ENamedElement";


export class XmiResource{

    private factory:EFactory = EcoreFactoryImpl.eINSTANCE;
    private epackage:EPackage = EcorePackageImpl.eINSTANCE; //TODO make dynamic


    private root:EObject;

    private resolveJobs:any = []; //TODO define type

    public load =() =>{

        var text = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<ecore:EPackage xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n" +
            "    xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" name=\"ecore\" nsURI=\"http://www.eclipse.org/emf/2002/Ecore\" nsPrefix=\"ecore\">\n" +
            "  <eClassifiers xsi:type=\"ecore:EClass\" name=\"EAttribute\" eSuperTypes=\"#//EStructuralFeature\">\n" +
            "    <eAnnotations source=\"http://www.eclipse.org/emf/2002/Ecore\">\n" +
            "      <details key=\"constraints\" value=\"ConsistentTransient\"/>\n" +
            "    </eAnnotations>\n" +
            "    <eStructuralFeatures xsi:type=\"ecore:EAttribute\" name=\"iD\" eType=\"#//EBoolean\"/>\n" +
            "    <eStructuralFeatures xsi:type=\"ecore:EReference\" name=\"eAttributeType\" lowerBound=\"1\"\n" +
            "        eType=\"#//EDataType\" changeable=\"false\" volatile=\"true\" transient=\"true\" derived=\"true\"/>\n" +
            "  </eClassifiers>" +
            "</ecore>";


        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(text,"text/xml");

        this.rootnode(xmlDoc.childNodes[0]);

    }

    public rootnode = (node:Node) => {

        var classifierId = node.nodeName.split(':')[1];

        var eclassifier = this.epackage.getEClassifier(classifierId);

        if(eclassifier instanceof EClassBase){

            var eclass = eclassifier as EClass;

            this.root = this.factory.create(eclass);

            this.addEStructuralFeatures(this.root, node)
        }

        this.addEStructuralFeatures(null, node);
    }

    protected resolveEList = (specification:string)=>{



        var result = new Array<EObject>();
        var supertypes = specification.split(' ');

        if (supertypes != null)
        {

            for(var i=0;i<supertypes.length;i++){
            //for (string s in supertypes)

                var s = supertypes[i];

                var supertype = this.resolveEObject(s) as EClass;
                //TODO assure it is eclass
                result.push(supertype);
            }
        }
        return result;


    }

    protected resolveEObject(specification:string){
        if(specification===null){
            return null;
        }
        else if(specification.lastIndexOf("#//")===0){

            var name = specification.replace("#//", "");
            var segments = name.split("/");

            var queue = new Array<string>();


            for(var i=0;i<segments.length;i++){
                var segment = segments[i];

                queue.push(segment);
            }

            this.resolveRecurr(queue, this.root);


        }
    }

    private resolveRecurr = (path:Array<string>, current:EObject )=>{

        if(path.length===0){
            return current;

        }

        var segment = path.shift();

        //FIXME: eContents needs to return Array
        var econtents = new Array<EObject>();//current.eContents();

        for(var i=0; i<econtents.length;i++){

            var content = econtents[i] as EObject;

            if(content instanceof ENamedElementBase){

                if((content as ENamedElement).name===segment){
                    return this.resolveRecurr(path, content)
                }
            }
        }




    }

    public addEStructuralFeatures = (eobject:EObject, node:Node)=>{


        for (var i = 0; i < node.attributes.length; i++) {

            var attribute = node.attributes[i];
            var name = node.attributes[i].name;

            var estructuralfeature = eobject.eClass().getEStructuralFeature(name);

            if (estructuralfeature instanceof EAttributeBase){

                var etype = estructuralfeature.eType;
                var value = attribute.value;

                if(etype.ePackage.nsURI==="http://www.eclipse.org/emf/2002/Ecore"){

                    if (etype.name === "EBoolean")
                    {
                        eobject.eSet(estructuralfeature, value == "true" ? true : false);
                    }
                    else if (etype.name === "EInt")
                    {
                        eobject.eSet(estructuralfeature, parseInt(value));
                    }
                    else if (etype.name === "EString")
                    {
                        eobject.eSet(estructuralfeature, value);
                    }
                }
                else if (estructuralfeature.many)
                {

                }
            }
            else if (estructuralfeature instanceof EReferenceBase)
            {
                //TODO
                //this.resolveJobs.push({eobject, estructuralfeature, attribute.value});

            }

        }

        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];

            var containment_name = child.localName;
            var containment = eobject.eClass().getEStructuralFeature(containment_name);


            if(containment instanceof EReferenceBase){

                var containment_er = containment as EReference;

                if(containment_er.containment){

                    var classifierId2 = containment.eType.name;

                    if(child.attributes.getNamedItem("xsi:type")){//TODO check if that works with namespace

                        classifierId2 = child.attributes.getNamedItem("xsi:type").value.split(':')[1];


                    }

                    var eclassifier2 = this.epackage.getEClassifier(classifierId2);



                }
            }

        }
    }



}


