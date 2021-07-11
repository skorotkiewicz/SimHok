"use strict";
var SimHok = /** @class */ (function () {
    function SimHok() {
    }
    SimHok.prototype.len = function (data) {
        return data.length;
    };
    SimHok.prototype.capitalize = function (data) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    };
    SimHok.prototype.upper = function (data) {
        return data.toUpperCase();
    };
    SimHok.prototype.lower = function (data) {
        return data.toLowerCase();
    };
    SimHok.prototype.startswith = function (data, start) {
        return data.charAt(0) === start;
    };
    SimHok.prototype.endswith = function (data, end) {
        return data.charAt(data.length - 1) === end;
    };
    SimHok.prototype.split = function (data, range) {
        if (this.len(range) === 2) {
            if (range[1] < 0) {
                return data.slice(data.length - Math.abs(range[1]));
            }
            else {
                return data.slice(range[0], range[1] !== 0 ? range[1] : Infinity);
            }
        }
        else {
            return data[range];
        }
    };
    SimHok.prototype.zfill = function (data, many) {
        var fill = "";
        for (var i = 0; i < many; i++) {
            fill += 0;
        }
        return fill + data;
    };
    SimHok.prototype.log = function (data) {
        return console.log(data);
    };
    return SimHok;
}());
module.exports = SimHok;
