import { Observable } from 'rxjs/Observable';

import { FirebaseEntity } from '../models/firebase-entity.model';
import { Repository } from '../models/repository.model';

export class FirestoreRepository<T extends FirebaseEntity>
  implements Repository<FirebaseEntity> {
  getById(id: string): Observable<FirebaseEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Array<FirebaseEntity>> {
    throw new Error('Method not implemented.');
  }
  find(): Observable<Array<FirebaseEntity>> {
    throw new Error('Method not implemented.');
  }
  create(entity: FirebaseEntity): Observable<FirebaseEntity> {
    throw new Error('Method not implemented.');
  }
  remove(entity: FirebaseEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(entity: FirebaseEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
