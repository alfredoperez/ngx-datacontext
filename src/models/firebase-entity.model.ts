import { BaseEntity } from './entity.model';

export class FirebaseEntity extends BaseEntity {
  id: string;
  name: string;

  toRecord(): any {
    return {
      id: this.key,
      name: this['name']
    };
  }
}
