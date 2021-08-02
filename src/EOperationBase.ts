import {OrderedSet} from "ecore/OrderedSet";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EClassifier} from "ecore/EClassifier";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {EParameter} from "ecore/EParameter";
import {EGenericType} from "ecore/EGenericType";
import {EOperation} from "ecore/EOperation";
import {InternalEObject} from "ecore/InternalEObject";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
import {ETypeParameter} from "ecore/ETypeParameter";
		
			export class EOperationBase
			extends ETypedElementImpl
			implements EOperation
			{
				get eContainingClass():EClass{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EOPERATION__E_CONTAINING_CLASS) return null;
					return this.eInternalContainer() as EClass;
				}
				private _eTypeParameters:OrderedSet<ETypeParameter> = null;
				
				get eTypeParameters():OrderedSet<ETypeParameter>{
					if(this._eTypeParameters===null){
						this._eTypeParameters = new OrderedSet<ETypeParameter>(this, EcorePackageLiterals.EOPERATION__E_TYPE_PARAMETERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION__E_TYPE_PARAMETERS);
							
					}
					return this._eTypeParameters;
					
				}
				
				
				private _eParameters:OrderedSet<EParameter> = null;
				
				get eParameters():OrderedSet<EParameter>{
					if(this._eParameters===null){
						this._eParameters = new OrderedSet<EParameter>(this, EcorePackageLiterals.EOPERATION__E_PARAMETERS, EcorePackageLiterals.EPARAMETER__E_OPERATION);
							
					}
					return this._eParameters;
					
				}
				
				
				private _eExceptions:OrderedSet<EClassifier> = null;
				
				get eExceptions():OrderedSet<EClassifier>{
					if(this._eExceptions===null){
						this._eExceptions = new OrderedSet<EClassifier>(this, EcorePackageLiterals.EOPERATION__E_EXCEPTIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION__E_EXCEPTIONS);
							
					}
					return this._eExceptions;
					
				}
				
				
				private _eGenericExceptions:OrderedSet<EGenericType> = null;
				
				get eGenericExceptions():OrderedSet<EGenericType>{
					if(this._eGenericExceptions===null){
						this._eGenericExceptions = new OrderedSet<EGenericType>(this, EcorePackageLiterals.EOPERATION__E_GENERIC_EXCEPTIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EOPERATION__E_GENERIC_EXCEPTIONS);
							
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
						case EcorePackageLiterals.EOPERATION__E_CONTAINING_CLASS:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEContainingClass(otherEnd as EClass, msgs);
						case EcorePackageLiterals.EOPERATION__E_PARAMETERS:
							return this.eParameters.basicAdd(otherEnd as EParameter, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION__E_CONTAINING_CLASS:
							return this.basicSetEContainingClass(null, msgs);
						case EcorePackageLiterals.EOPERATION__E_PARAMETERS:
							return this.eParameters.basicRemove(otherEnd as EParameter, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EOPERATION__NAME:
							return this.name;
						case EcorePackageLiterals.EOPERATION__ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EOPERATION__UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EOPERATION__LOWER_BOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EOPERATION__UPPER_BOUND:
							return this.upperBound;
						case EcorePackageLiterals.EOPERATION__MANY:
							return this.many;
						case EcorePackageLiterals.EOPERATION__REQUIRED:
							return this.required;
						case EcorePackageLiterals.EOPERATION__E_TYPE:
							return this.eType;
						case EcorePackageLiterals.EOPERATION__E_GENERIC_TYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EOPERATION__E_CONTAINING_CLASS:
							return this.eContainingClass;
						case EcorePackageLiterals.EOPERATION__E_TYPE_PARAMETERS:
							return this.eTypeParameters;
						case EcorePackageLiterals.EOPERATION__E_PARAMETERS:
							return this.eParameters;
						case EcorePackageLiterals.EOPERATION__E_EXCEPTIONS:
							return this.eExceptions;
						case EcorePackageLiterals.EOPERATION__E_GENERIC_EXCEPTIONS:
							return this.eGenericExceptions;
					}
					//return this.eGetFromETypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EOPERATION__E_TYPE_PARAMETERS:
							this.eTypeParameters.clear();
							this.eTypeParameters.addAll(newValue);
							return;
						case EcorePackageLiterals.EOPERATION__E_PARAMETERS:
							this.eParameters.clear();
							this.eParameters.addAll(newValue);
							return;
						case EcorePackageLiterals.EOPERATION__E_EXCEPTIONS:
							this.eExceptions.clear();
							this.eExceptions.addAll(newValue);
							return;
						case EcorePackageLiterals.EOPERATION__E_GENERIC_EXCEPTIONS:
							this.eGenericExceptions.clear();
							this.eGenericExceptions.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
