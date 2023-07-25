import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  @ViewChild(CardComponent,{static:true}) card!:CardComponent;

  @ViewChild(CounterComponent,{static:true}) count!:CounterComponent;


  @ViewChild('para') para!:ElementRef;
  increment(){
    this.count.increment();
  }

  decrement(){
    this.count.decrement();

  }
  constructor(){
  }
  ngAfterViewInit(): void {
    Promise.resolve().then(()=>{
      console.log(this.para.nativeElement.innerHTML)
      console.log(this.card.title)
    })
  }
  ngOnInit(): void {
    
  }
}
