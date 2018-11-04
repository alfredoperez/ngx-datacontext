import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from './shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    NgbModule,
    AppSharedModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/home' },
        {
          path: 'home',
          loadChildren: '@ngx-datacontext/documentation-ui/home#HomeModule'
        },
        {
          path: 'getting-started',
          loadChildren:
            '@ngx-datacontext/documentation-ui/getting-started#GettingStartedModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
