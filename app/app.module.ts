import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard/component';
import { ProductsComponent }      from './product/products.component';
import { ProductDetailComponent }  from './product/product-detail.component';
import { ProductService } from './product/product.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { HTTPService } from './product/httpservice.service';
import { CategoryService } from './category/category.service';
 
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductsComponent,
    CartComponent
    ],
  providers:  [ 
    ProductService,
    HTTPService,
    CartService,
    CategoryService
    ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
