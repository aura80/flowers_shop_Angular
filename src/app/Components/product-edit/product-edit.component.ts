import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  // to get the id from the url

  productId!: any
  product: any
  loading: boolean = true

  constructor(private route: ActivatedRoute, private clientService: ProductServiceService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');   // id from the route, from path /clients/:id

    // fetch the data - 
    this.clientService.getProductById(this.productId).subscribe(r => {   // r response
      this.product = r;
      console.log(r);
      this.loading = false;   // to display the user data in the html
    });
  }

  updateProductData() {
    var data = {
      id: this.productId,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      category: this.product.category
    }

    this.clientService.updateProduct(this.productId, data).subscribe(r => {
      console.log(r);
      alert("Product data updated successfully!");
      console.log("Product data updated successfully!");

    })
  }

}
