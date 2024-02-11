import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor() {}

  method() {
    console.log('testing serveice');
  }
}
