import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  products: any[] = [];
  alertSubject = new Subject<boolean>();
  UpdatealertSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {
    // Get Order items
    let localStorageItem: any = localStorage.getItem('OrderItems');
    if (localStorageItem) {
      this.products = JSON.parse(localStorage.getItem('OrderItems')!);
    }
  }

  addProductToOrder(product: any) {
    this.products.push(product);
    localStorage.setItem('OrderItems', JSON.stringify(this.products));

    console.log(this.products);
  }

  deleteProductFromOrder(product: any) {
    let index = this.products.indexOf(product);

    this.products.splice(index, 1);

    localStorage.setItem('OrderItems', JSON.stringify(this.products));
  }

  createOrder(destination: any) {
    console.log(destination);

    const filteredProducts = this.products.map(({ id, orderedQuantity }) => {
      return { id, quantity: orderedQuantity };
    });

    console.log(filteredProducts);

    return this.http
      .post('http://127.0.0.1:8000/api/orders', {
        payment_token: 'Cash on delivery',
        tax: 14,
        discount: 20,
        business_id: 1,
        distanation: destination,

        products: filteredProducts,
      })
      .subscribe((res) => {
        localStorage.removeItem('OrderItems');
      });
  }

  getTotalPrice() {
    // Calculate the total price of all products in the order
    // and return it
    const subTotalPrice = this.products.reduce((prev, current) => {
      const total = prev + current.price * current.orderedQuantity;

      return total;
    }, 0);

    const priceAfterVAT = subTotalPrice + (subTotalPrice * 14) / 100;

    const priceAfterShipping = priceAfterVAT + 10;

    const priceAfterDiscount = priceAfterShipping - (subTotalPrice * 20) / 100;

    const AllPrices = {
      subTotalPrice: Math.round(subTotalPrice),
      priceAfterVAT: Math.round(priceAfterVAT),
      priceAfterShipping: Math.round(priceAfterShipping),
      priceAfterDiscount: Math.round(priceAfterDiscount),
    };

    return AllPrices;
  }

  createPayment(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/stripe', data).subscribe(
      (res) => {
        localStorage.removeItem('OrderItems');
      },
      (err) => console.log(err)
    );
  }

  getAllOrders() {
    return this.http.get('http://127.0.0.1:8000/api/orders');
  }

  getOrderForBusiness() {
    return this.http.get('');
  }

  getOneOrders(id: number) {
    return this.http.get(`http://127.0.0.1:8000/api/orders/${id}`);
  }

  updateOrderStatus(id: number, status: string) {
    return this.http
      .post(`http://127.0.0.1:8000/api/orders/${id}`, { status })
      .subscribe((res) => {
        this.UpdatealertSubject.next(true);
        setTimeout(() => {
          location.replace('admin/orders');
        }, 2000);
        console.log(res);
      });
  }

  deleteOrder(id: number) {
    return this.http
      .delete(`http://127.0.0.1:8000/api/orders/${id}`)
      .subscribe((res) => {
        this.alertSubject.next(true);

        setTimeout(() => {
          location.replace('admin/orders');
        }, 2000);
        console.log(res);
      });
  }
}
