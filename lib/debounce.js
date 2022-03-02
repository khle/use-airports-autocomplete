"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (fn, delay) {
    var timer;
    // eslint-disable-next-line func-names
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () { return fn.apply(_this, args); }, delay);
    };
});
