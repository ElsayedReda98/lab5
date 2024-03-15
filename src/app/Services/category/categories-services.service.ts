import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryVM } from '../../viewmodels/category-vm';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  })
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<CategoryVM[]> {
    return this._httpClient.get<CategoryVM[]>(`${environment.BASEURL}/categories`)
  }
}
