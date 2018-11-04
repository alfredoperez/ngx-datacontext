import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseEntity } from '../models/entity.model';
import { Repository } from '../models/repository.model';

@Injectable()
export class RestApiRepositoryService<T extends BaseEntity>
  implements Repository<BaseEntity> {
  getById(id: string): Observable<BaseEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Array<BaseEntity>> {
    throw new Error('Method not implemented.');
  }
  find(): Observable<Array<BaseEntity>> {
    throw new Error('Method not implemented.');
  }
  create(entity: BaseEntity): Observable<BaseEntity> {
    throw new Error('Method not implemented.');
  }
  remove(entity: BaseEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(entity: BaseEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
