import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../service/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit ,OnChanges{

  Users!:User[];
   a =  ["test","asd"];
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next: (val)=>{
        this.Users = val;
        console.log(val)
      },
      error : (err)=>{
        console.log(err)
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("heello")
  }


}
