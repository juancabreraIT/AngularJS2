import { Injectable } from '@angular/core';
import { TITANS } from './baz-mock';

@Injectable()
export class SampleService {
    
    getMessage() {
        return 'Sample service say hello';
    }

    getTitans() {
        return TITANS;
    }
}