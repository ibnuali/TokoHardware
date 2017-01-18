import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Product } from './product';

import { ProductService } from './product.service';
import {HTTPService} from './httpservice.service';

@Component({
  moduleId: module.id,
  selector: 'my-product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private httpService: HTTPService
  ) {}
  json;

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) =>
    this.httpService.getJsonDetailProduct(+params['id'])).subscribe(res => this.json = res);
    // this.route.params
    //   .switchMap((params: Params) => this.productService.getProduct(+params['id']))
    //   .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
/*
  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }*/

}
