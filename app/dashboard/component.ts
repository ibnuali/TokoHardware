import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import {HTTPService} from '../product/httpservice.service';
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'component.html',
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private httpService: HTTPService) {
   }

json;

  ngOnInit(): void {
    this.httpService.getJsonProduct().then(res=>this.json = res),err=>alert(err);
    this.productService.getProducts()
      .then(products => this.products = products.slice(0, 10));
  }
}