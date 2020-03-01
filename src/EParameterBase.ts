import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EParameter} from "./EParameter";
import {EOperation} from "./EOperation";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {ETypedElementImpl} from "./ETypedElementImpl";
		
			export class EParameterBase
			extends ETypedElementImpl
			implements EParameter
			{
				get eOperation():EOperation{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EPARAMETER_EOPERATION) return null;
					return this.eInternalContainer() as EOperation;
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EParameterBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPARAMETER_EOPERATION:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEOperation(otherEnd as EOperation, msgs);
					}
					//return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEParameter = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPARAMETER_EOPERATION:
							return this.basicSetEOperation(null, msgs);
					}
					//return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEParameter = this.eInverseRemove;
			
				public basicSetEOperation(newobj:EOperation, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EPARAMETER_EOPERATION, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EPARAMETER_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EPARAMETER_NAME:
							return this.name;
						case EcorePackageLiterals.EPARAMETER_ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EPARAMETER_UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EPARAMETER_LOWERBOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EPARAMETER_UPPERBOUND:
							return this.upperBound;
						case EcorePackageLiterals.EPARAMETER_MANY:
							return this.many;
						case EcorePackageLiterals.EPARAMETER_REQUIRED:
							return this.required;
						case EcorePackageLiterals.EPARAMETER_ETYPE:
							return this.eType;
						case EcorePackageLiterals.EPARAMETER_EGENERICTYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EPARAMETER_EOPERATION:
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
			
