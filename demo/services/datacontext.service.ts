import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { DataSourceType, RepositoryFactoryService } from '../../src/';
import { FirebaseRepository } from '../../src/services/firebase-repository.service';
import { User } from '../models/user.model';

@Injectable()
export class DatacontextService {
  users: FirebaseRepository<User>;

  constructor(private fbDb: AngularFireDatabase, private fb: FirebaseApp) {
    const factory = new RepositoryFactoryService(this.fbDb, this.fb);

    this.users = factory.create(
      new User(),
      DataSourceType.firebase
    ) as FirebaseRepository<User>;
  }
}
