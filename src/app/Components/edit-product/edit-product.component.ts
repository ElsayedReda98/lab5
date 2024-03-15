import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpProductsService } from '../../Services/http/http-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit, OnDestroy {
  _productForm!: FormGroup;
  private _product!: IProduct;
  private _subscribtions: Subscription[] = [];
  constructor(private _httpProductService: HttpProductsService
    , private _formBuilder: FormBuilder
    , private _activatedRoute: ActivatedRoute
    , private _snackbar: MatSnackBar
    , private _router: Router) { }

  ngOnInit(): void {
    this._productForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(50), Validators.max(50000)]],
      imgURL: ["", [Validators.required]],
      categoryID: [0, [Validators.required]],
      description: ["", Validators.maxLength(500)],
      quantity: [1, [Validators.required]],
      material: ['', Validators.required],
      discount: 0
    })

    this._subscribtions.push(
      this._activatedRoute.paramMap.subscribe((param) => {
        let idAsString = param.get('id');
        let id = Number(idAsString);

        this._subscribtions.push(
          this._httpProductService.getById(id).subscribe((product) => {
            this._product = product;
            console.log(product)
            this._productForm.patchValue({
              name: product.name,
              price: product.price,
              quantity: product.quantity,
              description: product.description,
              imgURL: product.imgURL,
              material: product.material,
              discount: product.discount,
              categoryID: product.categoryID
            })
          }))
      }));
  }
  ngOnDestroy(): void {

  }

  onSubmit() {
    //console.log(this._productForm.value);
    this._httpProductService.update(this._product.id, this._productForm.value).subscribe({
      next: (data) => {
        //console.log(data)
        this._snackbar.open('Data has been updated Successfully', 'Okay')
        this._router.navigate(['/home'])

      },
      error: (error) => {
        this._snackbar.open(error, 'Okay')
        alert(error);
      }
    })
  }
}
