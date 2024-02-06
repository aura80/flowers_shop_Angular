import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {

  // to get the id from the url

  clientId!: any
  client: any
  loading: boolean = true

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');   // id from the route, from path /clients/:id

    // fetch the data - 
    this.clientService.getClientById(this.clientId).subscribe(r => {   // r response
      this.client = r;
      console.log(r);
      this.loading = false;   // to display the user data in the html
    });
  }

  updateClientData() {
    var data = {
      id: this.clientId,
      name: this.client.name,
      address: this.client.address,
      email: this.client.email,
      phone: this.client.phone,
      password: this.client.password
    }
    this.clientService.updateClientById(this.clientId, data).subscribe(r => {
      console.log(r);
      alert("Client data updated successfully!");
      console.log("Client data updated successfully!");

    })
  }

}
