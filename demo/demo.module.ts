import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';

import { NgxDatacontextModule } from '../src';
import { DemoComponent } from './demo.component';
import { DatacontextService } from './services/datacontext.service';
import { UserFormComponent } from './user-form/user-form.component';

const firebaseConfig = {
  apiKey: 'AIzaSyA3Y3Fp-vARd59m1QAgSaouF7Fwl4qi-Rg',
  authDomain: 'ngx-datacontext.firebaseapp.com',
  databaseURL: 'https://ngx-datacontext.firebaseio.com',
  projectId: 'ngx-datacontext',
  storageBucket: 'ngx-datacontext.appspot.com',
  messagingSenderId: '567572897872'
};

@NgModule({
  declarations: [DemoComponent, UserFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,

    AngularFireModule.initializeApp(firebaseConfig),
    NgxDatacontextModule.forRoot()
  ],
  bootstrap: [DemoComponent],
  entryComponents: [UserFormComponent],
  providers: [DatacontextService]
})
export class DemoModule {}
