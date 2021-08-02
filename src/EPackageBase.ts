import {OrderedSet} from "ecore/OrderedSet";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EClassifier} from "ecore/EClassifier";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EPackage} from "ecore/EPackage";
import {EFactory} from "ecore/EFactory";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {InternalEObject} from "ecore/InternalEObject";
		
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
					if (value != this.eFactoryInstance) {
						let msgs:NotificationChain = null;
						if (this.eFactoryInstance != null){
							msgs = (this.eFactoryInstance).eInverseRemove(this, EcorePackageLiterals.EFACTORY__E_PACKAGE, /*EPackage*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, EcorePackageLiterals.EFACTORY__E_PACKAGE, /*EPackage*/ null, msgs);
						}
						msgs = this.basicSetEFactoryInstance(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE , value, value));
					}
				}
				private _eClassifiers:OrderedSet<EClassifier> = null;
				
				get eClassifiers():OrderedSet<EClassifier>{
					if(this._eClassifiers===null){
						this._eClassifiers = new OrderedSet<EClassifier>(this, EcorePackageLiterals.EPACKAGE__E_CLASSIFIERS, EcorePackageLiterals.ECLASSIFIER__E_PACKAGE);
							
					}
					return this._eClassifiers;
					
				}
				
				
				private _eSubpackages:OrderedSet<EPackage> = null;
				
				get eSubpackages():OrderedSet<EPackage>{
					if(this._eSubpackages===null){
						this._eSubpackages = new OrderedSet<EPackage>(this, EcorePackageLiterals.EPACKAGE__E_SUBPACKAGES, EcorePackageLiterals.EPACKAGE__E_SUPER_PACKAGE);
							
					}
					return this._eSubpackages;
					
				}
				
				
				get eSuperPackage():EPackage{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.EPACKAGE__E_SUPER_PACKAGE) return null;
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
						case EcorePackageLiterals.EPACKAGE__E_SUPER_PACKAGE:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetESuperPackage(otherEnd as EPackage, msgs);
						case EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE:
							if (this.eFactoryInstance != null){
								msgs = this.eFactoryInstance.eInverseRemove(this, EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE, /*EFactory*/ null, msgs);
							}
							return this.basicSetEFactoryInstance(otherEnd as EFactory, msgs);
						case EcorePackageLiterals.EPACKAGE__E_CLASSIFIERS:
							return this.eClassifiers.basicAdd(otherEnd as EClassifier, msgs);
						case EcorePackageLiterals.EPACKAGE__E_SUBPACKAGES:
							return this.eSubpackages.basicAdd(otherEnd as EPackage, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.EPACKAGE__E_SUPER_PACKAGE:
							return this.basicSetESuperPackage(null, msgs);
						case EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE:
							return this.basicSetEFactoryInstance(null, msgs);
						case EcorePackageLiterals.EPACKAGE__E_CLASSIFIERS:
							return this.eClassifiers.basicRemove(otherEnd as EClassifier, msgs);
						case EcorePackageLiterals.EPACKAGE__E_SUBPACKAGES:
							return this.eSubpackages.basicRemove(otherEnd as EPackage, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
				public basicSetEFactoryInstance(newobj:EFactory, msgs:NotificationChain):NotificationChain {
					const oldobj = this._eFactoryInstance;
					this._eFactoryInstance = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE, oldobj, newobj);
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
						case EcorePackageLiterals.EPACKAGE__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EPACKAGE__NAME:
							return this.name;
						case EcorePackageLiterals.EPACKAGE__NS_URI:
							return this.nsURI;
						case EcorePackageLiterals.EPACKAGE__NS_PREFIX:
							return this.nsPrefix;
						case EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE:
							return this.eFactoryInstance;
						case EcorePackageLiterals.EPACKAGE__E_CLASSIFIERS:
							return this.eClassifiers;
						case EcorePackageLiterals.EPACKAGE__E_SUBPACKAGES:
							return this.eSubpackages;
						case EcorePackageLiterals.EPACKAGE__E_SUPER_PACKAGE:
							return this.eSuperPackage;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EPACKAGE__NS_URI:
							this.nsURI = <string> newValue;
							return;
						case EcorePackageLiterals.EPACKAGE__NS_PREFIX:
							this.nsPrefix = <string> newValue;
							return;
						case EcorePackageLiterals.EPACKAGE__E_FACTORY_INSTANCE:
							this.eFactoryInstance = <EFactory> newValue;
							return;
						case EcorePackageLiterals.EPACKAGE__E_CLASSIFIERS:
							this.eClassifiers.clear();
							this.eClassifiers.addAll(newValue);
							return;
						case EcorePackageLiterals.EPACKAGE__E_SUBPACKAGES:
							this.eSubpackages.clear();
							this.eSubpackages.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
