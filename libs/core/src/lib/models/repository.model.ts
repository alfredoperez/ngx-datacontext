import { Observable } from 'rxjs';

import { BaseEntity } from './entity.model';

export interface Repository<T extends BaseEntity> {
  getById(id: string): Observable<T>;

  getAll(): Observable<Array<T>>;

  find(): Observable<Array<T>>;

  create(entity: T): Observable<T>;

  remove(entity: T): Promise<void>;

  update(entity: T): Promise<void>;
}
