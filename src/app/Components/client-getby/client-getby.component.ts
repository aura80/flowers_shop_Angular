import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/Service/client.service';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-client-getby',
  templateUrl: './client-getby.component.html',
  styleUrls: ['./client-getby.component.css']
})
export class ClientGetbyComponent implements OnInit {

  clientByForm: FormGroup | any;
  clients: Array<Client> = [];

  id!: Number
  name!: String
  address!: String
  email!: Number
  phone!: String
  password!: String

  client!: Client;

  varByData!: Client;
  ordersByData: any;
  byValue = 0;

  loading: boolean = true

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.byValue = params['id'];
      console.log('Parameter value: $(this.byValue');
      this.loading = false;   // to display the user data in the html
    });

    this.getClientByIdData(this.byValue);
  }

  getClientByIdData(id: any) {
    this.clientService.getClientById(id).subscribe(
      (r: Client) => {
        this.varByData = r;
        console.log(JSON.stringify(this.varByData.orders));
      }
    )
  }

  getOrders(id: any) {
    this.clientService.getClientById(id).subscribe(
      (r: any) => {
        this.ordersByData = JSON.stringify(r);
        console.log(this.ordersByData.orders);
      }
    )
  }

}
