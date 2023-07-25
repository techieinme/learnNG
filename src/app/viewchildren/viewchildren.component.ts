import { AfterContentInit, Component, OnInit, QueryList,ViewChildren} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent implements OnInit, AfterContentInit{

  @ViewChildren(CardComponent) cardList!:QueryList<CardComponent>

  
 ngAfterContentInit(): void {
   
 }
 ngOnInit(): void {
  Promise.resolve().then(()=>{
    this.cardList.forEach((child=>{
      console.log(child.description)
    }))
  })
 }
}
