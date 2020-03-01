/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
export interface Diagnostic {

  getSeverity(): number;

  getMessage(): string;

  getSource(): string;

  getCode(): number;

  //Throwable getException();

  //List<?> getData();

  getChildren(): Array<Diagnostic>;

  /*
 public Diagnostic OK_INSTANCE =
   new BasicDiagnostic
     (OK, "org.eclipse.emf.common", 0, org.eclipse.emf.common.CommonPlugin.INSTANCE.getString("_UI_OK_diagnostic_0"), null);
     */

  /**
   * A diagnostic indicating that the diagnosis was canceled.
   */
  /*
 public Diagnostic CANCEL_INSTANCE =
   new BasicDiagnostic
     (CANCEL, "org.eclipse.emf.common", 0, org.eclipse.emf.common.CommonPlugin.INSTANCE.getString("_UI_Cancel_diagnostic_0"), null);
 */
}
