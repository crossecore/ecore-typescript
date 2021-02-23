import {MyEnum} from "xmiresource/MyEnum";
import {Root} from "xmiresource/Root";
import {XmiresourcePackageLiterals} from "xmiresource/XmiresourcePackageLiterals";
import {Child} from "xmiresource/Child";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RootBase
			extends BasicEObjectImpl
			implements Root
			{
				private _singleAttribute:number = 0;
				get singleAttribute():number{
					return this._singleAttribute;
				}
				set singleAttribute(value:number){
					this._singleAttribute = value; 
				}
				private _manyAttribute:OrderedSet<number> = new OrderedSet<number>();
				get manyAttribute():OrderedSet<number>{
					if(this._manyAttribute===null){
						this._manyAttribute = new OrderedSet<number>();
							
					}
					return this._manyAttribute;
				}
				set manyAttribute(value:OrderedSet<number>){
					this._manyAttribute = value; 
				}
				private _enum:MyEnum = MyEnum.EINS;
				get enum():MyEnum{
					return this._enum;
				}
				set enum(value:MyEnum){
					this._enum = value; 
				}
				private _singleReference:Root = null;
				get singleReference():Root{
				
					return this._singleReference;
				}
				set singleReference(value:Root) {
					let oldvalue = this._singleReference;
					this._singleReference = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,XmiresourcePackageLiterals.ROOT__SINGLE_REFERENCE , oldvalue, value));
					}
				}
				private _manyReference:OrderedSet<Root> = null;
				
				get manyReference():OrderedSet<Root>{
					if(this._manyReference===null){
						this._manyReference = new OrderedSet<Root>(this, XmiresourcePackageLiterals.ROOT__MANY_REFERENCE, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - XmiresourcePackageLiterals.ROOT__MANY_REFERENCE);
							
					}
					return this._manyReference;
					
				}
				
				
				private _singleChild:Child = null;
				get singleChild():Child{
				
					return this._singleChild;
				}
				set singleChild(value:Child) {
					if (value != this.singleChild) {
						let msgs:NotificationChain = null;
						if (this.singleChild != null){
							msgs = (this.singleChild).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - XmiresourcePackageLiterals.ROOT__SINGLE_CHILD, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - XmiresourcePackageLiterals.ROOT__SINGLE_CHILD, /*null*/ null, msgs);
						}
						msgs = this.basicSetSingleChild(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,XmiresourcePackageLiterals.ROOT__SINGLE_CHILD , value, value));
					}
				}
				private _manyChildren:OrderedSet<Child> = null;
				
				get manyChildren():OrderedSet<Child>{
					if(this._manyChildren===null){
						this._manyChildren = new OrderedSet<Child>(this, XmiresourcePackageLiterals.ROOT__MANY_CHILDREN, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - XmiresourcePackageLiterals.ROOT__MANY_CHILDREN);
							
					}
					return this._manyChildren;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RootBase.eStaticClass;
				}
			
			
				public basicSetSingleChild(newobj:Child, msgs:NotificationChain):NotificationChain {
					let oldobj = this.singleChild;
					this._singleChild = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, XmiresourcePackageLiterals.ROOT__SINGLE_CHILD, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetSingleReference(newobj:Root, msgs:NotificationChain):NotificationChain {
					let oldobj = this.singleReference;
					this.singleReference = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, XmiresourcePackageLiterals.ROOT__SINGLE_REFERENCE, oldobj, newobj);
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
						case XmiresourcePackageLiterals.ROOT__SINGLE_ATTRIBUTE:
							return this.singleAttribute;
						case XmiresourcePackageLiterals.ROOT__MANY_ATTRIBUTE:
							return this.manyAttribute;
						case XmiresourcePackageLiterals.ROOT__SINGLE_REFERENCE:
							return this.singleReference;
						case XmiresourcePackageLiterals.ROOT__MANY_REFERENCE:
							return this.manyReference;
						case XmiresourcePackageLiterals.ROOT__SINGLE_CHILD:
							return this.singleChild;
						case XmiresourcePackageLiterals.ROOT__MANY_CHILDREN:
							return this.manyChildren;
						case XmiresourcePackageLiterals.ROOT__ENUM:
							return this.enum;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case XmiresourcePackageLiterals.ROOT__SINGLE_ATTRIBUTE:
							this.singleAttribute = <number> newValue;
							return;
						case XmiresourcePackageLiterals.ROOT__MANY_ATTRIBUTE:
							this.manyAttribute.clear();
							this.manyAttribute.addAll(newValue);
							return;
						case XmiresourcePackageLiterals.ROOT__ENUM:
							this.enum = <MyEnum> newValue;
							return;
						case XmiresourcePackageLiterals.ROOT__SINGLE_REFERENCE:
							this.singleReference = <Root> newValue;
							return;
						case XmiresourcePackageLiterals.ROOT__MANY_REFERENCE:
							this.manyReference.clear();
							this.manyReference.addAll(newValue);
							return;
						case XmiresourcePackageLiterals.ROOT__SINGLE_CHILD:
							this.singleChild = <Child> newValue;
							return;
						case XmiresourcePackageLiterals.ROOT__MANY_CHILDREN:
							this.manyChildren.clear();
							this.manyChildren.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
