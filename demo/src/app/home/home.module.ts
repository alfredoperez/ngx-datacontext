import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDataContextModule } from 'ngx-datacontext';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        NgxDataContextModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
