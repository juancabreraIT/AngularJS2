import { Component } from '@angular/core';

@Component({
  selector: 'dummy',
  templateUrl: '/app/dummy/dummy.html',
  styleUrls: ['/app/dummy/dummy.css']
})

export class DummyComponent {
	name = 'Dummy component';
	description = 'Standard text';
 }