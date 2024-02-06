import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent {

  // to get the id from the url
  
    orderId!: any
    order: any
    loading: boolean = true
  
    constructor(private route: ActivatedRoute, private orderService: OrderService) { }
  
    ngOnInit() {
      this.orderId = this.route.snapshot.paramMap.get('id');   // id from the route, from path /clients/:id
  
      // fetch the data - 
      this.orderService.getOrderById(this.orderId).subscribe(r => {   // r response
        this.order = r;
        console.log(r);
        this.loading = false;   // to display the user data in the html
      });
    }
  
    updateOrderData() {
      var data = {
        id: this.orderId,
        name: this.order.name,
        orderNo: this.order.orderNo,
        quantity: this.order.quantity,
        status: this.order.status,
        creationDate: this.order.creationDate
      }
      this.orderService.updateOrderById(this.orderId, data).subscribe(r => {
        console.log(r);
        alert("Order data updated successfully!");
        console.log("Order data updated successfully!");
      })
    }
  
  }
