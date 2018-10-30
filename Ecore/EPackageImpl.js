/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<summary>This class was generated.</summary>
import { EPackageBase } from "ecore/EPackageBase";
var EPackageImpl = (function (_super) {
    __extends(EPackageImpl, _super);
    function EPackageImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createEClass = function (id) {
            var c = _this.ecoreFactory.createEClass();
            c.setClassifierID(id);
            _this.eClassifiers.add(c);
            return c;
        };
        _this.createEEnum = function (id) {
            var e = _this.ecoreFactory.createEEnum();
            e.setClassifierID(id);
            _this.eClassifiers.add(e);
            return e;
        };
        _this.createEDataType = function (id) {
            var d = _this.ecoreFactory.createEDataType();
            d.setClassifierID(id);
            _this.eClassifiers.add(d);
            return d;
        };
        _this.createEAttribute = function (owner, id) {
            var a = _this.ecoreFactory.createEAttribute();
            a.setFeatureID(id);
            owner.eStructuralFeatures.add(a);
        };
        _this.createEReference = function (owner, id) {
            var r = _this.ecoreFactory.createEReference();
            r.setFeatureID(id);
            owner.eStructuralFeatures.add(r);
        };
        _this.createEOperation = function (owner, id) {
            var o = _this.ecoreFactory.createEOperation();
            o.setOperationID(id);
            owner.eOperations.add(o);
        };
        _this.initEClass_ = function (c, instanceClass, name, isAbstract, isInterface, isGenerated) {
            _this.initEClassifier(c, _this.ecorePackage.getEClass(), instanceClass, name, isGenerated);
            c.abstract = isAbstract;
            c.interface = isInterface;
            return c;
        };
        _this.initEClass = function (c, instanceClass, name, isAbstract, isInterface, isGenerated, instanceTypeName) {
            instanceTypeName = instanceTypeName !== undefined ? instanceTypeName : null;
            _this.initEClass_(c, instanceClass, name, isAbstract, isInterface, isGenerated);
            if (instanceTypeName != null) {
                _this.setInstanceTypeName(c, instanceTypeName);
            }
            return c;
        };
        _this.initEDataType_ = function (d, instanceClass, name, isSerializable) {
            _this.initEClassifier(d, _this.ecorePackage.getEDataType(), instanceClass, name, false);
            d.serializable = isSerializable;
            return d;
        };
        _this.initEDataType__ = function (d, instanceClass, name, isSerializable, isGenerated) {
            _this.initEClassifier(d, _this.ecorePackage.getEDataType(), instanceClass, name, isGenerated);
            d.serializable = isSerializable;
            return d;
        };
        _this.initEDataType = function (d, instanceClass, name, isSerializable, isGenerated, instanceTypeName) {
            isGenerated = isGenerated !== undefined ? isGenerated : false;
            instanceTypeName = instanceTypeName !== undefined ? instanceTypeName : null;
            _this.initEDataType__(d, instanceClass, name, isSerializable, isGenerated);
            if (instanceTypeName != null) {
                _this.setInstanceTypeName(d, instanceTypeName);
            }
            return d;
        };
        _this.initEClassifier_ = function (o, metaObject, instanceClass, name) {
            o.name = name;
            if (instanceClass != null) {
                o.instanceClass = instanceClass;
            }
        };
        _this.initEClassifier = function (o, metaObject, instanceClass, name, isGenerated) {
            o.name = name;
            if (instanceClass != null) {
                o.instanceClass = instanceClass;
            }
            if (isGenerated !== undefined && isGenerated) {
                _this.setGeneratedClassName(o);
            }
        };
        _this.setGeneratedClassName = function (eClassifier) {
            eClassifier.setGeneratedInstanceClass(true);
        };
        _this.setInstanceTypeName = function (eClassifier, instanceTypeName) {
            eClassifier.basicSetInstanceTypeName(instanceTypeName);
        };
        //a:EAttribute, type:EClassifier, name:string, defaultValue:string , lowerBound:number, upperBound:number, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean):EAttribute=>
        //a:EAttribute,type:EClassifier, name:string, defaultValue:string, lowerBound:number, upperBound:number, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>
        //a:EAttribute, type:EClassifier, name:string, defaultValue:string, lowerBound:number, upperBound:number, containerClass:Function, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>
        //a:EAttribute, type:EGenericType, name:string, defaultValue:string, lowerBound:number, upperBound:number, containerClass:Function, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>
        _this.initEAttribute13 = function (a, type, name, defaultValue, lowerBound, upperBound, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived) {
            return _this.initEAttribute14(a, type, name, defaultValue, lowerBound, upperBound, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, true);
        };
        _this.initEAttribute14 = function (a, type, name, defaultValue, lowerBound, upperBound, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered) {
            _this.initEAttribute_EClassifier(a, type, name, defaultValue, lowerBound, upperBound, a.eContainer().instanceClass, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered);
            return a;
        };
        _this.initEAttribute_EClassifier = function (a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EClassifier(a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            a.iD = isID;
            return a;
        };
        _this.initEAttribute_EGenericType = function (a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EGenericType(a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            a.iD = isID;
            return a;
        };
        _this.initEStructuralFeature_EClassifier = function (s, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered) {
            s.name = name;
            s.setContainerClass(containerClass);
            s.transient = isTransient;
            s.volatile = isVolatile;
            s.changeable = isChangeable;
            s.unsettable = isUnsettable;
            s.unique = isUnique;
            s.derived = isDerived;
            s.ordered = isOrdered;
            s.lowerBound = lowerBound;
            s.upperBound = upperBound;
            s.eType = type;
            if (defaultValue != null) {
                s.defaultValueLiteral = defaultValue;
            }
        };
        _this.initEStructuralFeature_EGenericType = function (s, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered) {
            s.name = name;
            s.setContainerClass(containerClass);
            s.transient = isTransient;
            s.volatile = isVolatile;
            s.changeable = isChangeable;
            s.unsettable = isUnsettable;
            s.unique = isUnique;
            s.derived = isDerived;
            s.ordered = isOrdered;
            s.lowerBound = lowerBound;
            s.upperBound = upperBound;
            s.eGenericType = type;
            if (defaultValue != null) {
                s.defaultValueLiteral = defaultValue;
            }
        };
        _this.IS_RESOLVABLE = true;
        _this.initEReference = function (r, type, otherEnd, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isContainment, isResolveProxies, isUnsettable, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EClassifier(r, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            r.containment = isContainment;
            if (otherEnd != null) {
                r.eOpposite = otherEnd;
            }
            r.resolveProxies = isResolveProxies;
            return r;
        };
        //TODO fix quickfix for method overloading
        _this.initEReference_EGenericType = function (r, type, otherEnd, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isContainment, isResolveProxies, isUnsettable, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EGenericType(r, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            r.containment = isContainment;
            if (otherEnd != null) {
                r.eOpposite = otherEnd;
            }
            r.resolveProxies = isResolveProxies;
            return r;
        };
        _this.addEOperation_1 = function (owner, type, name) {
            var o = _this.ecoreFactory.createEOperation();
            _this.initEOperation_1(o, type, name);
            owner.eOperations.add(o);
            return o;
        };
        _this.addEOperation_2 = function (owner, type, name, lowerBound, upperBound) {
            var o = _this.ecoreFactory.createEOperation();
            _this.initEOperation_2(o, type, name, lowerBound, upperBound);
            owner.eOperations.add(o);
            return o;
        };
        _this.addEOperation_3 = function (owner, type, name, lowerBound, upperBound, isUnique, isOrdered) {
            var o = _this.ecoreFactory.createEOperation();
            _this.initEOperation_3(o, type, name, lowerBound, upperBound, isUnique, isOrdered);
            owner.eOperations.add(o);
            return o;
        };
        _this.initEOperation_1 = function (eOperation, type, name) {
            eOperation.eType = type;
            eOperation.name = name;
            return eOperation;
        };
        _this.initEOperation_2 = function (eOperation, type, name, lowerBound, upperBound) {
            _this.initEOperation_1(eOperation, type, name);
            eOperation.lowerBound = lowerBound;
            eOperation.upperBound = upperBound;
            return eOperation;
        };
        _this.initEOperation_3 = function (eOperation, type, name, lowerBound, upperBound, isUnique, isOrdered) {
            _this.initEOperation_2(eOperation, type, name, lowerBound, upperBound);
            eOperation.unique = isUnique;
            eOperation.ordered = isOrdered;
            return eOperation;
        };
        _this.initEOperation_4 = function (eOperation, eGenericType) {
            eOperation.eGenericType = eGenericType;
        };
        return _this;
    }
    /*
    constructor(packageURI?:string, factory?:EcoreFactory)
    {
        super();
        this.ecoreFactory = factory;
        this.ecorePackage = this as any as EcorePackage;


    }

    */
    /*
     constructor (packageURI?:string, factory?:EFactory)
     {
        //TODO registry
        super();

         if(packageURI!==undefined && factory!==undefined){

            if (factory === EcoreFactoryInstance.eINSTANCE as any as EFactory)
             {
                 this.ecorePackage = this as any as EcorePackage;
                 this.ecoreFactory = factory as any as EcoreFactory;
             }
             else
             {
                 this.ecorePackage = EcorePackageImpl.eINSTANCE;
                 this.ecoreFactory = EcoreFactoryInstance.eINSTANCE;
             }
         }
         else{
             this.ecoreFactory = EcoreFactoryInstance.eINSTANCE;
             this.ecorePackage = EcorePackageImpl.eINSTANCE;
         }

     }
     */
    EPackageImpl.prototype.getEClassifier = function (name) {
        for (var _i = 0, _a = this.eClassifiers; _i < _a.length; _i++) {
            var eclassifier = _a[_i];
            if (eclassifier.name === name) {
                return eclassifier;
            }
        }
        return null;
    };
    ;
    EPackageImpl.prototype.initEEnum = function (e, instanceClass, name) {
        this.initEClassifier(e, this.ecorePackage.getEEnum(), instanceClass, name, true);
        return e;
    };
    EPackageImpl.IS_ABSTRACT = true;
    EPackageImpl.IS_INTERFACE = true;
    EPackageImpl.IS_GENERATED_INSTANCE_CLASS = true;
    EPackageImpl.IS_SERIALIZABLE = true;
    EPackageImpl.IS_DERIVED = true;
    EPackageImpl.IS_TRANSIENT = true;
    EPackageImpl.IS_VOLATILE = true;
    EPackageImpl.IS_CHANGEABLE = true;
    EPackageImpl.IS_UNSETTABLE = true;
    EPackageImpl.IS_UNIQUE = true;
    EPackageImpl.IS_ID = true;
    EPackageImpl.IS_ORDERED = true;
    EPackageImpl.IS_COMPOSITE = true;
    EPackageImpl.IS_RESOLVE_PROXIES = true;
    return EPackageImpl;
}(EPackageBase));
export { EPackageImpl };
