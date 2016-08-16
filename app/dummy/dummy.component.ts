import { Component } from '@angular/core';

@Component({
  selector: 'dummy',
  templateUrl: '/app/dummy/dummy.html',
  styleUrls: ['/app/dummy/dummy.css']
})

export class DummyComponent {

  public name:string;
  public description:string;
  public serviceHello:string;

  constructor() {
    this.name = 'Dummy component';
	  this.description = 'Standard text';
  }
	
 }