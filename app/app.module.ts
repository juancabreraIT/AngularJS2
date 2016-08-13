import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DummyComponent }  from './dummy/dummy.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  								AppComponent, 
  								DummyComponent
								],
  bootstrap:    [ 
  								AppComponent,
  								DummyComponent
								]
})

export class AppModule { }