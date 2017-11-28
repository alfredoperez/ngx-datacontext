import { Entity, FirebaseEntity } from '../../src/';

@Entity('users')
export class User extends FirebaseEntity {
  name: string;
  creation: string;
  color: string;
}
