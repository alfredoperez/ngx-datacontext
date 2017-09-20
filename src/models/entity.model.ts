import * as _ from 'lodash';

export class BaseEntity {

  public entityName: string;
  public key: string;

  constructor() {
    this.entityName = (this as any).$$name;
  }

  public deserialize(input: Object): BaseEntity {
    for ( const property in input ) {
      if ( !input.hasOwnProperty(property) ) {
        continue;
      }

      if ( typeof this[property] === 'object' && input[property] !== undefined ) {
        const result = this.deserializeEntity(this[property], input[property]);
        if ( Array.isArray(result) ) {
          this[property] = result.splice(0);
        }
        else {
          this[property] = Object.assign({}, result);
        }

      } else if ( this.isDate(input[property]) ) {
        this[property] = new Date(input[property]);
      } else {
        this[property] = input[property];
      }

    }

    return this;
  }

  private deserializeEntity(entity, data) {
    if ( entity === undefined || data === undefined ) {
      return undefined;
    }

    let result;
    if ( Array.isArray(data) ) {
      const collection = [];
      for ( const d in data ) {
        if ( d !== undefined ) {
          const item = typeof data === 'object' ? data[d] : data;
          const deserialize = entity.deserialize(item);
          collection.push(deserialize);
        }
      }
      result = collection;
    } else if ( !_.isEmpty(entity) && entity.deserialize !== undefined ) {
      result = entity.deserialize(data);
    } else if ( !_.isEmpty(entity) ) {
      result = data;
    }

    return result;
  }

  private isDate(field: any) {
    return typeof field === 'string'
      && field.indexOf('Z') !== -1
      && !isNaN(Date.parse(field));
  }

  isNew(): boolean {
    return this.key === undefined;
  }
}

