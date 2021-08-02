import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EStructuralFeatureImpl} from "ecore/EStructuralFeatureImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {EcorePackageLiterals} from "ecore/EcorePackageLiterals";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EReference} from "ecore/EReference";
		
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
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,EcorePackageLiterals.EREFERENCE__E_OPPOSITE , oldvalue, value));
					}
				}
				get eReferenceType():EClass{
				
					//TODO implement derivation
					return null;
				}
				private _eKeys:OrderedSet<EAttribute> = null;
				
				get eKeys():OrderedSet<EAttribute>{
					if(this._eKeys===null){
						this._eKeys = new OrderedSet<EAttribute>(this, EcorePackageLiterals.EREFERENCE__E_KEYS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.EREFERENCE__E_KEYS);
							
					}
					return this._eKeys;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return EReferenceBase.eStaticClass;
				}
			
			
				public basicSetEOpposite(newobj:EReference, msgs:NotificationChain):NotificationChain {
					const oldobj = this._eOpposite;
					this._eOpposite = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, EcorePackageLiterals.EREFERENCE__E_OPPOSITE, oldobj, newobj);
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
						case EcorePackageLiterals.EREFERENCE__E_ANNOTATIONS:
							return this.eAnnotations;
						case EcorePackageLiterals.EREFERENCE__NAME:
							return this.name;
						case EcorePackageLiterals.EREFERENCE__ORDERED:
							return this.ordered;
						case EcorePackageLiterals.EREFERENCE__UNIQUE:
							return this.unique;
						case EcorePackageLiterals.EREFERENCE__LOWER_BOUND:
							return this.lowerBound;
						case EcorePackageLiterals.EREFERENCE__UPPER_BOUND:
							return this.upperBound;
						case EcorePackageLiterals.EREFERENCE__MANY:
							return this.many;
						case EcorePackageLiterals.EREFERENCE__REQUIRED:
							return this.required;
						case EcorePackageLiterals.EREFERENCE__E_TYPE:
							return this.eType;
						case EcorePackageLiterals.EREFERENCE__E_GENERIC_TYPE:
							return this.eGenericType;
						case EcorePackageLiterals.EREFERENCE__CHANGEABLE:
							return this.changeable;
						case EcorePackageLiterals.EREFERENCE__VOLATILE:
							return this.volatile;
						case EcorePackageLiterals.EREFERENCE__TRANSIENT:
							return this.transient;
						case EcorePackageLiterals.EREFERENCE__DEFAULT_VALUE_LITERAL:
							return this.defaultValueLiteral;
						case EcorePackageLiterals.EREFERENCE__DEFAULT_VALUE:
							return this.defaultValue;
						case EcorePackageLiterals.EREFERENCE__UNSETTABLE:
							return this.unsettable;
						case EcorePackageLiterals.EREFERENCE__DERIVED:
							return this.derived;
						case EcorePackageLiterals.EREFERENCE__E_CONTAINING_CLASS:
							return this.eContainingClass;
						case EcorePackageLiterals.EREFERENCE__CONTAINMENT:
							return this.containment;
						case EcorePackageLiterals.EREFERENCE__CONTAINER:
							return this.container;
						case EcorePackageLiterals.EREFERENCE__RESOLVE_PROXIES:
							return this.resolveProxies;
						case EcorePackageLiterals.EREFERENCE__E_OPPOSITE:
							return this.eOpposite;
						case EcorePackageLiterals.EREFERENCE__E_REFERENCE_TYPE:
							return this.eReferenceType;
						case EcorePackageLiterals.EREFERENCE__E_KEYS:
							return this.eKeys;
					}
					//return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case EcorePackageLiterals.EREFERENCE__CONTAINMENT:
							this.containment = <boolean> newValue;
							return;
						case EcorePackageLiterals.EREFERENCE__RESOLVE_PROXIES:
							this.resolveProxies = <boolean> newValue;
							return;
						case EcorePackageLiterals.EREFERENCE__E_OPPOSITE:
							this.eOpposite = <EReference> newValue;
							return;
						case EcorePackageLiterals.EREFERENCE__E_KEYS:
							this.eKeys.clear();
							this.eKeys.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
