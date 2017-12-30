import { BaseEntity } from '../models/';
import { Attribute } from './attribute.decorator';
import { Entity } from './entity.decorator';

/* tslint:disable */
@Entity('user')
class User extends BaseEntity {
    @Attribute({ serializedName: 'firstName' })
    name: string;

    @Attribute() lastName: string;

    middleName: string;
}

describe('Entity Decorator', () => {
    it('should return list of serializable attributes', () => {
        const mock = new User();

        expect((mock as any).attributes.length).toBeGreaterThan(0);
        expect((mock as any).attributes[0].name).toBe('name');
    });

    it('should return attribute without key', () => {
        const mock = new User();
        expect((mock as any).attributes.length).toBeGreaterThan(0);
        expect((mock as any).attributes[0].name).toBe('name');
    });
});
