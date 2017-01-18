"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var httpservice_service_1 = require("./httpservice.service");
var ProductsComponent = (function () {
    function ProductsComponent(router, productService, httpService) {
        this.router = router;
        this.productService = productService;
        this.httpService = httpService;
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        //this.productService.getProducts().then(products => this.products = products);
        this.httpService.getJsonProduct().then(function (res) { return _this.json = JSON.stringify(res); }), function (err) { return alert(err); };
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-product',
        templateUrl: 'products.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        product_service_1.ProductService,
        httpservice_service_1.HTTPService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map