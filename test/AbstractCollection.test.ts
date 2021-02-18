import { AbstractCollection } from "../src/AbstractCollection";
import { Adapter } from "../src/Adapter";
import { EClass } from "../src/EClass";
import { EcoreFactoryImpl } from "../src/EcoreFactoryImpl";
import { EcorePackageImpl } from "../src/EcorePackageImpl";
import { ENotificationImpl } from "../src/ENotificationImpl";
import { InternalEObject } from "../src/InternalEObject";
import { Notification } from "../src/Notification";
import { NotificationChain } from "../src/NotificationChain";
import { NotificationChainImpl } from "../src/NotificationChainImpl";
import { NotificationImpl } from "../src/NotificationImpl";

describe("AbstractCollection", () => {
    it("add", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()

        //action
        collection.add("a")

        //assert
        expect(collection.length).toBe(1)
        
    });
    it("addAll", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()

        //action
        collection.addAll(["eins", "zwei"])

        //assert
        expect(collection.length).toBe(2)
        
    });
    it("remove", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()
        collection.addAll(["eins", "zwei"])

        //action
        collection.remove("eins")

        //assert
        expect(collection.length).toBe(1)
        
    });
    it("isNotificationRequired", () => {
      
        //arrange
        const owner = EcoreFactoryImpl.eINSTANCE.createEObject()
        owner.eAdapters().push(new class implements Adapter{
            notifyChanged(notification: Notification): void {   
            }
        })
        const collection = new AbstractCollection<string>(owner as InternalEObject)

        //action
        const result = collection.isNotificationRequired()

        //assert
        expect(result).toBeTruthy()
        
    });
    it("isNotificationRequired2", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()

        //action
        const result = collection.isNotificationRequired()

        //assert
        expect(result).toBeFalsy()
        
    });

    it("basicAdd", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()

        //action
        const result = collection.basicAdd("eins", null)

        //assert
        
        const cast = result as ENotificationImpl
        expect(cast).toBeNull()
        expect(collection).toHaveLength(1)

        
    });

    it("basicAdd notification", () => {
      
        //arrange
        const owner = EcoreFactoryImpl.eINSTANCE.createEObject()
        owner.eAdapters().push(new class implements Adapter{
            notifyChanged(notification: Notification): void {   
            }
        })
        const collection = new AbstractCollection<string>(owner as InternalEObject)

        //action
        const result = collection.basicAdd("eins", null)

        //assert
        
        const cast = result as ENotificationImpl
        expect(cast.getEventType()).toEqual(NotificationImpl.ADD)
        expect(cast.getFeature()).toBeNull()
        expect(cast.getNewValue()).toEqual("eins")
        expect(collection).toHaveLength(1)
        
    });

    it("basicAdd notificationchain", () => {
      
        //arrange
        const owner = EcoreFactoryImpl.eINSTANCE.createEObject()
        owner.eAdapters().push(new class implements Adapter{
            notifyChanged(notification: Notification): void {   
            }
        })
        const collection = new AbstractCollection<string>(owner as InternalEObject)
        const notificationchain = collection.basicAdd("eins", null)

        //action
        const result = collection.basicAdd("zwei", notificationchain)


        //assert
        const cast = result as ENotificationImpl
        expect(cast.getEventType()).toEqual(NotificationImpl.ADD)//TODO should not be that ADD_MANY?
        expect(cast.getFeature()).toBeNull()
        expect(cast).not.toBeNull()
        expect(collection).toHaveLength(2)
        
    });

    it("basicRemove", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()
        collection.basicAdd("eins", null)


        //action
        const result = collection.basicRemove("eins", null)

        //assert
        const cast = result as ENotificationImpl
        expect(cast).toBeNull()
        expect(collection).toHaveLength(0)
        
    });

    it("basicRemove notification", () => {
      
        //arrange
        const owner = EcoreFactoryImpl.eINSTANCE.createEObject()
        owner.eAdapters().push(new class implements Adapter{
            notifyChanged(notification: Notification): void {   
            }
        })
        const collection = new AbstractCollection<string>(owner as InternalEObject)
        collection.basicAdd("eins", null)


        //action
        const result = collection.basicRemove("eins", null)

        //assert
        const cast = result as ENotificationImpl
        expect(cast).not.toBeNull()
        expect(collection).toHaveLength(0)
        expect(cast.getEventType()).toEqual(NotificationImpl.REMOVE)
        expect(cast.getFeature()).toBeNull()
        
    });

    it("basicRemove notificationchain", () => {
      
        //arrange
        const owner = EcoreFactoryImpl.eINSTANCE.createEObject()
        owner.eAdapters().push(new class implements Adapter{
            notifyChanged(notification: Notification): void {   
            }
        })
        const collection = new AbstractCollection<string>(owner as InternalEObject)
        const notification = collection.basicAdd("eins", null)


        //action
        const result = collection.basicRemove("eins", notification)

        //assert
        expect(result).not.toBeNull()
        expect(collection).toHaveLength(0)
        
        
    });

    it("isNotificationRequired", () => {
      
        //arrange
        const owner = EcoreFactoryImpl.eINSTANCE.createEObject()
        owner.eAdapters().push(new class implements Adapter{
            notifyChanged(notification: Notification): void {   
            }
        })
        const collection = new AbstractCollection<string>(owner as InternalEObject)

        //action
        const result = collection.isNotificationRequired()

        //assert
        expect(result).toBeTruthy()
        
    });
    it("isNotificationRequired not", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()

        //action
        const result = collection.isNotificationRequired()

        //assert
        expect(result).toBeFalsy()
        
        
    });
    it("sortedBy string", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()
        collection.add("eins")
        collection.add("zwei")
        collection.add("drei")

        //action
        const result = collection.sortedBy((t)=>t)

        //assert
        expect(result).toMatchObject(["drei","eins", "zwei"])
        
    });
    it("sortedBy number", () => {
      
        //arrange
        const collection = new AbstractCollection<number>()
        collection.add(3)
        collection.add(2)
        collection.add(1)

        //action
        const result = collection.sortedBy((t)=>t)

        //assert
        expect(result).toMatchObject([1,2,3])
        
    });

    it("sortedBy boolean descending", () => {
      
        //arrange
        const collection = new AbstractCollection<boolean>()
        collection.add(true)
        collection.add(false)

        //action
        const result = collection.sortedBy((t)=>t)

        //assert
        expect(result).toMatchObject([false, true])
        
    });
    it("sortedBy boolean ascending", () => {
      
        //arrange
        const collection = new AbstractCollection<boolean>()
        collection.add(false)
        collection.add(true)

        //action
        const result = collection.sortedBy((t)=>t)

        //assert
        expect(result).toMatchObject([false, true])
        
    });

    it("size", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()
        collection.add("eins")
        collection.add("zwei")

        //action
        const result = collection.size()

        //assert
        expect(result).toBe(2)
        
    });
    it("isEmpty", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()
        collection.add("eins")
        

        //action
        const result = collection.isEmpty()
        const result2 = collection.notEmpty()

        //assert
        expect(result).toBeFalsy()
        expect(result2).toBeTruthy()
        
    });
    it("isEmpty not", () => {
      
        //arrange
        const collection = new AbstractCollection<string>()
                

        //action
        const result = collection.isEmpty()
        const result2 = collection.notEmpty()

        //assert
        expect(result2).toBeFalsy()
        expect(result).toBeTruthy()
        
    });
    it("exists", () => {
      
        //arrange
        const collection = new AbstractCollection<number>()
        collection.add(10)
        collection.add(20)
        collection.add(30)
                

        //action
        const result = collection.exists((i)=> i>21)
        const result2 = collection.exists((i)=> i>30)
        //assert
        expect(result).toBeTruthy()
        expect(result2).toBeFalsy()
        
    });
    it("forAll", () => {
      
        //arrange
        const collection = new AbstractCollection<number>()
        collection.add(10)
        collection.add(20)
        collection.add(30)
                

        //action
        const result = collection.forAll((i)=> i>9)
        const result2= collection.forAll((i)=> i<30)
        
        //assert
        expect(result).toBeTruthy()
        expect(result2).toBeFalsy()
        
    });
    it("any", () => {
      
        //arrange
        const collection = new AbstractCollection<number>()
        collection.add(10)
        collection.add(20)
        collection.add(30)
                

        //action
        const result = collection.any((i)=> i>22)
        const result2 = collection.any((i)=> i>30)
        
        //assert
        expect(result).toEqual(30)
        expect(result2).toBeNull()
    });
    it("excludes", () => {
      
        //arrange
        const collection = new AbstractCollection<number>()
        collection.add(10)
        collection.add(20)
        collection.add(30)
                

        //action
        const result = collection.excludes(22)
        
        //assert
        expect(result).toBeTruthy()
    });
    it("count", () => {
      
        //arrange
        const collection = new AbstractCollection<number>()
        collection.add(10)
        collection.add(20)
        collection.add(10)
        

        //action
        const result = collection.count(10)
        
        //assert
        expect(result).toEqual(2)
    });

  });