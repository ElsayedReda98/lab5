import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpProductsService } from '../../Services/http/http-products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  _productForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _httpService: HttpProductsService) {

  }

  ngOnInit(): void {
    this._productForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(50), Validators.max(2000)]],
      imgURL: ["", [Validators.required]],
      categoryID: [0, [Validators.required]],
      description: ["", Validators.maxLength(500)],
      quantity: [1, [Validators.required]],
      material: ['', Validators.required],
      discount: 0
    })
  }

  onSubmit() {
    console.log(this._productForm.value)
    this._httpService.add(this._productForm.value).subscribe(({
      next: (data) => {
        alert('product has been added successfully')
      },
      error: (err) => {
        alert(err);
      }
    }));
  }
}
