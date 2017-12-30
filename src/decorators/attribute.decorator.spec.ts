import { BaseEntity } from '../models/';
import { Attribute } from './attribute.decorator';
import { Entity } from './entity.decorator';

@Entity('user')
class User extends BaseEntity {
    @Attribute({ serializedName: 'firstName' })
    name: string;

    @Attribute() lastName: string;

    middleName: string;
}

describe('Entity Decorator', () => {

    it('should add attribute decorated to entity', () => {
        const mock = new User();

        expect((mock as any).attributes[0].options.serializedName)
            .toBe('firstName');
    });

    it('should add attribute without serialized name', () => {
        const mock = new User();

        expect((mock as any).attributes[1].options.serializedName)
            .toBe('lastName');
    });
});
