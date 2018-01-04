import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { FirebaseRepository } from './firebase-repository.service';
import { BaseEntity } from '../models/entity.model';
import { DataSource, DataSourceType } from '../models/datasource.model';
import { Repository } from '../models/repository.model';
import { FirebaseEntity } from '../models/firebase-entity.model';

@Injectable()
export class DataServiceFactory {
  constructor(
    private http: HttpClient,
    private fbDb?: AngularFireDatabase,
    private fb?: FirebaseApp
  ) { }

  create(
    entity: BaseEntity,
    datasource: DataSource
  ): Repository<BaseEntity> | undefined {
    let service;
    switch (datasource.type) {
      case DataSourceType.firebase:
        service = new FirebaseRepository(
          entity as FirebaseEntity,
          this.fbDb,
          this.fb
        );
        break;
      case DataSourceType.rest:
        break;
      case DataSourceType.firestore:
        break;
      default:
        break;
    }

    return service;
  }

  createCustom(datasource: DataSource): any {
    // return new datasource.service(datasource.entity, datasource.apiConfig, this.http);
  }
}
