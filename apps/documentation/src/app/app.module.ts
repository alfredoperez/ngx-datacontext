import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import {AppSharedModule} from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppSharedModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/documentation-ui' },
        {
          path: 'documentation-ui',
          loadChildren:
            '@ngx-datacontext/documentation-ui#DocumentationUiModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
