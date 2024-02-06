import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl: string = "http://localhost:8085/api/v1/products";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    var url = this.baseUrl + "/getAllProducts";
    return this.httpClient.get<Product[]>(url);
  }

  deleteProduct(id: any) {
    var url = this.baseUrl + "/deleteProductById/";
    return this.httpClient.delete(url + id);
  }

  getProductById(id: any): Observable<Product> {
    var url = this.baseUrl + "/getProductById/";
    return this.httpClient.get<Product>(url + id);
  }

  updateProductById(id: any, product: any): Observable<Product> {
    return this.httpClient.put<Product>('http://localhost:8085/api/v1/products/updateProductById/' + id, JSON.stringify(product), this.httpOptions);
  }

  updateProduct(id: any, product: Product): Observable<Product> {
    return this.httpClient.put<Product>('http://localhost:8085/api/v1/products/updateProductById/' + id, product);
  }

  saveProduct(product: Product): Observable<Product> {
    var url = this.baseUrl + "/createProduct";
    return this.httpClient.post<Product>(url, product);
  }

  private createAuthHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token was found in local storage: ", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token was not found in local storage!");
    }
    return null;
  }
}
