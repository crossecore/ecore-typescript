import {Diagnostic} from 'ecore/Diagnostic';

export interface DiagnosticChain {
  add(diagnostic: Diagnostic);

  addAll(diagnostic: Diagnostic);

  merge(diagnostic: Diagnostic);

}
