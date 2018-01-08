import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppSharedModule } from './shared/shared.module';

const firebaseConfig = {
    apiKey: 'AIzaSyA3Y3Fp-vARd59m1QAgSaouF7Fwl4qi-Rg',
    authDomain: 'ngx-datacontext.firebaseapp.com',
    databaseURL: 'https://ngx-datacontext.firebaseio.com',
    projectId: 'ngx-datacontext',
    storageBucket: 'ngx-datacontext.appspot.com',
    messagingSenderId: '567572897872'
};
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Add .withServerTransition() to support Universal rendering.
        // The application ID can be any identifier which is unique on
        // the page.
        BrowserModule.withServerTransition({ appId: 'ngx-datacontext-demo-id' }),

        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppSharedModule,
        HomeModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
