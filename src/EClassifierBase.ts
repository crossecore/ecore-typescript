import {OrderedSet} from "./OrderedSet";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EClassifier} from "./EClassifier";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EPackage} from "./EPackage";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {InternalEObject} from "./InternalEObject";
import {ETypeParameter} from "./ETypeParameter";
		
			export class EClassifierBase
			extends ENamedElementImpl
			implements EClassifier
			{
				private _instanceClassName:string = '';
				get instanceClassName():string{
					return this._instanceClassName;
				}
				set instanceClassName(value:string){
					this._instanceClassName = value; 
				}
				get instanceClass():Function{
					//TODO implement derivation
					return null;
				}
				get defaultValue():any{
					//TODO implement derivation
					return null;
				}
				private _instanceTypeName:string = '';
				get instanceTypeName():string{
					return this._instanceTypeName;
				}
				set instanceTypeName(value:string){
					this._instanceTypeName = value; 
				}
				get ePackage():EPackage{
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.ECLASSIFIER_EPACKAGE) return null;
					return this.eInternalContainer() as EPackage;
				}
				private _eTypeParameters:OrderedSet<ETypeParameter> = null;
				
				get eTypeParameters():OrderedSet<ETypeParameter>{
					if(this._eTypeParameters===null){
						this._eTypeParameters = new OrderedSet<ETypeParameter>(this, EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS);
							
					}
					return this._eTypeParameters;
					
				}
				
				

				
				public isInstance(object:any): boolean {
					/*TODO implement function*/ 
					return null;
				};
				
				public getClassifierID(): number {
					/*TODO implement function*/ 
					return null;
				};
			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EClassifierBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER_EPACKAGE:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEPackage(otherEnd as EPackage, msgs);
					}
					//return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromEClassifier = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER_EPACKAGE:
							return this.basicSetEPackage(null, msgs);
					}
					//return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromEClassifier = this.eInverseRemove;
			
				public basicSetEPackage(newobj:EPackage, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.ECLASSIFIER_EPACKAGE, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ECLASSIFIER_NAME:
							return this.name;
						case EcorePackageLiterals.ECLASSIFIER_INSTANCECLASSNAME:
							return this.instanceClassName;
						case EcorePackageLiterals.ECLASSIFIER_INSTANCECLASS:
							return this.instanceClass;
						case EcorePackageLiterals.ECLASSIFIER_DEFAULTVALUE:
							return this.defaultValue;
						case EcorePackageLiterals.ECLASSIFIER_INSTANCETYPENAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.ECLASSIFIER_EPACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS:
							return this.eTypeParameters;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER_INSTANCECLASSNAME:
							this.instanceClassName = <string> newValue;
							return;
						case EcorePackageLiterals.ECLASSIFIER_INSTANCETYPENAME:
							this.instanceTypeName = <string> newValue;
							return;
						case EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS:
							this.eTypeParameters.clear();
							this.eTypeParameters.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
