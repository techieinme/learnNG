import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceOneService } from './service-one.service';
import { ServiceTwoService } from './service-two.service';
import { TestingComponent } from './testing/testing.component';
import { TestingService } from './testing.service';
import { ProductService } from './product.service';
import { FakePoductService } from './fake-poduct.service';
import { LoggerService } from './logger.service';

export const API_URL = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://google.com',
    },
    {
      provide: 'lakshmiString',
      useValue: 'my name is lakshmi',
    },
    {
      provide: ServiceOneService,
      useClass: ServiceOneService,
    },
    {
      provide: ServiceTwoService,
      useExisting: ServiceOneService,
    },
    TestingService,
    FakePoductService,
    LoggerService,
    ProductService,
    {
      provide: 'USE_FACE_SERVICE',
      useValue: true,
    },
    { provide: LoggerService, useClass: LoggerService },

    { provide: 'USE_FAKE', useValue: false },

    {
      provide: ProductService,
      useFactory: (USE_FAKE: boolean, LoggerService: LoggerService) =>
        USE_FAKE ? new FakePoductService() : new ProductService(LoggerService),
      deps: ['USE_FAKE', LoggerService],
    },
    { provide: ProductService, useExisting: 'PRODUCT_SERVICE' },
    { provide: 'PRODUCT_SERVICE', useClass: ServiceOneService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
