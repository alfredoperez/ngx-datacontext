import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule.forRoot({ theme: 'dracula' }),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GettingStartedComponent }
    ])
  ],
  declarations: [GettingStartedComponent],
  entryComponents: [GettingStartedComponent]
})
export class GettingStartedModule {}
