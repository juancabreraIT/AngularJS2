import { Component } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { FooComponent } from './foo/foo.component';
import { BazComponent } from './baz/baz.component';

@Component({
  selector: 'app',
  templateUrl: '/app/app.html',
  directives: [
                DummyComponent,
                FooComponent,
                BazComponent
              ],
  styleUrls: ['/app/app.css']
})

export class AppComponent { }