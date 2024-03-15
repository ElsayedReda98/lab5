import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from '../../Models/iproduct';
import { Subscription } from 'rxjs';
import { HttpProductsService } from '../../Services/http/http-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit {
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
      name: [""],
      price: [null],
      imgURL: ["",],
      categoryID: new FormControl({ value: '', disabled: true }), //[0, [Validators.required]],
      description: [""],
      quantity: [1,],
      material: ['',],
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

  onSubmit() {
    this._httpProductService.delete(this._product.id).subscribe({
      next: () => {
        this._snackbar.open('Item has been deleted Successfully', 'Okay')
        this._router.navigate(['/home'])

      },
      error: (error) => {
        this._snackbar.open(error, 'Okay')
        alert(error);
      }
    })
  }
}