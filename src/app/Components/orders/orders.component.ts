import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';
import { Client } from 'src/app/models/Client';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderForm: FormGroup | any;
  orders: Array<Order> = []
  
  client!: Client;

  order!: Order;

  loading: boolean = true

  selectedOption: any;

  varBy: any;
  byValue = 1;

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getOrdersList();

    this.orderForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      orderNo: new FormControl('', [Validators.required, Validators.minLength(4)]),
      quantity: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      creationDate: new FormControl('', [Validators.required])
      ,
      clienttForm: new FormGroup({
        clientId: new FormControl('', [Validators.required]),
        clientName: new FormControl('', [Validators.required]),
        clientAddress: new FormControl('', [Validators.required]),
        clientEmail: new FormControl('', [Validators.required]),
        clientPassword: new FormControl('', [Validators.required]),
        clientPhone: new FormControl('', [Validators.required])
      })
    })

    console.log( this.orderForm);
    console.log( this.orderForm.controls.clienttForm.controls.clientName.value);
    console.log( this.orderForm.get('clienttForm').get('clientName'));

    this.getOrderByIdData(this.byValue);

  }

  getOrdersList() {
    this.orderService.getOrders().subscribe(
      r => {
        this.orders = r;
        console.log(r);
      }
    )
  }

  getOrdersListById(id: any) {
    this.router.navigateByUrl('/orders/by/' + id);
  }

  getOrderByIdData(id: any) {
    this.orderService.getOrderById(id).subscribe(
      r => {
        this.varBy = JSON.stringify(r);
        console.log(this.varBy);
      }
    )
  }

  saveOrderData() {
    this.orderService.saveOrder(this.orderForm.value).subscribe(data => {
      console.log(this.orderForm.value);
      this.orderForm.reset();
      console.log("New order added successfully!");
      alert("New order added successfully!");
      this.getOrdersList();
    })
  }

  deleteOrderData(id: any) {
    this.orderService.deleteOrder(id).subscribe(r => {
      console.log(r);
      alert("Order with id " + id + " deleted successfully!");
      this.getOrdersList();
    })
  }

}