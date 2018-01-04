import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDataContextModule } from 'ngx-datacontext';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseDemoComponent } from './containers/firebase-demo/firebase-demo.component';
import { UserFormComponent } from './containers/user-form/user-form.component';

const COMPONENTS = [
    HomeComponent,
    FirebaseDemoComponent,
    UserFormComponent
];

@NgModule({
    imports: [
        CommonModule,
        //   NgxDataContextModule.forRoot(),
        HomeRoutingModule,

        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatProgressBarModule,
    ],
    declarations: [...COMPONENTS]

})
export class HomeModule { }
