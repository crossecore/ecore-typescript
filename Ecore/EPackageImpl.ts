/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */


///<summary>This class was generated.</summary>
import {EPackageBase} from "ecore/EPackageBase";
import {EcoreFactory} from "ecore/EcoreFactory";
import {EcorePackage} from "ecore/EcorePackage";
import {EFactory} from "ecore/EFactory";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
//import {EcorePackageImpl} from "EcorePackageImpl";
import {EOperation} from "ecore/EOperation";


import {EEnum} from "ecore/EEnum";
import {EEnumImpl} from "ecore/EEnumImpl";
import {EDataType} from "ecore/EDataType";
import {EClassifier} from "ecore/EClassifier";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {EAttribute} from "ecore/EAttribute";
import {EGenericType} from "ecore/EGenericType";
import {EStructuralFeatureImpl} from "ecore/EStructuralFeatureImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {EReference} from "ecore/EReference";
import {EReferenceImpl} from "ecore/EReferenceImpl";
import {EAttributeImpl} from "ecore/EAttributeImpl";
import {EOperationImpl} from "ecore/EOperationImpl";
import {EDataTypeImpl} from "ecore/EDataTypeImpl";
import {EClass} from "ecore/EClass";
import {EClassImpl} from "ecore/EClassImpl";


	export class EPackageImpl
	extends EPackageBase


	{
		protected ecoreFactory:EcoreFactory;
		protected ecorePackage:EcorePackage;

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


    public getEClassifier(name:string): EClassifier {
      for (let eclassifier of this.eClassifiers)
      {

        if (eclassifier.name===name)
        {
          return eclassifier;
        }
      }

      return null;
    };


		protected createEClass = (id:number):EClass =>
		{
			let c:EClassImpl = <EClassImpl>this.ecoreFactory.createEClass();
			c.setClassifierID(id);
			this.eClassifiers.add(c);
			return c;
		}

		protected createEEnum = (id:number):EEnum =>
		{
			let e:EEnumImpl = <EEnumImpl>this.ecoreFactory.createEEnum();
			e.setClassifierID(id);
			this.eClassifiers.add(e);
			return e;
		}

		protected createEDataType = (id:number):EDataType =>
		{
			let d:EDataTypeImpl = <EDataTypeImpl>this.ecoreFactory.createEDataType();
			d.setClassifierID(id);
			this.eClassifiers.add(d);
			return d;
		}

		protected createEAttribute = (owner:EClass, id:number):void =>
		{
			let a:EAttributeImpl = <EAttributeImpl>this.ecoreFactory.createEAttribute();
			a.setFeatureID(id);
			owner.eStructuralFeatures.add(a);
		}

		protected createEReference = (owner:EClass, id:number):void =>
		{
			let r:EReferenceImpl = <EReferenceImpl>this.ecoreFactory.createEReference();
			r.setFeatureID(id);
			owner.eStructuralFeatures.add(r);
		}

		protected createEOperation = (owner:EClass, id:number):void =>
		{
			let o:EOperationImpl = <EOperationImpl>this.ecoreFactory.createEOperation();
			o.setOperationID(id);
			owner.eOperations.add(o);
		}



		public static IS_ABSTRACT:boolean = true;
		public static IS_INTERFACE:boolean = true;
		public static IS_GENERATED_INSTANCE_CLASS:boolean = true;

		protected initEClass_ = (c:EClass, instanceClass:Function, name:string, isAbstract:boolean, isInterface:boolean, isGenerated:boolean):EClass =>
		{
			this.initEClassifier(c, this.ecorePackage.getEClass(), instanceClass, name, isGenerated);
			c.abstract = isAbstract;
			c.interface = isInterface;
			return c;
		}



		protected initEClass =
			(c:EClass, instanceClass:Function, name:string, isAbstract:boolean, isInterface:boolean, isGenerated:boolean, instanceTypeName?:string):EClass =>
			{
				instanceTypeName=instanceTypeName!==undefined?instanceTypeName:null;

				this.initEClass_(c, instanceClass, name, isAbstract, isInterface, isGenerated);
				if (instanceTypeName != null)
				{
					this.setInstanceTypeName(c, instanceTypeName);
				}
				return c;
			}

		protected initEEnum(e:EEnum, instanceClass:Function, name:string):EEnum
		{
			this.initEClassifier(e, this.ecorePackage.getEEnum(), instanceClass, name, true);
			return e;
		}

		public static IS_SERIALIZABLE:boolean = true;

		protected initEDataType_ = (d:EDataType, instanceClass:Function, name:string, isSerializable:boolean):EDataType =>
		{
			this.initEClassifier(d, this.ecorePackage.getEDataType(), instanceClass, name, false);
			d.serializable = isSerializable;
			return d;
		}

		protected initEDataType__ = (d:EDataType, instanceClass:Function, name:string, isSerializable:boolean, isGenerated:boolean):EDataType =>
		{
			this.initEClassifier(d, this.ecorePackage.getEDataType(), instanceClass, name, isGenerated);
			d.serializable = isSerializable;
			return d;
		}

		protected  initEDataType
			= (d:EDataType, instanceClass:Function, name:string, isSerializable:boolean, isGenerated?:boolean, instanceTypeName?:string):EDataType=>
		{

			isGenerated = isGenerated!==undefined?isGenerated:false;
			instanceTypeName = instanceTypeName!==undefined?instanceTypeName:null;

			this.initEDataType__(d, instanceClass, name, isSerializable, isGenerated);
			if (instanceTypeName != null)
			{
				this.setInstanceTypeName(d, instanceTypeName);
			}
			return d;
		}

		protected initEClassifier_ = (o:EClassifier, metaObject:EClass, instanceClass:Function, name:string):void =>
		{
			o.name = name;
			if (instanceClass != null)
			{
				o.instanceClass = instanceClass;
			}
		}

		protected initEClassifier = (o:EClassifier, metaObject:EClass, instanceClass:Function, name:string, isGenerated?:boolean):void =>
		{
			o.name = name;
			if (instanceClass != null)
			{
				o.instanceClass = instanceClass;
			}
			if (isGenerated!==undefined && isGenerated)
			{
				this.setGeneratedClassName(o);
			}
		}

		protected setGeneratedClassName=(eClassifier:EClassifier):void =>
		{
			(<EClassifierImpl>eClassifier).setGeneratedInstanceClass(true);
		}

		protected setInstanceTypeName = (eClassifier:EClassifier, instanceTypeName:string):void =>
		{
			(<EClassifierImpl>eClassifier).basicSetInstanceTypeName(instanceTypeName);
		}



		public static IS_DERIVED:boolean = true;
		public static IS_TRANSIENT:boolean = true;
		public static IS_VOLATILE:boolean = true;
		public static IS_CHANGEABLE:boolean = true;
		public static IS_UNSETTABLE:boolean = true;
		public static IS_UNIQUE:boolean = true;
		public static IS_ID:boolean = true;
		public static IS_ORDERED:boolean = true;

		//a:EAttribute, type:EClassifier, name:string, defaultValue:string , lowerBound:number, upperBound:number, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean):EAttribute=>

		//a:EAttribute,type:EClassifier, name:string, defaultValue:string, lowerBound:number, upperBound:number, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>

		//a:EAttribute, type:EClassifier, name:string, defaultValue:string, lowerBound:number, upperBound:number, containerClass:Function, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>

		//a:EAttribute, type:EGenericType, name:string, defaultValue:string, lowerBound:number, upperBound:number, containerClass:Function, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>

		protected initEAttribute13=
			(a:EAttribute,
			 type:EClassifier,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isUnsettable:boolean,
			 isID:boolean,
			 isUnique:boolean,
			 isDerived:boolean):EAttribute=>
			{
				return this.initEAttribute14
				(a,
					type,
					name,
					defaultValue,
					lowerBound,
					upperBound,
					isTransient,
					isVolatile,
					isChangeable,
					isUnsettable,
					isID,
					isUnique,
					isDerived,
					true);
			}

		protected initEAttribute14=
			(a:EAttribute,
			 type:EClassifier,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isUnsettable:boolean,
			 isID:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean):EAttribute=>
			{
				this.initEAttribute_EClassifier
				(a,
					type,
					name,
					defaultValue,
					lowerBound,
					upperBound,
					(<EClassifier>a.eContainer()).instanceClass,
					isTransient,
					isVolatile,
					isChangeable,
					isUnsettable,
					isID,
					isUnique,
					isDerived,
					isOrdered);
				return a;
			}

		protected initEAttribute_EClassifier =
			(a:EAttribute,
			 type:EClassifier,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 containerClass:Function,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isUnsettable:boolean,
			 isID:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean):EAttribute=>
			{
				this.initEStructuralFeature_EClassifier
				(a,
					type,
					name,
					defaultValue,
					lowerBound,
					upperBound,
					containerClass,
					isTransient,
					isVolatile,
					isChangeable,
					isUnsettable,
					isUnique,
					isDerived,
					isOrdered);
				a.iD = isID;
				return a;
			}

		protected initEAttribute_EGenericType=
			(a:EAttribute,
			 type:EGenericType,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 containerClass:Function,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isUnsettable:boolean,
			 isID:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean):EAttribute=>
			{
				this.initEStructuralFeature_EGenericType
				(a,
					type,
					name,
					defaultValue,
					lowerBound,
					upperBound,
					containerClass,
					isTransient,
					isVolatile,
					isChangeable,
					isUnsettable,
					isUnique,
					isDerived,
					isOrdered);
				a.iD = isID;
				return a;
			}


		private initEStructuralFeature_EClassifier=
			(s:EStructuralFeature,
			 type:EClassifier,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 containerClass:Function,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isUnsettable:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean):void =>
			{
				s.name = name;
				(s as EStructuralFeatureImpl).setContainerClass(containerClass);
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
				if (defaultValue != null)
				{
					s.defaultValueLiteral = defaultValue;
				}
			}

		private initEStructuralFeature_EGenericType=
			(s:EStructuralFeature,
			 type:EGenericType,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 containerClass:Function,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isUnsettable:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean)=>
			{
				s.name = name;
				(<EStructuralFeatureImpl>s).setContainerClass(containerClass);
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
				if (defaultValue != null)
				{
					s.defaultValueLiteral = defaultValue;
				}
			}


		public static IS_COMPOSITE:boolean = true;
		public static IS_RESOLVE_PROXIES:boolean = true;
		public IS_RESOLVABLE:boolean = true;

		protected initEReference =
			(r:EReference,
			 type:EClassifier,
			 otherEnd:EReference,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 containerClass:Function,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isContainment:boolean,
			 isResolveProxies:boolean,
			 isUnsettable:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean):EReference =>
			{
				this.initEStructuralFeature_EClassifier
				(r,
					type,
					name,
					defaultValue,
					lowerBound,
					upperBound,
					containerClass,
					isTransient,
					isVolatile,
					isChangeable,
					isUnsettable,
					isUnique,
					isDerived,
					isOrdered);
				r.containment = isContainment;
				if (otherEnd != null)
				{
					r.eOpposite = otherEnd;
				}
				r.resolveProxies = isResolveProxies;
				return r;
			}

		//TODO fix quickfix for method overloading
		protected initEReference_EGenericType =
			(r:EReference,
			 type:EGenericType,
			 otherEnd:EReference,
			 name:string,
			 defaultValue:string,
			 lowerBound:number,
			 upperBound:number,
			 containerClass:Function,
			 isTransient:boolean,
			 isVolatile:boolean,
			 isChangeable:boolean,
			 isContainment:boolean,
			 isResolveProxies:boolean,
			 isUnsettable:boolean,
			 isUnique:boolean,
			 isDerived:boolean,
			 isOrdered:boolean):EReference=>
			{
				this.initEStructuralFeature_EGenericType
				(r,
					type,
					name,
					defaultValue,
					lowerBound,
					upperBound,
					containerClass,
					isTransient,
					isVolatile,
					isChangeable,
					isUnsettable,
					isUnique,
					isDerived,
					isOrdered);
				r.containment = isContainment;
				if (otherEnd != null)
				{
					r.eOpposite = otherEnd;
				}
				r.resolveProxies = isResolveProxies;
				return r;
			}

		protected addEOperation_1 = (owner:EClass, type:EClassifier, name:string):EOperation =>{
			var o:EOperation = this.ecoreFactory.createEOperation();
			this.initEOperation_1(o, type, name);
			owner.eOperations.add(o);
			return o;
		}

		protected addEOperation_2 = (owner:EClass, type:EClassifier, name:string, lowerBound:number, upperBound:number):EOperation =>{
			var o:EOperation = this.ecoreFactory.createEOperation();
			this.initEOperation_2(o, type, name, lowerBound, upperBound);
			owner.eOperations.add(o);
			return o;
		}

		protected addEOperation_3 = (owner:EClass, type:EClassifier, name:string, lowerBound:number, upperBound:number, isUnique:boolean, isOrdered:boolean):EOperation =>{
			var o:EOperation = this.ecoreFactory.createEOperation();
			this.initEOperation_3(o, type, name, lowerBound, upperBound, isUnique, isOrdered);
			owner.eOperations.add(o);
			return o;
		}

		protected initEOperation_1 = (eOperation:EOperation, type:EClassifier, name:string):EOperation =>{

			eOperation.eType = type;
			eOperation.name = name;
			return eOperation;
		}

		protected initEOperation_2 = (eOperation:EOperation, type:EClassifier, name:string, lowerBound:number, upperBound:number):EOperation =>{

			this.initEOperation_1(eOperation, type, name);
			eOperation.lowerBound = lowerBound;
			eOperation.upperBound = upperBound;
			return eOperation;
		}

		protected initEOperation_3 = (eOperation:EOperation, type:EClassifier, name:string, lowerBound:number, upperBound:number, isUnique:boolean, isOrdered:boolean):EOperation =>{

			this.initEOperation_2(eOperation, type, name, lowerBound, upperBound)
			eOperation.unique = isUnique;
			eOperation.ordered = isOrdered;
			return eOperation;
		}

		protected initEOperation_4 = (eOperation:EOperation, eGenericType:EGenericType) =>{
			eOperation.eGenericType = eGenericType;
		}





	}


