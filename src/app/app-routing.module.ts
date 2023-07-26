import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { testResolverResolver } from './test-resolver.resolver';
import { productGuard } from './product.guard';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"", component :HomeComponent
  },
  {
    path :"aboutus", component : AboutusComponent
  },  
  {
    path :"users", component : UsersComponent,

    children : [
      {
        path:'deatils',
        component : UserDetailComponent
      }
    ]
  },
  {
    path :"product", component : ProductComponent,
    canActivate : [productGuard]
  },
  {
    path :"product/:id", component : ProductDetailComponent,
    resolve : {
      routeResolver : testResolverResolver
    }
  },
  {
    path :"contact", component : ContactComponent,
  },
  {
    path :"**", component : NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
