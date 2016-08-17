import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';

import { routing } 			from './app.routing'; 

import { AppComponent }  	from './app.component';
import { DummyComponent }  	from './dummy/dummy.component';
import { FooComponent }  	from './foo/foo.component';
import { BazComponent }  	from './baz/baz.component';
import { HomeComponent }  	from './home/home.component';

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
					BazComponent,
					HomeComponent
				],
  bootstrap:    [ 
					AppComponent
				]
})

export class AppModule { }