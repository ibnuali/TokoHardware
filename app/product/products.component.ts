import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
import {HTTPService} from './httpservice.service';

@Component({
  moduleId: module.id,
  selector: 'my-product',
  templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private router: Router,
    private productService: ProductService,
    private httpService: HTTPService
    ) { }

json;

  getProducts(): void {
    //this.productService.getProducts().then(products => this.products = products);
    this.httpService.getJsonProduct().then(res=>this.json = JSON.stringify(res)),err=>alert(err);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
