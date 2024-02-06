import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl: string = "http://localhost:8085/api/v1/clients";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<Client[]> {
    var url = this.baseUrl + "/getAllClients";
    return this.httpClient.get<Client[]>(url);
  }

  deleteClient(id: any) {
    var url = this.baseUrl + "/deleteClientById/";
    return this.httpClient.delete(url + id);
  }

  getClientById(id: any): Observable<Client> {
    var url = this.baseUrl + "/getClientById/";
    return this.httpClient.get<Client>(url + id);
  }

  updateClientById(id: any, client: any): Observable<Client> {
    var url = this.baseUrl + "/updateClientById/";
    return this.httpClient.put<Client>(url + id, JSON.stringify(client), this.httpOptions);
  }

  updateClient(id: any, client: Client): Observable<Client> {
    var url = this.baseUrl + "/updateClientById/";
    return this.httpClient.put<Client>(url + id, client);
  }

  saveClient(client: any): Observable<Client> {
    var url = this.baseUrl + "/createClient";
    return this.httpClient.post<Client>(url, JSON.stringify(client), this.httpOptions);
  }
}
