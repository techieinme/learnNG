import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  node!:string;
  isShow:boolean = true;
  name:string ="lakshmi";
  number:number=123;
  numberList:Array<number>=[1,2,3,4,4];
  nameList:Array<string> =["lakshmi","kanth","raju"];
  users:Array<any> =[
    {
      firstName:"lakshmi",
      lastName:"kanth",
      age :20,
    },
        {
      firstName:"chanidni",
      lastName:"kanth",
      age :30,

    },
    {
      firstName:"parnika",
      lastName:"kanth",
      age :10,
    },
  ];


  constructor(private ele:ElementRef){
    const temp = document.createElement("div");
    const el = this.ele.nativeElement.cloneNode(true);
    temp.append(el);
    this.node = temp.innerHTML;

  }
  selectedItem(index:number,number:number){
    console.log(index,number);
  }
}
