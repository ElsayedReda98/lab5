import { Injectable } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IProduct[] = [];
  constructor() {}

  add(product: IProduct) {
    this.cartItems.push(product);
  }
  getAll() {
    return this.cartItems;
  }
  delete(id: number) {
    return (this.cartItems = this.cartItems.filter((p) => p.id != id));
  }
}
