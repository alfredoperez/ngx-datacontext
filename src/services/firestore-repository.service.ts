import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { FirebaseEntity } from '../models/firebase-entity.model';
import { Repository } from '../models/repository.model';
import * as _ from 'lodash';

@Injectable()
export class FirestoreRepository<T extends FirebaseEntity>
  implements Repository<FirebaseEntity> {

  constructor(
    public entity: FirebaseEntity,
    private afs: AngularFirestore) { }

  // TODO: include firestore configuration to opt-in for snapshotChanges().
  // Defaulting to valueChanges() instead.
  getById(id: string): Observable<FirebaseEntity> {
    return this.getDocRef(id)
      .valueChanges()
      .map(this.handleEntityResponse);
  }

  getAll(parentEntity?: FirebaseEntity): Observable<Array<FirebaseEntity>> {
    return this.getCollectionRef(parentEntity)
      .valueChanges()
      .map(this.handleCollectionResponse);
  }

  find(): Observable<Array<FirebaseEntity>> {
    // TODO: implement
    throw new Error('Method not implemented.');
  }

  create(entity: FirebaseEntity, parentEntity?: FirebaseEntity): Observable<FirebaseEntity> {
    const subject = new Subject<T>();

    this.getCollectionRef(parentEntity).add(entity).then(
      (val: any) => {
        subject.next(val);
        subject.complete();
      },
      (err: any) => {
        subject.error(err);
        subject.complete();
      });

    return subject.asObservable();
  }
  remove(entity: FirebaseEntity, parentEntity?: FirebaseEntity): Promise<void> {
    return this.getDocRef(entity.id, parentEntity).delete();
  }

  update(entity: FirebaseEntity, parentEntity?: FirebaseEntity): Promise<void> {
    return this.getDocRef(entity.id, parentEntity).set(entity, { merge: true });
  }

  // TODO: Add functionality to have multi-level nesting (e.g. through array of collections)
  private getCollectionRef(parentEntity?: FirebaseEntity): AngularFirestoreCollection<FirebaseEntity> {
    return parentEntity === undefined ?
      this.afs.collection<FirebaseEntity>(this.entity.name) :
      this.getNestedCollectionRef(parentEntity);
  }

  private getNestedCollectionRef(parentEntity: FirebaseEntity): AngularFirestoreCollection<FirebaseEntity> {
    return this.afs.collection<FirebaseEntity>(parentEntity.name)
      .doc(parentEntity.id)
      .collection(this.entity.name);
  }

  private getDocRef(id: string, parentEntity?: FirebaseEntity): AngularFirestoreDocument<FirebaseEntity> {
    return parentEntity === undefined ?
      this.afs.collection<FirebaseEntity>(this.entity.name).doc(id) :
      this.getNestedDocRef(id, parentEntity);
  }

  private getNestedDocRef(id: string, parentEntity: FirebaseEntity): AngularFirestoreDocument<FirebaseEntity> {
    return this.afs.collection<FirebaseEntity>(parentEntity.name)
      .doc(parentEntity.id)
      .collection(this.entity.name)
      .doc(id);
  }

  // TODO: review onresponse methods,
  // they are also in the firebase-repository.service.ts file
  private handleEntityResponse = (data: any): T => {
    let result: T;

    const target = _.cloneDeep(this.entity) as T;
    target.deserialize(data);
    result = target;

    return result;
  }

  private handleCollectionResponse = (data: any): Array<T> => {
    let result: Array<T> = [];
    if (Array.isArray(data)) {
      const collection: Array<T> = [];

      data.forEach((item: any) => {
        const target = _.cloneDeep(this.entity) as T;
        target.deserialize(item);
        collection.push(target);
      });

      result = collection;
    }

    return result;
  }
}
