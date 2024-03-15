import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/productlist';
import { BorderDirective } from '../../Directives/border-directive.directive';
import { SingleProductComponent } from '../single-product/single-product.component';
import { HttpProductsService } from '../../Services/http/http-products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BorderDirective, SingleProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges, OnInit {
  productsCart: IProduct[] = [];
  products: IProduct[] = productList;
  @Input() filterValue: string = '';

  constructor(
    private httpProductsService: HttpProductsService
  ) { }

  ngOnInit(): void {
    this.httpProductsService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  ngOnChanges(): void {
    this.httpProductsService
      .searchProducts(this.filterValue)
      .subscribe((data) => {
        this.products = data;
      });
  }

  addToCart(newCartItem: IProduct) {
    this.productsCart.push(newCartItem);
  }

  handleBuy(product: IProduct) {
    if (product.quantity) product.quantity--;
  }
}
