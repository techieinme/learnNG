import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  // @Input() heading!:string;
  title:string ="Card title";
  description:string=" some card description";

  
}
