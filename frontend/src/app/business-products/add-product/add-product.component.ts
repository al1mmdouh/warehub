import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  addProductForm!: FormGroup;
  imageFile!: File;

  alertSubject = new Subject<boolean>();
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 2000);
      }
    });

    this.addProductForm = this.fb.group({
      weight: ['', [Validators.required]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(40),
          Validators.maxLength(250),
        ],
      ],
      sku: ['', [Validators.required]],
      price: ['', [Validators.required]],
      business_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    });
  }

  // submit add form
  onSubmit() {
    //  create form data to be sent to api

    const business_id = this.auth.userBuisnessData.business_id;

    const formdata = new FormData();
    formdata.append('weight', this.addProductForm.get('weight')?.value);
    formdata.append('price', this.addProductForm.get('price')?.value);
    formdata.append('sku', this.addProductForm.get('sku')?.value);
    formdata.append(
      'description',
      this.addProductForm.get('description')?.value
    );
    formdata.append(
      'business_id',
      this.addProductForm.get('business_id')?.value
    );
    formdata.append('name', this.addProductForm.get('name')?.value);
    formdata.append('image', this.imageFile);
    formdata.append('quantity', this.addProductForm.get('quantity')?.value);
    formdata.append('business_id', business_id);

    console.log(formdata);

    this.ProductService.AddProduct(formdata).subscribe(
      (res) => {
        this.alertSubject.next(true);
        console.log(res);
        setTimeout(() => {
          location.replace('products');
        }, 2000);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // add photo path to form
  addPhoto(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
      //  console.log(this.imageFile);

      this.addProductForm.patchValue({
        image: this.imageFile,
      });

      console.log(this.addProductForm);
    }
  }
}
