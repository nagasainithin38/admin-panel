import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageExistComponent } from './no-page-exist/no-page-exist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { UsereditComponent } from './useredit/useredit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { MarketProductComponent } from './market-product/market-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    LoginComponent,
    SidebarComponent,
    NoPageExistComponent,
    DashboardComponent,
    TopNavBarComponent,
    CardComponent,
    LineChartComponent,
    UserlistComponent,
    UserviewComponent,
    UsereditComponent,
    ProductsListComponent,
    ProductviewComponent,
    ProductcreateComponent,
    ProducteditComponent,
    MarketComponent,
    CartComponent,
    MarketProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
