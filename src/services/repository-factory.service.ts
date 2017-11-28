import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { DataSourceType } from '../contracts/datasource.interface';
import { Repository } from '../contracts/repository.interface';
import { FirebaseEntity } from '../index';
import { BaseEntity } from '../models/entity.model';
import { FirebaseRepository } from './firebase-repository.service';

@Injectable()
export class RepositoryFactoryService {
  constructor(private fbDb?: AngularFireDatabase, private fb?: FirebaseApp) {}

  create(
    entity: BaseEntity,
    datasourceType: DataSourceType
  ): Repository<BaseEntity> | undefined {
    let service;
    if (datasourceType === DataSourceType.firebase)
      service = new FirebaseRepository(
        entity as FirebaseEntity,
        this.fbDb,
        this.fb
      );

    return service;
  }
}
