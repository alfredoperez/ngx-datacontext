import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Repository } from 'services/abstract-repository.service';

import { FirebaseEntity } from '../models/firebase-entity.model';

export class FirebaseRepository<T extends FirebaseEntity> extends Repository<FirebaseEntity> {

      public sdkDb: any;
      public db: AngularFireDatabase;

      constructor(public entity: FirebaseEntity,
                  private fbDb: AngularFireDatabase,
                  private fb: FirebaseApp) {
        super();
        this.db = fbDb;
        this.sdkDb = fb.database().ref('/');

      }

      public getById(id: string): Observable<T> {
        return this.db.object(`${this.entity.entityName}/${id}`)
          .map(this.entity.deserialize.bind(this.entity));
      }

      public getAll(): Observable<T[]> {
        return this.db.list(this.entity.entityName)
          .map(this.deserializeCollection.bind(this));
      }

      public find(): Observable<T[]> {
        throw new Error('Method not implemented.');
      }

      public remove(): Observable<boolean> {
        throw new Error('Method not implemented.');
      }

      public update(data: FirebaseEntity): Observable<any> {
        const dataToSave: any = {};
        dataToSave[this.entity.entityName + '/' + data.key] = data;

        return this.saveData(dataToSave);
      }

      public create(entity: FirebaseEntity): Observable<any> {

        const dataToSave: any = {};
        const newKey = this.sdkDb.child(entity.entityName).push().key;
        const entityToSave = Object.assign({}, entity);
        entityToSave.key = newKey;

        dataToSave[entity.entityName + '/' + newKey] = entityToSave;

        return this.saveData(dataToSave);
      }

      public findByEntityReferences(path: string): Observable<T> {
        return this.mapIdsToEntities(
          this.getEntitiesIds(path)
        ).map(this.deserializeCollection.bind(this));
      }

      public saveData(data: any): any {
        const subject = new Subject();

        this.sdkDb.update(data)
          .then(
            (val: any) => {
              subject.next(val);
              subject.complete();

            },
            (err: any) => {
              subject.error(err);
              subject.complete();
            }
          );

        return subject.asObservable();
      }

      private getEntitiesIds(path: string): Observable<string[]> {
        return this.db.list(path)
          .map((i) => i.map((j) => j.$key));
      }

      private mapIdsToEntities(ids$: Observable<string[]>) {
        return ids$
          .map((ids) =>
            ids.map((id) =>
              this.db.object(`${this.entity.entityName}/${id}`)))
          .flatMap((fbojs) => {
            return fbojs.length === 0
              ? Observable.of([])
              : Observable.combineLatest(fbojs);
          });
      }

      private deserializeCollection(data: any[]) {
        const collection: any[] = [];
        data.forEach((item) => {
          const target = _.cloneDeep(this.entity);
          target.deserialize(item);
          collection.push(target);
        });

        return collection;
      }

    }
