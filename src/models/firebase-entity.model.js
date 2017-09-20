"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var entity_model_1 = require("./entity.model");
var FirebaseEntity = (function (_super) {
    __extends(FirebaseEntity, _super);
    function FirebaseEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseEntity.prototype.toRecord = function () {
        return {
            id: this.key,
            name: this['name']
        };
    };
    return FirebaseEntity;
}(entity_model_1.BaseEntity));
exports.FirebaseEntity = FirebaseEntity;
