"use strict";
exports.__esModule = true;
var _ = require("lodash");
var BaseEntity = (function () {
    function BaseEntity() {
        this.entityName = this.$$name;
    }
    BaseEntity.prototype.deserialize = function (input) {
        for (var property in input) {
            if (!input.hasOwnProperty(property)) {
                continue;
            }
            if (typeof this[property] === 'object' && input[property] !== undefined) {
                var result = this.deserializeEntity(this[property], input[property]);
                if (Array.isArray(result)) {
                    this[property] = result.splice(0);
                }
                else {
                    this[property] = Object.assign({}, result);
                }
            }
            else if (this.isDate(input[property])) {
                this[property] = new Date(input[property]);
            }
            else {
                this[property] = input[property];
            }
        }
        return this;
    };
    BaseEntity.prototype.deserializeEntity = function (entity, data) {
        if (entity === undefined || data === undefined) {
            return undefined;
        }
        var result;
        if (Array.isArray(data)) {
            var collection = [];
            for (var d in data) {
                if (d !== undefined) {
                    var item = typeof data === 'object' ? data[d] : data;
                    var deserialize = entity.deserialize(item);
                    collection.push(deserialize);
                }
            }
            result = collection;
        }
        else if (!_.isEmpty(entity) && entity.deserialize !== undefined) {
            result = entity.deserialize(data);
        }
        else if (!_.isEmpty(entity)) {
            result = data;
        }
        return result;
    };
    BaseEntity.prototype.isDate = function (field) {
        return typeof field === 'string'
            && field.indexOf('Z') !== -1
            && !isNaN(Date.parse(field));
    };
    BaseEntity.prototype.isNew = function () {
        return this.key === undefined;
    };
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
