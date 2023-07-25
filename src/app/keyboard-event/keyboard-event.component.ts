import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-event',
  templateUrl: './keyboard-event.component.html',
  styleUrls: ['./keyboard-event.component.scss']
})
export class KeyboardEventComponent {


  keydownEvent($event:any){
    console.log($event as HTMLInputElement)
  }
}
