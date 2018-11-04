import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseRepository } from './firebase-repository.service';
import { BaseEntity } from '../models/entity.model';
import { DataSource, DataSourceType } from '../models/datasource.model';
import { Repository } from '../models/repository.model';
import { FirebaseEntity } from '../models/firebase-entity.model';
import { FirestoreRepository } from './firestore-repository.service';

@Injectable()
export class DataServiceFactory {
  constructor(
    private http: HttpClient,
    private fbDb?: AngularFireDatabase,
    private fb?: FirebaseApp,
    private fbStore?: AngularFirestore
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
        service = new FirestoreRepository(
          entity as FirebaseEntity,
          this.fbStore
        );
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
