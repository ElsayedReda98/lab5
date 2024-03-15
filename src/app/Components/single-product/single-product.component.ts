import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { BorderDirective } from '../../Directives/border-directive.directive';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';
import { SearchHighlightPipe } from '../../Pipes/search-highlight.pipe';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [BorderDirective, CurrencyPipe, DatePipe, SearchHighlightPipe],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  @Input() _product!: IProduct;
  @Input() _searchValue: string = '';
  @Output() _handleProductToCart = new EventEmitter<IProduct>();

  constructor(private _router: Router, private _cartService: CartService) {}

  addProductToCart(event: MouseEvent, product: IProduct) {
    event.stopPropagation();
    //this._handleProductToCart.emit(product);
    this._cartService.add(this._product);
  }

  getProductDetails(id: number) {
    this._router.navigate(['/product', id]);
  }
}
