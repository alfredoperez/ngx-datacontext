import * as _ from 'lodash';

export class BaseEntity {
  entityName: string;
  key: string;

  constructor() {
    this.entityName = (this as any).$$name;
  }

  deserialize(input: any): BaseEntity {
    for (const property in input) {
      if (!input.hasOwnProperty(property)) continue;

      if (
        typeof (this as any)[property] === 'object' &&
        input[property] !== undefined
      ) {
        const result = this.deserializeEntity(
          (this as any)[property],
          input[property]
        );
        (this as any)[property] = Array.isArray(result)
          ? result.splice(0)
          : { ...result };
      } else
        (this as any)[property] = this.isDate(input[property])
          ? new Date(input[property])
          : input[property];
    }

    return this;
  }
  isNew(): boolean {
    return this.key === undefined;
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
  };

  private isDate = (field: any): boolean => {
    return (
      typeof field === 'string' &&
      field.indexOf('Z') !== -1 &&
      !isNaN(Date.parse(field))
    );
  };
}
