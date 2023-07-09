import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  @Input() product: any;

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
