import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { Repository } from '../contracts/repository.interface';
import { FirebaseEntity } from '../models/firebase-entity.model';

export class FirebaseRepository<T extends FirebaseEntity>
  implements Repository<FirebaseEntity> {
  sdkDb: any;
  db: AngularFireDatabase;

  constructor(
    public entity: FirebaseEntity,
    @Inject(AngularFireDatabase) fbDb?: AngularFireDatabase,
    @Inject(FirebaseApp) fb?: FirebaseApp
  ) {
    this.db = fbDb;
    this.sdkDb = fb.database().ref('/');
  }

  getById(): Observable<T> {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<Array<T>> {
    throw new Error('Method not implemented.');
  }

  find(): Observable<Array<T>> {
    throw new Error('Method not implemented.');
  }

  remove(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  update(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  create(entity: FirebaseEntity): Observable<T> {
    if (!entity) return undefined;

    const dataToSave = {};
    const newKey = this.sdkDb.child(entity.name).push().key;
    const entityToSave = { ...entity };
    entityToSave.key = newKey;

    dataToSave[`${entity.$name}/ ${newKey}`] = entityToSave;

    return this.saveData(dataToSave);
  }

  private saveData(data: any): Observable<T> {
    const subject = new Subject<T>();

    this.sdkDb.update(data).then(
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
}
