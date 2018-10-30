/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var BasicNotifierImpl = (function () {
    function BasicNotifierImpl() {
        var _this = this;
        this._eAdapters = null;
        this.eAdapters = function () {
            if (_this._eAdapters == null) {
                _this._eAdapters = new Array();
            }
            return _this._eAdapters;
        };
        //protected BasicEList<Adapter> eBasicAdapters()
        this.eBasicAdapters = function () {
            return null;
        };
        this.eNotify = function (notification) {
            for (var _i = 0, _a = _this.eAdapters(); _i < _a.length; _i++) {
                var adapter = _a[_i];
                adapter.notifyChanged(notification);
            }
        };
        this.eNotificationRequired = function () {
            return _this.eAdapters().length > 0;
        };
    }
    return BasicNotifierImpl;
}());
export { BasicNotifierImpl };
