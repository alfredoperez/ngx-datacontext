import { BaseEntity } from '../models/entity.model';
import { Observable } from 'rxjs/Observable';


export abstract class Repository<T extends BaseEntity> {

  public abstract getById(id: string): Observable<T>;

  public abstract getAll(): Observable<T[]>;

  public abstract find(): Observable<T[]>;

  public abstract create(entity: T): Observable<T>;

  public abstract remove(entity: T): Observable<boolean>;

  public abstract update(entity: T): Observable<boolean>;
}
