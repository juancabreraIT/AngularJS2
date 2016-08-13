import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DummyComponent }  from './dummy/dummy.component';
import { FooComponent }  from './foo/foo.component';

@NgModule({
  imports:      [ 
  								BrowserModule,
  								FormsModule
  							],
  declarations: [ 
  								AppComponent, 
  								DummyComponent,
  								FooComponent
								],
  bootstrap:    [ 
  								AppComponent,
  								DummyComponent,
  								FooComponent
								]
})

export class AppModule { }