import { Component, OnInit } from '@angular/core';
import { CategoryVM } from '../../viewmodels/category-vm';
import { CategoriesService } from '../../Services/category/categories-services.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  _categories: CategoryVM[] = []

  constructor(private _categoriesServices: CategoriesService) { }

  ngOnInit(): void {
    this._categoriesServices.getAll().subscribe({
      next: (data) => {
        this._categories = data;
      },
    });
  }
}
