import { AfterContentInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CounterComponent } from '../counter/counter.component';
import { forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterContentInit, OnInit {


@ViewChild(CardComponent,{static:true}) card!:CardComponent;
ngAfterContentInit(): void {
  
}

ngOnInit(): void {
  


let character = fetch('https://swapi.dev/api/people/1');
let homeUrl = fetch('https://swapi.dev/api/planets/1');

forkJoin([character, homeUrl]).subscribe({
  next :(result)=>{
    console.log(result)
  },
  error : (err)=>{
    console.log(err)
  },
  complete :()=>{
    console.log("completed")
  }
});


// Simulating user data API
function getUserData(userId: number) {
  // Simulate an API call that returns user data as an Observable
  return of({ id: userId, name: 'John Doe', email: 'john.doe@example.com' });
}

// Simulating user orders API
function getUserOrders(userId: number) {
  // Simulate an API call that returns user orders as an Observable
  return of([
    { orderId: 1, product: 'Phone' },
    { orderId: 2, product: 'Laptop' },
    { orderId: 3, product: 'Headphones' }
  ]);
}

// Simulating the user ID
const userId = 123;

// Using mergeMap to fetch user data and then their orders
getUserData(userId)
  .pipe(
    mergeMap((user:any) => {
      console.log('User Data:', user);
      // Fetch user orders using the user's ID
      return getUserOrders(user.id);
    })
  )
  .subscribe((orders:any) => {
    console.log('User Orders:', orders);
  });
}

}
