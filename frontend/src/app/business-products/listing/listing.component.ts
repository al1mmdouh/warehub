import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  modal: boolean = false;


  showModal() {
    this.modal = true;
  }
}
