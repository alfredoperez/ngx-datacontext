import * as _ from 'lodash';

import { EntityAttribute } from '../decorators/attribute.decorator';

export class BaseEntity {
  attributes: Array<EntityAttribute>;
  entityName: string;
  id: any;

  constructor() {
    this.entityName = (this as any).$$name;
  }

  serialize(): any {
    if (this.attributes === undefined) return undefined;
    const result: any = {};
    this.attributes.forEach((attr: EntityAttribute) => {
      if ((this as any)[attr.name] !== undefined)
        result[attr.name] = (this as any)[attr.name];
    });

    return result;
  }

  deserialize(target: any): BaseEntity {
    if (this.attributes === undefined) return this;

    this.attributes.forEach((attr: EntityAttribute) => {
      if (
        attr.options === undefined ||
        attr.options.serializedName === undefined ||
        !target.hasOwnProperty(attr.options.serializedName)
      )
        return this;

      const targetValue = target[attr.options.serializedName];

      (this as any)[attr.name] = attr.options.isEntity
        ? this.deserializeEntity((this as any)[attr.name], targetValue)
        : this.isDate(targetValue) ? new Date(targetValue) : targetValue;
    });

    return this;
  }

  get isNew(): boolean {
    return this.id === undefined;
  }

  private deserializeEntity = (entity: any, data: any): any => {
    if (entity === undefined || data === undefined) return undefined;

    let result;
    if (Array.isArray(data)) {
      const collection = [];
      for (const d in data)
        if (d !== undefined) {
          const item = typeof data === 'object' ? data[d] : data;
          const deserialize = entity.deserialize(item);
          collection.push(deserialize);
        }

      result = collection;
    } else if (!_.isEmpty(entity))
      result =
        entity.deserialize !== undefined ? entity.deserialize(data) : data;

    return result;
  }

  private isDate = (field: any): boolean => {
    return (
      typeof field === 'string' &&
      field.indexOf('Z') !== -1 &&
      !isNaN(Date.parse(field))
    );
  }
}
