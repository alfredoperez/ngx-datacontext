import { BaseEntity } from './entity.model';
import { IRecord } from './contracts';

export class FirebaseEntity extends BaseEntity {

    public toRecord(): IRecord {
      return {
        id: this.key ,
        name: this['name']
      };
    }
  }
