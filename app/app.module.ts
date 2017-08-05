import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BasicComponent }  from './Basic/basic.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,BasicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
