import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORY } from '../mock/mock-category';
import { Product } from '../product/product';
import { PRODUCTS } from '../mock/mock-products';

@Injectable()
export class CategoryService {

  getAllCategory(): Promise<Product[]> {
    return Promise.resolve(CATEGORY);
  }

  getCategory(name: string): Promise<Category> {
    return this.getAllCategory()
    .then(allcategory => allcategory.find(category => category.name === name));
  }
}
