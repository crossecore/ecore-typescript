import {OrderedSet} from "./OrderedSet";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EDataType} from "./EDataType";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EPackage} from "./EPackage";
import {EFactory} from "./EFactory";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {EObject} from "./EObject";
import {EModelElementImpl} from "./EModelElementImpl";
import {InternalEObject} from "./InternalEObject";
		
			export class EFactoryBase
			extends EModelElementImpl
			implements EFactory
			{
				private _ePackage:EPackage = null;
				get ePackage():EPackage{
				
					return this._ePackage;
				}
				set ePackage(value:EPackage) {
					if (value != this._ePackage) {
						let msgs:NotificationChain = null;
						if (this._ePackage != null){
							msgs = (this._ePackage).eInverseRemove(this, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
						}
						msgs = this.basicSetEPackage(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EFACTORY_EPACKAGE , value, value));
					}
				}

				
				public createFromString(eDataType:EDataType, literalValue:string): any {
					/*TODO implement function*/ 
					return null;
				};
				
				public create(eClass:EClass): EObject {
					/*TODO implement function*/ 
					return null;
				};
				
				public convertToString(eDataType:EDataType, instanceValue:any): string {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EFactoryBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EFACTORY_EPACKAGE:
							if (this._ePackage != null){
								msgs = this._ePackage.eInverseRemove(this, EcorePackageLiterals.EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
							}
							return this.basicSetEPackage(otherEnd as EPackage, msgs);
					}
					//return this.eInverseAddFromEModelElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEFactory = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EFACTORY_EPACKAGE:
							return this.basicSetEPackage(null, msgs);
					}
					//return this.eInverseRemoveFromEModelElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEFactory = this.eInverseRemove;
			
				public basicSetEPackage(newobj:EPackage, msgs:NotificationChain):NotificationChain {
					let oldobj = this._ePackage;
					this._ePackage = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EFACTORY_EPACKAGE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EFACTORY_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EFACTORY_EPACKAGE:
							return this.ePackage;
					}
					//return this.eGetFromEModelElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EFACTORY_EPACKAGE:
							this.ePackage = <EPackage> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
