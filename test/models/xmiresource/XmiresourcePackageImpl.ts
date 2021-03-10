import {EFactory} from "ecore/EFactory";
import {EPackageImpl} from "ecore/EPackageImpl";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EOperation} from "ecore/EOperation";
import {EEnum} from "ecore/EEnum";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
import {EReference} from "ecore/EReference";
import {ChildBase} from "xmiresource/ChildBase";
import {RootImpl} from "xmiresource/RootImpl";
import {RootBase} from "xmiresource/RootBase";
import {ChildImpl} from "xmiresource/ChildImpl";
import {XmiresourcePackage} from "xmiresource/XmiresourcePackage";
export class XmiresourcePackageImpl extends EPackageImpl implements XmiresourcePackage{
		public static eNAME:string = "xmiresource";
		
		public static eNS_URI:string = "xmiresource";
		
		public static eNS_PREFIX:string = "xmiresource";
		
		
		
		/*
		constructor(){
			//no private constructors in TypeScript
			super(XmiresourcePackageImpl.eNS_URI, XmiresourceFactoryImpl.eINSTANCE as any as EFactory);
		}
		*/
		
		public static init():XmiresourcePackage
		{

	        // Obtain or create and register package
	        let theXmiresourcePackage = new XmiresourcePackageImpl();
	        theXmiresourcePackage.ecorePackage = EcorePackageImpl.eINSTANCE;
	        theXmiresourcePackage.ecoreFactory = EcoreFactoryImpl.eINSTANCE;
	
	        // Create package meta-data objects
	        theXmiresourcePackage.createPackageContents();
	
	        // Initialize created meta-data
	        theXmiresourcePackage.initializePackageContents();

	        return theXmiresourcePackage;
        }
        
        private isCreated:boolean = false;
        
