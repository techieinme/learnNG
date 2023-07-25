import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
  
  // styles:[`h1{color:red; font-weight: normal;}
  // p{
  //   color:green;
  //   font-size: 30px;
  // }
  // `]
  
  styleUrls:['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isClassEnabled:boolean = true;

  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';

  test = `
    a{
      text-decoration:none;
    }
  
  `
  constructor() { }

  ngOnInit() { }

  getData(){
    return "hello for view child";
  }
}