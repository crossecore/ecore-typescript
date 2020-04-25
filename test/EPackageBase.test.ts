import {EcoreFactoryImpl} from '../src/EcoreFactoryImpl'
import {EcorePackageImpl} from '../src/EcorePackageImpl'
import { EClassifier } from '../src/EClassifier';

describe("EPackageBase", () => {
    test("it should set eInternalContainer via eSet", () => {
      
        //arrange
        const f = EcoreFactoryImpl.eINSTANCE
        const epackage = f.createEPackage()
        epackage.name = "mypackage"
        const eclass = f.createEClass()
        eclass.name = "MyClass"
        const newValue = new Array<EClassifier>();
        newValue.push(eclass)

        //action
        epackage.eSet(EcorePackageImpl.eINSTANCE.getEPackage_EClassifiers(), newValue)
        

        //assert
        expect(eclass.eInternalContainer()).not.toBeNull()
    });
  });