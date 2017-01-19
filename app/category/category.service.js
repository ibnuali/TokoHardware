"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_category_1 = require("../mock/mock-category");
var CategoryService = (function () {
    function CategoryService() {
    }
    CategoryService.prototype.getAllCategory = function () {
        return Promise.resolve(mock_category_1.CATEGORY);
    };
    CategoryService.prototype.getCategory = function (name) {
        return this.getAllCategory()
            .then(function (allcategory) { return allcategory.find(function (category) { return category.name === name; }); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable()
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map