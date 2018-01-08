import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    HighlightModule.forRoot({ theme: 'dracula' })

  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule { }
