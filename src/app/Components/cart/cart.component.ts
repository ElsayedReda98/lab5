import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CartService } from '../../Services/cart/cart.service';
import { ProductsService } from '../../Services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  _productsCart: IProduct[] = [];

  constructor(
    private _cartService: CartService,
    // private _productService: ProductsService,
    private _router: Router
  ) {
    this._productsCart = this._cartService.getAll();
  }

  getDetails(id: number) {
    this._router.navigate(['/product', id]);
  }

  remove(id: number) {
    this._productsCart = this._cartService.delete(id);
  }
}
