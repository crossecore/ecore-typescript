import {OrderedSet} from "ecore/OrderedSet";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {NotificationChain} from "ecore/NotificationChain";
import {EGenericType} from "ecore/EGenericType";
import {EOperation} from "ecore/EOperation";
import {EClassifierImpl} from "ecore/EClassifierImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {EReference} from "ecore/EReference";
		
			export class EClassBase
			extends EClassifierImpl
			implements EClass
			{
				private _abstract:boolean = false;
				get abstract():boolean{
					return this._abstract;
				}
				set abstract(value:boolean){
					this._abstract = value; 
				}
				private _interface:boolean = false;
				get interface():boolean{
					return this._interface;
				}
				set interface(value:boolean){
					this._interface = value; 
				}
				private _eSuperTypes:OrderedSet<EClass> = null;
				
				get eSuperTypes():OrderedSet<EClass>{
					if(this._eSuperTypes===null){
						this._eSuperTypes = new OrderedSet<EClass>(this, EcorePackageLiterals.ECLASS__E_SUPER_TYPES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASS__E_SUPER_TYPES);
							
					}
					return this._eSuperTypes;
					
				}
				
				
				private _eOperations:OrderedSet<EOperation> = null;
				
				get eOperations():OrderedSet<EOperation>{
					if(this._eOperations===null){
						this._eOperations = new OrderedSet<EOperation>(this, EcorePackageLiterals.ECLASS__E_OPERATIONS, EcorePackageLiterals.EOPERATION__E_CONTAINING_CLASS);
							
					}
					return this._eOperations;
					
				}
				
				
				
				get eAllAttributes():OrderedSet<EAttribute>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eAllReferences():OrderedSet<EReference>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eReferences():OrderedSet<EReference>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eAttributes():OrderedSet<EAttribute>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eAllContainments():OrderedSet<EReference>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eAllOperations():OrderedSet<EOperation>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eAllStructuralFeatures():OrderedSet<EStructuralFeature>{
					//TODO implement derivation
					return null;
					
				}
				
				
				
				get eAllSuperTypes():OrderedSet<EClass>{
					//TODO implement derivation
					return null;
					
				}
				
				
				get eIDAttribute():EAttribute{
				
					//TODO implement derivation
					return null;
				}
				private _eStructuralFeatures:OrderedSet<EStructuralFeature> = null;
				
				get eStructuralFeatures():OrderedSet<EStructuralFeature>{
					if(this._eStructuralFeatures===null){
						this._eStructuralFeatures = new OrderedSet<EStructuralFeature>(this, EcorePackageLiterals.ECLASS__E_STRUCTURAL_FEATURES, EcorePackageLiterals.ESTRUCTURAL_FEATURE__E_CONTAINING_CLASS);
							
					}
					return this._eStructuralFeatures;
					
				}
				
				
				private _eGenericSuperTypes:OrderedSet<EGenericType> = null;
				
				get eGenericSuperTypes():OrderedSet<EGenericType>{
					if(this._eGenericSuperTypes===null){
						this._eGenericSuperTypes = new OrderedSet<EGenericType>(this, EcorePackageLiterals.ECLASS__E_GENERIC_SUPER_TYPES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASS__E_GENERIC_SUPER_TYPES);
							
					}
					return this._eGenericSuperTypes;
					
				}
				
				
				
				get eAllGenericSuperTypes():OrderedSet<EGenericType>{
					//TODO implement derivation
					return null;
					
				}
				
				

				
				public isSuperTypeOf(someClass:EClass): boolean {
					/*TODO implement function*/ 
					return null;
				};
				
				public getOverride(operation:EOperation): EOperation {
					/*TODO implement function*/ 
					return null;
				};
				
				public getFeatureType(feature:EStructuralFeature): EGenericType {
					/*TODO implement function*/ 
					return null;
				};
				
				public getFeatureID(feature:EStructuralFeature): number {
					/*TODO implement function*/ 
					return null;
				};
				
				public getFeatureCount(): number {
					/*TODO implement function*/ 
					return null;
				};
				
				public getOperationID(operation:EOperation): number {
					/*TODO implement function*/ 
					return null;
				};
				public getEStructuralFeature(...args:Array<any>):any {
					if(
						typeof args[0] === "number"
					)
					{
						return this.getEStructuralFeature_EInt(args[0]);
					}
					if(
						typeof args[0] === "string"
					)
					{
						return this.getEStructuralFeature_EString(args[0]);
					}
				};
				
				public getEStructuralFeature_EString(featureName:string): EStructuralFeature {
					/*TODO implement function*/ 
					return null;
				};
				public getEStructuralFeature_EInt(featureID:number): EStructuralFeature {
					/*TODO implement function*/ 
					return null;
				};
				
				public getEOperation(operationID:number): EOperation {
					/*TODO implement function*/ 
					return null;
				};
				
				public getOperationCount(): number {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EClassBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASS__E_STRUCTURAL_FEATURES:
							return this.eStructuralFeatures.basicAdd(otherEnd as EStructuralFeature, msgs);
						case EcorePackageLiterals.ECLASS__E_OPERATIONS:
							return this.eOperations.basicAdd(otherEnd as EOperation, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASS__E_STRUCTURAL_FEATURES:
							return this.eStructuralFeatures.basicRemove(otherEnd as EStructuralFeature, msgs);
						case EcorePackageLiterals.ECLASS__E_OPERATIONS:
							return this.eOperations.basicRemove(otherEnd as EOperation, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ECLASS__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ECLASS__NAME:
							return this.name;
						case EcorePackageLiterals.ECLASS__INSTANCE_CLASS_NAME:
							return this.instanceClassName;
						case EcorePackageLiterals.ECLASS__INSTANCE_CLASS:
							return this.instanceClass;
						case EcorePackageLiterals.ECLASS__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.ECLASS__INSTANCE_TYPE_NAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.ECLASS__E_PACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.ECLASS__E_TYPE_PARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.ECLASS__ABSTRACT:
							return this.abstract;
						case EcorePackageLiterals.ECLASS__INTERFACE:
							return this.interface;
						case EcorePackageLiterals.ECLASS__E_SUPER_TYPES:
							return this.eSuperTypes;
						case EcorePackageLiterals.ECLASS__E_OPERATIONS:
							return this.eOperations;
						case EcorePackageLiterals.ECLASS__E_ALL_ATTRIBUTES:
							return this.eAllAttributes;
						case EcorePackageLiterals.ECLASS__E_ALL_REFERENCES:
							return this.eAllReferences;
						case EcorePackageLiterals.ECLASS__E_REFERENCES:
							return this.eReferences;
						case EcorePackageLiterals.ECLASS__E_ATTRIBUTES:
							return this.eAttributes;
						case EcorePackageLiterals.ECLASS__E_ALL_CONTAINMENTS:
							return this.eAllContainments;
						case EcorePackageLiterals.ECLASS__E_ALL_OPERATIONS:
							return this.eAllOperations;
						case EcorePackageLiterals.ECLASS__E_ALL_STRUCTURAL_FEATURES:
							return this.eAllStructuralFeatures;
						case EcorePackageLiterals.ECLASS__E_ALL_SUPER_TYPES:
							return this.eAllSuperTypes;
						case EcorePackageLiterals.ECLASS__E_IDATTRIBUTE:
							return this.eIDAttribute;
						case EcorePackageLiterals.ECLASS__E_STRUCTURAL_FEATURES:
							return this.eStructuralFeatures;
						case EcorePackageLiterals.ECLASS__E_GENERIC_SUPER_TYPES:
							return this.eGenericSuperTypes;
						case EcorePackageLiterals.ECLASS__E_ALL_GENERIC_SUPER_TYPES:
							return this.eAllGenericSuperTypes;
					}
					//return this.eGetFromEClassifier(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ECLASS__ABSTRACT:
							this.abstract = <boolean> newValue;
							return;
						case EcorePackageLiterals.ECLASS__INTERFACE:
							this.interface = <boolean> newValue;
							return;
						case EcorePackageLiterals.ECLASS__E_SUPER_TYPES:
							this.eSuperTypes.clear();
							this.eSuperTypes.addAll(newValue);
							return;
						case EcorePackageLiterals.ECLASS__E_OPERATIONS:
							this.eOperations.clear();
							this.eOperations.addAll(newValue);
							return;
						case EcorePackageLiterals.ECLASS__E_STRUCTURAL_FEATURES:
							this.eStructuralFeatures.clear();
							this.eStructuralFeatures.addAll(newValue);
							return;
						case EcorePackageLiterals.ECLASS__E_GENERIC_SUPER_TYPES:
							this.eGenericSuperTypes.clear();
							this.eGenericSuperTypes.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
