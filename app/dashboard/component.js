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
var product_service_1 = require("../product/product.service");
var httpservice_service_1 = require("../product/httpservice.service");
var DashboardComponent = (function () {
    function DashboardComponent(productService, httpService) {
        this.productService = productService;
        this.httpService = httpService;
        this.products = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getJsonProduct().then(function (res) { return _this.json = res; }), function (err) { return alert(err); };
        this.productService.getProducts()
            .then(function (products) { return _this.products = products.slice(0, 10); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'component.html',
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        httpservice_service_1.HTTPService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=component.js.map