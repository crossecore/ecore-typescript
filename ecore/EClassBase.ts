import {OrderedSet} from "./OrderedSet";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {AbstractCollection} from "./AbstractCollection";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EClass} from "./EClass";
import {EAttribute} from "./EAttribute";
import {NotificationChain} from "./NotificationChain";
import {EGenericType} from "./EGenericType";
import {EOperation} from "./EOperation";
import {EClassifierImpl} from "./EClassifierImpl";
import {InternalEObject} from "./InternalEObject";
import {EReference} from "./EReference";
		
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
						this._eSuperTypes = new OrderedSet<EClass>(this, EcorePackageLiterals.ECLASS_ESUPERTYPES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASS_ESUPERTYPES);
							
					}
					return this._eSuperTypes;
					
				}
				
				
				private _eOperations:OrderedSet<EOperation> = null;
				
				get eOperations():OrderedSet<EOperation>{
					if(this._eOperations===null){
						this._eOperations = new OrderedSet<EOperation>(this, EcorePackageLiterals.ECLASS_EOPERATIONS, EcorePackageLiterals.EOPERATION_ECONTAININGCLASS);
							
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
						this._eStructuralFeatures = new OrderedSet<EStructuralFeature>(this, EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES, EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS);
							
					}
					return this._eStructuralFeatures;
					
				}
				
				
				private _eGenericSuperTypes:OrderedSet<EGenericType> = null;
				
				get eGenericSuperTypes():OrderedSet<EGenericType>{
					if(this._eGenericSuperTypes===null){
						this._eGenericSuperTypes = new OrderedSet<EGenericType>(this, EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES);
							
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
				
				public getOperationCount(): number {
					/*TODO implement function*/ 
					return null;
				};
				public getEStructuralFeature(...args:Array<any>):any {
					if(args.length === 1){
						
						return this.getEStructuralFeature_number(args[0]);
					}
					if(args.length === 1){
						
						return this.getEStructuralFeature_string(args[0]);
					}
				};
				
				public getEStructuralFeature_number(featureID:number): EStructuralFeature {
					/*TODO implement function*/ 
					return null;
				};
				public getEStructuralFeature_string(featureName:string): EStructuralFeature {
					/*TODO implement function*/ 
					return null;
				};
				
				public getEOperation(operationID:number): EOperation {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EClassBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASS_EOPERATIONS:
							return this.eOperations.basicAdd(otherEnd as EOperation, msgs);
						case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
							return this.eStructuralFeatures.basicAdd(otherEnd as EStructuralFeature, msgs);
					}
					//return this.eInverseAddFromEClassifier(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEClass = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASS_EOPERATIONS:
							return this.eOperations.basicRemove(otherEnd as EOperation, msgs);
						case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
							return this.eStructuralFeatures.basicRemove(otherEnd as EStructuralFeature, msgs);
					}
					//return this.eInverseRemoveFromEClassifier(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEClass = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ECLASS_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ECLASS_NAME:
							return this.name;
						case EcorePackageLiterals.ECLASS_INSTANCECLASSNAME:
							return this.instanceClassName;
						case EcorePackageLiterals.ECLASS_INSTANCECLASS:
							return this.instanceClass;
						case EcorePackageLiterals.ECLASS_DEFAULTVALUE:
							return this.defaultValue;
						case EcorePackageLiterals.ECLASS_INSTANCETYPENAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.ECLASS_EPACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.ECLASS_ETYPEPARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.ECLASS_ABSTRACT:
							return this.abstract;
						case EcorePackageLiterals.ECLASS_INTERFACE:
							return this.interface;
						case EcorePackageLiterals.ECLASS_ESUPERTYPES:
							return this.eSuperTypes;
						case EcorePackageLiterals.ECLASS_EOPERATIONS:
							return this.eOperations;
						case EcorePackageLiterals.ECLASS_EALLATTRIBUTES:
							return this.eAllAttributes;
						case EcorePackageLiterals.ECLASS_EALLREFERENCES:
							return this.eAllReferences;
						case EcorePackageLiterals.ECLASS_EREFERENCES:
							return this.eReferences;
						case EcorePackageLiterals.ECLASS_EATTRIBUTES:
							return this.eAttributes;
						case EcorePackageLiterals.ECLASS_EALLCONTAINMENTS:
							return this.eAllContainments;
						case EcorePackageLiterals.ECLASS_EALLOPERATIONS:
							return this.eAllOperations;
						case EcorePackageLiterals.ECLASS_EALLSTRUCTURALFEATURES:
							return this.eAllStructuralFeatures;
						case EcorePackageLiterals.ECLASS_EALLSUPERTYPES:
							return this.eAllSuperTypes;
						case EcorePackageLiterals.ECLASS_EIDATTRIBUTE:
							return this.eIDAttribute;
						case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
							return this.eStructuralFeatures;
						case EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES:
							return this.eGenericSuperTypes;
						case EcorePackageLiterals.ECLASS_EALLGENERICSUPERTYPES:
							return this.eAllGenericSuperTypes;
					}
					//return this.eGetFromEClassifier(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ECLASS_ABSTRACT:
							this.abstract = <boolean> newValue;
							return;
						case EcorePackageLiterals.ECLASS_INTERFACE:
							this.interface = <boolean> newValue;
							return;
						case EcorePackageLiterals.ECLASS_ESUPERTYPES:
							this.eSuperTypes.clear();
							this.eSuperTypes.addAll(newValue);
							return;
						case EcorePackageLiterals.ECLASS_EOPERATIONS:
							this.eOperations.clear();
							this.eOperations.addAll(newValue);
							return;
						case EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
							this.eStructuralFeatures.clear();
							this.eStructuralFeatures.addAll(newValue);
							return;
						case EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES:
							this.eGenericSuperTypes.clear();
							this.eGenericSuperTypes.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
