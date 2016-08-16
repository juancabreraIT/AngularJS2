import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';

import { routing } 			from './app.routing'; 

import { AppComponent }  	from './app.component';
import { DummyComponent }  	from './dummy/dummy.component';
import { FooComponent }  	from './foo/foo.component';
import { BazComponent }  	from './baz/baz.component';

@NgModule({
  imports:      [ 
					BrowserModule,
					FormsModule,
					routing
				],
  declarations: [ 
					AppComponent, 
					DummyComponent,
					FooComponent, 
					BazComponent
				],
  bootstrap:    [ 
					AppComponent,
					DummyComponent,
					FooComponent,
					BazComponent
				]
})

export class AppModule { }