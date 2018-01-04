import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {
  AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { FirebaseEntity } from '../models/firebase-entity.model';
import { Repository } from '../models/repository.model';
import * as _ from 'lodash';

export class FirestoreRepository<T extends FirebaseEntity>
  implements Repository<FirebaseEntity> {

  constructor(public entity: FirebaseEntity, private readonly afs: AngularFirestore) { }

  // TODO: include firestore configuration to opt-in for snapshotChanges().
  // Defaulting to valueChanges() instead.
  getById(id: string): Observable<FirebaseEntity> {
    return this.afs.doc<T>(`${this.entity.name}/${id}`)
      .valueChanges()
      .map(this.handleEntityResponse);
  }

  getAll(): Observable<Array<FirebaseEntity>> {
    return this.afs.collection<T>(this.entity.name)
      .valueChanges()
      .map(this.handleCollectionResponse);
  }

  find(): Observable<Array<FirebaseEntity>> {
    throw new Error('Method not implemented.');
  }

  create(entity: FirebaseEntity): Observable<FirebaseEntity> {
    const subject = new Subject<T>();
    this.afs.collection<FirebaseEntity>(this.entity.name)
      .add(entity).then(
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
  remove(entity: FirebaseEntity): Promise<void> {
    return this.afs.collection<FirebaseEntity>(this.entity.name)
      .doc(entity.id).delete();
  }

  update(entity: FirebaseEntity): Promise<void> {
    return this.afs.collection<FirebaseEntity>(this.entity.name)
      .doc(entity.id).set(entity, { merge: true });
  }

  // TODO: add methods for nested collections

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
