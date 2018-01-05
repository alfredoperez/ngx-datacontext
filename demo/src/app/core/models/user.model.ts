import { Entity, FirebaseEntity } from 'ngx-datacontext';

@Entity('users')
export class User extends FirebaseEntity {

    name: string;
    createdOn: string;
    color: string;
}
