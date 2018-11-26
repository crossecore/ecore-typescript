import {OrderedSet} from "./OrderedSet";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EClassifier} from "./EClassifier";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EPackage} from "./EPackage";
import {EFactory} from "./EFactory";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {InternalEObject} from "./InternalEObject";
		
			export class EPackageBase
			extends ENamedElementImpl
			implements EPackage
			{
				private _nsURI:string = '';
				get nsURI():string{
					return this._nsURI;
				}
				set nsURI(value:string){
					this._nsURI = value; 
				}
				private _nsPrefix:string = '';
				get nsPrefix():string{
					return this._nsPrefix;
				}
				set nsPrefix(value:string){
					this._nsPrefix = value; 
				}
				private _eFactoryInstance:EFactory = null;
				get eFactoryInstance():EFactory{
				
					return this._eFactoryInstance;
				}
				set eFactoryInstance(value:EFactory) {
					if (value != this._eFactoryInstance) {
						let msgs:NotificationChain = null;
						if (this._eFactoryInstance != null){
							msgs = (this._eFactoryInstance).eInverseRemove(this, EcorePackageLiterals.EFACTORY_EPACKAGE, /*EPackage*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, EcorePackageLiterals.EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
						}
						msgs = this.basicSetEFactoryInstance(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE , value, value));
					}
				}
				private _eClassifiers:OrderedSet<EClassifier> = null;
				
				get eClassifiers():OrderedSet<EClassifier>{
					if(this._eClassifiers===null){
						this._eClassifiers = new OrderedSet<EClassifier>(this, EcorePackageLiterals.EPACKAGE_ECLASSIFIERS, EcorePackageLiterals.ECLASSIFIER_EPACKAGE);
							
					}
					return this._eClassifiers;
					
				}
				
				
				private _eSubpackages:OrderedSet<EPackage> = null;
				
				get eSubpackages():OrderedSet<EPackage>{
					if(this._eSubpackages===null){
						this._eSubpackages = new OrderedSet<EPackage>(this, EcorePackageLiterals.EPACKAGE_ESUBPACKAGES, EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE);
							
					}
					return this._eSubpackages;
					
				}
				
				
				get eSuperPackage():EPackage{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE) return null;
					return this.eInternalContainer() as EPackage;
				}

				
				public getEClassifier(name:string): EClassifier {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EPackageBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
							if (this._eFactoryInstance != null){
								msgs = this._eFactoryInstance.eInverseRemove(this, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
							}
							return this.basicSetEFactoryInstance(otherEnd as EFactory, msgs);
						case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
							return this.eSubpackages.basicAdd(otherEnd as EPackage, msgs);
						case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
							return this.eClassifiers.basicAdd(otherEnd as EClassifier, msgs);
						case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetESuperPackage(otherEnd as EPackage, msgs);
					}
					//return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEPackage = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
							return this.basicSetEFactoryInstance(null, msgs);
						case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
							return this.eSubpackages.basicRemove(otherEnd as EPackage, msgs);
						case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
							return this.eClassifiers.basicRemove(otherEnd as EClassifier, msgs);
						case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
							return this.basicSetESuperPackage(null, msgs);
					}
					//return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEPackage = this.eInverseRemove;
			
				public basicSetEFactoryInstance(newobj:EFactory, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eFactoryInstance;
					this._eFactoryInstance = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetESuperPackage(newobj:EPackage, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.EPACKAGE_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EPACKAGE_NAME:
							return this.name;
						case EcorePackageLiterals.EPACKAGE_NSURI:
							return this.nsURI;
						case EcorePackageLiterals.EPACKAGE_NSPREFIX:
							return this.nsPrefix;
						case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
							return this.eFactoryInstance;
						case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
							return this.eClassifiers;
						case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
							return this.eSubpackages;
						case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
							return this.eSuperPackage;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EPACKAGE_NSURI:
							this.nsURI = <string> newValue;
							return;
						case EcorePackageLiterals.EPACKAGE_NSPREFIX:
							this.nsPrefix = <string> newValue;
							return;
						case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
							this.eFactoryInstance = <EFactory> newValue;
							return;
						case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
							this.eClassifiers.clear();
							this.eClassifiers.addAll(newValue);
							return;
						case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
							this.eSubpackages.clear();
							this.eSubpackages.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
