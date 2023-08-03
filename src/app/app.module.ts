import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FromValidationComponent } from './from-validation/from-validation.component';

@NgModule({
    declarations: [AppComponent, ReactiveFromComponent, FromValidationComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
