import {DiagnosticChain} from 'ecore/DiagnosticChain';
import {EObject} from 'ecore/EObject';
import {EClass} from 'ecore/EClass';
import {EDataType} from 'ecore/EDataType';

export interface EValidator
{

  //TODO add validate() method

  validateEObject(eObject:EObject,  diagnostics:DiagnosticChain, context:any):boolean;

  validateEClass(eClass:EClass, eObject:EObject, diagnostics:DiagnosticChain, context:any):boolean;

  validateEDataType(eDataType:EDataType, value:any, diagnostics:DiagnosticChain, context:any):boolean;
}
