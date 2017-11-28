import { Observable } from 'rxjs/Rx';

import { BaseEntity } from '../models/entity.model';

export interface Repository<T extends BaseEntity> {
  getById(id: string): Observable<T>;

  getAll(): Observable<Array<T>>;

  find(): Observable<Array<T>>;

  create(entity: T): Observable<T>;

  remove(entity: T): Promise<void>;

  update(entity: T): Observable<T>;
}
