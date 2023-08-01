import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginServiceService } from './login-service.service';
import { Observable, map } from 'rxjs';

export interface UserSettingsInterface {
  userId:string;
  password:string;
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { 


  static forRoot(userSettings:UserSettingsInterface): ModuleWithProviders<LoginModule> {
    return {
      ngModule: LoginModule,
      providers: [

        { provide : 'userSettings', useValue:userSettings},
        
        LoginServiceService
      ],
    }
  }

  
}







// const a  = ()=>{


//   let myObservable  = new Observable((Observer)=>{
//     Observer.next(1)
//     Observer.next(2)
//     Observer.error(3)
//     Observer.complete();

//   });

// // transfer 
// myObservable.pipe(
//   map((a:any)=>a+1)

// )
// myObservable.subscribe((val)=>{
//   console.log(val);
// })

// }



// let myPromise = new Promise((resolve,reject)=>{
//   resolve("hello");
// })

// myPromise.then((val)=>{
//   console.log(val);
// }).catch((err:any)=>{
//   console.log(err)
// }).finally((a)=>{

// })