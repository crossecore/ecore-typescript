/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import { EcorePackageImpl } from "ecore/EcorePackageImpl";
import { EcoreFactoryImpl } from "ecore/EcoreFactoryImpl";
import { EClassBase } from "ecore/EClassBase";
import { EAttributeBase } from "ecore/EAttributeBase";
import { EReferenceBase } from "ecore/EReferenceBase";
import { ENamedElementBase } from "ecore/ENamedElementBase";
var XmiResource = (function () {
    function XmiResource() {
        var _this = this;
        this.factory = EcoreFactoryImpl.eINSTANCE;
        this.epackage = EcorePackageImpl.eINSTANCE; //TODO make dynamic
        this.resolveJobs = []; //TODO define type
        this.load = function () {
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
            var xmlDoc = parser.parseFromString(text, "text/xml");
            _this.rootnode(xmlDoc.childNodes[0]);
        };
        this.rootnode = function (node) {
            var classifierId = node.nodeName.split(':')[1];
            var eclassifier = _this.epackage.getEClassifier(classifierId);
            if (eclassifier instanceof EClassBase) {
                var eclass = eclassifier;
                _this.root = _this.factory.create(eclass);
                _this.addEStructuralFeatures(_this.root, node);
            }
            _this.addEStructuralFeatures(null, node);
        };
        this.resolveEList = function (specification) {
            var result = new Array();
            var supertypes = specification.split(' ');
            if (supertypes != null) {
                for (var i = 0; i < supertypes.length; i++) {
                    //for (string s in supertypes)
                    var s = supertypes[i];
                    var supertype = _this.resolveEObject(s);
                    //TODO assure it is eclass
                    result.push(supertype);
                }
            }
            return result;
        };
        this.resolveRecurr = function (path, current) {
            if (path.length === 0) {
                return current;
            }
            var segment = path.shift();
            //FIXME: eContents needs to return Array
            var econtents = new Array(); //current.eContents();
            for (var i = 0; i < econtents.length; i++) {
                var content = econtents[i];
                if (content instanceof ENamedElementBase) {
                    if (content.name === segment) {
                        return _this.resolveRecurr(path, content);
                    }
                }
            }
        };
        this.addEStructuralFeatures = function (eobject, node) {
            for (var i = 0; i < node.attributes.length; i++) {
                var attribute = node.attributes[i];
                var name = node.attributes[i].name;
                var estructuralfeature = eobject.eClass().getEStructuralFeature(name);
                if (estructuralfeature instanceof EAttributeBase) {
                    var etype = estructuralfeature.eType;
                    var value = attribute.value;
                    if (etype.ePackage.nsURI === "http://www.eclipse.org/emf/2002/Ecore") {
                        if (etype.name === "EBoolean") {
                            eobject.eSet(estructuralfeature, value == "true" ? true : false);
                        }
                        else if (etype.name === "EInt") {
                            eobject.eSet(estructuralfeature, parseInt(value));
                        }
                        else if (etype.name === "EString") {
                            eobject.eSet(estructuralfeature, value);
                        }
                    }
                    else if (estructuralfeature.many) {
                    }
                }
                else if (estructuralfeature instanceof EReferenceBase) {
                    //TODO
                    //this.resolveJobs.push({eobject, estructuralfeature, attribute.value});
                }
            }
            for (var i = 0; i < node.childNodes.length; i++) {
                var child = node.childNodes[i];
                var containment_name = child.localName;
                var containment = eobject.eClass().getEStructuralFeature(containment_name);
                if (containment instanceof EReferenceBase) {
                    var containment_er = containment;
                    if (containment_er.containment) {
                        var classifierId2 = containment.eType.name;
                        if (child.attributes.getNamedItem("xsi:type")) {
                            classifierId2 = child.attributes.getNamedItem("xsi:type").value.split(':')[1];
                        }
                        var eclassifier2 = _this.epackage.getEClassifier(classifierId2);
                    }
                }
            }
        };
    }
    XmiResource.prototype.resolveEObject = function (specification) {
        if (specification === null) {
            return null;
        }
        else if (specification.lastIndexOf("#//") === 0) {
            var name = specification.replace("#//", "");
            var segments = name.split("/");
            var queue = new Array();
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                queue.push(segment);
            }
            this.resolveRecurr(queue, this.root);
        }
    };
    return XmiResource;
}());
export { XmiResource };
