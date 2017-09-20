import { NgModule, ModuleWithProviders } from '@angular/core';
import { RepositoryFactoryService } from '../services/repository-factory.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
    imports: [
      AngularFireDatabaseModule,
      AngularFireModule
    ],
    providers: [
      RepositoryFactoryService
    ]
  })
  export class DataContextModule {
    // tslint:disable-next-line:member-access
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: DataContextModule,
        providers: [RepositoryFactoryService]
      };
    }
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: DataContextModule,
            providers: [RepositoryFactoryService]
        };
    }
  }
