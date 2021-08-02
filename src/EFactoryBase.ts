import {OrderedSet} from "ecore/OrderedSet";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EDataType} from "ecore/EDataType";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EPackage} from "ecore/EPackage";
import {EFactory} from "ecore/EFactory";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {EObject} from "ecore/EObject";
import {EModelElementImpl} from "ecore/EModelElementImpl";
import {InternalEObject} from "ecore/InternalEObject";
		
			export class EFactoryBase
			extends EModelElementImpl
			implements EFactory
			{
				private _ePackage:EPackage = null;
				get ePackage():EPackage{
				
					return this._ePackage;
				}
				set ePackage(value:EPackage) {
					if (value != this.ePackage) {
						let msgs:NotificationChain = null;
						if (this.ePackage != null){
							msgs = (this.ePackage).eInverseRemove(this, EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE, /*EFactory*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE, /*EFactory*/ null, msgs);
						}
						msgs = this.basicSetEPackage(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EFACTORY__E_PACKAGE , value, value));
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
						case EcorePackageLiterals.EFACTORY__E_PACKAGE:
							if (this.ePackage != null){
								msgs = this.ePackage.eInverseRemove(this, EcorePackageLiterals.EFACTORY__E_PACKAGE, /*EPackage*/ null, msgs);
							}
							return this.basicSetEPackage(otherEnd as EPackage, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EFACTORY__E_PACKAGE:
							return this.basicSetEPackage(null, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
				public basicSetEPackage(newobj:EPackage, msgs:NotificationChain):NotificationChain {
					const oldobj = this._ePackage;
					this._ePackage = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EFACTORY__E_PACKAGE, oldobj, newobj);
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
						case EcorePackageLiterals.EFACTORY__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EFACTORY__E_PACKAGE:
							return this.ePackage;
					}
					//return this.eGetFromEModelElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EFACTORY__E_PACKAGE:
							this.ePackage = <EPackage> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
