import {EcoreFactoryImpl} from '../src/EcoreFactoryImpl'
import {EcorePackageImpl} from '../src/EcorePackageImpl'
import { XmiResource } from '../src/XmiResource';
import { EPackage } from '../src/EPackage';

describe("XmiResource", () => {
    test("it should set eInternalContainer", () => {
      
        //arrange
        const resource = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser())
        const epackage = resource.load(`<?xml version="1.0" encoding="UTF-8"?>
        <ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="keywords" nsURI="keywords" nsPrefix="keywords">
          <eClassifiers xsi:type="ecore:EClass" name="Switch">
            <eOperations name="operation">
              <eParameters name="override" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
            </eOperations>
            <eStructuralFeatures xsi:type="ecore:EAttribute" name="readonly" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"/>
            <eStructuralFeatures xsi:type="ecore:EAttribute" name="return" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
            <eStructuralFeatures xsi:type="ecore:EReference" name="ref" eType="#//Switch"
                containment="true"/>
          </eClassifiers>
        </ecore:EPackage>
        `) as EPackage
        console.log(epackage.eClassifiers.length)
        const eclass = epackage.eClassifiers[0]
        
        

        //assert
        expect(eclass.eInternalContainer()).not.toBeNull()
    });
  });