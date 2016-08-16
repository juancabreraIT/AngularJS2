import { Component } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'baz',
  templateUrl: '/app/baz/baz.html',
  providers: [SampleService]
})

export class BazComponent {

  public serviceHello:string;

  constructor(private _sampleService: SampleService) {
    this.serviceHello = _sampleService.getMessage();
  }
	
 }