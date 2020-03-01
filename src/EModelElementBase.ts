import {OrderedSet} from "./OrderedSet";
import {EAnnotation} from "./EAnnotation";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {EModelElement} from "./EModelElement";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
		
			export class EModelElementBase
			extends BasicEObjectImpl
			implements EModelElement
			{
				private _eAnnotations:OrderedSet<EAnnotation> = null;
				
				get eAnnotations():OrderedSet<EAnnotation>{
					if(this._eAnnotations===null){
						this._eAnnotations = new OrderedSet<EAnnotation>(this, EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, EcorePackageLiterals.EANNOTATION_EMODELELEMENT);
							
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
						case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
							return this.eAnnotations.basicAdd(otherEnd as EAnnotation, msgs);
					}
					//return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEModelElement = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
							return this.eAnnotations.basicRemove(otherEnd as EAnnotation, msgs);
					}
					//return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEModelElement = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
							return this.eAnnotations;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
							this.eAnnotations.clear();
							this.eAnnotations.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
