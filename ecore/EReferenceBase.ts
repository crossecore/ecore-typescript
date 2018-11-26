import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {EAttribute} from "./EAttribute";
import {NotificationChain} from "./NotificationChain";
import {ENotificationImpl} from "./ENotificationImpl";
import {NotificationImpl} from "./NotificationImpl";
import {EStructuralFeatureImpl} from "./EStructuralFeatureImpl";
import {AbstractCollection} from "./AbstractCollection";
import {EcorePackageLiterals} from "./EcorePackageLiterals";
import {InternalEObject} from "./InternalEObject";
import {BasicEObjectImpl} from "./BasicEObjectImpl";
import {EReference} from "./EReference";
		
			export class EReferenceBase
			extends EStructuralFeatureImpl
			implements EReference
			{
				private _containment:boolean = false;
				get containment():boolean{
					return this._containment;
				}
				set containment(value:boolean){
					this._containment = value; 
				}
				get container():boolean{
					//TODO implement derivation
					return null;
				}
				private _resolveProxies:boolean = false;
				get resolveProxies():boolean{
					return this._resolveProxies;
				}
				set resolveProxies(value:boolean){
					this._resolveProxies = value; 
				}
				private _eOpposite:EReference = null;
				get eOpposite():EReference{
				
					return this._eOpposite;
				}
				set eOpposite(value:EReference) {
					let oldvalue = this._eOpposite;
					this._eOpposite = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EREFERENCE_EOPPOSITE , oldvalue, value));
					}
				}
				get eReferenceType():EClass{
				
					//TODO implement derivation
					return null;
				}
				private _eKeys:OrderedSet<EAttribute> = null;
				
				get eKeys():OrderedSet<EAttribute>{
					if(this._eKeys===null){
						this._eKeys = new OrderedSet<EAttribute>(this, EcorePackageLiterals.EREFERENCE_EKEYS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EREFERENCE_EKEYS);
							
					}
					return this._eKeys;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EReferenceBase.eStaticClass;
				}
			
			
				public basicSetEOpposite(newobj:EReference, msgs:NotificationChain):NotificationChain {
					let oldobj = this._eOpposite;
					this._eOpposite = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EREFERENCE_EOPPOSITE, oldobj, newobj);
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
						case EcorePackageLiterals.EREFERENCE_EANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EREFERENCE_NAME:
							return this.name;
						case EcorePackageLiterals.EREFERENCE_ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EREFERENCE_UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EREFERENCE_LOWERBOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EREFERENCE_UPPERBOUND:
							return this.upperBound;
						case EcorePackageLiterals.EREFERENCE_MANY:
							return this.many;
						case EcorePackageLiterals.EREFERENCE_REQUIRED:
							return this.required;
						case EcorePackageLiterals.EREFERENCE_ETYPE:
							return this.eType;
						case EcorePackageLiterals.EREFERENCE_EGENERICTYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EREFERENCE_CHANGEABLE:
							return this.changeable;
						case EcorePackageLiterals.EREFERENCE_VOLATILE:
							return this.volatile;
						case EcorePackageLiterals.EREFERENCE_TRANSIENT:
							return this.transient;
						case EcorePackageLiterals.EREFERENCE_DEFAULTVALUELITERAL:
							return this.defaultValueLiteral;
						case EcorePackageLiterals.EREFERENCE_DEFAULTVALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EREFERENCE_UNSETTABLE:
							return this.unsettable;
						case EcorePackageLiterals.EREFERENCE_DERIVED:
							return this.derived;
						case EcorePackageLiterals.EREFERENCE_ECONTAININGCLASS:
							return this.eContainingClass;
						case EcorePackageLiterals.EREFERENCE_CONTAINMENT:
							return this.containment;
						case EcorePackageLiterals.EREFERENCE_CONTAINER:
							return this.container;
						case EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES:
							return this.resolveProxies;
						case EcorePackageLiterals.EREFERENCE_EOPPOSITE:
							return this.eOpposite;
						case EcorePackageLiterals.EREFERENCE_EREFERENCETYPE:
							return this.eReferenceType;
						case EcorePackageLiterals.EREFERENCE_EKEYS:
							return this.eKeys;
					}
					//return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EREFERENCE_CONTAINMENT:
							this.containment = <boolean> newValue;
							return;
						case EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES:
							this.resolveProxies = <boolean> newValue;
							return;
						case EcorePackageLiterals.EREFERENCE_EOPPOSITE:
							this.eOpposite = <EReference> newValue;
							return;
						case EcorePackageLiterals.EREFERENCE_EKEYS:
							this.eKeys.clear();
							this.eKeys.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
