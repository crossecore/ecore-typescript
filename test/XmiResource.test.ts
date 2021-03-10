import {EcoreFactoryImpl} from '../src/EcoreFactoryImpl'
import {EcorePackageImpl} from '../src/EcorePackageImpl'
import { XmiResource } from '../src/XmiResource';
import { EPackage } from '../src/EPackage';
import * as fs from 'fs'

import {XmiresourceFactoryImpl} from 'xmiresource/XmiresourceFactoryImpl'
import { MyEnum } from 'xmiresource/MyEnum';
import { XmiresourcePackageImpl } from 'xmiresource/XmiresourcePackageImpl';
import { Root } from 'xmiresource/Root';

describe("XmiResource", () => {
    test("load", () => {
        //arrange
        const resource = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser())
        const file = "./test/resources/Ecore.uuid.ecore"

        const contents = fs.readFileSync(file)
        
        //action
        const epackage = resource.load(contents.toString()) as EPackage
        

        //assert
        expect(epackage).not.toBeNull()
    });

    test("load2", () => {
      //arrange
      const resource = new XmiResource(XmiresourcePackageImpl.eINSTANCE, XmiresourceFactoryImpl.eINSTANCE, new DOMParser())
      const file = "./test/resources/Root.xmi"

      const contents = fs.readFileSync(file)
      
      //action
      const root = resource.load(contents.toString()) as Root

      //assert
      expect(root).not.toBeNull()
      expect(root.singleAttribute).toBe(2)
      expect(root.manyAttribute).toContain(1)
      expect(root.manyAttribute).toContain(2)
      expect(root.manyAttribute).toContain(3)
      expect(root.singleReference).toBe(root)
      expect(root.manyReference).toContain(root)

      expect(root.boolean).toBe(true)
      expect(root.char).toBe("A")
      expect(root.date.toUTCString()).toBe(new Date("2021-03-08T21:33:50.000+0100").toUTCString())
      expect(root.double).toBe(1)
      expect(root.float).toBe(1)
      expect(root.int).toBe(1)
      expect(root.long).toBe(1)
      expect(root.short).toBe(1)
      expect(root.string).toBe("string")
  });

    /*
    test("save", () => {
        //arrange
        
        const resource = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser())

        //action
        const xmi = resource.save(EcorePackageImpl.eINSTANCE)
        //console.log(xmi)

        //assert
        const epackage = resource.load(xmi) as EPackage

        fs.writeFile("Ecore.ecore", xmi, function (err) {
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
        });

        expect(epackage).not.toBeNull()
    });
    */
   test("save", () => {
    //arrange
    
    const resource = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser())
    const root = XmiresourceFactoryImpl.eINSTANCE.createRoot()
    root.singleAttribute = 1
    root.manyAttribute.add(1)
    root.manyAttribute.add(2)

    const child = XmiresourceFactoryImpl.eINSTANCE.createChild()
    root.singleChild = child
    root.manyChildren.add(child)

    root.enum = MyEnum.EINS

    //action
    const xmi = resource.save(root)
    //console.log(xmi)

    //assert
    const epackage = resource.load(xmi) as EPackage
    expect(epackage).not.toBeNull()
});
  });