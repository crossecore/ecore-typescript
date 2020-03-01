/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
import {Diagnostic} from "./Diagnostic";

export interface DiagnosticChain {
  add(diagnostic: Diagnostic);

  addAll(diagnostic: Diagnostic);

  merge(diagnostic: Diagnostic);

}