        public createPackageContents = ():void =>
        {
            if (this.isCreated) return;
            this.isCreated = true;
			this.RootEClass = this.createEClass(XmiresourcePackageImpl.ROOT);
			RootBase.eStaticClass = this.RootEClass;
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__SINGLE_ATTRIBUTE);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__MANY_ATTRIBUTE);
			this.createEReference(this.RootEClass, XmiresourcePackageImpl.ROOT__SINGLE_REFERENCE);
			this.createEReference(this.RootEClass, XmiresourcePackageImpl.ROOT__MANY_REFERENCE);
			this.createEReference(this.RootEClass, XmiresourcePackageImpl.ROOT__SINGLE_CHILD);
			this.createEReference(this.RootEClass, XmiresourcePackageImpl.ROOT__MANY_CHILDREN);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__BOOLEAN);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__CHAR);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__DATE);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__DOUBLE);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__FLOAT);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__INT);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__LONG);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__SHORT);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__STRING);
			this.createEAttribute(this.RootEClass, XmiresourcePackageImpl.ROOT__ENUM);
			this.ChildEClass = this.createEClass(XmiresourcePackageImpl.CHILD);
			ChildBase.eStaticClass = this.ChildEClass;
			
			this.MyEnumEEnum = this.createEEnum(XmiresourcePackageImpl.MYENUM);
			
        }
        private isInitialized:boolean = false;
        public initializePackageContents=():void =>
        {
            if (this.isInitialized) return;
            this.isInitialized = true;
            // Initialize package
            this.name = XmiresourcePackageImpl.eNAME;
            this.nsPrefix = XmiresourcePackageImpl.eNS_PREFIX;
            this.nsURI = XmiresourcePackageImpl.eNS_URI;

			
			
			var op:EOperation = null;
			
			this.initEClass(
			this.RootEClass,
			RootImpl, 
			"Root", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getRoot_SingleAttribute(), 
				this.ecorePackage.getEInt(), 
				"singleAttribute", 
				"0", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_ManyAttribute(), 
				this.ecorePackage.getEInt(), 
				"manyAttribute", 
				null, 
				0, 
				-1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Boolean(), 
				this.ecorePackage.getEBoolean(), 
				"boolean", 
				"false", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Char(), 
				this.ecorePackage.getEChar(), 
				"char", 
				" ", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Date(), 
				this.ecorePackage.getEDate(), 
				"date", 
				null, 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Double(), 
				this.ecorePackage.getEDouble(), 
				"double", 
				"0.0", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Float(), 
				this.ecorePackage.getEFloat(), 
				"float", 
				"0.0", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Int(), 
				this.ecorePackage.getEInt(), 
				"int", 
				"0", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Long(), 
				this.ecorePackage.getELong(), 
				"long", 
				"0", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Short(), 
				this.ecorePackage.getEShort(), 
				"short", 
				"0", 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_String(), 
				this.ecorePackage.getEString(), 
				"string", 
				null, 
				1, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getRoot_Enum(), 
				this.getMyEnum(), 
				"enum", 
				"EINS", 
				0, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getRoot_SingleReference(),
				this.getRoot(), 
				null, 
				"singleReference", 
				null, 
				0, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRoot_ManyReference(),
				this.getRoot(), 
				null, 
				"manyReference", 
				null, 
				0, 
				-1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRoot_SingleChild(),
				this.getChild(), 
				null, 
				"singleChild", 
				null, 
				0, 
				1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRoot_ManyChildren(),
				this.getChild(), 
				null, 
				"manyChildren", 
				null, 
				0, 
				-1, 
				RootImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ChildEClass,
			ChildImpl, 
			"Child", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			
			
			this.initEEnum(this.MyEnumEEnum, null, "MyEnum");
			
        }
		
		
		private RootEClass:EClass = null;
		private ChildEClass:EClass = null;
		
		
		private MyEnumEEnum:EEnum = null;
		
		
		
		public static ROOT:number = 0;
		public static ROOT_FEATURE_COUNT:number = 16;
		public static ROOT_OPERATION_COUNT:number = 0;
		
		public static ROOT__SINGLE_ATTRIBUTE:number = 0;
		public static ROOT__MANY_ATTRIBUTE:number = 1;
		public static ROOT__SINGLE_REFERENCE:number = 2;
		public static ROOT__MANY_REFERENCE:number = 3;
		public static ROOT__SINGLE_CHILD:number = 4;
		public static ROOT__MANY_CHILDREN:number = 5;
		public static ROOT__BOOLEAN:number = 6;
		public static ROOT__CHAR:number = 7;
		public static ROOT__DATE:number = 8;
		public static ROOT__DOUBLE:number = 9;
		public static ROOT__FLOAT:number = 10;
		public static ROOT__INT:number = 11;
		public static ROOT__LONG:number = 12;
		public static ROOT__SHORT:number = 13;
		public static ROOT__STRING:number = 14;
		public static ROOT__ENUM:number = 15;
		
		public static CHILD:number = 2;
		public static CHILD_FEATURE_COUNT:number = 0;
		public static CHILD_OPERATION_COUNT:number = 0;
		
		
		public static MYENUM:number = 1;
		
		
		/*Important: Call init() AFTER metaobject ids have been assigned.*/
		public static eINSTANCE:XmiresourcePackage = XmiresourcePackageImpl.init();
		
		
		public getRoot=():EClass=>{return this.RootEClass;}
		
		public getRoot_SingleAttribute=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(0);}
		public getRoot_ManyAttribute=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(1);}
		public getRoot_SingleReference=():EReference=>{return <EReference> this.RootEClass.eStructuralFeatures.at(2);}
		public getRoot_ManyReference=():EReference=>{return <EReference> this.RootEClass.eStructuralFeatures.at(3);}
		public getRoot_SingleChild=():EReference=>{return <EReference> this.RootEClass.eStructuralFeatures.at(4);}
		public getRoot_ManyChildren=():EReference=>{return <EReference> this.RootEClass.eStructuralFeatures.at(5);}
		public getRoot_Boolean=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(6);}
		public getRoot_Char=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(7);}
		public getRoot_Date=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(8);}
		public getRoot_Double=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(9);}
		public getRoot_Float=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(10);}
		public getRoot_Int=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(11);}
		public getRoot_Long=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(12);}
		public getRoot_Short=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(13);}
		public getRoot_String=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(14);}
		public getRoot_Enum=():EAttribute=>{return <EAttribute> this.RootEClass.eStructuralFeatures.at(15);}
		public getChild=():EClass=>{return this.ChildEClass;}
		
		public getMyEnum=():EEnum=>{return this.MyEnumEEnum;}
		
 
}
