import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private logger: LoggerService) {}

  method() {
    console.log('ProductService');
  }
}
