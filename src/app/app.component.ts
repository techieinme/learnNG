import { Component, Inject, inject } from '@angular/core';
import { API_URL } from './app.module';
import { ServiceOneService } from './service-one.service';
import { TestingService } from './testing.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularTuts';

  constructor(
    @Inject(API_URL) private api: string,

    @Inject('lakshmiString') private lakshmi: string,
    private testingService: TestingService,
    private productService: ProductService
  ) {
    console.log('API_URL', api);
    console.log(lakshmi);
    testingService.method();
    productService.method();
  }
}
