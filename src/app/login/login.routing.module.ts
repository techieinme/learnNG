import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

const loginRoutes:Routes=[
  {
    path:'test',component:LoginComponent
  }
];

@NgModule({
imports:[
  loginRoutes
],
exports:[
  RouterModule
]
})

export class LoginRoutingModule {

}