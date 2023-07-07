import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/product/order.service';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent {
  checkoutForm!: FormGroup;
  numberControl!: FormControl;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private orderService: OrderService
  ) {}

  ngOnInit() {
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
      amount: ['', [Validators.required]],

      destination: [
        '',
        [Validators.required],
        Validators.minLength(10),
        Validators.maxLength(100),
      ],
    });
  }

  // closing modal
  closeModal() {
    this.activeModal.close();
  }

  // submit checkout

  onCheckout() {
    // create payment data
    const PaymentData = new FormData();

    PaymentData.append('amount', this.checkoutForm.get('amount')?.value);
    PaymentData.append(
      'description',
      this.checkoutForm.get('description')?.value
    );

    // post payment data to stripe api
    this.orderService.createPayment(PaymentData);

    // prepare order data
    const destinationData = new FormData();

    destinationData.append(
      'destination',
      this.checkoutForm.get('destination')?.value
    );

    this.orderService.createOrder(destinationData);
  }
}
