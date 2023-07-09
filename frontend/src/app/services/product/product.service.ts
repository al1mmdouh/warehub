import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  alertSubject = new Subject<boolean>();
  constructor(private http: HttpClient, private auth: AuthService) {
    this.alertSubject.subscribe((showAlert: boolean) => {
      if (showAlert) {
        setTimeout(() => {
          this.alertSubject.next(false);
        }, 3000);
      }
    });
  }

  AddProduct(data: any): Observable<any> {
    console.log(data);

    const business_id = this.auth.userBuisnessData.business_id;
    return this.http.post('http://127.0.0.1:8000/api/products', data);
  }

  UpdateProduct(id: number, data: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/products/${id}`, data);
  }
  fetchAllProducts(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products');
  }

  deleteProduct(id: number) {
    this.http
      .delete(`http://127.0.0.1:8000/api/products/${id}`)
      .subscribe((res) => {
        console.log(res);

        location.replace('products');
      });
  }
}
