import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { CounterComponent } from './counter/counter.component';
import { KeyboardEventComponent } from './keyboard-event/keyboard-event.component';
import { DirectivesComponent } from './directives/directives.component';
import { ObservableComponent } from './observable/observable.component';
import { CcCardHoverDirective } from './cc-card-hover.directive';
import { TestPipe } from './test.pipe';
import { SampleService } from './sample.service';
import { SampleOneService } from './sample-one.service';
import { FakeProductService } from 'src/FakeProductService';


const APIURL= new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    ViewchildrenComponent,
    CardComponent,
    ContentComponent,
    CounterComponent,
    KeyboardEventComponent,
    DirectivesComponent,
    ObservableComponent,
    CcCardHoverDirective,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    {
      provide : "APIURL" , useValue :"https://google.com/api"
    },
    // this can be useed usung injectTOken instance so that new instance will get created 


    /*
    const a  = new injectToken<string>("");
    const b  = new injectToken<string>("");
    a===b // false , recomand to use inject instread 
    The Problem with the string tokens is that two developers can use the same string token at a different part of the app. You also do not have any control over the third-party modules, which may use the same token. If the token is reused, the last to register overwrites all previously registered tokens.



    usage in your component constructor 

    constructor(@inject(APIURL) private apiUrl:string){


    }


    */
    {
      provide : APIURL , useValue :"https://google.com/api"
    },
    
    /*
     constructor(@inject(TOKEN) private token:string)
    */
    {
      provide : "TOKEN",
      useValue :true
    }
   ,
    {
      provide :SampleService , useClass : SampleService
    },

    {
      provide :SampleService , useClass : SampleOneService
    },


    {
      provide : SampleService,
      useFactory  : (TOKEN:any) => TOKEN ? new FakeProductService() : new FakeProductService()

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
