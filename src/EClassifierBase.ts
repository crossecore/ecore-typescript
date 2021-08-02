import {OrderedSet} from "ecore/OrderedSet";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EClassifier} from "ecore/EClassifier";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EPackage} from "ecore/EPackage";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {ETypeParameter} from "ecore/ETypeParameter";
		
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
				
					if (this.eContainerFeatureID() != EcorePackageLiterals.ECLASSIFIER__E_PACKAGE) return null;
					return this.eInternalContainer() as EPackage;
				}
				private _eTypeParameters:OrderedSet<ETypeParameter> = null;
				
				get eTypeParameters():OrderedSet<ETypeParameter>{
					if(this._eTypeParameters===null){
						this._eTypeParameters = new OrderedSet<ETypeParameter>(this, EcorePackageLiterals.ECLASSIFIER__E_TYPE_PARAMETERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASSIFIER__E_TYPE_PARAMETERS);
							
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
						case EcorePackageLiterals.ECLASSIFIER__E_PACKAGE:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetEPackage(otherEnd as EPackage, msgs);
					}
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER__E_PACKAGE:
							return this.basicSetEPackage(null, msgs);
					}
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ECLASSIFIER__NAME:
							return this.name;
						case EcorePackageLiterals.ECLASSIFIER__INSTANCE_CLASS_NAME:
							return this.instanceClassName;
						case EcorePackageLiterals.ECLASSIFIER__INSTANCE_CLASS:
							return this.instanceClass;
						case EcorePackageLiterals.ECLASSIFIER__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.ECLASSIFIER__INSTANCE_TYPE_NAME:
							return this.instanceTypeName;
						case EcorePackageLiterals.ECLASSIFIER__E_PACKAGE:
							return this.ePackage;
						case EcorePackageLiterals.ECLASSIFIER__E_TYPE_PARAMETERS:
							return this.eTypeParameters;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ECLASSIFIER__INSTANCE_CLASS_NAME:
							this.instanceClassName = <string> newValue;
							return;
						case EcorePackageLiterals.ECLASSIFIER__INSTANCE_TYPE_NAME:
							this.instanceTypeName = <string> newValue;
							return;
						case EcorePackageLiterals.ECLASSIFIER__E_TYPE_PARAMETERS:
							this.eTypeParameters.clear();
							this.eTypeParameters.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
