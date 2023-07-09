import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product/product.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  modal: boolean = false;
  products: any = [];
  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) {}

  openAddModal() {
    this.modalService.open(AddModalComponent);
  }

  openEditModal(product: any) {
    const modalRef = this.modalService.open(EditModalComponent);
    modalRef.componentInstance.product = product;
  }

  ngOnInit() {
    this.productService.fetchAllProducts().subscribe((res) => {
      console.log(res.data);
      this.products = res.data;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
