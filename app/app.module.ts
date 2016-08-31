import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule }   		from '@angular/forms';

import { routing } 				from './app.routing'; 

import { AppComponent }  		from './app.component';
import { DummyComponent }  		from './dummy/dummy.component';
import { FooComponent }  		from './foo/foo.component';
import { BazComponent }  		from './baz/baz.component';
import { HomeComponent }  		from './home/home.component';
import { AthleteFormComponent }	from './sample_form/athlete-form.component';
import { CitiesComponent }		from './cities/cities.component';

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
					HomeComponent,
					AthleteFormComponent,
					CitiesComponent
				],
  bootstrap:    [ 
					AppComponent
				]
})

export class AppModule { }