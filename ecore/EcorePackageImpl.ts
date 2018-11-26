import {EAttribute} from "./EAttribute";
import {EEnumBase} from "./EEnumBase";
import {EAttributeBase} from "./EAttributeBase";
import {EFactoryBase} from "./EFactoryBase";
import {EStringToStringMapEntryImpl} from "./EStringToStringMapEntryImpl";
import {EcoreFactoryImpl} from "./EcoreFactoryImpl";
import {EEnumImpl} from "./EEnumImpl";
import {EClass} from "./EClass";
import {ETypedElementBase} from "./ETypedElementBase";
import {EStructuralFeatureBase} from "./EStructuralFeatureBase";
import {EClassBase} from "./EClassBase";
import {EAnnotationImpl} from "./EAnnotationImpl";
import {ENamedElementBase} from "./ENamedElementBase";
import {EModelElementBase} from "./EModelElementBase";
import {EFactoryImpl} from "./EFactoryImpl";
import {EOperationImpl} from "./EOperationImpl";
import {EOperation} from "./EOperation";
import {EFactory} from "./EFactory";
import {ETypeParameterBase} from "./ETypeParameterBase";
import {EPackageImpl} from "./EPackageImpl";
import {EStructuralFeatureImpl} from "./EStructuralFeatureImpl";
import {EReferenceBase} from "./EReferenceBase";
import {EModelElementImpl} from "./EModelElementImpl";
import {EGenericTypeImpl} from "./EGenericTypeImpl";
import {EReference} from "./EReference";
import {EClassifierBase} from "./EClassifierBase";
import {EDataTypeBase} from "./EDataTypeBase";
import {EOperationBase} from "./EOperationBase";
import {EEnumLiteralImpl} from "./EEnumLiteralImpl";
import {EObjectBase} from "./EObjectBase";
import {EAnnotationBase} from "./EAnnotationBase";
import {EPackageBase} from "./EPackageBase";
import {EEnumLiteralBase} from "./EEnumLiteralBase";
import {EObjectImpl} from "./EObjectImpl";
import {EParameterImpl} from "./EParameterImpl";
import {EDataTypeImpl} from "./EDataTypeImpl";
import {EcorePackage} from "./EcorePackage";
import {EClassifierImpl} from "./EClassifierImpl";
import {EReferenceImpl} from "./EReferenceImpl";
import {ETypeParameterImpl} from "./ETypeParameterImpl";
import {EAttributeImpl} from "./EAttributeImpl";
import {EParameterBase} from "./EParameterBase";
import {EDataType} from "./EDataType";
import {EGenericTypeBase} from "./EGenericTypeBase";
import {ETypedElementImpl} from "./ETypedElementImpl";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EStringToStringMapEntryBase} from "./EStringToStringMapEntryBase";
import {EClassImpl} from "./EClassImpl";
export class EcorePackageImpl extends EPackageImpl implements EcorePackage{
		public static eNAME:string = "ecore";
		
		public static eNS_URI:string = "http://www.eclipse.org/emf/2002/Ecore";
		
		public static eNS_PREFIX:string = "ecore";
		
		
		
		/*
		constructor(){
			//no private constructors in TypeScript
			super(EcorePackageImpl.eNS_URI, EcoreFactoryImpl.eINSTANCE as any as EFactory);
		}
		*/
		
		public static init():EcorePackage
		{

	        // Obtain or create and register package
	        let theEcorePackage = new EcorePackageImpl();
	        theEcorePackage.ecorePackage = theEcorePackage;
	        theEcorePackage.ecoreFactory = EcoreFactoryImpl.eINSTANCE;
	
	        // Create package meta-data objects
	        theEcorePackage.createPackageContents();
	
	        // Initialize created meta-data
	        theEcorePackage.initializePackageContents();

	        return theEcorePackage;
        }
        
        private isCreated:boolean = false;
        
