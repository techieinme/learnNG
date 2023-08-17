import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardModule } from './credit-card/credit-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardModule.forRoot({ userName: 'lakshmi', id: '1' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
