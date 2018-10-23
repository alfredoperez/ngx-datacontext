import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './containers/home/containers/home/home.component';
import { FirebaseDemoComponent } from './containers/home/containers/firebase-demo/firebase-demo.component';
import { FirestoreDemoComponent } from './containers/home/containers/firestore-demo/firestore-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDataContextModule } from '@ngx-datacontext/ngx-datacontext';
import { GettingStartedComponent } from './containers/getting-started/getting-started.component';
import { HighlightModule } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS = [
  HomeComponent,
  FirebaseDemoComponent,
  FirestoreDemoComponent,
  GettingStartedComponent,
];
const firebaseConfig = {
  apiKey: 'AIzaSyA3Y3Fp-vARd59m1QAgSaouF7Fwl4qi-Rg',
  authDomain: 'ngx-datacontext.firebaseapp.com',
  databaseURL: 'https://ngx-datacontext.firebaseio.com',
  projectId: 'ngx-datacontext',
  storageBucket: 'ngx-datacontext.appspot.com',
  messagingSenderId: '567572897872'
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDataContextModule.forRoot(),
    
    NgbModule,
    HighlightModule.forRoot({ theme: 'dracula' }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: '/documentation-ui/home' },
        { path: 'home', component: HomeComponent },
        { path: 'getting-started',    component:GettingStartedComponent
          }
    ]),
  
    CoreModule
  ],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class DocumentationUiModule {}
