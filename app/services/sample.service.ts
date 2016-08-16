import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
    
    getMessage() {
        return 'Sample service say hello';
    }
}