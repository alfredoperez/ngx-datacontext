import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'ngx-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  importing = `import { NgxDataContextModule } from 'ngx-datacontext';
@NgModule({
  imports: [
    // ...
    NgxDataContextModule.forRoot()
  ]
})`;
  entity = `@Entity('users')
export class User extends FirebaseEntity {
    @Attribute() firstName: string;
    @Attribute() lastName: string;
}
`;
  datacontext = `@Injectable()
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
`;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-datacontext');
  }

}
