"use strict";
exports.__esModule = true;
function EntityProperty(entity) {
    return function (target, property) {
        if (entity !== undefined) {
            target[property] = new entity();
        }
    };
}
exports.EntityProperty = EntityProperty;
