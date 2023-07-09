import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'statusBadge' })
export class StatusBadgePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(status: string): any {
    let colorClass = 'bg-secondary';
    switch (status) {
      case 'processing':
        colorClass = 'bg-warning';
        break;
      case 'done':
        colorClass = 'bg-success';
        break;
      case 'delivered':
        colorClass = 'bg-primary';
        break;
      default:
        break;
    }

    const html = `<span class="badge badge-pill ${colorClass}">${status}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
