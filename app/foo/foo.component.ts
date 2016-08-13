import { Component } from '@angular/core';

export class Foo {
	id: number;
	nickName: string;
}

@Component({
  selector: 'foo',
  templateUrl: '/app/foo/foo.html',
  styleUrls: ['/app/foo/foo.css']
})

export class FooComponent {
	name = 'Foo component';
	foo : Foo = {
		id: 1,
		nickName: 'Billy'
	}
 }