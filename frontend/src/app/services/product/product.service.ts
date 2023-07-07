import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  alertSubject = new Subject<boolean>();
  constructor(private http: HttpClient) {
    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 3000);
      }
    });
  }

  AddProduct(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/products', data);
  }

  fetchAllProducts(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products');
  }
}
