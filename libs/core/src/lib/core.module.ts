import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseRepository } from './services/firebase-repository.service';
import { FirestoreRepository } from './services/firestore-repository.service';
import { DataContext } from './services/datacontext.service';
import { DataServiceFactory } from './services/repository-factory.service';

// Entities
export { BaseEntity } from './models/entity.model';
export { DataSource, DataSourceType } from './models/datasource.model';
export { FirebaseEntity } from './models/firebase-entity.model';

// Decorators
export { Entity } from './decorators/entity.decorator';
export { Attribute } from './decorators/attribute.decorator';

// Services
export { FirebaseRepository } from './services/firebase-repository.service';
export { FirestoreRepository } from './services/firestore-repository.service';
export { DataContext } from './services/datacontext.service';
export { DataServiceFactory } from './services/repository-factory.service';

const SERVICES = [
  FirebaseRepository,
  FirestoreRepository,
  DataContext,
  DataServiceFactory
];
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule],
  exports: []
})
export class NgxDataContextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDataContextModule,
      providers: [...SERVICES]
    };
  }
}
