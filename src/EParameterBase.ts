import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EParameter} from "ecore/EParameter";
import {EOperation} from "ecore/EOperation";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ETypedElementImpl} from "ecore/ETypedElementImpl";
		
			export class EParameterBase
			extends ETypedElementImpl
			implements EParameter
			{
				get eOperation():EOperation{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EPARAMETER__E_OPERATION) return null;
					return this.eInternalContainer() as EOperation;
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EParameterBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPARAMETER__E_OPERATION:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEOperation(otherEnd as EOperation, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPARAMETER__E_OPERATION:
							return this.basicSetEOperation(null, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EPARAMETER__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EPARAMETER__NAME:
							return this.name;
						case EcorePackageLiterals.EPARAMETER__ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EPARAMETER__UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EPARAMETER__LOWER_BOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EPARAMETER__UPPER_BOUND:
							return this.upperBound;
						case EcorePackageLiterals.EPARAMETER__MANY:
							return this.many;
						case EcorePackageLiterals.EPARAMETER__REQUIRED:
							return this.required;
						case EcorePackageLiterals.EPARAMETER__E_TYPE:
							return this.eType;
						case EcorePackageLiterals.EPARAMETER__E_GENERIC_TYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EPARAMETER__E_OPERATION:
							return this.eOperation;
					}
					//return this.eGetFromETypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
