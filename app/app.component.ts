import { Component }            from '@angular/core';
import { DummyComponent }       from './dummy/dummy.component';
import { FooComponent }         from './foo/foo.component';
import { BazComponent }         from './baz/baz.component';
import { AthleteFormComponent } from './sample_form/athlete-form.component';
import { CitiesComponent }		  from './cities/cities.component';

@Component({
  selector: 'app',
  templateUrl: '/app/app.html',
  directives: [
                DummyComponent,
                FooComponent,
                BazComponent,
                AthleteFormComponent,
                CitiesComponent
              ],
  styleUrls: ['/app/app.css']
})

export class AppComponent { }