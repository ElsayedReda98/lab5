import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct } from '../../Models/iproduct';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpProductsService {
  constructor(private httpClient: HttpClient) { }
  private _httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  });

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.BASEURL}/products`);
  }

  getById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.BASEURL}/products/${id}`
    );
  }

  add(product: IProduct) {
    return this.httpClient.post<IProduct>(
      `${environment.BASEURL}/products`, product, {
      headers: this._httpHeaders
    });
  }
  getProductsByCategoryId(categoryId: number) {
    return this.httpClient.get<IProduct>(
      `${environment.BASEURL}/products?categoryId=/${categoryId}`
    );
  }

  searchProducts(text: string) {
    return this.httpClient
      .get<IProduct[]>(`${environment.BASEURL}/products`)
      .pipe(
        map((products) =>
          !text
            ? products
            : products.filter((product) => product.name.includes(text))
        )
      );
  }
  update(id: number, product: IProduct) {
    console.log(product);
    return this.httpClient.put<IProduct>(
      `${environment.BASEURL}/products/${id}`, product, {
      headers: this._httpHeaders
    });
  }
  delete(id: number) {
    return this.httpClient.delete<IProduct>(
      `${environment.BASEURL}/products/${id}`, {
      headers: this._httpHeaders
    });
  }
}
