import { Entity, FirebaseEntity, Attribute } from '@ngx-datacontext/ngx-datacontext';

@Entity('comments')
export class Comment extends FirebaseEntity {
    @Attribute() content: string;
    @Attribute() createdBy: string;
    @Attribute() createdOn: string;
}
