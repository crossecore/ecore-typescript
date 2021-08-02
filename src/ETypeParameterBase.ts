import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EGenericType} from "ecore/EGenericType";
import {ENamedElementImpl} from "ecore/ENamedElementImpl";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ETypeParameter} from "ecore/ETypeParameter";
		
			export class ETypeParameterBase
			extends ENamedElementImpl
			implements ETypeParameter
			{
				private _eBounds:OrderedSet<EGenericType> = null;
				
				get eBounds():OrderedSet<EGenericType>{
					if(this._eBounds===null){
						this._eBounds = new OrderedSet<EGenericType>(this, EcorePackageLiterals.ETYPE_PARAMETER__E_BOUNDS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPE_PARAMETER__E_BOUNDS);
							
					}
					return this._eBounds;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ETypeParameterBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ETYPE_PARAMETER__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ETYPE_PARAMETER__NAME:
							return this.name;
						case EcorePackageLiterals.ETYPE_PARAMETER__E_BOUNDS:
							return this.eBounds;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ETYPE_PARAMETER__E_BOUNDS:
							this.eBounds.clear();
							this.eBounds.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
