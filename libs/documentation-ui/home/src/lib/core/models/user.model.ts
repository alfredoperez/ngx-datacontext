import { Entity, FirebaseEntity, Attribute } from '@ngx-datacontext/core';

@Entity('users')
export class User extends FirebaseEntity {
    @Attribute() firstName: string;
    @Attribute() lastName: string;
}
