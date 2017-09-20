import { BaseEntity } from './entity.model';

export interface IRecord {
    id: string;
    name: string;
  }

  export interface DataContextConfig {
    dataSources?: Array<DataSource>;
  }

  export interface DataSource {
    type: DataSourceType;
    entities: Array<BaseEntity>;
  }

  export enum DataSourceType {
    firebase,
    rest
  }