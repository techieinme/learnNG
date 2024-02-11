import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceTwoService {
  constructor() {}

  method1() {
    console.log('service >>2', 'method1');
  }
}
