import { Injectable } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/productlist';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products: IProduct[];
  constructor() {
    this._products = productList;
  }

  getAllProducts(): IProduct[] {
    return this._products;
  }

  getProductById(id: number) {
    if (!id) return undefined;
    let product = this._products.find((p) => p.id == id);
    if (product) return product;
    else return;
  }

  getProductsByCategoryId(categoryId: number) {
    return this._products.filter((p) => p.categoryID == categoryId);
  }

  getProductsByName(value: string) {
    if (!value) return this._products;
    return this._products.filter((p) => p.name.includes(value));
  }

  delete(id:number) {
    this._products;
  }
  getNextId(productId: number) {
    let currentIndex = this._products.findIndex((p) => p.id == productId);
    let nextProduct = this._products[++currentIndex];
    return nextProduct.id;
  }

  getPreviousId(productId: number) {
    let currentIndex = this._products.findIndex((p) => p.id == productId);
    currentIndex--;
    let prevProduct = this._products[currentIndex];
    return prevProduct.id;
  }
  isLastIndex(id: number) {
    if (!id) return false;
    let lastProduct = this._products.at(-1);
    return lastProduct?.id == id;
  }
  isFirstIndex(id: number) {
    if (!id) return false;
    let firstProduct = this._products.at(0);
    return firstProduct?.id == id;
  }
}
