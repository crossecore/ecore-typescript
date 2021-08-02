export class EcorePackageLiterals{
	public static EMODELELEMENT:number = 8;
	public static EMODELELEMENT_FEATURE_COUNT:number = 1;
	public static EMODELELEMENT_OPERATION_COUNT:number = 1;
	
	public static EMODEL_ELEMENT__E_ANNOTATIONS:number = 0;
	
	public static ENAMEDELEMENT:number = 9;
	public static ENAMEDELEMENT_FEATURE_COUNT:number = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
	public static ENAMEDELEMENT_OPERATION_COUNT:number = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
	
	public static ENAMED_ELEMENT__E_ANNOTATIONS:number = 0;
	public static ENAMED_ELEMENT__NAME:number = 1;
	
	public static ETYPEDELEMENT:number = 16;
	public static ETYPEDELEMENT_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 8;
	public static ETYPEDELEMENT_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
	
	public static ETYPED_ELEMENT__E_ANNOTATIONS:number = 0;
	public static ETYPED_ELEMENT__NAME:number = 1;
	public static ETYPED_ELEMENT__ORDERED:number = 2;
	public static ETYPED_ELEMENT__UNIQUE:number = 3;
	public static ETYPED_ELEMENT__LOWER_BOUND:number = 4;
	public static ETYPED_ELEMENT__UPPER_BOUND:number = 5;
	public static ETYPED_ELEMENT__MANY:number = 6;
	public static ETYPED_ELEMENT__REQUIRED:number = 7;
	public static ETYPED_ELEMENT__E_TYPE:number = 8;
	public static ETYPED_ELEMENT__E_GENERIC_TYPE:number = 9;
	
	public static ESTRUCTURALFEATURE:number = 15;
	public static ESTRUCTURALFEATURE_FEATURE_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 8;
	public static ESTRUCTURALFEATURE_OPERATION_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
	
	public static ESTRUCTURAL_FEATURE__E_ANNOTATIONS:number = 0;
	public static ESTRUCTURAL_FEATURE__NAME:number = 1;
	public static ESTRUCTURAL_FEATURE__ORDERED:number = 2;
	public static ESTRUCTURAL_FEATURE__UNIQUE:number = 3;
	public static ESTRUCTURAL_FEATURE__LOWER_BOUND:number = 4;
	public static ESTRUCTURAL_FEATURE__UPPER_BOUND:number = 5;
	public static ESTRUCTURAL_FEATURE__MANY:number = 6;
	public static ESTRUCTURAL_FEATURE__REQUIRED:number = 7;
	public static ESTRUCTURAL_FEATURE__E_TYPE:number = 8;
	public static ESTRUCTURAL_FEATURE__E_GENERIC_TYPE:number = 9;
	public static ESTRUCTURAL_FEATURE__CHANGEABLE:number = 10;
	public static ESTRUCTURAL_FEATURE__VOLATILE:number = 11;
	public static ESTRUCTURAL_FEATURE__TRANSIENT:number = 12;
	public static ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL:number = 13;
	public static ESTRUCTURAL_FEATURE__DEFAULT_VALUE:number = 14;
	public static ESTRUCTURAL_FEATURE__UNSETTABLE:number = 15;
	public static ESTRUCTURAL_FEATURE__DERIVED:number = 16;
	public static ESTRUCTURAL_FEATURE__E_CONTAINING_CLASS:number = 17;
	
	public static EATTRIBUTE:number = 0;
	public static EATTRIBUTE_FEATURE_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
	public static EATTRIBUTE_OPERATION_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
	
	public static EATTRIBUTE__E_ANNOTATIONS:number = 0;
	public static EATTRIBUTE__NAME:number = 1;
	public static EATTRIBUTE__ORDERED:number = 2;
	public static EATTRIBUTE__UNIQUE:number = 3;
	public static EATTRIBUTE__LOWER_BOUND:number = 4;
	public static EATTRIBUTE__UPPER_BOUND:number = 5;
	public static EATTRIBUTE__MANY:number = 6;
	public static EATTRIBUTE__REQUIRED:number = 7;
	public static EATTRIBUTE__E_TYPE:number = 8;
	public static EATTRIBUTE__E_GENERIC_TYPE:number = 9;
	public static EATTRIBUTE__CHANGEABLE:number = 10;
	public static EATTRIBUTE__VOLATILE:number = 11;
	public static EATTRIBUTE__TRANSIENT:number = 12;
	public static EATTRIBUTE__DEFAULT_VALUE_LITERAL:number = 13;
	public static EATTRIBUTE__DEFAULT_VALUE:number = 14;
	public static EATTRIBUTE__UNSETTABLE:number = 15;
	public static EATTRIBUTE__DERIVED:number = 16;
	public static EATTRIBUTE__E_CONTAINING_CLASS:number = 17;
	public static EATTRIBUTE__I_D:number = 18;
	public static EATTRIBUTE__E_ATTRIBUTE_TYPE:number = 19;
	
	public static EANNOTATION:number = 1;
	public static EANNOTATION_FEATURE_COUNT:number = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 5;
	public static EANNOTATION_OPERATION_COUNT:number = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
	
	public static EANNOTATION__E_ANNOTATIONS:number = 0;
	public static EANNOTATION__SOURCE:number = 1;
	public static EANNOTATION__DETAILS:number = 2;
	public static EANNOTATION__E_MODEL_ELEMENT:number = 3;
	public static EANNOTATION__CONTENTS:number = 4;
	public static EANNOTATION__REFERENCES:number = 5;
	
	public static ECLASSIFIER:number = 3;
	public static ECLASSIFIER_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
	public static ECLASSIFIER_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 2;
	
	public static ECLASSIFIER__E_ANNOTATIONS:number = 0;
	public static ECLASSIFIER__NAME:number = 1;
	public static ECLASSIFIER__INSTANCE_CLASS_NAME:number = 2;
	public static ECLASSIFIER__INSTANCE_CLASS:number = 3;
	public static ECLASSIFIER__DEFAULT_VALUE:number = 4;
	public static ECLASSIFIER__INSTANCE_TYPE_NAME:number = 5;
	public static ECLASSIFIER__E_PACKAGE:number = 6;
	public static ECLASSIFIER__E_TYPE_PARAMETERS:number = 7;
	
	public static ECLASS:number = 2;
	public static ECLASS_FEATURE_COUNT:number = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 16;
	public static ECLASS_OPERATION_COUNT:number = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 10;
	
	public static ECLASS__E_ANNOTATIONS:number = 0;
	public static ECLASS__NAME:number = 1;
	public static ECLASS__INSTANCE_CLASS_NAME:number = 2;
	public static ECLASS__INSTANCE_CLASS:number = 3;
	public static ECLASS__DEFAULT_VALUE:number = 4;
	public static ECLASS__INSTANCE_TYPE_NAME:number = 5;
	public static ECLASS__E_PACKAGE:number = 6;
	public static ECLASS__E_TYPE_PARAMETERS:number = 7;
	public static ECLASS__ABSTRACT:number = 8;
	public static ECLASS__INTERFACE:number = 9;
	public static ECLASS__E_SUPER_TYPES:number = 10;
	public static ECLASS__E_OPERATIONS:number = 11;
	public static ECLASS__E_ALL_ATTRIBUTES:number = 12;
	public static ECLASS__E_ALL_REFERENCES:number = 13;
	public static ECLASS__E_REFERENCES:number = 14;
	public static ECLASS__E_ATTRIBUTES:number = 15;
	public static ECLASS__E_ALL_CONTAINMENTS:number = 16;
	public static ECLASS__E_ALL_OPERATIONS:number = 17;
	public static ECLASS__E_ALL_STRUCTURAL_FEATURES:number = 18;
	public static ECLASS__E_ALL_SUPER_TYPES:number = 19;
	public static ECLASS__E_IDATTRIBUTE:number = 20;
	public static ECLASS__E_STRUCTURAL_FEATURES:number = 21;
	public static ECLASS__E_GENERIC_SUPER_TYPES:number = 22;
	public static ECLASS__E_ALL_GENERIC_SUPER_TYPES:number = 23;
	
	public static EDATATYPE:number = 4;
	public static EDATATYPE_FEATURE_COUNT:number = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 1;
	public static EDATATYPE_OPERATION_COUNT:number = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 0;
	
	public static EDATA_TYPE__E_ANNOTATIONS:number = 0;
	public static EDATA_TYPE__NAME:number = 1;
	public static EDATA_TYPE__INSTANCE_CLASS_NAME:number = 2;
	public static EDATA_TYPE__INSTANCE_CLASS:number = 3;
	public static EDATA_TYPE__DEFAULT_VALUE:number = 4;
	public static EDATA_TYPE__INSTANCE_TYPE_NAME:number = 5;
	public static EDATA_TYPE__E_PACKAGE:number = 6;
	public static EDATA_TYPE__E_TYPE_PARAMETERS:number = 7;
	public static EDATA_TYPE__SERIALIZABLE:number = 8;
	
	public static EENUM:number = 5;
	public static EENUM_FEATURE_COUNT:number = EcorePackageLiterals.EDATATYPE_FEATURE_COUNT + 1;
	public static EENUM_OPERATION_COUNT:number = EcorePackageLiterals.EDATATYPE_OPERATION_COUNT + 3;
	
	public static EENUM__E_ANNOTATIONS:number = 0;
	public static EENUM__NAME:number = 1;
	public static EENUM__INSTANCE_CLASS_NAME:number = 2;
	public static EENUM__INSTANCE_CLASS:number = 3;
	public static EENUM__DEFAULT_VALUE:number = 4;
	public static EENUM__INSTANCE_TYPE_NAME:number = 5;
	public static EENUM__E_PACKAGE:number = 6;
	public static EENUM__E_TYPE_PARAMETERS:number = 7;
	public static EENUM__SERIALIZABLE:number = 8;
	public static EENUM__E_LITERALS:number = 9;
	
	public static EENUMLITERAL:number = 6;
	public static EENUMLITERAL_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 4;
	public static EENUMLITERAL_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
	
	public static EENUM_LITERAL__E_ANNOTATIONS:number = 0;
	public static EENUM_LITERAL__NAME:number = 1;
	public static EENUM_LITERAL__VALUE:number = 2;
	public static EENUM_LITERAL__INSTANCE:number = 3;
	public static EENUM_LITERAL__LITERAL:number = 4;
	public static EENUM_LITERAL__E_ENUM:number = 5;
	
	public static EFACTORY:number = 7;
	public static EFACTORY_FEATURE_COUNT:number = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
	public static EFACTORY_OPERATION_COUNT:number = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 3;
	
	public static EFACTORY__E_ANNOTATIONS:number = 0;
	public static EFACTORY__E_PACKAGE:number = 1;
	
	public static EOBJECT:number = 10;
	public static EOBJECT_FEATURE_COUNT:number = 0;
	public static EOBJECT_OPERATION_COUNT:number = 15;
	
	
	public static EOPERATION:number = 11;
	public static EOPERATION_FEATURE_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 5;
	public static EOPERATION_OPERATION_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
	
	public static EOPERATION__E_ANNOTATIONS:number = 0;
	public static EOPERATION__NAME:number = 1;
	public static EOPERATION__ORDERED:number = 2;
	public static EOPERATION__UNIQUE:number = 3;
	public static EOPERATION__LOWER_BOUND:number = 4;
	public static EOPERATION__UPPER_BOUND:number = 5;
	public static EOPERATION__MANY:number = 6;
	public static EOPERATION__REQUIRED:number = 7;
	public static EOPERATION__E_TYPE:number = 8;
	public static EOPERATION__E_GENERIC_TYPE:number = 9;
	public static EOPERATION__E_CONTAINING_CLASS:number = 10;
	public static EOPERATION__E_TYPE_PARAMETERS:number = 11;
	public static EOPERATION__E_PARAMETERS:number = 12;
	public static EOPERATION__E_EXCEPTIONS:number = 13;
	public static EOPERATION__E_GENERIC_EXCEPTIONS:number = 14;
	
	public static EPACKAGE:number = 12;
	public static EPACKAGE_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
	public static EPACKAGE_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 1;
	
	public static EPACKAGE__E_ANNOTATIONS:number = 0;
	public static EPACKAGE__NAME:number = 1;
	public static EPACKAGE__NS_URI:number = 2;
	public static EPACKAGE__NS_PREFIX:number = 3;
	public static EPACKAGE__E_FACTORY_INSTANCE:number = 4;
	public static EPACKAGE__E_CLASSIFIERS:number = 5;
	public static EPACKAGE__E_SUBPACKAGES:number = 6;
	public static EPACKAGE__E_SUPER_PACKAGE:number = 7;
	
	public static EPARAMETER:number = 13;
	public static EPARAMETER_FEATURE_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 1;
	public static EPARAMETER_OPERATION_COUNT:number = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 0;
	
	public static EPARAMETER__E_ANNOTATIONS:number = 0;
	public static EPARAMETER__NAME:number = 1;
	public static EPARAMETER__ORDERED:number = 2;
	public static EPARAMETER__UNIQUE:number = 3;
	public static EPARAMETER__LOWER_BOUND:number = 4;
	public static EPARAMETER__UPPER_BOUND:number = 5;
	public static EPARAMETER__MANY:number = 6;
	public static EPARAMETER__REQUIRED:number = 7;
	public static EPARAMETER__E_TYPE:number = 8;
	public static EPARAMETER__E_GENERIC_TYPE:number = 9;
	public static EPARAMETER__E_OPERATION:number = 10;
	
	public static EREFERENCE:number = 14;
	public static EREFERENCE_FEATURE_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
	public static EREFERENCE_OPERATION_COUNT:number = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
	
	public static EREFERENCE__E_ANNOTATIONS:number = 0;
	public static EREFERENCE__NAME:number = 1;
	public static EREFERENCE__ORDERED:number = 2;
	public static EREFERENCE__UNIQUE:number = 3;
	public static EREFERENCE__LOWER_BOUND:number = 4;
	public static EREFERENCE__UPPER_BOUND:number = 5;
	public static EREFERENCE__MANY:number = 6;
	public static EREFERENCE__REQUIRED:number = 7;
	public static EREFERENCE__E_TYPE:number = 8;
	public static EREFERENCE__E_GENERIC_TYPE:number = 9;
	public static EREFERENCE__CHANGEABLE:number = 10;
	public static EREFERENCE__VOLATILE:number = 11;
	public static EREFERENCE__TRANSIENT:number = 12;
	public static EREFERENCE__DEFAULT_VALUE_LITERAL:number = 13;
	public static EREFERENCE__DEFAULT_VALUE:number = 14;
	public static EREFERENCE__UNSETTABLE:number = 15;
	public static EREFERENCE__DERIVED:number = 16;
	public static EREFERENCE__E_CONTAINING_CLASS:number = 17;
	public static EREFERENCE__CONTAINMENT:number = 18;
	public static EREFERENCE__CONTAINER:number = 19;
	public static EREFERENCE__RESOLVE_PROXIES:number = 20;
	public static EREFERENCE__E_OPPOSITE:number = 21;
	public static EREFERENCE__E_REFERENCE_TYPE:number = 22;
	public static EREFERENCE__E_KEYS:number = 23;
	
	public static ESTRINGTOSTRINGMAPENTRY:number = 48;
	public static ESTRINGTOSTRINGMAPENTRY_FEATURE_COUNT:number = 2;
	public static ESTRINGTOSTRINGMAPENTRY_OPERATION_COUNT:number = 0;
	
	public static ESTRING_TO_STRING_MAP_ENTRY__KEY:number = 0;
	public static ESTRING_TO_STRING_MAP_ENTRY__VALUE:number = 1;
	
	public static EGENERICTYPE:number = 50;
	public static EGENERICTYPE_FEATURE_COUNT:number = 6;
	public static EGENERICTYPE_OPERATION_COUNT:number = 1;
	
	public static EGENERIC_TYPE__E_UPPER_BOUND:number = 0;
	public static EGENERIC_TYPE__E_TYPE_ARGUMENTS:number = 1;
	public static EGENERIC_TYPE__E_RAW_TYPE:number = 2;
	public static EGENERIC_TYPE__E_LOWER_BOUND:number = 3;
	public static EGENERIC_TYPE__E_TYPE_PARAMETER:number = 4;
	public static EGENERIC_TYPE__E_CLASSIFIER:number = 5;
	
	public static ETYPEPARAMETER:number = 51;
	public static ETYPEPARAMETER_FEATURE_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 1;
	public static ETYPEPARAMETER_OPERATION_COUNT:number = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
	
	public static ETYPE_PARAMETER__E_ANNOTATIONS:number = 0;
	public static ETYPE_PARAMETER__NAME:number = 1;
	public static ETYPE_PARAMETER__E_BOUNDS:number = 2;
	
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
