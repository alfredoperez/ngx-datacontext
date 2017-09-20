"use strict";
exports.__esModule = true;
function Entity(name) {
    return function (target) {
        target.prototype['$$name'] = name;
    };
}
exports.Entity = Entity;
