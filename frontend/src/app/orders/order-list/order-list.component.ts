import { Component } from '@angular/core';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/product/order.service';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  faTrash = faTrash;
  faPlus = faPlus;
  faMinus = faMinus;

  products: any[] = [];
  isEmpty: boolean = false;
  prices!: any;
  alertSubject = new Subject<boolean>();

  constructor(
    private modalService: NgbModal,
    private orderService: OrderService
  ) {
    this.products = this.orderService.products;
  }

  ngOnInit() {
    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 3000);
      }
    });

    this.prices = this.orderService.getTotalPrice();
    console.log(this.prices);
  }

  // Remove item from order
  removeItem(product: any) {
    this.orderService.deleteProductFromOrder(product);

    this.prices = this.orderService.getTotalPrice();
    this.alertSubject.next(true);
  }

  // increase product quantity
  increaseQuantity(product: any) {
    if (product.orderedQuantity < product.quantity) {
      product.orderedQuantity++;
      this.prices = this.orderService.getTotalPrice();
    }
  }

  // Decrease Quantity
  decreaseQuantity(product: any) {
    if (product.orderedQuantity > 0) {
      product.orderedQuantity--;
      this.prices = this.orderService.getTotalPrice();
    }
  }

  openCheckoutModal() {
    this.modalService.open(PaymentModalComponent);
  }
}
