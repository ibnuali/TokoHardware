import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import {HTTPService} from '../product/httpservice.service';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart.service';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'component.html',
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];
  allcategory: Category[] = [];
  
  constructor(
    private productService: ProductService,
    private httpService: HTTPService,
    private cartService: CartService,
    private categoryService : CategoryService
    ) {
   }

json;

  ngOnInit(): void {
    this.categoryService.getAllCategory().then(allcategory => this.allcategory = allcategory);
    this.httpService.getJsonProduct().then(res=>this.json = res),err=>alert(err);
    this.productService.getProducts()
      .then(products => this.products = products.slice(0, 10));
  }
}