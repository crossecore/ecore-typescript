import {OrderedSet} from "ecore/OrderedSet";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EcoreEMap} from "ecore/EcoreEMap";
import {EStringToStringMapEntryBase} from "ecore/EStringToStringMapEntryBase";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EModelElement} from "ecore/EModelElement";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EAnnotation} from "ecore/EAnnotation";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {EMap} from "ecore/EMap";
import {EObject} from "ecore/EObject";
import {EModelElementImpl} from "ecore/EModelElementImpl";
import {InternalEObject} from "ecore/InternalEObject";
		
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
						this._details = new EcoreEMap<string, string>(EStringToStringMapEntryBase.eStaticClass, EStringToStringMapEntryBase, this, EcorePackageLiterals.EANNOTATION__DETAILS);
					}
					return this._details;
					
				}
				
				
				get eModelElement():EModelElement{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT) return null;
					return this.eInternalContainer() as EModelElement;
				}
				set eModelElement(value:EModelElement) {
					if (value != this.eInternalContainer() as EModelElement) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as EModelElement != null){
							msgs = (this.eInternalContainer() as EModelElement).eInverseRemove(this, EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS, /*EAnnotation*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, EcorePackageLiterals.EMODEL_ELEMENT__E_ANNOTATIONS, /*EAnnotation*/ null, msgs);
						}
						msgs = this.basicSetEModelElement(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT , value, value));
					}
				}
				private _contents:OrderedSet<EObject> = null;
				
				get contents():OrderedSet<EObject>{
					if(this._contents===null){
						this._contents = new OrderedSet<EObject>(this, EcorePackageLiterals.EANNOTATION__CONTENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION__CONTENTS);
							
					}
					return this._contents;
					
				}
				
				
				private _references:OrderedSet<EObject> = null;
				
				get references():OrderedSet<EObject>{
					if(this._references===null){
						this._references = new OrderedSet<EObject>(this, EcorePackageLiterals.EANNOTATION__REFERENCES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EANNOTATION__REFERENCES);
							
					}
					return this._references;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EAnnotationBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEModelElement(otherEnd as EModelElement, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT:
							return this.basicSetEModelElement(null, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
				public basicSetEModelElement(newobj:EModelElement, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EANNOTATION__SOURCE:
							return this.source;
						case EcorePackageLiterals.EANNOTATION__DETAILS:
							return this.details;
						case EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT:
							return this.eModelElement;
						case EcorePackageLiterals.EANNOTATION__CONTENTS:
							return this.contents;
						case EcorePackageLiterals.EANNOTATION__REFERENCES:
							return this.references;
					}
					//return this.eGetFromEModelElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EANNOTATION__SOURCE:
							this.source = <string> newValue;
							return;
						case EcorePackageLiterals.EANNOTATION__DETAILS:
							(<EcoreEMap<string, string>>this.details).set(newValue);
							return;
						case EcorePackageLiterals.EANNOTATION__E_MODEL_ELEMENT:
							this.eModelElement = <EModelElement> newValue;
							return;
						case EcorePackageLiterals.EANNOTATION__CONTENTS:
							this.contents.clear();
							this.contents.addAll(newValue);
							return;
						case EcorePackageLiterals.EANNOTATION__REFERENCES:
							this.references.clear();
							this.references.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
