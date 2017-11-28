export * from './ngx-datacontext.module';
export { DataContextConfig } from './contracts/datacontext-config.interface';
export { DataSource, DataSourceType } from './contracts/datasource.interface';

export { BaseEntity } from './models/entity.model';
export { FirebaseEntity } from './models/firebase-entity.model';

export { EntityProperty } from './decorators/entity-property.decorator';
export { Entity } from './decorators/entity.decorator';

export { FirebaseRepository } from './services/firebase-repository.service';
export {
  RepositoryFactoryService
} from './services/repository-factory.service';
