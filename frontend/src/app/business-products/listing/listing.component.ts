import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductModalComponent } from 'src/app/shared/product-modal/product-modal.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  modal: boolean = false;
  products!: any[];

  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private auth: AuthService
  ) {}

  openProductModal(product: any) {
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = product;
  }

  ngOnInit() {
    const business_id = this.auth.userBuisnessData.business_id;
    this.productService.fetchUseProduct(business_id).subscribe((res) => {
      console.log(res.data);
      this.products = res.data;
    });
  }
}
