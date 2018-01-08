import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDataContextModule } from '../../../../src';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';


import { FirebaseDemoComponent } from './containers/firebase-demo/firebase-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirestoreDemoComponent } from './containers/firestore-demo/firestore-demo.component';

const COMPONENTS = [
    HomeComponent,
    FirebaseDemoComponent,
    FirestoreDemoComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxDataContextModule.forRoot(),
        HomeRoutingModule,
        BrowserAnimationsModule,

        NgbModule
    ],
    declarations: [...COMPONENTS],
    entryComponents: [...COMPONENTS]
})
export class HomeModule { }
