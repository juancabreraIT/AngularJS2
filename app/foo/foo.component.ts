import { Component } from '@angular/core';

export class Foo {
	id: number;
	nickName: string;

	constructor() {
		this.id = 1;
		this.nickName = 'Billy';
	}

}

@Component({
  selector: 'foo',
  templateUrl: '/app/foo/foo.html',
  styleUrls: ['/app/foo/foo.css']
})

export class FooComponent {
	name = 'Foo component';
	foo = new Foo();
 }