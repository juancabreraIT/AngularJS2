import { Component } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'baz',
  templateUrl: '/app/baz/baz.html',
  providers: [SampleService]
})

export class BazComponent {

  public serviceHello:string;
  public titans;

  constructor(private _sampleService: SampleService) {
    this.serviceHello = _sampleService.getMessage();
    this.titans = _sampleService.getTitans();
  }
	
 }