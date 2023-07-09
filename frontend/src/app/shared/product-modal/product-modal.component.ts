import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/product/order.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
})
export class ProductModalComponent {
  @Input() product: any;

  productForm: FormGroup;
  step: number = 1;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      step1: this.formBuilder.group({
        option: new FormControl(''),
      }),
      step2: this.formBuilder.group({
        destination: new FormControl(''),
        quantity: new FormControl(''),
      }),
    });
  }

  nextStep() {
    if (this.productForm.get('step1.option')!.value === 'delete') {
      // Submit delete ticket
      this.submitTicket('delete');
    } else if (this.productForm.get('step1.option')!.value === 'ship now') {
      // Move to step 2 if quantity is entered
      this.step = 2;
    } else if (this.productForm.get('step1.option')!.value === 'update') {
      // Move to step 2 if quantity is entered
      this.step = 2;
    }
  }

  prevStep() {
    this.step = 1;
  }

  submitTicket(type: string) {
    if (type === 'delete') {
      // Submit delete ticket
      const ticket = {
        productId: this.product.id,
        type: 'delete',
      };

      console.log(ticket);

      this.productService.deleteProduct(this.product.id);
      this.activeModal.close();
      this.router.navigate(['/product/listing']);

      // submit shipping ticket
    } else if (type === 'shipping') {
      // Submit shipping ticket
      const ticket = {
        ...this.product,
        type: 'shipping',
        orderedQuantity: this.productForm.get('step2.quantity')!.value,
      };
      console.log(ticket);
      this.orderService.addProductToOrder({
        ...this.product,
        orderedQuantity: this.productForm.get('step2.quantity')!.value,
      });
      this.activeModal.close();

      this.router.navigate(['orders']);
    }
  }
}
