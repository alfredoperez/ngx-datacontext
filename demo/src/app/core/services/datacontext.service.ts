
import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import * as fromDataContext from 'ngx-datacontext';
import { User } from '../models/user.model';

@Injectable()
export class DataContextService extends fromDataContext.DataContext {
    users: any;

    // Setting up the different data sources
    datasources: Array<fromDataContext.DataSource> = [
        {
            type: fromDataContext.DataSourceType.firebase,
            entities: [
                new User()
            ]
        }
    ];

    constructor(private factory: fromDataContext.DataServiceFactory) {
        super(factory);
    }
}
