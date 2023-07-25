import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of, tap } from 'rxjs'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  title = 'Angular Observable using RxJs - Getting Started';
 
  obs = new Observable((observer) => {
    console.log("Observable starts")
      observer.next("1")
      observer.next("2")
      observer.next("3")
      observer.next("4")
      observer.next("5")
  });


  myObservable = new Observable((observable)=>{
   setTimeout(() => {
    observable.next("1")
   }, 1000);
   setTimeout(() => {
    observable.next("2")
   }, 2000);
   setTimeout(() => {
    observable.error(" some error thorwn here")
   }, 3000);
   setTimeout(() => {
    observable.complete();
   }, 4000);
  })

  myArray:Array<number> = [1,2,3,4,5,6];
  myArray1 = [1,2,3,4,5,6];

  data=[];
 

  obs1 = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  })

  test = (new Observable((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.next(4)
  observer.next(5)
  observer.complete()
}) as Observable<number>)

  
  ngOnInit() {
 
    
   
     
  
    

 of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).
 pipe(
  filter( v => v % 2 === 0),
  map((v)=>v+1)
 )

this.test.pipe(
  tap(data => console.log('tap '+data)),           //tap
  filter((data:number) => data > 2),                        //filter
  tap(data => console.log('filter '+data)),        //tap
  map((val) => { return val as number * 2 }),      //map
  tap(data => console.log('final '+data)),         //tap
)

 from(this.myArray)
 .pipe(
   filter((n:number)=> n % 2 !== 0),
   map((n:number) => n * n)
 );
  //   this.myObservable.subscribe({
  //     next :(val)=>{console.log(val)},
  //     error : (error)=>{ console.log(error)},
  //     complete :()=>{ console.log("completed")}
  //   })

  // this.obs.subscribe({
  //   next: (v) => console.log(v),
  //   error: (e) => console.error(e),
  //   complete: () => console.info('complete') ,
  //   }
  //   );

  //   of(this.myArray).subscribe({
  //     next:(v)=>{console.log(v)},
  //     error : (e)=>{console.log(e)},
  //     complete : ()=>{console.log("completed")}
  //   });


  //   of(this.myArray,this.myArray1).subscribe({
  //     next:(v)=>{console.log(v)},
  //     error : (e)=>{console.log(e)},
  //     complete : ()=>{console.log("completed")}
  //   })


    

   







  }

}
