import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2/firebase.app.module';
import { Repository } from 'services/abstract-repository.service';

import { DataSourceType } from '../models/contracts';
import { BaseEntity } from '../models/entity.model';
import { FirebaseEntity } from '../models/firebase-entity.model';
import { FirebaseRepository } from './firebase-repository.service';

@Injectable()
export class RepositoryFactoryService {

    constructor(private datasourceType: DataSourceType, private fbDb?: AngularFireDatabase, private fb?: FirebaseApp) {

    }

    public create(entity: BaseEntity): Repository<BaseEntity> {
        let service;
        if (this.datasourceType === DataSourceType.firebase) {
            service = new FirebaseRepository(entity as FirebaseEntity, this.fbDb, this.fb);
        }

        return service;
  }
}
