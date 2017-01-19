"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_cart_1 = require("../mock/mock-cart");
var CartService = (function () {
    function CartService() {
    }
    CartService.prototype.getAllCart = function () {
        var allcart = [];
        mock_cart_1.CART.splice(0);
        if (localStorage.getItem("cart") != null) {
            allcart = JSON.parse(localStorage.getItem('cart'));
            for (var _i = 0, allcart_1 = allcart; _i < allcart_1.length; _i++) {
                var cart = allcart_1[_i];
                mock_cart_1.CART.push(cart);
            }
        }
        return Promise.resolve(mock_cart_1.CART);
    };
    CartService.prototype.addToCart = function (product) {
        var cart;
        var isFound = this.increaseQuantity(product);
        if (!isFound) {
            cart = {
                id_cart: 1,
                product: product,
                quantity: 1
            };
            mock_cart_1.CART.push(cart);
            localStorage.setItem('cart', JSON.stringify(mock_cart_1.CART));
        }
    };
    CartService.prototype.increaseQuantity = function (product) {
        var isFound = false;
        for (var i = 0; i < mock_cart_1.CART.length; i++) {
            if (mock_cart_1.CART[i].product.id_barang === product.id_barang) {
                mock_cart_1.CART[i].quantity++;
                isFound = true;
            }
        }
        localStorage.setItem('cart', JSON.stringify(mock_cart_1.CART));
        return isFound;
    };
    CartService.prototype.decreaseQuantity = function (product) {
        var isFound = false;
        for (var i = 0; i < mock_cart_1.CART.length; i++) {
            if (mock_cart_1.CART[i].product.id === product.id) {
                if (mock_cart_1.CART[i].quantity != 1) {
                    mock_cart_1.CART[i].quantity--;
                    isFound = true;
                }
            }
        }
        localStorage.setItem('cart', JSON.stringify(mock_cart_1.CART));
        return isFound;
    };
    CartService.prototype.removeItem = function (product) {
        var index;
        for (var i = 0; i < mock_cart_1.CART.length; i++) {
            if (mock_cart_1.CART[i].product.id === product.id) {
                index = i;
            }
        }
        mock_cart_1.CART.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(mock_cart_1.CART));
    };
    CartService.prototype.getSubTotal = function () {
        var subTotal = 0;
        for (var i = 0; i < mock_cart_1.CART.length; i++) {
            subTotal += mock_cart_1.CART[i].product.price * mock_cart_1.CART[i].quantity;
        }
        return Promise.resolve(subTotal);
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable()
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map