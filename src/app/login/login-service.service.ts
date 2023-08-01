import { Inject, Injectable } from '@angular/core';
import { UserSettingsInterface } from './login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(@Inject("userSettings") userSetting:UserSettingsInterface) {
    
   }
}
