import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RepositoryFactoryService } from './services/repository-factory.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularFireDatabaseModule],
  exports: []
})
export class NgxDatacontextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDatacontextModule,
      providers: [RepositoryFactoryService]
    };
  }
}
