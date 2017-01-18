import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'component.html'
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products.slice(0, 10));
  }
}
