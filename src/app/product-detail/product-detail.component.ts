import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit,OnDestroy {

  sub!:Subscription;
  
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private UserService : UserService
    ){

    this.sub= this.activatedRoute.paramMap.subscribe({
      next: (p)=>{
        //localhost/product/id
        
        console.log(p.get("id"));
      }
    })
  }
  ngOnInit(): void {
    this.UserService.getData().subscribe({

      next: (val)=>{
        console.log(val)
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  navigateUrl(){
    this.router.navigate(['product']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
