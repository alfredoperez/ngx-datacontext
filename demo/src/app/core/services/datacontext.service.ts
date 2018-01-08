
import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import * as fromDataContext from '../../../../../src/';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class DataContextService extends fromDataContext.DataContext {
    users: any;
    comments: any;
    posts: any;

    // Setting up the different data sources
    datasources: Array<fromDataContext.DataSource> = [
        {
            type: fromDataContext.DataSourceType.firebase,
            entities: [
                new User()
            ]
        },
        {
            type: fromDataContext.DataSourceType.firestore,
            entities: [
                new Comment(),
                new Post()
            ]
        }
    ];

    constructor(private factory: fromDataContext.DataServiceFactory) {
        super(factory);
        this.initialize();
    }
}
