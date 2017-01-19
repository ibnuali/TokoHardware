import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { PRODUCTS } from '../mock/mock-products';
import { Cart } from './cart';
import { CART } from '../mock/mock-cart';

@Injectable()
export class CartService {

    getAllCart(): Promise<Cart[]> {
      let allcart: Cart[] = [];
      CART.splice(0);
      if (localStorage.getItem("cart") != null){
        allcart = JSON.parse(localStorage.getItem('cart'));
        for (let cart of allcart) {
          CART.push(cart);
        }
      }
      return Promise.resolve(CART);
    }

    addToCart(product: any): void {

      let cart: Cart ;
      let isFound: boolean = this.increaseQuantity(product);

      if(!isFound)
      {
        cart = {
          id_cart : 1,
          product : product,
          quantity : 1
        }
        CART.push(cart);
        localStorage.setItem('cart', JSON.stringify(CART));
      }
    }

    increaseQuantity(product: any) : boolean
    {
      let isFound: boolean = false;
      for (var i = 0; i < CART.length; i++) {
        if(CART[i].product.id_barang === product.id_barang)
        {
          CART[i].quantity++;
          isFound = true;
        }
      }
      localStorage.setItem('cart', JSON.stringify(CART));
      return isFound;
    }

    decreaseQuantity(product: Product) : boolean
    {
      let isFound: boolean = false;
      for (var i = 0; i < CART.length; i++) {
        if(CART[i].product.id === product.id)
        {
          if(CART[i].quantity != 1)
          {
            CART[i].quantity--;
            isFound = true;
          }
        }
      }
      localStorage.setItem('cart', JSON.stringify(CART));
      return isFound;
    }

    removeItem(product: Product)
    {
      var index;
      for (var i = 0; i < CART.length; i++) {
        if(CART[i].product.id === product.id)
        {
          index = i;
        }
      }
      CART.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(CART));
    }

    getSubTotal(): Promise<number> {
      let subTotal : number = 0;
      for (var i = 0; i < CART.length; i++) {
          subTotal += CART[i].product.price*CART[i].quantity;
      }
      return Promise.resolve(subTotal);
    }

}
