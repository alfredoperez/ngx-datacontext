import { Attribute, Entity, FirebaseEntity } from '@ngx-datacontext/ngx-datacontext';

@Entity('posts')
export class Post extends FirebaseEntity {
    @Attribute() title: string;
    @Attribute() content: string;
    @Attribute() tags: string;
    @Attribute() createdBy: string;
    @Attribute() createdOn: Date;
}
