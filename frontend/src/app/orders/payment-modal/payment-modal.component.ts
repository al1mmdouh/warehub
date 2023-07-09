import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { OrderService } from 'src/app/services/product/order.service';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent {
  checkoutForm!: FormGroup;
  numberControl!: FormControl;
  alertSubject = new Subject<boolean>();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    // Success alert

    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 5000);
      }
    });

    this.numberControl = new FormControl({
      value: this.orderService.getTotalPrice().priceAfterDiscount,
      disabled: true,
    });

    this.checkoutForm = this.fb.group({
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(40),
          Validators.maxLength(250),
        ],
      ],
      destination: [
        '',
        [
          Validators.required,
          Validators.minLength(40),
          Validators.maxLength(150),
        ],
      ],
      amount: ['', [Validators.required]],
    });
  }

  // closing modal
  closeModal() {
    this.activeModal.close();
  }

  // submit checkout

  onCheckout() {
    // prepare payment data
    const amount = this.numberControl.value;
    console.log(amount);

    const description = this.checkoutForm.get('description')?.value;

    const destination = this.checkoutForm.get('destination')?.value;

    // post payment data to stripe api
    this.orderService.createPayment({ amount, description });

    this.orderService.createOrder(destination);

    localStorage.removeItem('OrderItems');

    this.alertSubject.next(true);

    setTimeout(() => {
      location.replace('orders');
    }, 2500);
  }
}
