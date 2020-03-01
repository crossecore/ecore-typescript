import {OrderedSet} from "./OrderedSet";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EcoreEMap} from "./EcoreEMap";
import {EStringToStringMapEntryBase} from "./EStringToStringMapEntryBase";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {EModelElement} from "./EModelElement";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EAnnotation} from "./EAnnotation";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {EMap} from "./EMap";
import {EObject} from "./EObject";
import {EModelElementImpl} from "./EModelElementImpl";
import {InternalEObject} from "./InternalEObject";
		
			export class EAnnotationBase
			extends EModelElementImpl
			implements EAnnotation
			{
				private _source:string = '';
				get source():string{
					return this._source;
				}
				set source(value:string){
					this._source = value; 
				}
				private _details:EMap<string, string>;
				
				get details():EMap<string, string>{
					if (this._details === null)
					{
						this._details = new EcoreEMap<string, string>(EStringToStringMapEntryBase.eStaticClass, EStringToStringMapEntryBase, this, EcorePackageLiterals.EANNOTATION_DETAILS);
					}
					return this._details;
					
				}
				
				
				get eModelElement():EModelElement{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EANNOTATION_EMODELELEMENT) return null;
					return this.eInternalContainer() as EModelElement;
				}
				set eModelElement(value:EModelElement) {
					if (value != this.eInternalContainer() as EModelElement) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as EModelElement != null){
							msgs = (this.eInternalContainer() as EModelElement).eInverseRemove(this, EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, /*EAnnotation*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, /*EAnnotation*/ null, msgs);
						}
						msgs = this.basicSetEModelElement(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EANNOTATION_EMODELELEMENT , value, value));
					}
				}
				private _contents:OrderedSet<EObject> = null;
				
				get contents():OrderedSet<EObject>{
					if(this._contents===null){
						this._contents = new OrderedSet<EObject>(this, EcorePackageLiterals.EANNOTATION_CONTENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION_CONTENTS);
							
					}
					return this._contents;
					
				}
				
				
				private _references:OrderedSet<EObject> = null;
				
				get references():OrderedSet<EObject>{
					if(this._references===null){
						this._references = new OrderedSet<EObject>(this, EcorePackageLiterals.EANNOTATION_REFERENCES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION_REFERENCES);
							
					}
					return this._references;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EAnnotationBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEModelElement(otherEnd as EModelElement, msgs);
					}
					//return this.eInverseAddFromEModelElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEAnnotation = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
							return this.basicSetEModelElement(null, msgs);
					}
					//return this.eInverseRemoveFromEModelElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEAnnotation = this.eInverseRemove;
			
				public basicSetEModelElement(newobj:EModelElement, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EANNOTATION_EMODELELEMENT, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EANNOTATION_SOURCE:
							return this.source;
						case EcorePackageLiterals.EANNOTATION_DETAILS:
							return this.details;
						case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
							return this.eModelElement;
						case EcorePackageLiterals.EANNOTATION_CONTENTS:
							return this.contents;
						case EcorePackageLiterals.EANNOTATION_REFERENCES:
							return this.references;
					}
					//return this.eGetFromEModelElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION_SOURCE:
							this.source = <string> newValue;
							return;
						case EcorePackageLiterals.EANNOTATION_DETAILS:
							(<EcoreEMap<string, string>>this.details).set(newValue);
							return;
						case EcorePackageLiterals.EANNOTATION_EMODELELEMENT:
							this.eModelElement = <EModelElement> newValue;
							return;
						case EcorePackageLiterals.EANNOTATION_CONTENTS:
							this.contents.clear();
							this.contents.addAll(newValue);
							return;
						case EcorePackageLiterals.EANNOTATION_REFERENCES:
							this.references.clear();
							this.references.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
