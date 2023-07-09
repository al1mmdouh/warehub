import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductModalComponent } from './product-modal/product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';

@NgModule({
  declarations: [
    NavbarComponent,

    ProductModalComponent,
    EditProductFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NavbarComponent, ProductModalComponent, EditProductFormComponent],
})
export class SharedModule {}
