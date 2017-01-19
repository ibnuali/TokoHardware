import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Cart } from './cart';
import { CartService } from './cart.service';
import { Product } from '../product/product';
import { PRODUCTS } from '../mock/mock-products';

@Component({
  moduleId: module.id,
  selector: 'my-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
    constructor(
      private service: CartService,
      private location: Location) { }

      allcart: Cart[] = [];
      subTotal: number;

    ngOnInit(): void {
      this.service.getAllCart().then(allcart => this.allcart = allcart);
      this.service.getSubTotal().then(subTotal => this.subTotal = subTotal);
    }

    increaseQuantity(product: Product): void {
      this.service.increaseQuantity(product);
      this.service.getSubTotal().then(subTotal => this.subTotal = subTotal);
    }

    decreaseQuantity(product: Product): void {
      this.service.decreaseQuantity(product);
      this.service.getSubTotal().then(subTotal => this.subTotal = subTotal);
    }

    removeItem(product: Product): void {
      this.service.removeItem(product);
      this.service.getSubTotal().then(subTotal => this.subTotal = subTotal);
    }

    goBack(): void {
      this.location.back();
    }
}
