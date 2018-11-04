import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { NgxDataContextModule } from '@ngx-datacontext/core';
import { FirebaseDemoComponent } from './containers/firebase-demo/firebase-demo.component';
import { FirestoreDemoComponent } from './containers/firestore-demo/firestore-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS = [
  HomeComponent,
  FirebaseDemoComponent,
  FirestoreDemoComponent
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
      { path: '', pathMatch: 'full', component: HomeComponent }
    ]),
    CoreModule
  ],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class HomeModule {}
