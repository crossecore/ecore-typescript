import {OrderedSet} from "./OrderedSet";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EClassifier} from "./EClassifier";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {EParameter} from "./EParameter";
import {EGenericType} from "./EGenericType";
import {EOperation} from "./EOperation";
import {InternalEObject} from "./InternalEObject";
import {ETypedElementImpl} from "./ETypedElementImpl";
import {ETypeParameter} from "./ETypeParameter";
		
			export class EOperationBase
			extends ETypedElementImpl
			implements EOperation
			{
				get eContainingClass():EClass{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EOPERATION_ECONTAININGCLASS) return null;
					return this.eInternalContainer() as EClass;
				}
				private _eTypeParameters:OrderedSet<ETypeParameter> = null;
				
				get eTypeParameters():OrderedSet<ETypeParameter>{
					if(this._eTypeParameters===null){
						this._eTypeParameters = new OrderedSet<ETypeParameter>(this, EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS);
							
					}
					return this._eTypeParameters;
					
				}
				
				
				private _eParameters:OrderedSet<EParameter> = null;
				
				get eParameters():OrderedSet<EParameter>{
					if(this._eParameters===null){
						this._eParameters = new OrderedSet<EParameter>(this, EcorePackageLiterals.EOPERATION_EPARAMETERS, EcorePackageLiterals.EPARAMETER_EOPERATION);
							
					}
					return this._eParameters;
					
				}
				
				
				private _eExceptions:OrderedSet<EClassifier> = null;
				
				get eExceptions():OrderedSet<EClassifier>{
					if(this._eExceptions===null){
						this._eExceptions = new OrderedSet<EClassifier>(this, EcorePackageLiterals.EOPERATION_EEXCEPTIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION_EEXCEPTIONS);
							
					}
					return this._eExceptions;
					
				}
				
				
				private _eGenericExceptions:OrderedSet<EGenericType> = null;
				
				get eGenericExceptions():OrderedSet<EGenericType>{
					if(this._eGenericExceptions===null){
						this._eGenericExceptions = new OrderedSet<EGenericType>(this, EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS);
							
					}
					return this._eGenericExceptions;
					
				}
				
				

				
				public isOverrideOf(someOperation:EOperation): boolean {
					/*TODO implement function*/ 
					return null;
				};
				
				public getOperationID(): number {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EOperationBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEContainingClass(otherEnd as EClass, msgs);
						case EcorePackageLiterals.EOPERATION_EPARAMETERS:
							return this.eParameters.basicAdd(otherEnd as EParameter, msgs);
					}
					//return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEOperation = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
							return this.basicSetEContainingClass(null, msgs);
						case EcorePackageLiterals.EOPERATION_EPARAMETERS:
							return this.eParameters.basicRemove(otherEnd as EParameter, msgs);
					}
					//return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEOperation = this.eInverseRemove;
			
				public basicSetEContainingClass(newobj:EClass, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EOPERATION_ECONTAININGCLASS, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EOPERATION_NAME:
							return this.name;
						case EcorePackageLiterals.EOPERATION_ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EOPERATION_UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EOPERATION_LOWERBOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EOPERATION_UPPERBOUND:
							return this.upperBound;
						case EcorePackageLiterals.EOPERATION_MANY:
							return this.many;
						case EcorePackageLiterals.EOPERATION_REQUIRED:
							return this.required;
						case EcorePackageLiterals.EOPERATION_ETYPE:
							return this.eType;
						case EcorePackageLiterals.EOPERATION_EGENERICTYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EOPERATION_ECONTAININGCLASS:
							return this.eContainingClass;
						case EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.EOPERATION_EPARAMETERS:
							return this.eParameters;
						case EcorePackageLiterals.EOPERATION_EEXCEPTIONS:
							return this.eExceptions;
						case EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS:
							return this.eGenericExceptions;
					}
					//return this.eGetFromETypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS:
							this.eTypeParameters.clear();
							this.eTypeParameters.addAll(newValue);
							return;
						case EcorePackageLiterals.EOPERATION_EPARAMETERS:
							this.eParameters.clear();
							this.eParameters.addAll(newValue);
							return;
						case EcorePackageLiterals.EOPERATION_EEXCEPTIONS:
							this.eExceptions.clear();
							this.eExceptions.addAll(newValue);
							return;
						case EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS:
							this.eGenericExceptions.clear();
							this.eGenericExceptions.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
