import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
})
export class EditProductFormComponent {
  editProductForm!: FormGroup;
  imageFile!: File;

  @Input() product: any;

  alertSubject = new Subject<boolean>();
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    console.log(this.product);

    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 2000);
      }
    });

    this.editProductForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(10)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(40),
          Validators.maxLength(250),
        ],
      ],
      sku: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(10)]],
      business_id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(10)]],
    });
  }

  // submit add form
  onSubmit() {
    //  create form data to be sent to api
    const formdata = new FormData();
    formdata.append('weight', this.editProductForm.get('weight')?.value);
    formdata.append('price', this.editProductForm.get('price')?.value);
    formdata.append('sku', this.editProductForm.get('sku')?.value);
    formdata.append(
      'description',
      this.editProductForm.get('description')?.value
    );

    formdata.append('name', this.editProductForm.get('name')?.value);
    formdata.append('image', this.imageFile);
    formdata.append('quantity', this.editProductForm.get('quantity')?.value);

    if (this.editProductForm.valid) {
      this.ProductService.UpdateProduct(this.product.id, formdata).subscribe(
        (res) => {
          this.alertSubject.next(true);
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  // add photo path to form
  addPhoto(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
      //  console.log(this.imageFile);

      this.editProductForm.patchValue({
        image: this.imageFile,
      });

      console.log(this.editProductForm);
    }
  }
}
