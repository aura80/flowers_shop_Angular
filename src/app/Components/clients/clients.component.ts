import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Service/client.service';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientForm: FormGroup | any;
  clients: Array<Client> = []
  id!: Number
  client!: Client;
  loading: boolean = true
  varBy: any;
  byValue = 1;

  constructor(private clientService: ClientService, 
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getClientsList();

    this.clientForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.getClientByIdData(this.byValue);
  }

  getClientsList() {
    this.clientService.getClients().subscribe(
      r => {
        this.clients = r;
        console.log(r);
      }
    )
  }

  getClientsListById(id: any) {
    this.router.navigateByUrl('/clients/by/' + id);
  }

  getClientByIdData(id: any) {
    this.clientService.getClientById(id).subscribe(
      r => {
        this.varBy = JSON.stringify(r);
        console.log(this.varBy);
      }
    )
  }

  saveClientData() {
    this.clientService.saveClient(this.clientForm.value).subscribe(data => {
      this.clientForm.reset();
      console.log("New client added successfully!!!");
      alert("New client added successfully!");
      this.getClientsList();
    })
  }

  deleteClientData(id: any) {
    this.clientService.deleteClient(id).subscribe((r: any) => {
      console.log(r);
      alert("Client with id " + id + " deleted successfully!");
      this.getClientsList();
    })
  }
}
