import { Entity, FirebaseEntity, Attribute } from '../.../../../../../../src/';

@Entity('comments')
export class Comment extends FirebaseEntity {
    @Attribute() content: string;
    @Attribute() createdBy: string;
    @Attribute() createdOn: string;
}
