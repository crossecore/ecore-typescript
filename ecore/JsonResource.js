"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderedSet_1 = require("./OrderedSet");
var EClassImpl_1 = require("./EClassImpl");
var EAttributeImpl_1 = require("./EAttributeImpl");
var EReferenceImpl_1 = require("./EReferenceImpl");
var JsonResource = (function () {
    function JsonResource(p, f) {
        var _this = this;
        this.getId = function (eObject) {
            var result = "";
            var eclass = eObject.eClass();
            var idFeature = null;
            for (var _i = 0, _a = eclass.eAllAttributes; _i < _a.length; _i++) {
                var attribute = _a[_i];
                if (attribute.iD) {
                    idFeature = attribute;
                    return eObject.eGet(idFeature);
                }
            }
            if (idFeature === null) {
                //TODO generate uuid / hash value; use id attribute if present
                //generate uuid
            }
            return result;
        };
        this.validEAllReferences = function (eobject, features) {
            var result = new OrderedSet_1.OrderedSet();
            for (var _i = 0, features_1 = features; _i < features_1.length; _i++) {
                var feature = features_1[_i];
                if (!feature.transient && !feature.derived) {
                    if (eobject.eGet(feature) != null) {
                        if (feature.many && !eobject.eGet(feature).isEmpty()) {
                            result.add(feature);
                        }
                        else if (!feature.many) {
                            result.add(feature);
                        }
                    }
                }
            }
            return result;
        };
        this.validEAllAttributes = function (eobject, features) {
            var result = new OrderedSet_1.OrderedSet();
            for (var _i = 0, features_2 = features; _i < features_2.length; _i++) {
                var feature = features_2[_i];
                if (!feature.transient && !feature.derived) {
                    if (eobject.eGet(feature) != null) {
                        if (feature.many && !eobject.eGet(feature).isEmpty()) {
                            result.add(feature);
                        }
                        else if (!feature.many) {
                            result.add(feature);
                        }
                    }
                }
            }
            return result;
        };
        this.getById = function (id) {
            if (_this.eobjectRegistry[id] !== undefined) {
                return _this.eobjectRegistry[id];
            }
            else {
                return null;
            }
        };
        this.fromJson = function (doc) {
            var classifierId = doc['type'];
            var eclassifier = _this.epackage.getEClassifier(classifierId);
            if (eclassifier instanceof EClassImpl_1.EClassImpl) {
                var eclass = eclassifier;
                var eobject = _this.efactory.create(eclass);
                eobject._uuid = doc._id;
                _this.eobjectRegistry[doc._id] = eobject;
                _this.addEStructuralFeatures(eobject, doc);
                if (_this.resolveJobs[doc._id] !== undefined) {
                    while (_this.resolveJobs[doc._id].length > 0) {
                        var job = _this.resolveJobs[doc._id].pop();
                        if (job.eStructuralFeature.many) {
                            //remember: eGet call by reference
                            var x = job.eObject.eGet(job.eStructuralFeature);
                            x.add(eobject);
                        }
                        else {
                            job.eObject.eSet(job.eStructuralFeature, eobject);
                        }
                    }
                }
                return eobject;
            }
        };
        this.addEStructuralFeatures = function (eobject, document) {
            for (var key in document) {
                var estructuralfeature = eobject.eClass().getEStructuralFeature(key);
                if (estructuralfeature instanceof EAttributeImpl_1.EAttributeImpl) {
                    if (!estructuralfeature.many) {
                        var etype = estructuralfeature.eType;
                        var value = document[key];
                        //TODO fix nsURI
                        if (etype.ePackage.nsURI === "http://www.eclipse.org/emf/2002/Ecore" || true) {
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
                        else {
                            //custom package
                        }
                    }
                    else if (estructuralfeature.many) {
                    }
                    else {
                    }
                }
                else if (estructuralfeature instanceof EReferenceImpl_1.EReferenceImpl) {
                    if (estructuralfeature.many) {
                        var values = document[key];
                        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                            var value_1 = values_1[_i];
                            _this.resolve(eobject, estructuralfeature, value_1);
                        }
                    }
                    else {
                        _this.resolve(eobject, estructuralfeature, document[key]);
                    }
                }
            }
        };
        this.asJson = function (eobject) {
            var result = {};
            var eClass = eobject.eClass();
            var attributes = _this.validEAllAttributes(eobject, eClass.eAllAttributes);
            var ereferences = _this.validEAllReferences(eobject, eClass.eAllReferences);
            //TODO this is specific for the persistence technology (e.g. CouchDB)
            //TODO safe cast
            result["_id"] = eobject._uuid;
            result["type"] = eClass.name; //TODO nsPrefix
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                var feature = attributes_1[_i];
                result[feature.name] = eobject.eGet(feature);
                //TODO many
            }
            for (var _a = 0, ereferences_1 = ereferences; _a < ereferences_1.length; _a++) {
                var feature = ereferences_1[_a];
                if (feature.many) {
                    var items = eobject.eGet(feature);
                    var itemIds = new Array();
                    for (var _b = 0, items_1 = items; _b < items_1.length; _b++) {
                        var item = items_1[_b];
                        itemIds.push(item._uuid);
                        result[feature.name] = itemIds;
                    }
                }
                else {
                    result[feature.name] = eobject.eGet(feature)._uuid;
                }
            }
            return result;
        };
        this.epackage = p;
        this.efactory = f;
        this.resolveJobs = {};
        this.eobjectRegistry = {};
    }
    JsonResource.prototype.resolve = function (eobject, estructuralfeature, value) {
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
    return JsonResource;
}());
exports.JsonResource = JsonResource;
//# sourceMappingURL=JsonResource.js.map