import { Component } from '@angular/core';
import { Foo } from './model/foo';

@Component({
  selector: 'foo',
  templateUrl: '/app/foo/foo.html',
  styleUrls: ['/app/foo/foo.css']
})

export class FooComponent {

	public name:string;
	public foo:Foo;

	constructor() {
		this.name = 'Foo component';
		this.foo = new Foo(1, 'Billy');
	}	
 }