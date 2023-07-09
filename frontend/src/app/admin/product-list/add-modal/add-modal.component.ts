import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent {
  alertSubject = new Subject<boolean>();

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() {
    // Success alert

    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 5000);
      }

      if (!showAlert) {
        location.replace('/products');
      }
    });
  }
  closeModal() {
    this.activeModal.close();
  }
}
