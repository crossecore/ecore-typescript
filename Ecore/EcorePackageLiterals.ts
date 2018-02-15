/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

export class EcorePackageLiterals{
	public static EOBJECT:number = 10;
	public static EOBJECT_FEATURE_COUNT:number = 0;
	public static EOBJECT_OPERATION_COUNT:number = 15;
	
	
	public static EMODELELEMENT:number = 8;
	public static EMODELELEMENT_FEATURE_COUNT:number = 1;
	public static EMODELELEMENT_OPERATION_COUNT:number = 1;
	
	public static EMODELELEMENT_EANNOTATIONS:number = 0;
	
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
	
	public static EANNOTATION:number = 1;
	public static EANNOTATION_FEATURE_COUNT:number = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 5;
	public static EANNOTATION_OPERATION_COUNT:number = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
	
	public static EANNOTATION_EANNOTATIONS:number = 0;
	public static EANNOTATION_SOURCE:number = 1;
	public static EANNOTATION_DETAILS:number = 2;
	public static EANNOTATION_EMODELELEMENT:number = 3;
	public static EANNOTATION_CONTENTS:number = 4;
	public static EANNOTATION_REFERENCES:number = 5;
	
	public static EFACTORY:number = 7;
	public static EFACTORY_FEATURE_COUNT:number = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
	public static EFACTORY_OPERATION_COUNT:number = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 3;
	
	public static EFACTORY_EANNOTATIONS:number = 0;
	public static EFACTORY_EPACKAGE:number = 1;
	
	public static ENAMEDELEMENT:number = 9;
	public static ENAMEDELEMENT_FEATURE_COUNT:number = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
	public static ENAMEDELEMENT_OPERATION_COUNT:number = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
	
	public static ENAMEDELEMENT_EANNOTATIONS:number = 0;
	public static ENAMEDELEMENT_NAME:number = 1;
	
	public static ECLASSIFIER:number = 3;
	public static ECLASSIFIER_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
	public static ECLASSIFIER_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 2;
	
	public static ECLASSIFIER_EANNOTATIONS:number = 0;
	public static ECLASSIFIER_NAME:number = 1;
	public static ECLASSIFIER_INSTANCECLASSNAME:number = 2;
	public static ECLASSIFIER_INSTANCECLASS:number = 3;
	public static ECLASSIFIER_DEFAULTVALUE:number = 4;
	public static ECLASSIFIER_INSTANCETYPENAME:number = 5;
	public static ECLASSIFIER_EPACKAGE:number = 6;
	public static ECLASSIFIER_ETYPEPARAMETERS:number = 7;
	
	public static EENUMLITERAL:number = 6;
	public static EENUMLITERAL_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 4;
	public static EENUMLITERAL_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
	
	public static EENUMLITERAL_EANNOTATIONS:number = 0;
	public static EENUMLITERAL_NAME:number = 1;
	public static EENUMLITERAL_VALUE:number = 2;
	public static EENUMLITERAL_INSTANCE:number = 3;
	public static EENUMLITERAL_LITERAL:number = 4;
	public static EENUMLITERAL_EENUM:number = 5;
	
	public static EPACKAGE:number = 12;
	public static EPACKAGE_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
	public static EPACKAGE_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 1;
	
	public static EPACKAGE_EANNOTATIONS:number = 0;
	public static EPACKAGE_NAME:number = 1;
	public static EPACKAGE_NSURI:number = 2;
	public static EPACKAGE_NSPREFIX:number = 3;
	public static EPACKAGE_EFACTORYINSTANCE:number = 4;
	public static EPACKAGE_ECLASSIFIERS:number = 5;
	public static EPACKAGE_ESUBPACKAGES:number = 6;
	public static EPACKAGE_ESUPERPACKAGE:number = 7;
	
	public static ETYPEDELEMENT:number = 16;
	public static ETYPEDELEMENT_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 8;
	public static ETYPEDELEMENT_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
	
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
	
	public static ETYPEPARAMETER:number = 51;
	public static ETYPEPARAMETER_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 1;
	public static ETYPEPARAMETER_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
	
	public static ETYPEPARAMETER_EANNOTATIONS:number = 0;
	public static ETYPEPARAMETER_NAME:number = 1;
	public static ETYPEPARAMETER_EBOUNDS:number = 2;
	
	public static ECLASS:number = 2;
	public static ECLASS_FEATURE_COUNT:number = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 16;
	public static ECLASS_OPERATION_COUNT:number = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 10;
	
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
	
	public static EDATATYPE:number = 4;
	public static EDATATYPE_FEATURE_COUNT:number = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 1;
	public static EDATATYPE_OPERATION_COUNT:number = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 0;
	
	public static EDATATYPE_EANNOTATIONS:number = 0;
	public static EDATATYPE_NAME:number = 1;
	public static EDATATYPE_INSTANCECLASSNAME:number = 2;
	public static EDATATYPE_INSTANCECLASS:number = 3;
	public static EDATATYPE_DEFAULTVALUE:number = 4;
	public static EDATATYPE_INSTANCETYPENAME:number = 5;
	public static EDATATYPE_EPACKAGE:number = 6;
	public static EDATATYPE_ETYPEPARAMETERS:number = 7;
	public static EDATATYPE_SERIALIZABLE:number = 8;
	
	public static EOPERATION:number = 11;
	public static EOPERATION_FEATURE_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 5;
	public static EOPERATION_OPERATION_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
	
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
	
	public static EPARAMETER:number = 13;
	public static EPARAMETER_FEATURE_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 1;
	public static EPARAMETER_OPERATION_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 0;
	
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
	
	public static ESTRUCTURALFEATURE:number = 15;
	public static ESTRUCTURALFEATURE_FEATURE_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 8;
	public static ESTRUCTURALFEATURE_OPERATION_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
	
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
	
	public static EENUM:number = 5;
	public static EENUM_FEATURE_COUNT:number = EcorePackageLiterals.EDATATYPE_FEATURE_COUNT + 1;
	public static EENUM_OPERATION_COUNT:number = EcorePackageLiterals.EDATATYPE_OPERATION_COUNT + 3;
	
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
	
	public static EATTRIBUTE:number = 0;
	public static EATTRIBUTE_FEATURE_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
	public static EATTRIBUTE_OPERATION_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
	
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
	
	public static EREFERENCE:number = 14;
	public static EREFERENCE_FEATURE_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
	public static EREFERENCE_OPERATION_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
	
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
	
}
