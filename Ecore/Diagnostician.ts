import {EObject} from 'ecore/EObject';
import {DiagnosticChain} from 'ecore/DiagnosticChain';
import {EValidator} from 'ecore/EValidator';
import {OrderedSet} from 'ecore/OrderedSet';
import {EClass} from 'ecore/EClass';
import {EPackage} from 'ecore/EPackage';
import {EDataType} from 'ecore/EDataType';
import {List} from 'ecore/List';
import {EObjectValidator} from 'ecore/EObjectValidator';

export class Diagnostician implements EValidator {
  protected eValidatorRegistry: any;//TODO Dictionary<EPackage, object>

  public static INSTANCE: Diagnostician = new Diagnostician();

  public validateEObject(eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean {
    //throw new NotImplementedException();
    return false;
  }

  public validateEClass(eClass: EClass, eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean {
    let eValidator: any = null;
    let eType: EClass = eClass;
    //while ((eValidator = eValidatorRegistry.get(eType.eContainer())) == null)

    while (!this.eValidatorRegistry.contains(eType.eContainer() as EPackage)) {
      eValidator = this.eValidatorRegistry[(eType.eContainer() as EPackage).nsURI];
      let eSuperTypes: OrderedSet<EClass> = eType.eSuperTypes;
      if (eSuperTypes.length == 0) {
        //TODO return a defaultCase
        eValidator = null;// eValidatorRegistry.get(null);
        break;
      }
      else {
        eType = eSuperTypes.at(0);
      }
    }
    //bool circular = context.get(EObjectValidator.ROOT_OBJECT) == eObject;
    //TODO containskey check
    let circular: boolean = context[EObjectValidator.ROOT_OBJECT] == eObject;
    let result: boolean = this.doValidate2(<EValidator>eValidator, eClass, eObject, diagnostics, context);
    if ((result || diagnostics != null) && !circular) {
      result = result && this.doValidateContents(eObject, diagnostics, context);
    }
    return result;
  }

  public validateEDataType(eDataType: EDataType, value: any, diagnostics: DiagnosticChain, context: any): boolean {
    let eValidator: any = this.eValidatorRegistry[(eDataType.eContainer() as EPackage).nsURI];
    if (eValidator == null) {
      //TODO default case
      eValidator = null;// eValidatorRegistry.get(null);
    }

    return this.doValidate1(<EValidator> eValidator, eDataType, value, diagnostics, context);
  }

  protected doValidate1(eValidator: EValidator, eDataType: EDataType, value: any, diagnostics: DiagnosticChain, context: any): boolean {
    return eValidator.validateEDataType(eDataType, value, diagnostics, context);
  }

  protected doValidate2(eValidator: EValidator, eClass: EClass, eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean {
    return eValidator.validateEClass(eClass, eObject, diagnostics, context);
  }

  protected doValidateContents(eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean {
    //TODO casting to OrderedSet allowed?
    let eContents: OrderedSet<EObject> = eObject.eContents() as OrderedSet<EObject>;


    if (eContents.length > 0) {
      let result: boolean = true;
      for (let child of eContents) {
        result = result && this.validateEObject(child, diagnostics, context);
      }

      return result;
    }
    else {
      return true;
    }
  }
}
