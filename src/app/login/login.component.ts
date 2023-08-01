import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserSettingsInterface } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnChanges,OnInit{

  constructor( @Inject("UserSetting") private userSettings:UserSettingsInterface){

  }

 ngOnChanges(changes: SimpleChanges): void {
   
 }
 ngOnInit(): void {
  console.log( this.userSettings)
 }
}
