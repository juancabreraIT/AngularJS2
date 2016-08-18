import { Component }            from '@angular/core';
import { DummyComponent }       from './dummy/dummy.component';
import { FooComponent }         from './foo/foo.component';
import { BazComponent }         from './baz/baz.component';
import { AthleteFormComponent } from './sample_form/athlete-form.component';

@Component({
  selector: 'app',
  templateUrl: '/app/app.html',
  directives: [
                DummyComponent,
                FooComponent,
                BazComponent,
                AthleteFormComponent
              ],
  styleUrls: ['/app/app.css']
})

export class AppComponent { }