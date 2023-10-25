import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NoPageExistComponent } from './no-page-exist/no-page-exist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { UsereditComponent } from './useredit/useredit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:UserComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"",
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'products',
        component:ProductsListComponent
      },
      {
        path:'market',
        component:MarketComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'product/create',
        component:ProductcreateComponent
      },
      {
        path:"product/edit/:id",
        component:ProducteditComponent
      },
      {
        path:"product/:id",
        component:ProductviewComponent
      },
   
      {
        path:'user/create',
        component:SigninComponent
      },
      {
        path:"users",
        component:UserlistComponent
      },
      {
        path:"user/:id",
        component:UserviewComponent
      },
      {
        path:"user/edit/:id",
        component:UsereditComponent
      },
      { 
        path:'**',
        component:NoPageExistComponent
      }
      
    ]
  },
 
  {
    path:"",
    redirectTo:"login",
    pathMatch:'full'
  },


  { 
        path:'**',
        component:NoPageExistComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
