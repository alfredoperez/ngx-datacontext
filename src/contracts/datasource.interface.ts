import { BaseEntity } from '../models/entity.model';

export interface DataSource {
  type: DataSourceType;
  entities: Array<BaseEntity>;
}

export enum DataSourceType {
  firebase,
  rest
}
