"use strict";
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EcorePackageImpl_1 = require("ecore/EcorePackageImpl");
var EcoreFactoryImpl_1 = require("ecore/EcoreFactoryImpl");
var EReferenceImpl_1 = require("ecore/EReferenceImpl");
var EClassImpl_1 = require("ecore/EClassImpl");
var ENamedElementImpl_1 = require("ecore/ENamedElementImpl");
var EAttributeImpl_1 = require("ecore/EAttributeImpl");
var EDataTypeImpl_1 = require("ecore/EDataTypeImpl");
var XmiResource = (function () {
    function XmiResource(epackage, efactory, domParser) {
        var _this = this;
        this.factory = EcoreFactoryImpl_1.EcoreFactoryImpl.eINSTANCE;
        this.epackage = EcorePackageImpl_1.EcorePackageImpl.eINSTANCE; //TODO make dynamic
        this.resolveJobs = []; //TODO define type
        this.load = function (xml) {
            var parser = _this.domParser;
            var xmlDoc = parser.parseFromString(xml, "text/xml");
            _this.rootnode(xmlDoc.childNodes[2]);
            return _this.root;
        };
        this.rootnode = function (node) {
            var classifierId = node.nodeName.split(':')[1];
            var eclassifier = _this.epackage.getEClassifier(classifierId);
            if (eclassifier instanceof EClassImpl_1.EClassImpl) {
                var eclass = eclassifier;
                _this.root = _this.factory.create(eclass);
                _this.addEStructuralFeatures(_this.root, node);
                _this.lateResolve();
            }
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
        this.resolveEObject = function (specification) {
            if (specification === null) {
                return null;
            }
            else if (specification.lastIndexOf("#//") === 0) {
                var name_1 = specification.replace("#//", "");
                var segments = name_1.split("/");
                var queue = new Array();
                for (var i = 0; i < segments.length; i++) {
                    var segment = segments[i];
                    queue.push(segment);
                }
                _this.resolveRecurr(queue, _this.root);
            }
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
                if (content instanceof ENamedElementImpl_1.ENamedElementImpl) {
                    if (content.name === segment) {
                        return _this.resolveRecurr(path, content);
                    }
                }
            }
        };
        this.addEStructuralFeatures = function (eobject, node) {
            console.log(node.nodeName);
            for (var i = 0; i < node.attributes.length; i++) {
                var attribute = node.attributes[i];
                var name_2 = attribute.name;
                var estructuralfeature = eobject.eClass().getEStructuralFeature(name_2);
                if (estructuralfeature instanceof EAttributeImpl_1.EAttributeImpl) {
                    var etype = estructuralfeature.eType;
                    var value = attribute.value;
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
                        else if (etype.name == "ELong") {
                            eobject.eSet(estructuralfeature, +value);
                        }
                        else if (etype.name == "ELongObject") {
                            throw new Error('not implemented');
                        }
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
                    else if (etype instanceof EDataTypeImpl_1.EDataTypeImpl) {
                        //TODO use namespace-factory map
                        var literalvalue = _this.factory.createFromString(etype, value);
                        eobject.eSet(estructuralfeature, literalvalue);
                    }
                }
                else if (estructuralfeature instanceof EReferenceImpl_1.EReferenceImpl) {
                    if (estructuralfeature.many) {
                        var values = attribute.value;
                        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                            var value = values_1[_i];
                            _this.resolve(eobject, estructuralfeature, value);
                        }
                    }
                    else {
                        _this.resolve(eobject, estructuralfeature, attribute.value);
                    }
                }
            }
            for (var i = 0; i < node.childNodes.length; i++) {
                var child = node.childNodes[i];
                if (child.nodeType === child.ELEMENT_NODE) {
                    var element = child;
                    var containment_name = child.localName;
                    var containment = eobject.eClass().getEStructuralFeature(containment_name);
                    if (containment instanceof EReferenceImpl_1.EReferenceImpl) {
                        var containment_er = containment;
                        if (containment_er.containment) {
                            var classifierId2 = containment.eType.name;
                            for (var i_1 = 0; i_1 < element.attributes.length; i_1++) {
                                if (element.attributes[i_1].name === 'xsi:type') {
                                    classifierId2 = element.attributes[i_1].value.split(':')[1];
                                }
                            }
                            var eclassifier2 = _this.epackage.getEClassifier(classifierId2);
                            if (eclassifier2 instanceof EClassImpl_1.EClassImpl) {
                                if (containment_er.eType.name === "EStringToStringMapEntry") {
                                    //TODO
                                    console.log("EStringToStringMapEntry");
                                }
                                else {
                                    var eclass2 = eclassifier2;
                                    var eobject2 = _this.factory.create(eclass2);
                                    if (containment_er.many) {
                                        _this.addEStructuralFeatures(eobject2, element); //TODO is Element cast safe here?
                                        var items = eobject.eGet(containment_er);
                                        items.push(eobject2);
                                    }
                                    else {
                                        _this.addEStructuralFeatures(eobject2, element); //TODO is Element cast safe here?
                                        eobject.eSet(containment_er, eobject2);
                                    }
                                }
                            }
                            else {
                                console.log("else");
                            }
                        }
                    }
                }
            }
        };
        this.lateResolve = function () {
            for (var _i = 0, _a = _this.resolveJobs; _i < _a.length; _i++) {
                var job = _a[_i];
                var eobject = job.eObject;
                var feature = job.eStructuralFeature;
                var path = job.value;
                if (!feature.many) {
                    eobject.eSet(feature, _this.resolveEObject(path));
                }
                else if (feature.many) {
                    eobject.eSet(feature, _this.resolveEList(path));
                }
            }
        };
        this.factory = efactory;
        this.epackage = epackage;
        this.domParser = domParser;
        this.resolveJobs = {};
        this.eobjectRegistry = {};
    }
    XmiResource.prototype.resolve = function (eobject, estructuralfeature, value) {
        if (this.eobjectRegistry[value] !== undefined) {
            if (estructuralfeature.many) {
                //TODO eGet is call by reference
                var items = eobject.eGet(estructuralfeature);
                items.add(this.eobjectRegistry[value]);
            }
            else {
                eobject.eSet(estructuralfeature, this.eobjectRegistry[value]);
            }
        }
        else {
            var resolveJob = {
                "eObject": eobject,
                "eStructuralFeature": estructuralfeature,
                "value": value
            };
            if (this.resolveJobs[value] === undefined) {
                this.resolveJobs[value] = new Array();
            }
            this.resolveJobs[value].push(resolveJob);
        }
    };
    return XmiResource;
}());
exports.XmiResource = XmiResource;
//# sourceMappingURL=XmiResource.js.map