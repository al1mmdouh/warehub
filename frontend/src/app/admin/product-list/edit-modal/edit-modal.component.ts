import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public activeModal: NgbActiveModal, private router: Router) {}
  ngOnInit() {
    // Success alert

    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 5000);
      }

      if (!showAlert) {
      }
    });
  }
  closeModal() {
    this.activeModal.close();
    this.router.navigate(['admin/products']);
  }
}
