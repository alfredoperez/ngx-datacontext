import { BaseEntity } from './entity.model';

export class FirebaseEntity extends BaseEntity {
  name: string;

  private toRecord(): any {
    return {
      id: this.id,
      name: this['name']
    };
  }
}
