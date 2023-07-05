import { Component } from '@angular/core';
import {faTrash, faMinus,faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  faTrash = faTrash;
  faPlus = faPlus;
  faMinus = faMinus;
}
