/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {EObject} from "./EObject";
import {DiagnosticChain} from "./DiagnosticChain";
import {EValidator} from "./EValidator";
import {OrderedSet} from "./OrderedSet";
import {EClass} from "./EClass";
import {EPackage} from "./EPackage";
import {EDataType} from "./EDataType";
import {List} from "./List";
import {EObjectValidator} from "./EObjectValidator";

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
