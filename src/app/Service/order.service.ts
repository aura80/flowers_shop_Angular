import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = "http://localhost:8085/api/v1/orders";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {

  }

  getOrders(): Observable<Order[]> {
    var url = this.baseUrl + "/getAllOrders";
    return this.httpClient.get<Order[]>(url);
  }

  deleteOrder(id: any) {
    var url = this.baseUrl + "/deleteOderById/";
    return this.httpClient.delete(url + id);
  }

  getOrderById(id: any): Observable<Order> {
    var url = this.baseUrl + "/getOrderById/";
    return this.httpClient.get<Order>(url + id);
  }

  updateOrderById(id: any, order: any): Observable<Order> {
    return this.httpClient.put<Order>('http://localhost:8085/api/v1/orders/updateOrderById/' + id, JSON.stringify(order), this.httpOptions);
  }

  updateOrder(id: any, order: Order): Observable<Order> {
    return this.httpClient.put<Order>('http://localhost:8085/api/v1/orders/updateOrderById/' + id, order);
  }

  saveOrder(order: Order): Observable<Order> {
    var url = this.baseUrl + "/saveOrder";
    return this.httpClient.post<Order>(url, order);
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
