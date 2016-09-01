import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { HttpModule} 		from '@angular/http';

import { AppComponent }  		from './app.component';
import { SimpleListComponent }	from './simple-list/simple-list.component';

@NgModule({
  imports:      [ 
					BrowserModule,
					HttpModule
				],
  declarations: [ 
					AppComponent,
					SimpleListComponent
				],
  bootstrap:    [ 
					AppComponent
				]
})

export class AppModule { }