import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import * as fromServices from './services/';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularFireDatabaseModule, HttpClientModule],
  exports: []
})
export class NgxDataContextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDataContextModule,
      providers: [fromServices.services]
    };
  }
}
