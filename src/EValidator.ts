import {DiagnosticChain} from "./DiagnosticChain";
import {EObject} from "./EObject";
import {EClass} from "./EClass";
import {EDataType} from "./EDataType";

export interface EValidator
{

  //TODO add validate() method

  validateEObject(eObject:EObject,  diagnostics:DiagnosticChain, context:any):boolean;

  validateEClass(eClass:EClass, eObject:EObject, diagnostics:DiagnosticChain, context:any):boolean;

  validateEDataType(eDataType:EDataType, value:any, diagnostics:DiagnosticChain, context:any):boolean;
}
