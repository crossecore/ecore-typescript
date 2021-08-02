import {OrderedSet} from "ecore/OrderedSet";
import {EAnnotation} from "ecore/EAnnotation";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EModelElement} from "ecore/EModelElement";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class EModelElementBase
			extends BasicEObjectImpl
			implements EModelElement
			{
				private _eAnnotations:OrderedSet<EAnnotation> = null;
				
				get eAnnotations():OrderedSet<EAnnotation>{
					if(this._eAnnotations===null){
						this._eAnnotations = new OrderedSet<EAnnotation>(this, EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS, EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT);
							
					}
					return this._eAnnotations;
					
				}
				
				

				
				public getEAnnotation(source:string): EAnnotation {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EModelElementBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS:
							return this.eAnnotations.basicAdd(otherEnd as EAnnotation, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS:
							return this.eAnnotations.basicRemove(otherEnd as EAnnotation, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS:
							return this.eAnnotations;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS:
							this.eAnnotations.clear();
							this.eAnnotations.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
