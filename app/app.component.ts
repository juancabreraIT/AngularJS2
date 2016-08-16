import { Component } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app',
  templateUrl: '/app/app.html',
  directives: [
                DummyComponent,
                FooComponent                 
              ],
  styleUrls: ['/app/app.css']
})

export class AppComponent { }