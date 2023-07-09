import { Component } from '@angular/core';
import {
  faBox,
  faHome,
  faShoppingCart,
  faTicket,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
})
export class DashboardSidebarComponent {
  status: boolean = false;
  faHome = faHome;
  faBox = faBox;
  faOrder = faShoppingCart;
  faWarehouse = faWarehouse;
  faTickets = faTicket;
  toggle() {
    this.status = !this.status;
  }

 
}
