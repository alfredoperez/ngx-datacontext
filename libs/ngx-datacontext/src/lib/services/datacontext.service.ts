import { Injectable } from '@angular/core';

import { DataServiceFactory } from './repository-factory.service';
import { BaseEntity } from '../models/entity.model';
import { CustomServiceConfig, DataSource } from '../models/datasource.model';

@Injectable()
export class DataContext {
  datasources: Array<DataSource>;

  constructor(private serviceFactory: DataServiceFactory) { }

  initialize(): void {
    if (this.datasources !== undefined)
      this.datasources.forEach(datasource => {
        if (
          datasource.entities !== undefined &&
          Array.isArray(datasource.entities)
        )
          for (const item of datasource.entities) {
            let entity: BaseEntity;
            let target: string;

            if (item instanceof BaseEntity) {
              entity = item as BaseEntity;
              target = (entity as any)['$$name'];
            } else {
              entity = item.entity;
              target =
                item.name !== undefined ? item.name : (entity as any)['$$name'];
            }

            (this as any)[target] = this.serviceFactory.create(
              entity,
              datasource
            );
          }

        if (
          datasource.services !== undefined &&
          Array.isArray(datasource.services)
        )
          datasource.services.forEach(
            (config: CustomServiceConfig) => {
              (this as any)[config.name] = this.serviceFactory.createCustom(
                datasource
              );
            }
          );
      });
  }
}

//                 const entity = (item typeof EntityServiceConfig)
//                 ? item.entity
//                 : item;
//         const target = (item typeof EntityServiceConfig && item.name !== undefined)
//         ? (item.entity as any)['$$name']
//         : item.name;

// (this as any)[target] = this.serviceFactory.create(
//     entity,
//     datasource
// );
