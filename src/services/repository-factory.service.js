"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var contracts_1 = require("../models/contracts");
var firebase_repository_service_1 = require("./firebase-repository.service");
var RepositoryFactoryService = (function () {
    function RepositoryFactoryService(datasourceType, fbDb, fb) {
        this.datasourceType = datasourceType;
        this.fbDb = fbDb;
        this.fb = fb;
    }
    RepositoryFactoryService.prototype.create = function (entity) {
        var service;
        if (this.datasourceType === contracts_1.DataSourceType.firebase) {
            service = new firebase_repository_service_1.FirebaseRepository(entity, this.fbDb, this.fb);
        }
        return service;
    };
    return RepositoryFactoryService;
}());
RepositoryFactoryService = __decorate([
    core_1.Injectable()
], RepositoryFactoryService);
exports.RepositoryFactoryService = RepositoryFactoryService;
