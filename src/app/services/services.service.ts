import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http:HttpClient){ }
  getProducts(): Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products')
  }

  createProduct(product: any): Observable<any> {
    return this.http.post('https://fakestoreapi.com/products', product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`https://fakestoreapi.com/products/${id}`);
  }
}


