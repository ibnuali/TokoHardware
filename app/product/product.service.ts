import { Product } from './product';
import { PRODUCTS } from '../mock/mock-products';
import { CART } from '../mock/mock-cart';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProductsSlowly(): Promise<Product[]> {
    return new Promise<Product[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getProducts());
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
               .then(products => products.find(product => product.id === id));
  }

  addToCart(product: Product): void {

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

  increaseQuantity(product: Product) : boolean
  {
    let isFound: boolean = false;
    for (var i = 0; i < CART.length; i++) {
      if(CART[i].product.id === product.id)
      {
        CART[i].quantity++;
        isFound = true;
      }
    }
    localStorage.setItem('cart', JSON.stringify(CART));
    return isFound;
  }

}
