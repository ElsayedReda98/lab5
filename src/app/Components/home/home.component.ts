import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchValue: string = '';
}
