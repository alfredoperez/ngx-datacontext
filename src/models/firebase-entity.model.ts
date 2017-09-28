import { IRecord } from './contracts';
import { BaseEntity } from './entity.model';

export class FirebaseEntity extends BaseEntity {

    public toRecord(): IRecord {
      return {
        id: this.key ,
        name: this['name']
      };
    }
  }
