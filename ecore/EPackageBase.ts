/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EFactory} from "ecore/EFactory";
import {EAnnotation} from "ecore/EAnnotation";
import {EPackage} from "ecore/EPackage";
import {EClassifier} from "ecore/EClassifier";
import {InternalEObject} from "ecore/InternalEObject";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {NotificationChain} from "ecore/NotificationChain";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {EClass} from "ecore/EClass";
import {NotificationImpl} from "ecore/NotificationImpl";
///<summary>This class was generated.</summary>
export class EPackageBase
extends ENamedElementImpl
implements EPackage

{
	private _nsPrefix:string = "";
	get nsPrefix():string{
		return this._nsPrefix;
	}
	set nsPrefix(value:string){
		this._nsPrefix = value; 
	}
	private _nsURI:string = "";
	get nsURI():string{
		return this._nsURI;
	}
	set nsURI(value:string){
		this._nsURI = value; 
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
	private _eClassifiers:OrderedSet<EClassifier> = null;
	get eClassifiers():OrderedSet<EClassifier>{
		if(this._eClassifiers===null){
			this._eClassifiers = new OrderedSet<EClassifier>(this, EcorePackageLiterals.EPACKAGE_ECLASSIFIERS, EcorePackageLiterals.ECLASSIFIER_EPACKAGE);
				
		}
		return this._eClassifiers;
		
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

	
	public getEClassifier(name:string): EClassifier {
		/*TODO implement function*/ 
		return null;
	};
	
	public getEAnnotation(source:string): EAnnotation {
		/*TODO implement function*/ 
		return null;
	};

	protected eStaticClass():EClass{
		//return EcorePackageLiterals.EPACKAGE;
		return null;
	}

	public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
				return this.eSubpackages.basicAdd(otherEnd as EPackage, msgs);
			case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
				if (this.eInternalContainer() != null) {
					msgs = this.eBasicRemoveFromContainer(msgs);
				}
				return this.basicSetESuperPackage(otherEnd as EPackage, msgs);
			case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
				return this.eClassifiers.basicAdd(otherEnd as EClassifier, msgs);
			case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
				if (this._eFactoryInstance != null){
					msgs = this._eFactoryInstance.eInverseRemove(this, EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
				}
				return this.basicSetEFactoryInstance(otherEnd as EFactory, msgs);
		}
		//return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}
	//public eInverseAddFromEPackage = this.eInverseAdd;
	
	public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
		switch (featureID) {
			case EcorePackageLiterals.EPACKAGE_ESUBPACKAGES:
				return this.eSubpackages.basicRemove(otherEnd as EPackage, msgs);
			case EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE:
				return this.basicSetESuperPackage(null, msgs);
			case EcorePackageLiterals.EPACKAGE_ECLASSIFIERS:
				return this.eClassifiers.basicRemove(otherEnd as EClassifier, msgs);
			case EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE:
				return this.basicSetEFactoryInstance(null, msgs);
		}
		//return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}
	
	//public eInverseRemoveFromEPackage = this.eInverseRemove;

	public basicSetESuperPackage(newobj:EPackage, msgs:NotificationChain):NotificationChain {
			msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE, msgs);
			return msgs;
	}
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
	

	public eGet(featureID:number, resolve:boolean, coreType:boolean):any{
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
	//public eGetFromEPackage = this.eGet;
}


