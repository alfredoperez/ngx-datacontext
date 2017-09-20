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
require("rxjs/add/observable/combineLatest");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var _ = require("lodash");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var abstract_repository_service_1 = require("services/abstract-repository.service");
var FirebaseRepository = (function (_super) {
    __extends(FirebaseRepository, _super);
    function FirebaseRepository(entity, fbDb, fb) {
        var _this = _super.call(this) || this;
        _this.entity = entity;
        _this.fbDb = fbDb;
        _this.fb = fb;
        _this.db = fbDb;
        _this.sdkDb = fb.database().ref('/');
        return _this;
    }
    FirebaseRepository.prototype.getById = function (id) {
        return this.db.object(this.entity.entityName + "/" + id)
            .map(this.entity.deserialize.bind(this.entity));
    };
    FirebaseRepository.prototype.getAll = function () {
        return this.db.list(this.entity.entityName)
            .map(this.deserializeCollection.bind(this));
    };
    FirebaseRepository.prototype.find = function () {
        throw new Error('Method not implemented.');
    };
    FirebaseRepository.prototype.remove = function () {
        throw new Error('Method not implemented.');
    };
    FirebaseRepository.prototype.update = function (data) {
        var dataToSave = {};
        dataToSave[this.entity.entityName + '/' + data.key] = data;
        return this.saveData(dataToSave);
    };
    FirebaseRepository.prototype.create = function (entity) {
        var dataToSave = {};
        var newKey = this.sdkDb.child(entity.entityName).push().key;
        var entityToSave = Object.assign({}, entity);
        entityToSave.key = newKey;
        dataToSave[entity.entityName + '/' + newKey] = entityToSave;
        return this.saveData(dataToSave);
    };
    FirebaseRepository.prototype.findByEntityReferences = function (path) {
        return this.mapIdsToEntities(this.getEntitiesIds(path)).map(this.deserializeCollection.bind(this));
    };
    FirebaseRepository.prototype.saveData = function (data) {
        var subject = new Subject_1.Subject();
        this.sdkDb.update(data)
            .then(function (val) {
            subject.next(val);
            subject.complete();
        }, function (err) {
            subject.error(err);
            subject.complete();
        });
        return subject.asObservable();
    };
    FirebaseRepository.prototype.getEntitiesIds = function (path) {
        return this.db.list(path)
            .map(function (i) { return i.map(function (j) { return j.$key; }); });
    };
    FirebaseRepository.prototype.mapIdsToEntities = function (ids$) {
        var _this = this;
        return ids$
            .map(function (ids) {
            return ids.map(function (id) {
                return _this.db.object(_this.entity.entityName + "/" + id);
            });
        })
            .flatMap(function (fbojs) {
            return fbojs.length === 0
                ? Observable_1.Observable.of([])
                : Observable_1.Observable.combineLatest(fbojs);
        });
    };
    FirebaseRepository.prototype.deserializeCollection = function (data) {
        var _this = this;
        var collection = [];
        data.forEach(function (item) {
            var target = _.cloneDeep(_this.entity);
            target.deserialize(item);
            collection.push(target);
        });
        return collection;
    };
    return FirebaseRepository;
}(abstract_repository_service_1.Repository));
exports.FirebaseRepository = FirebaseRepository;
