import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakePoductService {
  constructor() {}

  method() {
    console.log('FakePoductService');
  }
}
