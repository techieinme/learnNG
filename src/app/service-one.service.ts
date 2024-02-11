import { Inject, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceOneService {
  constructor(@Inject('API_URL') private apiURL: string) {}

  method1() {
    console.log('service >>1', 'method1');
  }
}
