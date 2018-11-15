"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentTreeIterator = (function () {
    function ContentTreeIterator(root_) {
        this.index = 0;
        this.queue = new Array();
        this.addRecursively(root_);
    }
    ContentTreeIterator.prototype.addRecursively = function (eObject) {
        if (eObject !== null) {
            this.queue.push(eObject);
            for (var _i = 0, _a = eObject.eContents(); _i < _a.length; _i++) {
                var child = _a[_i];
                if (child !== null) {
                    this.queue.push(child);
                }
            }
            for (var _b = 0, _c = eObject.eContents(); _b < _c.length; _b++) {
                var child = _c[_b];
                this.addRecursively(child);
            }
        }
    };
    ContentTreeIterator.prototype.next = function () {
        if (this.index === this.queue.length) {
            return {
                done: true,
                value: null
            };
        }
        else {
            return {
                done: false,
                value: this.queue[this.index++]
            };
        }
    };
    ContentTreeIterator.prototype.hasNext = function () {
        return this.index < this.queue.length;
    };
    ContentTreeIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    ContentTreeIterator.prototype.prune = function () {
        //TODO implement
    };
    return ContentTreeIterator;
}());
exports.ContentTreeIterator = ContentTreeIterator;
//# sourceMappingURL=ContentTreeIterator.js.map