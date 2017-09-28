/**
 * This is only for local test
 */
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SampleModule } from 'ngx-datacontext';

@Component({
  selector: 'app',
  template: `<sample-component></sample-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SampleModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
