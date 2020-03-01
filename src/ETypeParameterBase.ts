import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EGenericType} from "./EGenericType";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {ETypeParameter} from "./ETypeParameter";
		
			export class ETypeParameterBase
			extends ENamedElementImpl
			implements ETypeParameter
			{
				private _eBounds:OrderedSet<EGenericType> = null;
				
				get eBounds():OrderedSet<EGenericType>{
					if(this._eBounds===null){
						this._eBounds = new OrderedSet<EGenericType>(this, EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS);
							
					}
					return this._eBounds;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ETypeParameterBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case EcorePackageLiterals.ETYPEPARAMETER_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.ETYPEPARAMETER_NAME:
							return this.name;
						case EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS:
							return this.eBounds;
					}
					//return this.eGetFromENamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS:
							this.eBounds.clear();
							this.eBounds.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
