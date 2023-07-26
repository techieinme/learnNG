import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) {
  }

    getUsers():Observable<User[]>{
      return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map(res => res),
        catchError((err)=>{
          console.log(err);
          throw err;
        })
      );
    }

    getData (){
      return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
    }

}

