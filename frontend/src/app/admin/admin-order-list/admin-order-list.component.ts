import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderService } from 'src/app/services/product/order.service';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.scss'],
})
export class AdminOrderListComponent {
  data!: any;
  orders: any[] = [];
  currentPage = 1; // start with the first page
  itemsPerPage = 4; // show 5 items per page

  selectedStatus: string = '';
  filteredOrders: any[] = [];

  filterOrders() {
    console.log(this.selectedStatus);

    if (!this.selectedStatus) {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter((order) => {
        console.log(order, this.selectedStatus);

        order.status === this.selectedStatus;
      });
    }
  }

  constructor(public orderService: OrderService) {}

  ngOnInit() {
    this.orderService.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.orderService.alertSubject.next(false);
        }, 2000);
      }
    });

    this.orderService.UpdatealertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.orderService.UpdatealertSubject.next(false);
        }, 2000);
      }
    });

    this.orderService.getAllOrders().subscribe((res): any => {
      this.data = res;

      this.orders = this.data.data;

      console.log(this.orders);
    });
  }

  updateOrder(orderId: number, status: string) {
    this.orderService.updateOrderStatus(orderId, status);
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId);
  }
}
