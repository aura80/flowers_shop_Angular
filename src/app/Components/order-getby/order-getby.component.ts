import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order-getby',
  templateUrl: './order-getby.component.html',
  styleUrls: ['./order-getby.component.css']
})
export class OrderGetbyComponent implements OnInit {

  orderByForm: FormGroup | any;

  id!: Number
  name!: String
  orderNo!: Number
  quantity!: Number
  status!: String
  creationDate!: Date

  clientz!: Order;

  varByData!: Order;
  clientsByData: any;
  byValue = 0;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.byValue = params['id'];
      console.log('Parameter value: $(this.byValue');
    });

    this.getOrderByIdData(this.byValue);
  }

  getOrderByIdData(id: any) {
    this.orderService.getOrderById(id).subscribe(
      (r: Order) => {
        this.varByData = r;
        console.log(JSON.stringify(this.varByData));
      }
    )
  }

  getClients(id: any) {
    this.orderService.getOrderById(id).subscribe(
      (r: any) => {
        this.clientsByData = JSON.stringify(r);
        console.log("This is clientBydata: " + this.clientsByData);
      }
    )
  }

}
