import { Entity, FirebaseEntity, Attribute } from 'ngx-datacontext';

@Entity('users')
export class User extends FirebaseEntity {
    @Attribute() name: string;
    @Attribute() createdOn: string;
    @Attribute() color: string;
}
