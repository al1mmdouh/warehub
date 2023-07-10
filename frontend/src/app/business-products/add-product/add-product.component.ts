import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product/product.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  addProductForm!: FormGroup;
  imageFile!: File;
  warehouses: any[] =[]

  alertSubject = new Subject<boolean>();
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService,
    private auth: AuthService,
    private router: Router,
    private warehouseService: WarehouseService
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
<<<<<<< HEAD
      quantity: ['', [Validators.required]],
      warehouse_id: ['', [Validators.required]]
=======
      quantity: ['', [Validators.required, Validators.min(10)]],
>>>>>>> f328e131439028797442a1199646ca84eb17233c
    });

    this.warehouseService.getWarehouses().subscribe(
      (data)=>{
        this.warehouses = data
        console.log(this.warehouses);
      }
    )
  }

  // submit add form
  onSubmit() {
    //  create form data to be sent to api
    console.log(this.addProductForm.value);
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
    formdata.append('warehouse_id', this.addProductForm.get('warehouse_id')?.value);

    if (this.addProductForm.valid) {
      // Submit the form
      this.ProductService.AddProduct(formdata).subscribe(
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

      this.addProductForm.patchValue({
        image: this.imageFile,
      });

      console.log(this.addProductForm);
    }
  }
}
