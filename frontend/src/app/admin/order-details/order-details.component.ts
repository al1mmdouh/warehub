import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/product/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  orderId!: number;
  data: any;
  order: any = [];
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = +params['id'];
    });

    console.log(this.orderId);

    this.orderService.getOneOrders(this.orderId).subscribe((res) => {
      this.data = res;

      this.order = this.data.data;

      console.log(this.order);
    });
  }
}
