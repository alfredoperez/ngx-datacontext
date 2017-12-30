import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import * as fromModels from '../models';
import { FirebaseRepository } from './firebase-repository.service';

@Injectable()
export class DataServiceFactory {
  constructor(
    private http: HttpClient,
    private fbDb?: AngularFireDatabase,
    private fb?: FirebaseApp
  ) {}

  create(
    entity: fromModels.BaseEntity,
    datasource: fromModels.DataSource
  ): fromModels.Repository<fromModels.BaseEntity> | undefined {
    let service;
    switch (datasource.type) {
      case fromModels.DataSourceType.firebase:
        service = new FirebaseRepository(
          entity as fromModels.FirebaseEntity,
          this.fbDb,
          this.fb
        );
        break;
      case fromModels.DataSourceType.rest:
        break;
      case fromModels.DataSourceType.firestore:
        break;
      default:
        break;
    }

    return service;
  }

  createCustom(datasource: fromModels.DataSource): any {
    // return new datasource.service(datasource.entity, datasource.apiConfig, this.http);
  }
}
