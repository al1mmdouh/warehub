import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) {}

  openProductModal(product: any) {
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = product;
  }

  ngOnInit() {
    this.productService.fetchAllProducts().subscribe((res) => {
      console.log(res.data);
      this.products = res.data;
    });
  }
}
