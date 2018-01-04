import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataContextModule } from 'ngx-datacontext';
import { DataContextService } from './services/datacontext.service';

@NgModule({
  imports: [
    CommonModule,
    NgxDataContextModule.forRoot(),
  ],
  providers: [DataContextService]
})
export class CoreModule { }
