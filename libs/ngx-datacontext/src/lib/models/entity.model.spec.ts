
import { BaseEntity } from './entity.model';
import { Entity } from '../decorators/entity.decorator';
import { Attribute } from '../decorators/attribute.decorator';

const FIRST_NAME = 'John';
const LAST_NAME = 'Smith';
const ENTITY_NAME = 'user';

@Entity(ENTITY_NAME)
class User extends BaseEntity {
    @Attribute({ serializedName: 'firstName' })
    name: string;

    @Attribute() lastName: string;

    middleName: string;
}

const user = new User().deserialize({
    firstName: FIRST_NAME,
    lastName: LAST_NAME
}
);

describe('Entity Model', () => {
    it('should have an entity name', () => {
        const mock = new User();

        expect(mock.entityName).toBe(ENTITY_NAME);
    });

    it('should be new if id is undefined', () => {
        const mock = new User();

        expect(mock.isNew).toBeTruthy();
    });

    it('should not be new if id is defined', () => {
        const mock = new User();
        mock.id = '3';

        expect(mock.isNew).toBeFalsy();
    });

    it('should deserialize when attribute is present', () => {
        const mock = new User();
        const newUser = mock.deserialize({ lastName: LAST_NAME }) as User;

        expect(newUser.lastName).toBe(LAST_NAME);
    });

    it('should deserialize when attribute has a "serializedName"', () => {
        const mock = new User();
        const newUser = mock.deserialize({ firstName: FIRST_NAME }) as User;

        expect(newUser.name).toBe(FIRST_NAME);
    });

    it('should not deserialize when attribute is not found', () => {
        const mock = new User();
        const newUser = mock.deserialize({ name: FIRST_NAME }) as User;

        expect(newUser.name).toBe(undefined);
    });

    it('should not deserialize an attribute without decorator', () => {
        const mock = new User();
        const newUser = mock.deserialize({ middleName: FIRST_NAME }) as User;

        expect(newUser.middleName).toBe(undefined);
    });

    it('should serialize all attributes', () => {

        const serialized = user.serialize();

        expect(serialized).toEqual(jasmine.objectContaining({ name: FIRST_NAME, lastName: LAST_NAME }));
    });
});