        public createPackageContents = ():void =>
        {
            if (this.isCreated) return;
            this.isCreated = true;
			this.EAttributeEClass = this.createEClass(EcorePackageImpl.EATTRIBUTE);
			EAttributeBase.eStaticClass = this.EAttributeEClass;
			this.createEAttribute(this.EAttributeEClass, EcorePackageImpl.EATTRIBUTE_ID);
			this.createEReference(this.EAttributeEClass, EcorePackageImpl.EATTRIBUTE_EATTRIBUTETYPE);
			this.EAnnotationEClass = this.createEClass(EcorePackageImpl.EANNOTATION);
			EAnnotationBase.eStaticClass = this.EAnnotationEClass;
			this.createEAttribute(this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_SOURCE);
			this.createEReference(this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_DETAILS);
			this.createEReference(this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_EMODELELEMENT);
			this.createEReference(this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_CONTENTS);
			this.createEReference(this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_REFERENCES);
			this.EClassEClass = this.createEClass(EcorePackageImpl.ECLASS);
			EClassBase.eStaticClass = this.EClassEClass;
			this.createEAttribute(this.EClassEClass, EcorePackageImpl.ECLASS_ABSTRACT);
			this.createEAttribute(this.EClassEClass, EcorePackageImpl.ECLASS_INTERFACE);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_ESUPERTYPES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EOPERATIONS);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLATTRIBUTES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLREFERENCES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EREFERENCES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EATTRIBUTES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLCONTAINMENTS);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLOPERATIONS);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLSTRUCTURALFEATURES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLSUPERTYPES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EIDATTRIBUTE);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_ESTRUCTURALFEATURES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EGENERICSUPERTYPES);
			this.createEReference(this.EClassEClass, EcorePackageImpl.ECLASS_EALLGENERICSUPERTYPES);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___ISSUPERTYPEOF__SOMECLASS);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATURECOUNT);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATUREID);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATUREID__FEATURE);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATURENAME);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETOPERATIONCOUNT);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETEOPERATION__OPERATIONID);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETOPERATIONID__OPERATION);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETOVERRIDE__OPERATION);
			this.createEOperation(this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATURETYPE__FEATURE);
			this.EClassifierEClass = this.createEClass(EcorePackageImpl.ECLASSIFIER);
			EClassifierBase.eStaticClass = this.EClassifierEClass;
			this.createEAttribute(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCECLASSNAME);
			this.createEAttribute(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCECLASS);
			this.createEAttribute(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_DEFAULTVALUE);
			this.createEAttribute(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCETYPENAME);
			this.createEReference(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_EPACKAGE);
			this.createEReference(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_ETYPEPARAMETERS);
			this.createEOperation(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER___ISINSTANCE__OBJECT);
			this.createEOperation(this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER___GETCLASSIFIERID);
			this.EDataTypeEClass = this.createEClass(EcorePackageImpl.EDATATYPE);
			EDataTypeBase.eStaticClass = this.EDataTypeEClass;
			this.createEAttribute(this.EDataTypeEClass, EcorePackageImpl.EDATATYPE_SERIALIZABLE);
			this.EEnumEClass = this.createEClass(EcorePackageImpl.EENUM);
			EEnumBase.eStaticClass = this.EEnumEClass;
			this.createEReference(this.EEnumEClass, EcorePackageImpl.EENUM_ELITERALS);
			this.createEOperation(this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERAL__NAME);
			this.createEOperation(this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERAL__VALUE);
			this.createEOperation(this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERALBYLITERAL__LITERAL);
			this.EEnumLiteralEClass = this.createEClass(EcorePackageImpl.EENUMLITERAL);
			EEnumLiteralBase.eStaticClass = this.EEnumLiteralEClass;
			this.createEAttribute(this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_VALUE);
			this.createEAttribute(this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_INSTANCE);
			this.createEAttribute(this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_LITERAL);
			this.createEReference(this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_EENUM);
			this.EFactoryEClass = this.createEClass(EcorePackageImpl.EFACTORY);
			EFactoryBase.eStaticClass = this.EFactoryEClass;
			this.createEReference(this.EFactoryEClass, EcorePackageImpl.EFACTORY_EPACKAGE);
			this.createEOperation(this.EFactoryEClass, EcorePackageImpl.EFACTORY___CREATE__ECLASS);
			this.createEOperation(this.EFactoryEClass, EcorePackageImpl.EFACTORY___CREATEFROMSTRING__EDATATYPE__LITERALVALUE);
			this.createEOperation(this.EFactoryEClass, EcorePackageImpl.EFACTORY___CONVERTTOSTRING__EDATATYPE__INSTANCEVALUE);
			this.EModelElementEClass = this.createEClass(EcorePackageImpl.EMODELELEMENT);
			EModelElementBase.eStaticClass = this.EModelElementEClass;
			this.createEReference(this.EModelElementEClass, EcorePackageImpl.EMODELELEMENT_EANNOTATIONS);
			this.createEOperation(this.EModelElementEClass, EcorePackageImpl.EMODELELEMENT___GETEANNOTATION__SOURCE);
			this.ENamedElementEClass = this.createEClass(EcorePackageImpl.ENAMEDELEMENT);
			ENamedElementBase.eStaticClass = this.ENamedElementEClass;
			this.createEAttribute(this.ENamedElementEClass, EcorePackageImpl.ENAMEDELEMENT_NAME);
			this.EObjectEClass = this.createEClass(EcorePackageImpl.EOBJECT);
			EObjectBase.eStaticClass = this.EObjectEClass;
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ECLASS);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EISPROXY);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ERESOURCE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAINER);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAININGFEATURE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAINMENTFEATURE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTENTS);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EALLCONTENTS);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ECROSSREFERENCES);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EGET__FEATURE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EGET__FEATURE__RESOLVE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___ESET__FEATURE__NEWVALUE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EISSET__FEATURE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EUNSET__FEATURE);
			this.createEOperation(this.EObjectEClass, EcorePackageImpl.EOBJECT___EINVOKE__OPERATION__ARGUMENTS);
			this.EOperationEClass = this.createEClass(EcorePackageImpl.EOPERATION);
			EOperationBase.eStaticClass = this.EOperationEClass;
			this.createEReference(this.EOperationEClass, EcorePackageImpl.EOPERATION_ECONTAININGCLASS);
			this.createEReference(this.EOperationEClass, EcorePackageImpl.EOPERATION_ETYPEPARAMETERS);
			this.createEReference(this.EOperationEClass, EcorePackageImpl.EOPERATION_EPARAMETERS);
			this.createEReference(this.EOperationEClass, EcorePackageImpl.EOPERATION_EEXCEPTIONS);
			this.createEReference(this.EOperationEClass, EcorePackageImpl.EOPERATION_EGENERICEXCEPTIONS);
			this.createEOperation(this.EOperationEClass, EcorePackageImpl.EOPERATION___GETOPERATIONID);
			this.createEOperation(this.EOperationEClass, EcorePackageImpl.EOPERATION___ISOVERRIDEOF__SOMEOPERATION);
			this.EPackageEClass = this.createEClass(EcorePackageImpl.EPACKAGE);
			EPackageBase.eStaticClass = this.EPackageEClass;
			this.createEAttribute(this.EPackageEClass, EcorePackageImpl.EPACKAGE_NSURI);
			this.createEAttribute(this.EPackageEClass, EcorePackageImpl.EPACKAGE_NSPREFIX);
			this.createEReference(this.EPackageEClass, EcorePackageImpl.EPACKAGE_EFACTORYINSTANCE);
			this.createEReference(this.EPackageEClass, EcorePackageImpl.EPACKAGE_ECLASSIFIERS);
			this.createEReference(this.EPackageEClass, EcorePackageImpl.EPACKAGE_ESUBPACKAGES);
			this.createEReference(this.EPackageEClass, EcorePackageImpl.EPACKAGE_ESUPERPACKAGE);
			this.createEOperation(this.EPackageEClass, EcorePackageImpl.EPACKAGE___GETECLASSIFIER__NAME);
			this.EParameterEClass = this.createEClass(EcorePackageImpl.EPARAMETER);
			EParameterBase.eStaticClass = this.EParameterEClass;
			this.createEReference(this.EParameterEClass, EcorePackageImpl.EPARAMETER_EOPERATION);
			this.EReferenceEClass = this.createEClass(EcorePackageImpl.EREFERENCE);
			EReferenceBase.eStaticClass = this.EReferenceEClass;
			this.createEAttribute(this.EReferenceEClass, EcorePackageImpl.EREFERENCE_CONTAINMENT);
			this.createEAttribute(this.EReferenceEClass, EcorePackageImpl.EREFERENCE_CONTAINER);
			this.createEAttribute(this.EReferenceEClass, EcorePackageImpl.EREFERENCE_RESOLVEPROXIES);
			this.createEReference(this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EOPPOSITE);
			this.createEReference(this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EREFERENCETYPE);
			this.createEReference(this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EKEYS);
			this.EStructuralFeatureEClass = this.createEClass(EcorePackageImpl.ESTRUCTURALFEATURE);
			EStructuralFeatureBase.eStaticClass = this.EStructuralFeatureEClass;
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_CHANGEABLE);
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_VOLATILE);
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_TRANSIENT);
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL);
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUE);
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_UNSETTABLE);
			this.createEAttribute(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DERIVED);
			this.createEReference(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_ECONTAININGCLASS);
			this.createEOperation(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE___GETFEATUREID);
			this.createEOperation(this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE___GETCONTAINERCLASS);
			this.ETypedElementEClass = this.createEClass(EcorePackageImpl.ETYPEDELEMENT);
			ETypedElementBase.eStaticClass = this.ETypedElementEClass;
			this.createEAttribute(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_ORDERED);
			this.createEAttribute(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_UNIQUE);
			this.createEAttribute(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_LOWERBOUND);
			this.createEAttribute(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_UPPERBOUND);
			this.createEAttribute(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_MANY);
			this.createEAttribute(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_REQUIRED);
			this.createEReference(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_ETYPE);
			this.createEReference(this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_EGENERICTYPE);
			this.EStringToStringMapEntryEClass = this.createEClass(EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY);
			EStringToStringMapEntryBase.eStaticClass = this.EStringToStringMapEntryEClass;
			this.createEAttribute(this.EStringToStringMapEntryEClass, EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_KEY);
			this.createEAttribute(this.EStringToStringMapEntryEClass, EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_VALUE);
			this.EGenericTypeEClass = this.createEClass(EcorePackageImpl.EGENERICTYPE);
			EGenericTypeBase.eStaticClass = this.EGenericTypeEClass;
			this.createEReference(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_EUPPERBOUND);
			this.createEReference(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ETYPEARGUMENTS);
			this.createEReference(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ERAWTYPE);
			this.createEReference(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ELOWERBOUND);
			this.createEReference(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ETYPEPARAMETER);
			this.createEReference(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ECLASSIFIER);
			this.createEOperation(this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE___ISINSTANCE__OBJECT);
			this.ETypeParameterEClass = this.createEClass(EcorePackageImpl.ETYPEPARAMETER);
			ETypeParameterBase.eStaticClass = this.ETypeParameterEClass;
			this.createEReference(this.ETypeParameterEClass, EcorePackageImpl.ETYPEPARAMETER_EBOUNDS);
			
			
			this.EBigDecimalEDataType = this.createEDataType(EcorePackageImpl.EBIGDECIMAL);
			this.EBigIntegerEDataType = this.createEDataType(EcorePackageImpl.EBIGINTEGER);
			this.EBooleanEDataType = this.createEDataType(EcorePackageImpl.EBOOLEAN);
			this.EBooleanObjectEDataType = this.createEDataType(EcorePackageImpl.EBOOLEANOBJECT);
			this.EByteEDataType = this.createEDataType(EcorePackageImpl.EBYTE);
			this.EByteArrayEDataType = this.createEDataType(EcorePackageImpl.EBYTEARRAY);
			this.EByteObjectEDataType = this.createEDataType(EcorePackageImpl.EBYTEOBJECT);
			this.ECharEDataType = this.createEDataType(EcorePackageImpl.ECHAR);
			this.ECharacterObjectEDataType = this.createEDataType(EcorePackageImpl.ECHARACTEROBJECT);
			this.EDateEDataType = this.createEDataType(EcorePackageImpl.EDATE);
			this.EDiagnosticChainEDataType = this.createEDataType(EcorePackageImpl.EDIAGNOSTICCHAIN);
			this.EDoubleEDataType = this.createEDataType(EcorePackageImpl.EDOUBLE);
			this.EDoubleObjectEDataType = this.createEDataType(EcorePackageImpl.EDOUBLEOBJECT);
			this.EEListEDataType = this.createEDataType(EcorePackageImpl.EELIST);
			this.EEnumeratorEDataType = this.createEDataType(EcorePackageImpl.EENUMERATOR);
			this.EFeatureMapEDataType = this.createEDataType(EcorePackageImpl.EFEATUREMAP);
			this.EFeatureMapEntryEDataType = this.createEDataType(EcorePackageImpl.EFEATUREMAPENTRY);
			this.EFloatEDataType = this.createEDataType(EcorePackageImpl.EFLOAT);
			this.EFloatObjectEDataType = this.createEDataType(EcorePackageImpl.EFLOATOBJECT);
			this.EIntEDataType = this.createEDataType(EcorePackageImpl.EINT);
			this.EIntegerObjectEDataType = this.createEDataType(EcorePackageImpl.EINTEGEROBJECT);
			this.EJavaClassEDataType = this.createEDataType(EcorePackageImpl.EJAVACLASS);
			this.EJavaObjectEDataType = this.createEDataType(EcorePackageImpl.EJAVAOBJECT);
			this.ELongEDataType = this.createEDataType(EcorePackageImpl.ELONG);
			this.ELongObjectEDataType = this.createEDataType(EcorePackageImpl.ELONGOBJECT);
			this.EMapEDataType = this.createEDataType(EcorePackageImpl.EMAP);
			this.EResourceEDataType = this.createEDataType(EcorePackageImpl.ERESOURCE);
			this.EResourceSetEDataType = this.createEDataType(EcorePackageImpl.ERESOURCESET);
			this.EShortEDataType = this.createEDataType(EcorePackageImpl.ESHORT);
			this.EShortObjectEDataType = this.createEDataType(EcorePackageImpl.ESHORTOBJECT);
			this.EStringEDataType = this.createEDataType(EcorePackageImpl.ESTRING);
			this.ETreeIteratorEDataType = this.createEDataType(EcorePackageImpl.ETREEITERATOR);
			this.EInvocationTargetExceptionEDataType = this.createEDataType(EcorePackageImpl.EINVOCATIONTARGETEXCEPTION);
        }
        private isInitialized:boolean = false;
        public initializePackageContents=():void =>
        {
            if (this.isInitialized) return;
            this.isInitialized = true;
            // Initialize package
            this.name = EcorePackageImpl.eNAME;
            this.nsPrefix = EcorePackageImpl.eNS_PREFIX;
            this.nsURI = EcorePackageImpl.eNS_URI;

			
			this.EAttributeEClass.eSuperTypes.add(this.getEStructuralFeature());
			
			this.EAnnotationEClass.eSuperTypes.add(this.getEModelElement());
			
			this.EClassEClass.eSuperTypes.add(this.getEClassifier_());
			
			this.EClassifierEClass.eSuperTypes.add(this.getENamedElement());
			
			this.EDataTypeEClass.eSuperTypes.add(this.getEClassifier_());
			
			this.EEnumEClass.eSuperTypes.add(this.getEDataType());
			
			this.EEnumLiteralEClass.eSuperTypes.add(this.getENamedElement());
			
			this.EFactoryEClass.eSuperTypes.add(this.getEModelElement());
			
			
			this.ENamedElementEClass.eSuperTypes.add(this.getEModelElement());
			
			
			this.EOperationEClass.eSuperTypes.add(this.getETypedElement());
			
			this.EPackageEClass.eSuperTypes.add(this.getENamedElement());
			
			this.EParameterEClass.eSuperTypes.add(this.getETypedElement());
			
			this.EReferenceEClass.eSuperTypes.add(this.getEStructuralFeature());
			
			this.EStructuralFeatureEClass.eSuperTypes.add(this.getETypedElement());
			
			this.ETypedElementEClass.eSuperTypes.add(this.getENamedElement());
			
			
			
			this.ETypeParameterEClass.eSuperTypes.add(this.getENamedElement());
			var op:EOperation = null;
			
			this.initEClass(
			this.EAttributeEClass, 
			EAttributeImpl, 
			"EAttribute", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEAttribute_ID(), 
				this.ecorePackage.getEBoolean(), 
				"iD", 
				"false", 
				0, 
				1, 
				EAttributeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEAttribute_EAttributeType(),
				this.ecorePackage.getEDataType(), 
				null, 
				"eAttributeType", 
				null, 
				1, 
				1, 
				EAttributeImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.EAnnotationEClass, 
			EAnnotationImpl, 
			"EAnnotation", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEAnnotation_Source(), 
				this.ecorePackage.getEString(), 
				"source", 
				null, 
				0, 
				1, 
				EAnnotationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEAnnotation_Details(),
				this.ecorePackage.getEStringToStringMapEntry(), 
				null, 
				"details", 
				null, 
				0, 
				-1, 
				EAnnotationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEAnnotation_EModelElement(),
				this.ecorePackage.getEModelElement(), 
				this.getEModelElement_EAnnotations(), 
				"eModelElement", 
				null, 
				0, 
				1, 
				EAnnotationImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEAnnotation_Contents(),
				this.ecorePackage.getEObject(), 
				null, 
				"contents", 
				null, 
				0, 
				-1, 
				EAnnotationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEAnnotation_References(),
				this.ecorePackage.getEObject(), 
				null, 
				"references", 
				null, 
				0, 
				-1, 
				EAnnotationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.EClassEClass, 
			EClassImpl, 
			"EClass", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEClass_Abstract(), 
				this.ecorePackage.getEBoolean(), 
				"abstract", 
				"false", 
				0, 
				1, 
				EClassImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEClass_Interface(), 
				this.ecorePackage.getEBoolean(), 
				"interface", 
				"false", 
				0, 
				1, 
				EClassImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEClass_ESuperTypes(),
				this.ecorePackage.getEClass(), 
				null, 
				"eSuperTypes", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EOperations(),
				this.ecorePackage.getEOperation(), 
				this.getEOperation_EContainingClass(), 
				"eOperations", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllAttributes(),
				this.ecorePackage.getEAttribute(), 
				null, 
				"eAllAttributes", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllReferences(),
				this.ecorePackage.getEReference(), 
				null, 
				"eAllReferences", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EReferences(),
				this.ecorePackage.getEReference(), 
				null, 
				"eReferences", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAttributes(),
				this.ecorePackage.getEAttribute(), 
				null, 
				"eAttributes", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllContainments(),
				this.ecorePackage.getEReference(), 
				null, 
				"eAllContainments", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllOperations(),
				this.ecorePackage.getEOperation(), 
				null, 
				"eAllOperations", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllStructuralFeatures(),
				this.ecorePackage.getEStructuralFeature(), 
				null, 
				"eAllStructuralFeatures", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllSuperTypes(),
				this.ecorePackage.getEClass(), 
				null, 
				"eAllSuperTypes", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EIDAttribute(),
				this.ecorePackage.getEAttribute(), 
				null, 
				"eIDAttribute", 
				null, 
				0, 
				1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EStructuralFeatures(),
				this.ecorePackage.getEStructuralFeature(), 
				this.getEStructuralFeature_EContainingClass(), 
				"eStructuralFeatures", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EGenericSuperTypes(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eGenericSuperTypes", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClass_EAllGenericSuperTypes(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eAllGenericSuperTypes", 
				null, 
				0, 
				-1, 
				EClassImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__IsSuperTypeOf__SomeClass(), this.getEBoolean(), "isSuperTypeOf", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "someClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetFeatureCount__(), this.getEBoolean(), "getFeatureCount", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetEStructuralFeature__FeatureID(), this.getEBoolean(), "getEStructuralFeature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "featureID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetFeatureID__Feature(), this.getEBoolean(), "getFeatureID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetEStructuralFeature__FeatureName(), this.getEBoolean(), "getEStructuralFeature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "featureName", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetOperationCount__(), this.getEBoolean(), "getOperationCount", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetEOperation__OperationID(), this.getEBoolean(), "getEOperation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "operationID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetOperationID__Operation(), this.getEBoolean(), "getOperationID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetOverride__Operation(), this.getEBoolean(), "getOverride", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClass__GetFeatureType__Feature(), this.getEBoolean(), "getFeatureType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClass(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EClassifierEClass, 
			EClassifierImpl, 
			"EClassifier", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEClassifier_InstanceClassName(), 
				this.ecorePackage.getEString(), 
				"instanceClassName", 
				null, 
				0, 
				1, 
				EClassifierImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEClassifier_InstanceClass(), 
				this.ecorePackage.getEJavaClass(), 
				"instanceClass", 
				null, 
				0, 
				1, 
				EClassifierImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEClassifier_DefaultValue(), 
				this.ecorePackage.getEJavaObject(), 
				"defaultValue", 
				null, 
				0, 
				1, 
				EClassifierImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEClassifier_InstanceTypeName(), 
				this.ecorePackage.getEString(), 
				"instanceTypeName", 
				null, 
				0, 
				1, 
				EClassifierImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEClassifier_EPackage(),
				this.ecorePackage.getEPackage(), 
				this.getEPackage_EClassifiers(), 
				"ePackage", 
				null, 
				0, 
				1, 
				EClassifierImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEClassifier_ETypeParameters(),
				this.ecorePackage.getETypeParameter(), 
				null, 
				"eTypeParameters", 
				null, 
				0, 
				-1, 
				EClassifierImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClassifier__IsInstance__Object(), this.getEBoolean(), "isInstance", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEClassifier_(), "object", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEClassifier__GetClassifierID__(), this.getEBoolean(), "getClassifierID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EDataTypeEClass, 
			EDataTypeImpl, 
			"EDataType", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEDataType_Serializable(), 
				this.ecorePackage.getEBoolean(), 
				"serializable", 
				"true", 
				0, 
				1, 
				EDataTypeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.EEnumEClass, 
			EEnumImpl, 
			"EEnum", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getEEnum_ELiterals(),
				this.ecorePackage.getEEnumLiteral(), 
				this.getEEnumLiteral_EEnum(), 
				"eLiterals", 
				null, 
				0, 
				-1, 
				EEnumImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEEnum__GetEEnumLiteral__Name(), this.getEBoolean(), "getEEnumLiteral", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEEnum(), "name", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEEnum__GetEEnumLiteral__Value(), this.getEBoolean(), "getEEnumLiteral", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEEnum(), "value", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEEnum__GetEEnumLiteralByLiteral__Literal(), this.getEBoolean(), "getEEnumLiteralByLiteral", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEEnum(), "literal", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EEnumLiteralEClass, 
			EEnumLiteralImpl, 
			"EEnumLiteral", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEEnumLiteral_Value(), 
				this.ecorePackage.getEInt(), 
				"value", 
				"0", 
				0, 
				1, 
				EEnumLiteralImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEEnumLiteral_Instance(), 
				this.ecorePackage.getEEnumerator(), 
				"instance", 
				null, 
				0, 
				1, 
				EEnumLiteralImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEEnumLiteral_Literal(), 
				this.ecorePackage.getEString(), 
				"literal", 
				null, 
				0, 
				1, 
				EEnumLiteralImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEEnumLiteral_EEnum(),
				this.ecorePackage.getEEnum(), 
				this.getEEnum_ELiterals(), 
				"eEnum", 
				null, 
				0, 
				1, 
				EEnumLiteralImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.EFactoryEClass, 
			EFactoryImpl, 
			"EFactory", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getEFactory_EPackage(),
				this.ecorePackage.getEPackage(), 
				this.getEPackage_EFactoryInstance(), 
				"ePackage", 
				null, 
				1, 
				1, 
				EFactoryImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEFactory__Create__EClass(), this.getEBoolean(), "create", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEFactory(), "eClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEFactory__CreateFromString__EDataType__LiteralValue(), this.getEBoolean(), "createFromString", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEFactory(), "eDataType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEFactory(), "literalValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEFactory__ConvertToString__EDataType__InstanceValue(), this.getEBoolean(), "convertToString", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEFactory(), "eDataType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEFactory(), "instanceValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EModelElementEClass, 
			EModelElementImpl, 
			"EModelElement", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getEModelElement_EAnnotations(),
				this.ecorePackage.getEAnnotation_(), 
				this.getEAnnotation_EModelElement(), 
				"eAnnotations", 
				null, 
				0, 
				-1, 
				EModelElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEModelElement__GetEAnnotation__Source(), this.getEBoolean(), "getEAnnotation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEModelElement(), "source", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.ENamedElementEClass, 
			ENamedElementImpl, 
			"ENamedElement", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getENamedElement_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				1, 
				ENamedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.EObjectEClass, 
			EObjectImpl, 
			"EObject", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EClass__(), this.getEBoolean(), "eClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EIsProxy__(), this.getEBoolean(), "eIsProxy", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EResource__(), this.getEBoolean(), "eResource", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EContainer__(), this.getEBoolean(), "eContainer", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EContainingFeature__(), this.getEBoolean(), "eContainingFeature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EContainmentFeature__(), this.getEBoolean(), "eContainmentFeature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EContents__(), this.getEBoolean(), "eContents", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EAllContents__(), this.getEBoolean(), "eAllContents", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__ECrossReferences__(), this.getEBoolean(), "eCrossReferences", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EGet__Feature(), this.getEBoolean(), "eGet", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EGet__Feature__Resolve(), this.getEBoolean(), "eGet", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "resolve", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__ESet__Feature__NewValue(), this.getEBoolean(), "eSet", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "newValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EIsSet__Feature(), this.getEBoolean(), "eIsSet", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EUnset__Feature(), this.getEBoolean(), "eUnset", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEObject__EInvoke__Operation__Arguments(), this.getEBoolean(), "eInvoke", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEObject(), "arguments", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EOperationEClass, 
			EOperationImpl, 
			"EOperation", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getEOperation_EContainingClass(),
				this.ecorePackage.getEClass(), 
				this.getEClass_EOperations(), 
				"eContainingClass", 
				null, 
				0, 
				1, 
				EOperationImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEOperation_ETypeParameters(),
				this.ecorePackage.getETypeParameter(), 
				null, 
				"eTypeParameters", 
				null, 
				0, 
				-1, 
				EOperationImpl, 
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
				this.getEOperation_EParameters(),
				this.ecorePackage.getEParameter(), 
				this.getEParameter_EOperation(), 
				"eParameters", 
				null, 
				0, 
				-1, 
				EOperationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEOperation_EExceptions(),
				this.ecorePackage.getEClassifier_(), 
				null, 
				"eExceptions", 
				null, 
				0, 
				-1, 
				EOperationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEOperation_EGenericExceptions(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eGenericExceptions", 
				null, 
				0, 
				-1, 
				EOperationImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEOperation__GetOperationID__(), this.getEBoolean(), "getOperationID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEOperation__IsOverrideOf__SomeOperation(), this.getEBoolean(), "isOverrideOf", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEOperation(), "someOperation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EPackageEClass, 
			EPackageImpl, 
			"EPackage", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEPackage_NsURI(), 
				this.ecorePackage.getEString(), 
				"nsURI", 
				null, 
				0, 
				1, 
				EPackageImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEPackage_NsPrefix(), 
				this.ecorePackage.getEString(), 
				"nsPrefix", 
				null, 
				0, 
				1, 
				EPackageImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEPackage_EFactoryInstance(),
				this.ecorePackage.getEFactory(), 
				this.getEFactory_EPackage(), 
				"eFactoryInstance", 
				null, 
				1, 
				1, 
				EPackageImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEPackage_EClassifiers(),
				this.ecorePackage.getEClassifier_(), 
				this.getEClassifier_EPackage(), 
				"eClassifiers", 
				null, 
				0, 
				-1, 
				EPackageImpl, 
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
				this.getEPackage_ESubpackages(),
				this.ecorePackage.getEPackage(), 
				this.getEPackage_ESuperPackage(), 
				"eSubpackages", 
				null, 
				0, 
				-1, 
				EPackageImpl, 
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
				this.getEPackage_ESuperPackage(),
				this.ecorePackage.getEPackage(), 
				this.getEPackage_ESubpackages(), 
				"eSuperPackage", 
				null, 
				0, 
				1, 
				EPackageImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEPackage__GetEClassifier__Name(), this.getEBoolean(), "getEClassifier", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEPackage(), "name", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.EParameterEClass, 
			EParameterImpl, 
			"EParameter", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getEParameter_EOperation(),
				this.ecorePackage.getEOperation(), 
				this.getEOperation_EParameters(), 
				"eOperation", 
				null, 
				0, 
				1, 
				EParameterImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.EReferenceEClass, 
			EReferenceImpl, 
			"EReference", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEReference_Containment(), 
				this.ecorePackage.getEBoolean(), 
				"containment", 
				"false", 
				0, 
				1, 
				EReferenceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEReference_Container(), 
				this.ecorePackage.getEBoolean(), 
				"container", 
				"false", 
				0, 
				1, 
				EReferenceImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEReference_ResolveProxies(), 
				this.ecorePackage.getEBoolean(), 
				"resolveProxies", 
				"true", 
				0, 
				1, 
				EReferenceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEReference_EOpposite(),
				this.ecorePackage.getEReference(), 
				null, 
				"eOpposite", 
				null, 
				0, 
				1, 
				EReferenceImpl, 
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
				this.getEReference_EReferenceType(),
				this.ecorePackage.getEClass(), 
				null, 
				"eReferenceType", 
				null, 
				1, 
				1, 
				EReferenceImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEReference_EKeys(),
				this.ecorePackage.getEAttribute(), 
				null, 
				"eKeys", 
				null, 
				0, 
				-1, 
				EReferenceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.EStructuralFeatureEClass, 
			EStructuralFeatureImpl, 
			"EStructuralFeature", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_Changeable(), 
				this.ecorePackage.getEBoolean(), 
				"changeable", 
				"true", 
				0, 
				1, 
				EStructuralFeatureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_Volatile(), 
				this.ecorePackage.getEBoolean(), 
				"volatile", 
				"false", 
				0, 
				1, 
				EStructuralFeatureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_Transient(), 
				this.ecorePackage.getEBoolean(), 
				"transient", 
				"false", 
				0, 
				1, 
				EStructuralFeatureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_DefaultValueLiteral(), 
				this.ecorePackage.getEString(), 
				"defaultValueLiteral", 
				null, 
				0, 
				1, 
				EStructuralFeatureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_DefaultValue(), 
				this.ecorePackage.getEJavaObject(), 
				"defaultValue", 
				null, 
				0, 
				1, 
				EStructuralFeatureImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_Unsettable(), 
				this.ecorePackage.getEBoolean(), 
				"unsettable", 
				"false", 
				0, 
				1, 
				EStructuralFeatureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStructuralFeature_Derived(), 
				this.ecorePackage.getEBoolean(), 
				"derived", 
				"false", 
				0, 
				1, 
				EStructuralFeatureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getEStructuralFeature_EContainingClass(),
				this.ecorePackage.getEClass(), 
				this.getEClass_EStructuralFeatures(), 
				"eContainingClass", 
				null, 
				0, 
				1, 
				EStructuralFeatureImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEStructuralFeature__GetFeatureID__(), this.getEBoolean(), "getFeatureID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEStructuralFeature__GetContainerClass__(), this.getEBoolean(), "getContainerClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.ETypedElementEClass, 
			ETypedElementImpl, 
			"ETypedElement", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getETypedElement_Ordered(), 
				this.ecorePackage.getEBoolean(), 
				"ordered", 
				"true", 
				0, 
				1, 
				ETypedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getETypedElement_Unique(), 
				this.ecorePackage.getEBoolean(), 
				"unique", 
				"true", 
				0, 
				1, 
				ETypedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getETypedElement_LowerBound(), 
				this.ecorePackage.getEInt(), 
				"lowerBound", 
				"0", 
				0, 
				1, 
				ETypedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getETypedElement_UpperBound(), 
				this.ecorePackage.getEInt(), 
				"upperBound", 
				"1", 
				0, 
				1, 
				ETypedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getETypedElement_Many(), 
				this.ecorePackage.getEBoolean(), 
				"many", 
				"false", 
				0, 
				1, 
				ETypedElementImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getETypedElement_Required(), 
				this.ecorePackage.getEBoolean(), 
				"required", 
				"false", 
				0, 
				1, 
				ETypedElementImpl, 
				EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getETypedElement_EType(),
				this.ecorePackage.getEClassifier_(), 
				null, 
				"eType", 
				null, 
				0, 
				1, 
				ETypedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getETypedElement_EGenericType(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eGenericType", 
				null, 
				0, 
				1, 
				ETypedElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.EStringToStringMapEntryEClass, 
			EStringToStringMapEntryImpl, 
			"EStringToStringMapEntry", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getEStringToStringMapEntry_Key(), 
				this.ecorePackage.getEString(), 
				"key", 
				null, 
				0, 
				1, 
				EStringToStringMapEntryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getEStringToStringMapEntry_Value(), 
				this.ecorePackage.getEString(), 
				"value", 
				null, 
				0, 
				1, 
				EStringToStringMapEntryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.EGenericTypeEClass, 
			EGenericTypeImpl, 
			"EGenericType", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getEGenericType_EUpperBound(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eUpperBound", 
				null, 
				0, 
				1, 
				EGenericTypeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEGenericType_ETypeArguments(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eTypeArguments", 
				null, 
				0, 
				-1, 
				EGenericTypeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEGenericType_ERawType(),
				this.ecorePackage.getEClassifier_(), 
				null, 
				"eRawType", 
				null, 
				1, 
				1, 
				EGenericTypeImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				!EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEGenericType_ELowerBound(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eLowerBound", 
				null, 
				0, 
				1, 
				EGenericTypeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEGenericType_ETypeParameter(),
				this.ecorePackage.getETypeParameter(), 
				null, 
				"eTypeParameter", 
				null, 
				0, 
				1, 
				EGenericTypeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getEGenericType_EClassifier(),
				this.ecorePackage.getEClassifier_(), 
				null, 
				"eClassifier", 
				null, 
				0, 
				1, 
				EGenericTypeImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			//TODO add initEOperation to EPackageImpl
			op = this.initEOperation_3(this.getEGenericType__IsInstance__Object(), this.getEBoolean(), "isInstance", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			//TODO add addEParameter to EPackageImpl
			//this.addEParameter_3(op, this.getEGenericType(), "object", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
			
			
			this.initEClass(
			this.ETypeParameterEClass, 
			ETypeParameterImpl, 
			"ETypeParameter", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getETypeParameter_EBounds(),
				this.ecorePackage.getEGenericType(), 
				null, 
				"eBounds", 
				null, 
				0, 
				-1, 
				ETypeParameterImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				!EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			//this.initEDataType(this.EBigDecimalEDataType, null, "EBigDecimal", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EBigIntegerEDataType, null, "EBigInteger", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EBooleanEDataType, null, "EBoolean", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EBooleanObjectEDataType, null, "EBooleanObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EByteEDataType, null, "EByte", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EByteArrayEDataType, null, "EByteArray", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EByteObjectEDataType, null, "EByteObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.ECharEDataType, null, "EChar", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.ECharacterObjectEDataType, null, "ECharacterObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EDateEDataType, null, "EDate", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EDiagnosticChainEDataType, null, "EDiagnosticChain", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EDoubleEDataType, null, "EDouble", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EDoubleObjectEDataType, null, "EDoubleObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EEListEDataType, null, "EEList", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EEnumeratorEDataType, null, "EEnumerator", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EFeatureMapEDataType, null, "EFeatureMap", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EFeatureMapEntryEDataType, null, "EFeatureMapEntry", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EFloatEDataType, null, "EFloat", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EFloatObjectEDataType, null, "EFloatObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EIntEDataType, null, "EInt", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EIntegerObjectEDataType, null, "EIntegerObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EJavaClassEDataType, null, "EJavaClass", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EJavaObjectEDataType, null, "EJavaObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.ELongEDataType, null, "ELong", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.ELongObjectEDataType, null, "ELongObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EMapEDataType, null, "EMap", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EResourceEDataType, null, "EResource", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EResourceSetEDataType, null, "EResourceSet", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EShortEDataType, null, "EShort", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EShortObjectEDataType, null, "EShortObject", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EStringEDataType, null, "EString", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.ETreeIteratorEDataType, null, "ETreeIterator", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			//this.initEDataType(this.EInvocationTargetExceptionEDataType, null, "EInvocationTargetException", !EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
        }
		
		
		private EAttributeEClass:EClass = null;
		private EAnnotationEClass:EClass = null;
		private EClassEClass:EClass = null;
		private EClassifierEClass:EClass = null;
		private EDataTypeEClass:EClass = null;
		private EEnumEClass:EClass = null;
		private EEnumLiteralEClass:EClass = null;
		private EFactoryEClass:EClass = null;
		private EModelElementEClass:EClass = null;
		private ENamedElementEClass:EClass = null;
		private EObjectEClass:EClass = null;
		private EOperationEClass:EClass = null;
		private EPackageEClass:EClass = null;
		private EParameterEClass:EClass = null;
		private EReferenceEClass:EClass = null;
		private EStructuralFeatureEClass:EClass = null;
		private ETypedElementEClass:EClass = null;
		private EStringToStringMapEntryEClass:EClass = null;
		private EGenericTypeEClass:EClass = null;
		private ETypeParameterEClass:EClass = null;
		
		
		
		private EBigDecimalEDataType:EDataType = null;
		private EBigIntegerEDataType:EDataType = null;
		private EBooleanEDataType:EDataType = null;
		private EBooleanObjectEDataType:EDataType = null;
		private EByteEDataType:EDataType = null;
		private EByteArrayEDataType:EDataType = null;
		private EByteObjectEDataType:EDataType = null;
		private ECharEDataType:EDataType = null;
		private ECharacterObjectEDataType:EDataType = null;
		private EDateEDataType:EDataType = null;
		private EDiagnosticChainEDataType:EDataType = null;
		private EDoubleEDataType:EDataType = null;
		private EDoubleObjectEDataType:EDataType = null;
		private EEListEDataType:EDataType = null;
		private EEnumeratorEDataType:EDataType = null;
		private EFeatureMapEDataType:EDataType = null;
		private EFeatureMapEntryEDataType:EDataType = null;
		private EFloatEDataType:EDataType = null;
		private EFloatObjectEDataType:EDataType = null;
		private EIntEDataType:EDataType = null;
		private EIntegerObjectEDataType:EDataType = null;
		private EJavaClassEDataType:EDataType = null;
		private EJavaObjectEDataType:EDataType = null;
		private ELongEDataType:EDataType = null;
		private ELongObjectEDataType:EDataType = null;
		private EMapEDataType:EDataType = null;
		private EResourceEDataType:EDataType = null;
		private EResourceSetEDataType:EDataType = null;
		private EShortEDataType:EDataType = null;
		private EShortObjectEDataType:EDataType = null;
		private EStringEDataType:EDataType = null;
		private ETreeIteratorEDataType:EDataType = null;
		private EInvocationTargetExceptionEDataType:EDataType = null;
		
		
		public static EMODELELEMENT:number = 8;
		public static EMODELELEMENT_FEATURE_COUNT:number = 1;
		public static EMODELELEMENT_OPERATION_COUNT:number = 1;
		
		public static EMODELELEMENT_EANNOTATIONS:number = 0;
		public static EMODELELEMENT___GETEANNOTATION__SOURCE:number = 0; 
		
		public static ENAMEDELEMENT:number = 9;
		public static ENAMEDELEMENT_FEATURE_COUNT:number = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 1;
		public static ENAMEDELEMENT_OPERATION_COUNT:number = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 0;
		
		public static ENAMEDELEMENT_EANNOTATIONS:number = 0;
		public static ENAMEDELEMENT_NAME:number = 1;
		
		public static ETYPEDELEMENT:number = 16;
		public static ETYPEDELEMENT_FEATURE_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 8;
		public static ETYPEDELEMENT_OPERATION_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
		
		public static ETYPEDELEMENT_EANNOTATIONS:number = 0;
		public static ETYPEDELEMENT_NAME:number = 1;
		public static ETYPEDELEMENT_ORDERED:number = 2;
		public static ETYPEDELEMENT_UNIQUE:number = 3;
		public static ETYPEDELEMENT_LOWERBOUND:number = 4;
		public static ETYPEDELEMENT_UPPERBOUND:number = 5;
		public static ETYPEDELEMENT_MANY:number = 6;
		public static ETYPEDELEMENT_REQUIRED:number = 7;
		public static ETYPEDELEMENT_ETYPE:number = 8;
		public static ETYPEDELEMENT_EGENERICTYPE:number = 9;
		
		public static ESTRUCTURALFEATURE:number = 15;
		public static ESTRUCTURALFEATURE_FEATURE_COUNT:number = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 8;
		public static ESTRUCTURALFEATURE_OPERATION_COUNT:number = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 2;
		
		public static ESTRUCTURALFEATURE_EANNOTATIONS:number = 0;
		public static ESTRUCTURALFEATURE_NAME:number = 1;
		public static ESTRUCTURALFEATURE_ORDERED:number = 2;
		public static ESTRUCTURALFEATURE_UNIQUE:number = 3;
		public static ESTRUCTURALFEATURE_LOWERBOUND:number = 4;
		public static ESTRUCTURALFEATURE_UPPERBOUND:number = 5;
		public static ESTRUCTURALFEATURE_MANY:number = 6;
		public static ESTRUCTURALFEATURE_REQUIRED:number = 7;
		public static ESTRUCTURALFEATURE_ETYPE:number = 8;
		public static ESTRUCTURALFEATURE_EGENERICTYPE:number = 9;
		public static ESTRUCTURALFEATURE_CHANGEABLE:number = 10;
		public static ESTRUCTURALFEATURE_VOLATILE:number = 11;
		public static ESTRUCTURALFEATURE_TRANSIENT:number = 12;
		public static ESTRUCTURALFEATURE_DEFAULTVALUELITERAL:number = 13;
		public static ESTRUCTURALFEATURE_DEFAULTVALUE:number = 14;
		public static ESTRUCTURALFEATURE_UNSETTABLE:number = 15;
		public static ESTRUCTURALFEATURE_DERIVED:number = 16;
		public static ESTRUCTURALFEATURE_ECONTAININGCLASS:number = 17;
		public static ESTRUCTURALFEATURE___GETFEATUREID:number = 0; 
		public static ESTRUCTURALFEATURE___GETCONTAINERCLASS:number = 1; 
		
		public static EATTRIBUTE:number = 0;
		public static EATTRIBUTE_FEATURE_COUNT:number = EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
		public static EATTRIBUTE_OPERATION_COUNT:number = EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
		
		public static EATTRIBUTE_EANNOTATIONS:number = 0;
		public static EATTRIBUTE_NAME:number = 1;
		public static EATTRIBUTE_ORDERED:number = 2;
		public static EATTRIBUTE_UNIQUE:number = 3;
		public static EATTRIBUTE_LOWERBOUND:number = 4;
		public static EATTRIBUTE_UPPERBOUND:number = 5;
		public static EATTRIBUTE_MANY:number = 6;
		public static EATTRIBUTE_REQUIRED:number = 7;
		public static EATTRIBUTE_ETYPE:number = 8;
		public static EATTRIBUTE_EGENERICTYPE:number = 9;
		public static EATTRIBUTE_CHANGEABLE:number = 10;
		public static EATTRIBUTE_VOLATILE:number = 11;
		public static EATTRIBUTE_TRANSIENT:number = 12;
		public static EATTRIBUTE_DEFAULTVALUELITERAL:number = 13;
		public static EATTRIBUTE_DEFAULTVALUE:number = 14;
		public static EATTRIBUTE_UNSETTABLE:number = 15;
		public static EATTRIBUTE_DERIVED:number = 16;
		public static EATTRIBUTE_ECONTAININGCLASS:number = 17;
		public static EATTRIBUTE_ID:number = 18;
		public static EATTRIBUTE_EATTRIBUTETYPE:number = 19;
		
		public static EANNOTATION:number = 1;
		public static EANNOTATION_FEATURE_COUNT:number = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 5;
		public static EANNOTATION_OPERATION_COUNT:number = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 0;
		
		public static EANNOTATION_EANNOTATIONS:number = 0;
		public static EANNOTATION_SOURCE:number = 1;
		public static EANNOTATION_DETAILS:number = 2;
		public static EANNOTATION_EMODELELEMENT:number = 3;
		public static EANNOTATION_CONTENTS:number = 4;
		public static EANNOTATION_REFERENCES:number = 5;
		
		public static ECLASSIFIER:number = 3;
		public static ECLASSIFIER_FEATURE_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 6;
		public static ECLASSIFIER_OPERATION_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 2;
		
		public static ECLASSIFIER_EANNOTATIONS:number = 0;
		public static ECLASSIFIER_NAME:number = 1;
		public static ECLASSIFIER_INSTANCECLASSNAME:number = 2;
		public static ECLASSIFIER_INSTANCECLASS:number = 3;
		public static ECLASSIFIER_DEFAULTVALUE:number = 4;
		public static ECLASSIFIER_INSTANCETYPENAME:number = 5;
		public static ECLASSIFIER_EPACKAGE:number = 6;
		public static ECLASSIFIER_ETYPEPARAMETERS:number = 7;
		public static ECLASSIFIER___ISINSTANCE__OBJECT:number = 0; 
		public static ECLASSIFIER___GETCLASSIFIERID:number = 1; 
		
		public static ECLASS:number = 2;
		public static ECLASS_FEATURE_COUNT:number = EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT + 16;
		public static ECLASS_OPERATION_COUNT:number = EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT + 10;
		
		public static ECLASS_EANNOTATIONS:number = 0;
		public static ECLASS_NAME:number = 1;
		public static ECLASS_INSTANCECLASSNAME:number = 2;
		public static ECLASS_INSTANCECLASS:number = 3;
		public static ECLASS_DEFAULTVALUE:number = 4;
		public static ECLASS_INSTANCETYPENAME:number = 5;
		public static ECLASS_EPACKAGE:number = 6;
		public static ECLASS_ETYPEPARAMETERS:number = 7;
		public static ECLASS_ABSTRACT:number = 8;
		public static ECLASS_INTERFACE:number = 9;
		public static ECLASS_ESUPERTYPES:number = 10;
		public static ECLASS_EOPERATIONS:number = 11;
		public static ECLASS_EALLATTRIBUTES:number = 12;
		public static ECLASS_EALLREFERENCES:number = 13;
		public static ECLASS_EREFERENCES:number = 14;
		public static ECLASS_EATTRIBUTES:number = 15;
		public static ECLASS_EALLCONTAINMENTS:number = 16;
		public static ECLASS_EALLOPERATIONS:number = 17;
		public static ECLASS_EALLSTRUCTURALFEATURES:number = 18;
		public static ECLASS_EALLSUPERTYPES:number = 19;
		public static ECLASS_EIDATTRIBUTE:number = 20;
		public static ECLASS_ESTRUCTURALFEATURES:number = 21;
		public static ECLASS_EGENERICSUPERTYPES:number = 22;
		public static ECLASS_EALLGENERICSUPERTYPES:number = 23;
		public static ECLASS___ISSUPERTYPEOF__SOMECLASS:number = 0; 
		public static ECLASS___GETFEATURECOUNT:number = 1; 
		public static ECLASS___GETESTRUCTURALFEATURE__FEATUREID:number = 2; 
		public static ECLASS___GETFEATUREID__FEATURE:number = 3; 
		public static ECLASS___GETESTRUCTURALFEATURE__FEATURENAME:number = 4; 
		public static ECLASS___GETOPERATIONCOUNT:number = 5; 
		public static ECLASS___GETEOPERATION__OPERATIONID:number = 6; 
		public static ECLASS___GETOPERATIONID__OPERATION:number = 7; 
		public static ECLASS___GETOVERRIDE__OPERATION:number = 8; 
		public static ECLASS___GETFEATURETYPE__FEATURE:number = 9; 
		
		public static EDATATYPE:number = 4;
		public static EDATATYPE_FEATURE_COUNT:number = EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT + 1;
		public static EDATATYPE_OPERATION_COUNT:number = EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT + 0;
		
		public static EDATATYPE_EANNOTATIONS:number = 0;
		public static EDATATYPE_NAME:number = 1;
		public static EDATATYPE_INSTANCECLASSNAME:number = 2;
		public static EDATATYPE_INSTANCECLASS:number = 3;
		public static EDATATYPE_DEFAULTVALUE:number = 4;
		public static EDATATYPE_INSTANCETYPENAME:number = 5;
		public static EDATATYPE_EPACKAGE:number = 6;
		public static EDATATYPE_ETYPEPARAMETERS:number = 7;
		public static EDATATYPE_SERIALIZABLE:number = 8;
		
		public static EENUM:number = 5;
		public static EENUM_FEATURE_COUNT:number = EcorePackageImpl.EDATATYPE_FEATURE_COUNT + 1;
		public static EENUM_OPERATION_COUNT:number = EcorePackageImpl.EDATATYPE_OPERATION_COUNT + 3;
		
		public static EENUM_EANNOTATIONS:number = 0;
		public static EENUM_NAME:number = 1;
		public static EENUM_INSTANCECLASSNAME:number = 2;
		public static EENUM_INSTANCECLASS:number = 3;
		public static EENUM_DEFAULTVALUE:number = 4;
		public static EENUM_INSTANCETYPENAME:number = 5;
		public static EENUM_EPACKAGE:number = 6;
		public static EENUM_ETYPEPARAMETERS:number = 7;
		public static EENUM_SERIALIZABLE:number = 8;
		public static EENUM_ELITERALS:number = 9;
		public static EENUM___GETEENUMLITERAL__NAME:number = 0; 
		public static EENUM___GETEENUMLITERAL__VALUE:number = 1; 
		public static EENUM___GETEENUMLITERALBYLITERAL__LITERAL:number = 2; 
		
		public static EENUMLITERAL:number = 6;
		public static EENUMLITERAL_FEATURE_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 4;
		public static EENUMLITERAL_OPERATION_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
		
		public static EENUMLITERAL_EANNOTATIONS:number = 0;
		public static EENUMLITERAL_NAME:number = 1;
		public static EENUMLITERAL_VALUE:number = 2;
		public static EENUMLITERAL_INSTANCE:number = 3;
		public static EENUMLITERAL_LITERAL:number = 4;
		public static EENUMLITERAL_EENUM:number = 5;
		
		public static EFACTORY:number = 7;
		public static EFACTORY_FEATURE_COUNT:number = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 1;
		public static EFACTORY_OPERATION_COUNT:number = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 3;
		
		public static EFACTORY_EANNOTATIONS:number = 0;
		public static EFACTORY_EPACKAGE:number = 1;
		public static EFACTORY___CREATE__ECLASS:number = 0; 
		public static EFACTORY___CREATEFROMSTRING__EDATATYPE__LITERALVALUE:number = 1; 
		public static EFACTORY___CONVERTTOSTRING__EDATATYPE__INSTANCEVALUE:number = 2; 
		
		public static EOBJECT:number = 10;
		public static EOBJECT_FEATURE_COUNT:number = 0;
		public static EOBJECT_OPERATION_COUNT:number = 15;
		
		public static EOBJECT___ECLASS:number = 0; 
		public static EOBJECT___EISPROXY:number = 1; 
		public static EOBJECT___ERESOURCE:number = 2; 
		public static EOBJECT___ECONTAINER:number = 3; 
		public static EOBJECT___ECONTAININGFEATURE:number = 4; 
		public static EOBJECT___ECONTAINMENTFEATURE:number = 5; 
		public static EOBJECT___ECONTENTS:number = 6; 
		public static EOBJECT___EALLCONTENTS:number = 7; 
		public static EOBJECT___ECROSSREFERENCES:number = 8; 
		public static EOBJECT___EGET__FEATURE:number = 9; 
		public static EOBJECT___EGET__FEATURE__RESOLVE:number = 10; 
		public static EOBJECT___ESET__FEATURE__NEWVALUE:number = 11; 
		public static EOBJECT___EISSET__FEATURE:number = 12; 
		public static EOBJECT___EUNSET__FEATURE:number = 13; 
		public static EOBJECT___EINVOKE__OPERATION__ARGUMENTS:number = 14; 
		
		public static EOPERATION:number = 11;
		public static EOPERATION_FEATURE_COUNT:number = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 5;
		public static EOPERATION_OPERATION_COUNT:number = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 2;
		
		public static EOPERATION_EANNOTATIONS:number = 0;
		public static EOPERATION_NAME:number = 1;
		public static EOPERATION_ORDERED:number = 2;
		public static EOPERATION_UNIQUE:number = 3;
		public static EOPERATION_LOWERBOUND:number = 4;
		public static EOPERATION_UPPERBOUND:number = 5;
		public static EOPERATION_MANY:number = 6;
		public static EOPERATION_REQUIRED:number = 7;
		public static EOPERATION_ETYPE:number = 8;
		public static EOPERATION_EGENERICTYPE:number = 9;
		public static EOPERATION_ECONTAININGCLASS:number = 10;
		public static EOPERATION_ETYPEPARAMETERS:number = 11;
		public static EOPERATION_EPARAMETERS:number = 12;
		public static EOPERATION_EEXCEPTIONS:number = 13;
		public static EOPERATION_EGENERICEXCEPTIONS:number = 14;
		public static EOPERATION___GETOPERATIONID:number = 0; 
		public static EOPERATION___ISOVERRIDEOF__SOMEOPERATION:number = 1; 
		
		public static EPACKAGE:number = 12;
		public static EPACKAGE_FEATURE_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 6;
		public static EPACKAGE_OPERATION_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 1;
		
		public static EPACKAGE_EANNOTATIONS:number = 0;
		public static EPACKAGE_NAME:number = 1;
		public static EPACKAGE_NSURI:number = 2;
		public static EPACKAGE_NSPREFIX:number = 3;
		public static EPACKAGE_EFACTORYINSTANCE:number = 4;
		public static EPACKAGE_ECLASSIFIERS:number = 5;
		public static EPACKAGE_ESUBPACKAGES:number = 6;
		public static EPACKAGE_ESUPERPACKAGE:number = 7;
		public static EPACKAGE___GETECLASSIFIER__NAME:number = 0; 
		
		public static EPARAMETER:number = 13;
		public static EPARAMETER_FEATURE_COUNT:number = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 1;
		public static EPARAMETER_OPERATION_COUNT:number = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 0;
		
		public static EPARAMETER_EANNOTATIONS:number = 0;
		public static EPARAMETER_NAME:number = 1;
		public static EPARAMETER_ORDERED:number = 2;
		public static EPARAMETER_UNIQUE:number = 3;
		public static EPARAMETER_LOWERBOUND:number = 4;
		public static EPARAMETER_UPPERBOUND:number = 5;
		public static EPARAMETER_MANY:number = 6;
		public static EPARAMETER_REQUIRED:number = 7;
		public static EPARAMETER_ETYPE:number = 8;
		public static EPARAMETER_EGENERICTYPE:number = 9;
		public static EPARAMETER_EOPERATION:number = 10;
		
		public static EREFERENCE:number = 14;
		public static EREFERENCE_FEATURE_COUNT:number = EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
		public static EREFERENCE_OPERATION_COUNT:number = EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
		
		public static EREFERENCE_EANNOTATIONS:number = 0;
		public static EREFERENCE_NAME:number = 1;
		public static EREFERENCE_ORDERED:number = 2;
		public static EREFERENCE_UNIQUE:number = 3;
		public static EREFERENCE_LOWERBOUND:number = 4;
		public static EREFERENCE_UPPERBOUND:number = 5;
		public static EREFERENCE_MANY:number = 6;
		public static EREFERENCE_REQUIRED:number = 7;
		public static EREFERENCE_ETYPE:number = 8;
		public static EREFERENCE_EGENERICTYPE:number = 9;
		public static EREFERENCE_CHANGEABLE:number = 10;
		public static EREFERENCE_VOLATILE:number = 11;
		public static EREFERENCE_TRANSIENT:number = 12;
		public static EREFERENCE_DEFAULTVALUELITERAL:number = 13;
		public static EREFERENCE_DEFAULTVALUE:number = 14;
		public static EREFERENCE_UNSETTABLE:number = 15;
		public static EREFERENCE_DERIVED:number = 16;
		public static EREFERENCE_ECONTAININGCLASS:number = 17;
		public static EREFERENCE_CONTAINMENT:number = 18;
		public static EREFERENCE_CONTAINER:number = 19;
		public static EREFERENCE_RESOLVEPROXIES:number = 20;
		public static EREFERENCE_EOPPOSITE:number = 21;
		public static EREFERENCE_EREFERENCETYPE:number = 22;
		public static EREFERENCE_EKEYS:number = 23;
		
		public static ESTRINGTOSTRINGMAPENTRY:number = 48;
		public static ESTRINGTOSTRINGMAPENTRY_FEATURE_COUNT:number = 2;
		public static ESTRINGTOSTRINGMAPENTRY_OPERATION_COUNT:number = 0;
		
		public static ESTRINGTOSTRINGMAPENTRY_KEY:number = 0;
		public static ESTRINGTOSTRINGMAPENTRY_VALUE:number = 1;
		
		public static EGENERICTYPE:number = 50;
		public static EGENERICTYPE_FEATURE_COUNT:number = 6;
		public static EGENERICTYPE_OPERATION_COUNT:number = 1;
		
		public static EGENERICTYPE_EUPPERBOUND:number = 0;
		public static EGENERICTYPE_ETYPEARGUMENTS:number = 1;
		public static EGENERICTYPE_ERAWTYPE:number = 2;
		public static EGENERICTYPE_ELOWERBOUND:number = 3;
		public static EGENERICTYPE_ETYPEPARAMETER:number = 4;
		public static EGENERICTYPE_ECLASSIFIER:number = 5;
		public static EGENERICTYPE___ISINSTANCE__OBJECT:number = 0; 
		
		public static ETYPEPARAMETER:number = 51;
		public static ETYPEPARAMETER_FEATURE_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 1;
		public static ETYPEPARAMETER_OPERATION_COUNT:number = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
		
		public static ETYPEPARAMETER_EANNOTATIONS:number = 0;
		public static ETYPEPARAMETER_NAME:number = 1;
		public static ETYPEPARAMETER_EBOUNDS:number = 2;
		
		public static EBIGDECIMAL:number = 17;
		
		public static EBIGINTEGER:number = 18;
		
		public static EBOOLEAN:number = 19;
		
		public static EBOOLEANOBJECT:number = 20;
		
		public static EBYTE:number = 21;
		
		public static EBYTEARRAY:number = 22;
		
		public static EBYTEOBJECT:number = 23;
		
		public static ECHAR:number = 24;
		
		public static ECHARACTEROBJECT:number = 25;
		
		public static EDATE:number = 26;
		
		public static EDIAGNOSTICCHAIN:number = 27;
		
		public static EDOUBLE:number = 28;
		
		public static EDOUBLEOBJECT:number = 29;
		
		public static EELIST:number = 30;
		
		public static EENUMERATOR:number = 31;
		
		public static EFEATUREMAP:number = 32;
		
		public static EFEATUREMAPENTRY:number = 33;
		
		public static EFLOAT:number = 34;
		
		public static EFLOATOBJECT:number = 35;
		
		public static EINT:number = 36;
		
		public static EINTEGEROBJECT:number = 37;
		
		public static EJAVACLASS:number = 38;
		
		public static EJAVAOBJECT:number = 39;
		
		public static ELONG:number = 40;
		
		public static ELONGOBJECT:number = 41;
		
		public static EMAP:number = 42;
		
		public static ERESOURCE:number = 43;
		
		public static ERESOURCESET:number = 44;
		
		public static ESHORT:number = 45;
		
		public static ESHORTOBJECT:number = 46;
		
		public static ESTRING:number = 47;
		
		public static ETREEITERATOR:number = 49;
		
		public static EINVOCATIONTARGETEXCEPTION:number = 52;
		
		
		/*Important: Call init() AFTER metaobject ids have been assigned.*/
		public static eINSTANCE:EcorePackage = EcorePackageImpl.init();
		
		
		public getEModelElement=():EClass=>{return this.EModelElementEClass;}
		
		public getEModelElement_EAnnotations=():EReference=>{return <EReference> this.EModelElementEClass.eStructuralFeatures.at(0);}
		public getEModelElement__GetEAnnotation__Source=():EOperation=>{return <EOperation> this.EModelElementEClass.eOperations.at(0);}
		public getENamedElement=():EClass=>{return this.ENamedElementEClass;}
		
		public getENamedElement_Name=():EAttribute=>{return <EAttribute> this.ENamedElementEClass.eStructuralFeatures.at(0);}
		public getETypedElement=():EClass=>{return this.ETypedElementEClass;}
		
		public getETypedElement_Ordered=():EAttribute=>{return <EAttribute> this.ETypedElementEClass.eStructuralFeatures.at(0);}
		public getETypedElement_Unique=():EAttribute=>{return <EAttribute> this.ETypedElementEClass.eStructuralFeatures.at(1);}
		public getETypedElement_LowerBound=():EAttribute=>{return <EAttribute> this.ETypedElementEClass.eStructuralFeatures.at(2);}
		public getETypedElement_UpperBound=():EAttribute=>{return <EAttribute> this.ETypedElementEClass.eStructuralFeatures.at(3);}
		public getETypedElement_Many=():EAttribute=>{return <EAttribute> this.ETypedElementEClass.eStructuralFeatures.at(4);}
		public getETypedElement_Required=():EAttribute=>{return <EAttribute> this.ETypedElementEClass.eStructuralFeatures.at(5);}
		public getETypedElement_EType=():EReference=>{return <EReference> this.ETypedElementEClass.eStructuralFeatures.at(6);}
		public getETypedElement_EGenericType=():EReference=>{return <EReference> this.ETypedElementEClass.eStructuralFeatures.at(7);}
		public getEStructuralFeature=():EClass=>{return this.EStructuralFeatureEClass;}
		
		public getEStructuralFeature_Changeable=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(0);}
		public getEStructuralFeature_Volatile=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(1);}
		public getEStructuralFeature_Transient=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(2);}
		public getEStructuralFeature_DefaultValueLiteral=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(3);}
		public getEStructuralFeature_DefaultValue=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(4);}
		public getEStructuralFeature_Unsettable=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(5);}
		public getEStructuralFeature_Derived=():EAttribute=>{return <EAttribute> this.EStructuralFeatureEClass.eStructuralFeatures.at(6);}
		public getEStructuralFeature_EContainingClass=():EReference=>{return <EReference> this.EStructuralFeatureEClass.eStructuralFeatures.at(7);}
		public getEStructuralFeature__GetFeatureID__=():EOperation=>{return <EOperation> this.EStructuralFeatureEClass.eOperations.at(0);}
		public getEStructuralFeature__GetContainerClass__=():EOperation=>{return <EOperation> this.EStructuralFeatureEClass.eOperations.at(1);}
		public getEAttribute=():EClass=>{return this.EAttributeEClass;}
		
		public getEAttribute_ID=():EAttribute=>{return <EAttribute> this.EAttributeEClass.eStructuralFeatures.at(0);}
		public getEAttribute_EAttributeType=():EReference=>{return <EReference> this.EAttributeEClass.eStructuralFeatures.at(1);}
		public getEAnnotation_=():EClass=>{return this.EAnnotationEClass;}
		
		public getEAnnotation_Source=():EAttribute=>{return <EAttribute> this.EAnnotationEClass.eStructuralFeatures.at(0);}
		public getEAnnotation_Details=():EReference=>{return <EReference> this.EAnnotationEClass.eStructuralFeatures.at(1);}
		public getEAnnotation_EModelElement=():EReference=>{return <EReference> this.EAnnotationEClass.eStructuralFeatures.at(2);}
		public getEAnnotation_Contents=():EReference=>{return <EReference> this.EAnnotationEClass.eStructuralFeatures.at(3);}
		public getEAnnotation_References=():EReference=>{return <EReference> this.EAnnotationEClass.eStructuralFeatures.at(4);}
		public getEClassifier_=():EClass=>{return this.EClassifierEClass;}
		
		public getEClassifier_InstanceClassName=():EAttribute=>{return <EAttribute> this.EClassifierEClass.eStructuralFeatures.at(0);}
		public getEClassifier_InstanceClass=():EAttribute=>{return <EAttribute> this.EClassifierEClass.eStructuralFeatures.at(1);}
		public getEClassifier_DefaultValue=():EAttribute=>{return <EAttribute> this.EClassifierEClass.eStructuralFeatures.at(2);}
		public getEClassifier_InstanceTypeName=():EAttribute=>{return <EAttribute> this.EClassifierEClass.eStructuralFeatures.at(3);}
		public getEClassifier_EPackage=():EReference=>{return <EReference> this.EClassifierEClass.eStructuralFeatures.at(4);}
		public getEClassifier_ETypeParameters=():EReference=>{return <EReference> this.EClassifierEClass.eStructuralFeatures.at(5);}
		public getEClassifier__IsInstance__Object=():EOperation=>{return <EOperation> this.EClassifierEClass.eOperations.at(0);}
		public getEClassifier__GetClassifierID__=():EOperation=>{return <EOperation> this.EClassifierEClass.eOperations.at(1);}
		public getEClass=():EClass=>{return this.EClassEClass;}
		
		public getEClass_Abstract=():EAttribute=>{return <EAttribute> this.EClassEClass.eStructuralFeatures.at(0);}
		public getEClass_Interface=():EAttribute=>{return <EAttribute> this.EClassEClass.eStructuralFeatures.at(1);}
		public getEClass_ESuperTypes=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(2);}
		public getEClass_EOperations=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(3);}
		public getEClass_EAllAttributes=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(4);}
		public getEClass_EAllReferences=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(5);}
		public getEClass_EReferences=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(6);}
		public getEClass_EAttributes=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(7);}
		public getEClass_EAllContainments=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(8);}
		public getEClass_EAllOperations=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(9);}
		public getEClass_EAllStructuralFeatures=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(10);}
		public getEClass_EAllSuperTypes=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(11);}
		public getEClass_EIDAttribute=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(12);}
		public getEClass_EStructuralFeatures=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(13);}
		public getEClass_EGenericSuperTypes=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(14);}
		public getEClass_EAllGenericSuperTypes=():EReference=>{return <EReference> this.EClassEClass.eStructuralFeatures.at(15);}
		public getEClass__IsSuperTypeOf__SomeClass=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(0);}
		public getEClass__GetFeatureCount__=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(1);}
		public getEClass__GetEStructuralFeature__FeatureID=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(2);}
		public getEClass__GetFeatureID__Feature=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(3);}
		public getEClass__GetEStructuralFeature__FeatureName=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(4);}
		public getEClass__GetOperationCount__=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(5);}
		public getEClass__GetEOperation__OperationID=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(6);}
		public getEClass__GetOperationID__Operation=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(7);}
		public getEClass__GetOverride__Operation=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(8);}
		public getEClass__GetFeatureType__Feature=():EOperation=>{return <EOperation> this.EClassEClass.eOperations.at(9);}
		public getEDataType=():EClass=>{return this.EDataTypeEClass;}
		
		public getEDataType_Serializable=():EAttribute=>{return <EAttribute> this.EDataTypeEClass.eStructuralFeatures.at(0);}
		public getEEnum=():EClass=>{return this.EEnumEClass;}
		
		public getEEnum_ELiterals=():EReference=>{return <EReference> this.EEnumEClass.eStructuralFeatures.at(0);}
		public getEEnum__GetEEnumLiteral__Name=():EOperation=>{return <EOperation> this.EEnumEClass.eOperations.at(0);}
		public getEEnum__GetEEnumLiteral__Value=():EOperation=>{return <EOperation> this.EEnumEClass.eOperations.at(1);}
		public getEEnum__GetEEnumLiteralByLiteral__Literal=():EOperation=>{return <EOperation> this.EEnumEClass.eOperations.at(2);}
		public getEEnumLiteral=():EClass=>{return this.EEnumLiteralEClass;}
		
		public getEEnumLiteral_Value=():EAttribute=>{return <EAttribute> this.EEnumLiteralEClass.eStructuralFeatures.at(0);}
		public getEEnumLiteral_Instance=():EAttribute=>{return <EAttribute> this.EEnumLiteralEClass.eStructuralFeatures.at(1);}
		public getEEnumLiteral_Literal=():EAttribute=>{return <EAttribute> this.EEnumLiteralEClass.eStructuralFeatures.at(2);}
		public getEEnumLiteral_EEnum=():EReference=>{return <EReference> this.EEnumLiteralEClass.eStructuralFeatures.at(3);}
		public getEFactory=():EClass=>{return this.EFactoryEClass;}
		
		public getEFactory_EPackage=():EReference=>{return <EReference> this.EFactoryEClass.eStructuralFeatures.at(0);}
		public getEFactory__Create__EClass=():EOperation=>{return <EOperation> this.EFactoryEClass.eOperations.at(0);}
		public getEFactory__CreateFromString__EDataType__LiteralValue=():EOperation=>{return <EOperation> this.EFactoryEClass.eOperations.at(1);}
		public getEFactory__ConvertToString__EDataType__InstanceValue=():EOperation=>{return <EOperation> this.EFactoryEClass.eOperations.at(2);}
		public getEObject=():EClass=>{return this.EObjectEClass;}
		
		public getEObject__EClass__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(0);}
		public getEObject__EIsProxy__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(1);}
		public getEObject__EResource__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(2);}
		public getEObject__EContainer__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(3);}
		public getEObject__EContainingFeature__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(4);}
		public getEObject__EContainmentFeature__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(5);}
		public getEObject__EContents__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(6);}
		public getEObject__EAllContents__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(7);}
		public getEObject__ECrossReferences__=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(8);}
		public getEObject__EGet__Feature=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(9);}
		public getEObject__EGet__Feature__Resolve=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(10);}
		public getEObject__ESet__Feature__NewValue=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(11);}
		public getEObject__EIsSet__Feature=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(12);}
		public getEObject__EUnset__Feature=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(13);}
		public getEObject__EInvoke__Operation__Arguments=():EOperation=>{return <EOperation> this.EObjectEClass.eOperations.at(14);}
		public getEOperation=():EClass=>{return this.EOperationEClass;}
		
		public getEOperation_EContainingClass=():EReference=>{return <EReference> this.EOperationEClass.eStructuralFeatures.at(0);}
		public getEOperation_ETypeParameters=():EReference=>{return <EReference> this.EOperationEClass.eStructuralFeatures.at(1);}
		public getEOperation_EParameters=():EReference=>{return <EReference> this.EOperationEClass.eStructuralFeatures.at(2);}
		public getEOperation_EExceptions=():EReference=>{return <EReference> this.EOperationEClass.eStructuralFeatures.at(3);}
		public getEOperation_EGenericExceptions=():EReference=>{return <EReference> this.EOperationEClass.eStructuralFeatures.at(4);}
		public getEOperation__GetOperationID__=():EOperation=>{return <EOperation> this.EOperationEClass.eOperations.at(0);}
		public getEOperation__IsOverrideOf__SomeOperation=():EOperation=>{return <EOperation> this.EOperationEClass.eOperations.at(1);}
		public getEPackage=():EClass=>{return this.EPackageEClass;}
		
		public getEPackage_NsURI=():EAttribute=>{return <EAttribute> this.EPackageEClass.eStructuralFeatures.at(0);}
		public getEPackage_NsPrefix=():EAttribute=>{return <EAttribute> this.EPackageEClass.eStructuralFeatures.at(1);}
		public getEPackage_EFactoryInstance=():EReference=>{return <EReference> this.EPackageEClass.eStructuralFeatures.at(2);}
		public getEPackage_EClassifiers=():EReference=>{return <EReference> this.EPackageEClass.eStructuralFeatures.at(3);}
		public getEPackage_ESubpackages=():EReference=>{return <EReference> this.EPackageEClass.eStructuralFeatures.at(4);}
		public getEPackage_ESuperPackage=():EReference=>{return <EReference> this.EPackageEClass.eStructuralFeatures.at(5);}
		public getEPackage__GetEClassifier__Name=():EOperation=>{return <EOperation> this.EPackageEClass.eOperations.at(0);}
		public getEParameter=():EClass=>{return this.EParameterEClass;}
		
		public getEParameter_EOperation=():EReference=>{return <EReference> this.EParameterEClass.eStructuralFeatures.at(0);}
		public getEReference=():EClass=>{return this.EReferenceEClass;}
		
		public getEReference_Containment=():EAttribute=>{return <EAttribute> this.EReferenceEClass.eStructuralFeatures.at(0);}
		public getEReference_Container=():EAttribute=>{return <EAttribute> this.EReferenceEClass.eStructuralFeatures.at(1);}
		public getEReference_ResolveProxies=():EAttribute=>{return <EAttribute> this.EReferenceEClass.eStructuralFeatures.at(2);}
		public getEReference_EOpposite=():EReference=>{return <EReference> this.EReferenceEClass.eStructuralFeatures.at(3);}
		public getEReference_EReferenceType=():EReference=>{return <EReference> this.EReferenceEClass.eStructuralFeatures.at(4);}
		public getEReference_EKeys=():EReference=>{return <EReference> this.EReferenceEClass.eStructuralFeatures.at(5);}
		public getEStringToStringMapEntry=():EClass=>{return this.EStringToStringMapEntryEClass;}
		
		public getEStringToStringMapEntry_Key=():EAttribute=>{return <EAttribute> this.EStringToStringMapEntryEClass.eStructuralFeatures.at(0);}
		public getEStringToStringMapEntry_Value=():EAttribute=>{return <EAttribute> this.EStringToStringMapEntryEClass.eStructuralFeatures.at(1);}
		public getEGenericType=():EClass=>{return this.EGenericTypeEClass;}
		
		public getEGenericType_EUpperBound=():EReference=>{return <EReference> this.EGenericTypeEClass.eStructuralFeatures.at(0);}
		public getEGenericType_ETypeArguments=():EReference=>{return <EReference> this.EGenericTypeEClass.eStructuralFeatures.at(1);}
		public getEGenericType_ERawType=():EReference=>{return <EReference> this.EGenericTypeEClass.eStructuralFeatures.at(2);}
		public getEGenericType_ELowerBound=():EReference=>{return <EReference> this.EGenericTypeEClass.eStructuralFeatures.at(3);}
		public getEGenericType_ETypeParameter=():EReference=>{return <EReference> this.EGenericTypeEClass.eStructuralFeatures.at(4);}
		public getEGenericType_EClassifier=():EReference=>{return <EReference> this.EGenericTypeEClass.eStructuralFeatures.at(5);}
		public getEGenericType__IsInstance__Object=():EOperation=>{return <EOperation> this.EGenericTypeEClass.eOperations.at(0);}
		public getETypeParameter=():EClass=>{return this.ETypeParameterEClass;}
		
		public getETypeParameter_EBounds=():EReference=>{return <EReference> this.ETypeParameterEClass.eStructuralFeatures.at(0);}
		public getEBigDecimal=():EDataType=>{return this.EBigDecimalEDataType;}
		public getEBigInteger=():EDataType=>{return this.EBigIntegerEDataType;}
		public getEBoolean=():EDataType=>{return this.EBooleanEDataType;}
		public getEBooleanObject=():EDataType=>{return this.EBooleanObjectEDataType;}
		public getEByte=():EDataType=>{return this.EByteEDataType;}
		public getEByteArray=():EDataType=>{return this.EByteArrayEDataType;}
		public getEByteObject=():EDataType=>{return this.EByteObjectEDataType;}
		public getEChar=():EDataType=>{return this.ECharEDataType;}
		public getECharacterObject=():EDataType=>{return this.ECharacterObjectEDataType;}
		public getEDate=():EDataType=>{return this.EDateEDataType;}
		public getEDiagnosticChain=():EDataType=>{return this.EDiagnosticChainEDataType;}
		public getEDouble=():EDataType=>{return this.EDoubleEDataType;}
		public getEDoubleObject=():EDataType=>{return this.EDoubleObjectEDataType;}
		public getEEList=():EDataType=>{return this.EEListEDataType;}
		public getEEnumerator=():EDataType=>{return this.EEnumeratorEDataType;}
		public getEFeatureMap=():EDataType=>{return this.EFeatureMapEDataType;}
		public getEFeatureMapEntry=():EDataType=>{return this.EFeatureMapEntryEDataType;}
		public getEFloat=():EDataType=>{return this.EFloatEDataType;}
		public getEFloatObject=():EDataType=>{return this.EFloatObjectEDataType;}
		public getEInt=():EDataType=>{return this.EIntEDataType;}
		public getEIntegerObject=():EDataType=>{return this.EIntegerObjectEDataType;}
		public getEJavaClass=():EDataType=>{return this.EJavaClassEDataType;}
		public getEJavaObject=():EDataType=>{return this.EJavaObjectEDataType;}
		public getELong=():EDataType=>{return this.ELongEDataType;}
		public getELongObject=():EDataType=>{return this.ELongObjectEDataType;}
		public getEMap=():EDataType=>{return this.EMapEDataType;}
		public getEResource=():EDataType=>{return this.EResourceEDataType;}
		public getEResourceSet=():EDataType=>{return this.EResourceSetEDataType;}
		public getEShort=():EDataType=>{return this.EShortEDataType;}
		public getEShortObject=():EDataType=>{return this.EShortObjectEDataType;}
		public getEString=():EDataType=>{return this.EStringEDataType;}
		public getETreeIterator=():EDataType=>{return this.ETreeIteratorEDataType;}
		public getEInvocationTargetException=():EDataType=>{return this.EInvocationTargetExceptionEDataType;}
		
		/*
		public static Literals = {
			EATTRIBUTE: EcorePackageImpl.eINSTANCE.getEAttribute(), 
			
			EANNOTATION: EcorePackageImpl.eINSTANCE.getEAnnotation_(), 
			
			ECLASS: EcorePackageImpl.eINSTANCE.getEClass(), 
			
			ECLASSIFIER: EcorePackageImpl.eINSTANCE.getEClassifier_(), 
			
			EDATATYPE: EcorePackageImpl.eINSTANCE.getEDataType(), 
			
			EENUM: EcorePackageImpl.eINSTANCE.getEEnum(), 
			
			EENUMLITERAL: EcorePackageImpl.eINSTANCE.getEEnumLiteral(), 
			
			EFACTORY: EcorePackageImpl.eINSTANCE.getEFactory(), 
			
			EMODELELEMENT: EcorePackageImpl.eINSTANCE.getEModelElement(), 
			
			ENAMEDELEMENT: EcorePackageImpl.eINSTANCE.getENamedElement(), 
			
			EOBJECT: EcorePackageImpl.eINSTANCE.getEObject(), 
			
			EOPERATION: EcorePackageImpl.eINSTANCE.getEOperation(), 
			
			EPACKAGE: EcorePackageImpl.eINSTANCE.getEPackage(), 
			
			EPARAMETER: EcorePackageImpl.eINSTANCE.getEParameter(), 
			
			EREFERENCE: EcorePackageImpl.eINSTANCE.getEReference(), 
			
			ESTRUCTURALFEATURE: EcorePackageImpl.eINSTANCE.getEStructuralFeature(), 
			
			ETYPEDELEMENT: EcorePackageImpl.eINSTANCE.getETypedElement(), 
			
			EBIGDECIMAL: EcorePackageImpl.eINSTANCE.getEBigDecimal(), 
			EBIGINTEGER: EcorePackageImpl.eINSTANCE.getEBigInteger(), 
			EBOOLEAN: EcorePackageImpl.eINSTANCE.getEBoolean(), 
			EBOOLEANOBJECT: EcorePackageImpl.eINSTANCE.getEBooleanObject(), 
			EBYTE: EcorePackageImpl.eINSTANCE.getEByte(), 
			EBYTEARRAY: EcorePackageImpl.eINSTANCE.getEByteArray(), 
			EBYTEOBJECT: EcorePackageImpl.eINSTANCE.getEByteObject(), 
			ECHAR: EcorePackageImpl.eINSTANCE.getEChar(), 
			ECHARACTEROBJECT: EcorePackageImpl.eINSTANCE.getECharacterObject(), 
			EDATE: EcorePackageImpl.eINSTANCE.getEDate(), 
			EDIAGNOSTICCHAIN: EcorePackageImpl.eINSTANCE.getEDiagnosticChain(), 
			EDOUBLE: EcorePackageImpl.eINSTANCE.getEDouble(), 
			EDOUBLEOBJECT: EcorePackageImpl.eINSTANCE.getEDoubleObject(), 
			EELIST: EcorePackageImpl.eINSTANCE.getEEList(), 
			EENUMERATOR: EcorePackageImpl.eINSTANCE.getEEnumerator(), 
			EFEATUREMAP: EcorePackageImpl.eINSTANCE.getEFeatureMap(), 
			EFEATUREMAPENTRY: EcorePackageImpl.eINSTANCE.getEFeatureMapEntry(), 
			EFLOAT: EcorePackageImpl.eINSTANCE.getEFloat(), 
			EFLOATOBJECT: EcorePackageImpl.eINSTANCE.getEFloatObject(), 
			EINT: EcorePackageImpl.eINSTANCE.getEInt(), 
			EINTEGEROBJECT: EcorePackageImpl.eINSTANCE.getEIntegerObject(), 
			EJAVACLASS: EcorePackageImpl.eINSTANCE.getEJavaClass(), 
			EJAVAOBJECT: EcorePackageImpl.eINSTANCE.getEJavaObject(), 
			ELONG: EcorePackageImpl.eINSTANCE.getELong(), 
			ELONGOBJECT: EcorePackageImpl.eINSTANCE.getELongObject(), 
			EMAP: EcorePackageImpl.eINSTANCE.getEMap(), 
			ERESOURCE: EcorePackageImpl.eINSTANCE.getEResource(), 
			ERESOURCESET: EcorePackageImpl.eINSTANCE.getEResourceSet(), 
			ESHORT: EcorePackageImpl.eINSTANCE.getEShort(), 
			ESHORTOBJECT: EcorePackageImpl.eINSTANCE.getEShortObject(), 
			ESTRING: EcorePackageImpl.eINSTANCE.getEString(), 
			ESTRINGTOSTRINGMAPENTRY: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry(), 
			
			ETREEITERATOR: EcorePackageImpl.eINSTANCE.getETreeIterator(), 
			EGENERICTYPE: EcorePackageImpl.eINSTANCE.getEGenericType(), 
			
			ETYPEPARAMETER: EcorePackageImpl.eINSTANCE.getETypeParameter(), 
			
			EINVOCATIONTARGETEXCEPTION: EcorePackageImpl.eINSTANCE.getEInvocationTargetException(), 
			EMODELELEMENT_EANNOTATIONS: EcorePackageImpl.eINSTANCE.getEModelElement_EAnnotations(), 
			ENAMEDELEMENT_NAME: EcorePackageImpl.eINSTANCE.getENamedElement_Name(), 
			ETYPEDELEMENT_ORDERED: EcorePackageImpl.eINSTANCE.getETypedElement_Ordered(), 
			ETYPEDELEMENT_UNIQUE: EcorePackageImpl.eINSTANCE.getETypedElement_Unique(), 
			ETYPEDELEMENT_LOWERBOUND: EcorePackageImpl.eINSTANCE.getETypedElement_LowerBound(), 
			ETYPEDELEMENT_UPPERBOUND: EcorePackageImpl.eINSTANCE.getETypedElement_UpperBound(), 
			ETYPEDELEMENT_MANY: EcorePackageImpl.eINSTANCE.getETypedElement_Many(), 
			ETYPEDELEMENT_REQUIRED: EcorePackageImpl.eINSTANCE.getETypedElement_Required(), 
			ETYPEDELEMENT_ETYPE: EcorePackageImpl.eINSTANCE.getETypedElement_EType(), 
			ETYPEDELEMENT_EGENERICTYPE: EcorePackageImpl.eINSTANCE.getETypedElement_EGenericType(), 
			ESTRUCTURALFEATURE_CHANGEABLE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Changeable(), 
			ESTRUCTURALFEATURE_VOLATILE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Volatile(), 
			ESTRUCTURALFEATURE_TRANSIENT: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Transient(), 
			ESTRUCTURALFEATURE_DEFAULTVALUELITERAL: EcorePackageImpl.eINSTANCE.getEStructuralFeature_DefaultValueLiteral(), 
			ESTRUCTURALFEATURE_DEFAULTVALUE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_DefaultValue(), 
			ESTRUCTURALFEATURE_UNSETTABLE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Unsettable(), 
			ESTRUCTURALFEATURE_DERIVED: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Derived(), 
			ESTRUCTURALFEATURE_ECONTAININGCLASS: EcorePackageImpl.eINSTANCE.getEStructuralFeature_EContainingClass(), 
			EATTRIBUTE_ID: EcorePackageImpl.eINSTANCE.getEAttribute_ID(), 
			EATTRIBUTE_EATTRIBUTETYPE: EcorePackageImpl.eINSTANCE.getEAttribute_EAttributeType(), 
			EANNOTATION_SOURCE: EcorePackageImpl.eINSTANCE.getEAnnotation_Source(), 
			EANNOTATION_DETAILS: EcorePackageImpl.eINSTANCE.getEAnnotation_Details(), 
			EANNOTATION_EMODELELEMENT: EcorePackageImpl.eINSTANCE.getEAnnotation_EModelElement(), 
			EANNOTATION_CONTENTS: EcorePackageImpl.eINSTANCE.getEAnnotation_Contents(), 
			EANNOTATION_REFERENCES: EcorePackageImpl.eINSTANCE.getEAnnotation_References(), 
			ECLASSIFIER_INSTANCECLASSNAME: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceClassName(), 
			ECLASSIFIER_INSTANCECLASS: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceClass(), 
			ECLASSIFIER_DEFAULTVALUE: EcorePackageImpl.eINSTANCE.getEClassifier_DefaultValue(), 
			ECLASSIFIER_INSTANCETYPENAME: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceTypeName(), 
			ECLASSIFIER_EPACKAGE: EcorePackageImpl.eINSTANCE.getEClassifier_EPackage(), 
			ECLASSIFIER_ETYPEPARAMETERS: EcorePackageImpl.eINSTANCE.getEClassifier_ETypeParameters(), 
			ECLASS_ABSTRACT: EcorePackageImpl.eINSTANCE.getEClass_Abstract(), 
			ECLASS_INTERFACE: EcorePackageImpl.eINSTANCE.getEClass_Interface(), 
			ECLASS_ESUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_ESuperTypes(), 
			ECLASS_EOPERATIONS: EcorePackageImpl.eINSTANCE.getEClass_EOperations(), 
			ECLASS_EALLATTRIBUTES: EcorePackageImpl.eINSTANCE.getEClass_EAllAttributes(), 
			ECLASS_EALLREFERENCES: EcorePackageImpl.eINSTANCE.getEClass_EAllReferences(), 
			ECLASS_EREFERENCES: EcorePackageImpl.eINSTANCE.getEClass_EReferences(), 
			ECLASS_EATTRIBUTES: EcorePackageImpl.eINSTANCE.getEClass_EAttributes(), 
			ECLASS_EALLCONTAINMENTS: EcorePackageImpl.eINSTANCE.getEClass_EAllContainments(), 
			ECLASS_EALLOPERATIONS: EcorePackageImpl.eINSTANCE.getEClass_EAllOperations(), 
			ECLASS_EALLSTRUCTURALFEATURES: EcorePackageImpl.eINSTANCE.getEClass_EAllStructuralFeatures(), 
			ECLASS_EALLSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EAllSuperTypes(), 
			ECLASS_EIDATTRIBUTE: EcorePackageImpl.eINSTANCE.getEClass_EIDAttribute(), 
			ECLASS_ESTRUCTURALFEATURES: EcorePackageImpl.eINSTANCE.getEClass_EStructuralFeatures(), 
			ECLASS_EGENERICSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EGenericSuperTypes(), 
			ECLASS_EALLGENERICSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EAllGenericSuperTypes(), 
			EDATATYPE_SERIALIZABLE: EcorePackageImpl.eINSTANCE.getEDataType_Serializable(), 
			EENUM_ELITERALS: EcorePackageImpl.eINSTANCE.getEEnum_ELiterals(), 
			EENUMLITERAL_VALUE: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Value(), 
			EENUMLITERAL_INSTANCE: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Instance(), 
			EENUMLITERAL_LITERAL: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Literal(), 
			EENUMLITERAL_EENUM: EcorePackageImpl.eINSTANCE.getEEnumLiteral_EEnum(), 
			EFACTORY_EPACKAGE: EcorePackageImpl.eINSTANCE.getEFactory_EPackage(), 
			EOPERATION_ECONTAININGCLASS: EcorePackageImpl.eINSTANCE.getEOperation_EContainingClass(), 
			EOPERATION_ETYPEPARAMETERS: EcorePackageImpl.eINSTANCE.getEOperation_ETypeParameters(), 
			EOPERATION_EPARAMETERS: EcorePackageImpl.eINSTANCE.getEOperation_EParameters(), 
			EOPERATION_EEXCEPTIONS: EcorePackageImpl.eINSTANCE.getEOperation_EExceptions(), 
			EOPERATION_EGENERICEXCEPTIONS: EcorePackageImpl.eINSTANCE.getEOperation_EGenericExceptions(), 
			EPACKAGE_NSURI: EcorePackageImpl.eINSTANCE.getEPackage_NsURI(), 
			EPACKAGE_NSPREFIX: EcorePackageImpl.eINSTANCE.getEPackage_NsPrefix(), 
			EPACKAGE_EFACTORYINSTANCE: EcorePackageImpl.eINSTANCE.getEPackage_EFactoryInstance(), 
			EPACKAGE_ECLASSIFIERS: EcorePackageImpl.eINSTANCE.getEPackage_EClassifiers(), 
			EPACKAGE_ESUBPACKAGES: EcorePackageImpl.eINSTANCE.getEPackage_ESubpackages(), 
			EPACKAGE_ESUPERPACKAGE: EcorePackageImpl.eINSTANCE.getEPackage_ESuperPackage(), 
			EPARAMETER_EOPERATION: EcorePackageImpl.eINSTANCE.getEParameter_EOperation(), 
			EREFERENCE_CONTAINMENT: EcorePackageImpl.eINSTANCE.getEReference_Containment(), 
			EREFERENCE_CONTAINER: EcorePackageImpl.eINSTANCE.getEReference_Container(), 
			EREFERENCE_RESOLVEPROXIES: EcorePackageImpl.eINSTANCE.getEReference_ResolveProxies(), 
			EREFERENCE_EOPPOSITE: EcorePackageImpl.eINSTANCE.getEReference_EOpposite(), 
			EREFERENCE_EREFERENCETYPE: EcorePackageImpl.eINSTANCE.getEReference_EReferenceType(), 
			EREFERENCE_EKEYS: EcorePackageImpl.eINSTANCE.getEReference_EKeys(), 
			ESTRINGTOSTRINGMAPENTRY_KEY: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry_Key(), 
			ESTRINGTOSTRINGMAPENTRY_VALUE: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry_Value(), 
			EGENERICTYPE_EUPPERBOUND: EcorePackageImpl.eINSTANCE.getEGenericType_EUpperBound(), 
			EGENERICTYPE_ETYPEARGUMENTS: EcorePackageImpl.eINSTANCE.getEGenericType_ETypeArguments(), 
			EGENERICTYPE_ERAWTYPE: EcorePackageImpl.eINSTANCE.getEGenericType_ERawType(), 
			EGENERICTYPE_ELOWERBOUND: EcorePackageImpl.eINSTANCE.getEGenericType_ELowerBound(), 
			EGENERICTYPE_ETYPEPARAMETER: EcorePackageImpl.eINSTANCE.getEGenericType_ETypeParameter(), 
			EGENERICTYPE_ECLASSIFIER: EcorePackageImpl.eINSTANCE.getEGenericType_EClassifier(), 
			ETYPEPARAMETER_EBOUNDS: EcorePackageImpl.eINSTANCE.getETypeParameter_EBounds()
		}
		*/
		

 
}
