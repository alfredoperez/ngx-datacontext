import { HttpHeaders } from '@angular/common/http';

import { BaseEntity } from './entity.model';

/**
 * Interface representing the configuration for an api.
 *
 */
export interface ApiConfig {
  url: string;
  /**
   * Attribute where the collection will be located.
   * This is useful when the response a get() call that
   * returns a collection in a certain attribute.
   * @example 'items' when response is like {items:[]}
   */
  collectionAttribute?: string;
  headers?: HttpHeaders;
}

export interface DataSource {
  config?: ApiConfig;
  type: DataSourceType;
  entities?: Array<EntityServiceConfig> | Array<BaseEntity>;
  services?: Array<CustomServiceConfig>;
}

export interface CustomServiceConfig {
  name: string;
  entity: BaseEntity;
  service: any;
}
/**
 * Configuration for services linked to specific entity.
 * @export
 */
export interface EntityServiceConfig {
  /**
   * Renames the property used in datacontext for
   * the current entity service.
   */
  name?: string;

  entity: BaseEntity;
}

export enum DataSourceType {
  firebase,
  firestore,
  rest
}
