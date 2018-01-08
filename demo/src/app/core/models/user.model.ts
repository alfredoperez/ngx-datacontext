import { Entity, FirebaseEntity, Attribute } from '../.../../../../../../src/';

@Entity('users')
export class User extends FirebaseEntity {
    @Attribute() firstName: string;
    @Attribute() lastName: string;
}
