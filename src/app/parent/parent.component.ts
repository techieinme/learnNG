import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit ,AfterViewInit {

  parentMessage:string="message from parent component";

  childMessage:string="";
  title12?:string="";
  @ViewChild(ChildComponent, { static: false })
  app!: ChildComponent;


  // @ViewChildren(ChildComponent) childComponents!: QueryList<ChildComponent>
//  private childComponents: QueryList<ChildComponent>;

 

  constructor(){}
  receiveMessage(message:string){
    console.log(message);
    this.childMessage =message;

  }

  ngOnInit(): void {
    console.log(this.app);
  }

  ngAfterViewInit(): void {
  
    Promise.resolve().then(()=>{

      this.title12 = this.app.childMessage;
    })

  }

}
