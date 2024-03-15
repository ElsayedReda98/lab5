import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { HttpProductsService } from '../../Services/http/http-products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  _product!: IProduct | undefined;
  isLastIndex: boolean = false;
  isFirstIndex: boolean = false;
  subacriptions: Subscription[] = [];

  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private httpProductService: HttpProductsService
  ) { }

  ngOnInit(): void {
    this.subacriptions.push(
      this._activatedRoute.paramMap.subscribe((param) => {
        let idAsString = param.get('id');
        let id = Number(idAsString);
        this.isLastIndex = this._productService.isLastIndex(id);
        this.isFirstIndex = this._productService.isFirstIndex(id);

        //http
        this.subacriptions.push(
          this.httpProductService.getById(id).subscribe((product) => {
            this._product = product;
          }))
      }));
  }
  ngOnDestroy(): void {
    this.subacriptions.forEach(s => s.unsubscribe())
  }
  goNext(id: number) {
    let nextId = this._productService.getNextId(id);
    this._router.navigate(['/product', nextId]);
  }

  goPrev(id: number) {
    let previousId = this._productService.getPreviousId(id);
    this._router.navigate(['/product', previousId]);
  }
  goBack() {
    this._router.navigate(['/home']);
  }

  goUpdate(id: number) {
    this._router.navigate(['/product/edit', id])
  }

  goDelete(id: number) {
    this._router.navigate(['/product/delete', id])
  }
}
