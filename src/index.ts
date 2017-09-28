import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RepositoryFactoryService } from './services/repository-factory.service';

export * from './models/contracts';
export {EntityProperty} from './decorators/entity-property.decorator';
export {Entity} from './decorators/entity.decorator';
export {BaseEntity} from './models/entity.model';

export {Repository} from './services/abstract-repository.service';
export {FirebaseEntity} from './models/firebase-entity.model';

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireModule
  ],
  declarations: [

  ],
  providers: [
    RepositoryFactoryService
  ],
  exports: [

  ],
})
export class NgxDataContextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDataContextModule,
      providers: [RepositoryFactoryService]
    };
  }
}
