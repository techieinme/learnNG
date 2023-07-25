import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements  OnInit, AfterViewInit {


  @Input() parentMessage?:string;

  @Output() sendMessageEvent = new EventEmitter<string>();

  childMessage?:string;

constructor(){}



  sendClick(){

    this.sendMessageEvent.emit("helllo message from child component");
  
  }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.childMessage ="hey lakshmi kanth";
  }
  
}
