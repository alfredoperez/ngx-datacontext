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

  getAll(...parentEntities: Array<FirebaseEntity>): Observable<Array<FirebaseEntity>> {
    return this.getCollectionRef(...parentEntities)
      .valueChanges()
      .map(this.handleCollectionResponse);
  }

  find(): Observable<Array<FirebaseEntity>> {
    // TODO: implement
    throw new Error('Method not implemented.');
  }

  create(entity: FirebaseEntity, ...parentEntities: Array<FirebaseEntity>): Observable<FirebaseEntity> {
    const subject = new Subject<T>();

    this.getCollectionRef(...parentEntities).add(entity).then(
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
  remove(entity: FirebaseEntity, ...parentEntities: Array<FirebaseEntity>): Promise<void> {
    return this.getDocRef(entity.id, ...parentEntities).delete();
  }

  update(entity: FirebaseEntity, ...parentEntities: Array<FirebaseEntity>): Promise<void> {
    return this.getDocRef(entity.id, ...parentEntities).set(entity, { merge: true });
  }

  private getCollectionRef(...parentEntities: Array<FirebaseEntity>): AngularFirestoreCollection<FirebaseEntity> {
    return parentEntities === undefined || parentEntities.length === 0 ?
      this.afs.collection<FirebaseEntity>(this.entity.name) :
      this.getNestedCollectionRef(parentEntities);
  }

  private getNestedCollectionRef(parentEntities: Array<FirebaseEntity>): AngularFirestoreCollection<FirebaseEntity> {
    return this.getNestedRef(parentEntities).collection(this.entity.name);
  }

  private getDocRef(id: string, ...parentEntities: Array<FirebaseEntity>): AngularFirestoreDocument<FirebaseEntity> {
    return parentEntities === undefined || parentEntities.length === 0 ?
      this.afs.collection<FirebaseEntity>(this.entity.name).doc(id) :
      this.getNestedDocRef(id, parentEntities);
  }

  private getNestedDocRef(id: string, parentEntities: Array<FirebaseEntity>): AngularFirestoreDocument<FirebaseEntity> {
    return this.getNestedRef(parentEntities).collection(this.entity.name).doc(id);
  }

  private getNestedRef(parentEntities: Array<FirebaseEntity>): AngularFirestoreDocument<FirebaseEntity> {
    // TODO: review/error handle, assuming entities are in the array sequentially in relation to the firebase path
    const baseParent = parentEntities[0];
    let collectionRef = this.afs.collection<FirebaseEntity>(baseParent.name).doc<FirebaseEntity>(baseParent.id);

    for (let i = 1; i < parentEntities.length; i++) {
      const nextEntity = parentEntities[i];
      if (!nextEntity.name || !nextEntity.id) break;
      collectionRef = collectionRef.collection<FirebaseEntity>(nextEntity.name).doc<FirebaseEntity>(nextEntity.id);
    }

    return collectionRef;
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
